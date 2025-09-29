import { useLocation, useNavigate } from "react-router-dom";

export default function PlaySetup() {
  const nav = useNavigate();
  const { state } = useLocation();
  const data = state ?? { categories: [], qCount: 0, gameName: "", teamA: "", teamB: "" };

  return (
    <div className="mx-auto max-w-xl p-6">
      <h1 className="mb-4 text-2xl font-extrabold text-primary">جاهزين!</h1>

      <div className="rounded-2xl border border-neutral-200 bg-white p-4">
        <p className="mb-2 text-sm"><b>اسم اللعبة:</b> {data.gameName || "—"}</p>
        <p className="mb-2 text-sm"><b>الفِرق:</b> {data.teamA || "—"} × {data.teamB || "—"}</p>
        <p className="mb-4 text-sm"><b>عدد الأسئلة:</b> {data.qCount || "—"}</p>

        <div>
          <b className="text-sm">الفئات المختارة (٨):</b>
          <ul className="mt-2 grid grid-cols-2 gap-2 text-sm">
            {data.categories.map((c) => (
              <li key={c} className="rounded-lg border border-neutral-200 bg-neutral-50 px-2 py-1">{c}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => nav(-1)}
            className="flex-1 rounded-xl border border-neutral-300 px-4 py-2 font-semibold text-neutral-700 hover:bg-neutral-100"
          >
            رجوع
          </button>
          <button
            onClick={() => alert("ابدأ المنطقـة هنا 🎉 (اربطها بمنطق اللعب لاحقًا)")}
            className="flex-1 rounded-xl bg-primary px-4 py-2 font-bold text-white hover:bg-primary/90"
          >
            ابدأ
          </button>
        </div>
      </div>
    </div>
  );
}
