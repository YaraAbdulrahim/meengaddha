// src/components/CategoriesPopup.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/categories.json";



/** صفحة اختيار الفئات + بوب-أب إعداد اللعبة */
export default function CategoriesPopup() {
  const nav = useNavigate();

  // مجموعة الفئات المختارة (حسب العنوان)
  const [selected, setSelected] = useState(new Set());
  const total = selected.size;

  // نعرض البوب-أب فقط عند اكتمال 8
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (total === 8) setOpen(true);
    else if (total < 8 && open) setOpen(false);
  }, [total]); // eslint-disable-line

  // قائمة مسطّحة لسهولة الرسم (تبقى محافظ على المجموعات)
  const groups = useMemo(() => data ?? [], []);

  const toggle = (title) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else if (next.size < 8) next.add(title);
      return next;
    });
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8" dir="rtl">
      <header className="mb-6 text-center">
        <h1 className="text-2xl font-extrabold text-red-600">
          اختاروا ثمانية فئات وابدأوا اللعب
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          المختارة: <b className="text-red-600">{total}</b> / 8
        </p>
      </header>

      {/* عرض المجموعات */}
      <div className="space-y-8">
        {groups.map((group) => (
          <section key={group.group}>
            <h2 className="mb-3 text-lg font-bold text-neutral-800">{group.group}</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {group.items.map((it) => {
                const title = typeof it === "string" ? it : it.title;
                const img = typeof it === "string" ? undefined : it.img;
                return (
                  <CategoryCard
                    key={title}
                    title={title}
                    img={img}
                    selected={selected.has(title)}
                    onToggle={() => toggle(title)}
                  />
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* أزرار تحكّم */}
      <div className="sticky bottom-0 mt-8 bg-gradient-to-t from-white pt-4">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setSelected(new Set())}
            className="flex-1 rounded-2xl border border-neutral-300 px-4 py-2 font-semibold text-neutral-700 hover:bg-neutral-100"
          >
            إعادة الضبط
          </button>
          <button
            type="button"
            disabled={total !== 8}
            onClick={() => setOpen(true)}
            className={`flex-1 rounded-2xl px-4 py-2 font-bold text-white transition
              ${total === 8 ? "bg-red-600 hover:bg-red-700" : "bg-neutral-300 cursor-not-allowed"}`}
          >
            التالي
          </button>
        </div>
      </div>

      {/* البوب-أب */}
      <SetupModal
        open={open}
        onClose={() => setOpen(false)}
        onStart={(payload) => {
          setOpen(false);
          nav("/play", {
            state: {
              ...payload,
              categories: Array.from(selected),
            },
          });
        }}
      />
    </div>
  );
}

/** البوب-أب نفسه (مستقل داخل نفس الملف) */
function SetupModal({ open, onClose, onStart }) {
  const boxRef = useRef(null);

  // حقول النموذج
  const [gameName, setGameName] = useState("");
  const [teamA, setTeamA] = useState("");
  const [teamB, setTeamB] = useState("");
  const [qCount, setQCount] = useState(6);

  const valid = gameName.trim() && teamA.trim() && teamB.trim() && [4, 6, 8].includes(Number(qCount));

  // إغلاق بـ ESC + فوكس أولي
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);

    setTimeout(() => boxRef.current?.focus(), 0);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="setup-title"
      onClick={onClose}
    >
      <div
        ref={boxRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-xl ring-1 ring-neutral-200"
      >
        <h3 id="setup-title" className="mb-3 text-center text-lg font-extrabold text-neutral-800">
         اسم اللعبة  
        </h3>

        {/* عدد الأسئلة */}
        <div className="mb-4">
          <label className="mb-2 block text-xs font-semibold text-neutral-700">عدد الأسئلة</label>
          <div className="grid grid-cols-3 gap-2">
            {[4, 6, 8].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setQCount(n)}
                className={`rounded-xl border px-3 py-2 text-sm font-bold
                  ${qCount === n ? "border-red-600 text-red-600" : "border-neutral-300 text-neutral-700"}`}
                aria-pressed={qCount === n}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        {/* الحقول */}
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2">
            <label className="mb-1 block text-xs font-semibold text-neutral-700">اسم اللعبة</label>
            <input
              className="w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:border-red-600"
              placeholder="مثال"
              value={gameName}
              onChange={(e) => setGameName(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-neutral-700">الفريق الأول</label>
            <input
              className="w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:border-red-600"
              placeholder="مثال"
              value={teamA}
              onChange={(e) => setTeamA(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-neutral-700">الفريق الثاني</label>
            <input
              className="w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:border-red-600"
              placeholder="مثال: النسور"
              value={teamB}
              onChange={(e) => setTeamB(e.target.value)}
            />
          </div>
        </div>

        {/* الأزرار */}
        <div className="mt-5 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-xl border border-neutral-300 px-4 py-2 font-semibold text-neutral-700 hover:bg-neutral-100"
          >
            إلغاء
          </button>
          <button
            type="button"
            disabled={!valid}
            onClick={() => valid && onStart({ gameName, teamA, teamB, qCount: Number(qCount) })}
            className={`flex-1 rounded-xl px-4 py-2 font-bold text-white ${
              valid ? "bg-red-600 hover:bg-red-700" : "bg-neutral-300 cursor-not-allowed"
            }`}
          >
            ابدأ اللعبة
          </button>
        </div>
      </div>
    </div>
  );
}
