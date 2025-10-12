import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const isValidEmail = (email) => /^[\w.-]+@[\w.-]+\.com$/.test(email);

function Field({ label, id, children }) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-semibold text-neutral-700">
        {label}
      </label>
      {children}
    </div>
  );
}

function Avatar({ src, onChange }) {
  const fileRef = useRef(null);
  return (
    <div className="relative inline-block">
      <img
        src={src || "https://api.dicebear.com/8.x/initials/svg?seed=AA"}
        alt="صورة الحساب"
        className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-full ring-4 ring-white shadow-md object-cover bg-white"
      />
      <button
        type="button"
        onClick={() => fileRef.current?.click()}
        className="absolute -bottom-1 -left-1 rounded-full bg-white/90 p-1.5 shadow ring-1 ring-neutral-300 hover:bg-white"
        aria-label="تغيير الصورة"
        title="تغيير الصورة"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" />
      </button>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => onChange?.(e.target.files?.[0] || null)}
      />
    </div>
  );
}

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName,  setLastName]  = useState("");
  const [email,     setEmail]     = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [saving,    setSaving]    = useState(false);
  const [msg,       setMsg]       = useState("");

  const onAvatarChange = (file) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setAvatarUrl(url);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    // ✅ تحقق من صحة البريد أولاً
    if (!isValidEmail(email)) {
      setMsg("⚠️ البريد يجب أن يحتوي على @ وينتهي بـ .com");
      return;
    }

    setSaving(true);
    try {
      // API (محاكاة)
      await new Promise((r) => setTimeout(r, 700));
      setMsg("تم حفظ التغييرات ✅");
    } catch {
      setMsg("تعذر الحفظ. حاول مجددًا.");
    } finally {
      setSaving(false);
    }
  };

  const emailInvalid = email && !isValidEmail(email);

  return (
    <section dir="rtl" className="min-h-screen bg-neutral-50">
      <div className="bg-red-400 text-white">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-8 py-8 sm:py-10">
          <div className="flex flex-col items-center text-center">
            <Avatar src={avatarUrl} onChange={onAvatarChange} />
            <div className="mt-2">
              <div className="text-sm sm:text-base opacity-90">{`${firstName} ${lastName}`.trim()}</div>
              <div className="text-xs sm:text-sm font-semibold">{email}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-8 py-6 md:py-8">
        <form onSubmit={onSubmit} className="rounded-3xl border border-red-200 bg-white/80 p-4 sm:p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Field label="اسمك الأول" id="firstName">
              <input
                id="firstName"
                className="w-full rounded-xl border border-red-200 px-3 py-2 md:py-3 outline-none focus:border-red-500"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="محمد"
              />
            </Field>

            <Field label="اسمك الأخير" id="lastName">
              <input
                id="lastName"
                className="w-full rounded-xl border border-red-200 px-3 py-2 md:py-3 outline-none focus:border-red-500"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="يابودود"
              />
            </Field>

            <Field label="بريدك" id="email">
              <input
                id="email"
                type="email"
                className={`w-full rounded-xl border px-3 py-2 md:py-3 outline-none focus:border-red-500
                  ${emailInvalid ? "border-red-500 ring-1 ring-red-200" : "border-red-200"}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="youremail@gmail.com"
                aria-invalid={emailInvalid || undefined}
              />
            </Field>

            <div className="md:col-span-2">
              <Link to="/profile/change-password" className="inline-block text-sm font-semibold text-red-600 hover:text-red-700">
                تغيير كلمة السر
              </Link>
            </div>
          </div>

          {msg && (
            <div className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 ring-1 ring-red-200">
              {msg}
            </div>
          )}

          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              disabled={saving}
              className={`w-full md:w-auto md:min-w-36 rounded-xl px-5 py-2.5 text-sm font-bold text-white transition
                ${saving ? "bg-neutral-400" : "bg-red-600 hover:bg-red-700"}`}
            >
              {saving ? "جاري الحفظ..." : "حفظ"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
