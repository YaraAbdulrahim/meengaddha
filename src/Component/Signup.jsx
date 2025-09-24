import React, { useState } from "react";

export default function Signup() {
  const [showPwd, setShowPwd] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = fd.get("email");
    const pwd = fd.get("password");
    const pwd2 = fd.get("password2");
    if (pwd !== pwd2) return alert("كلمتا السر غير متطابقتين");
    // TODO: أرسل القيم لسيرفرك
    console.log({ email, pwd });
  };

  return (
    <section dir="rtl" className="relative min-h-screen grid place-items-center bg-white px-4">
      {/* خلفية كبيرة */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="text-[22vw] sm:text-[18vw] font-extrabold leading-none tracking-tight text-red-300/20">
          مين قدها؟
        </span>
      </div>

      <div className="relative w-full max-w-2xl px-6">
        <h1 className="text-center text-2xl sm:text-3xl font-extrabold text-red-800 mb-8">
          يالله حيّه! <br className="sm:hidden" />
          انشئ حسابك و خلك قدها ✊🔥
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            required
            placeholder="بريدك الإلكتروني"
            className="w-full rounded-[28px] bg-neutral-100/80 px-5 py-4 text-sm shadow-sm outline-none
                       placeholder:text-neutral-500 focus:ring-2 ring-red-500/60"
          />

          <div className="relative">
            <input
              name="password"
              type={showPwd ? "text" : "password"}
              required
              minLength={6}
              placeholder="كلمة السر"
              className="w-full rounded-[28px] bg-neutral-100/80 px-5 py-4 pr-20 text-sm shadow-sm outline-none
                         placeholder:text-neutral-500 focus:ring-2 ring-red-500/60"
            />
            <button
              type="button"
              onClick={() => setShowPwd(v => !v)}
              className="absolute inset-y-0 right-3 text-xs underline decoration-dotted"
            >
              {showPwd ? "إخفاء" : "إظهار"}
            </button>
          </div>

          <div className="relative">
            <input
              name="password2"
              type={showPwd2 ? "text" : "password"}
              required
              minLength={6}
              placeholder="إعادة كلمة السر"
              className="w-full rounded-[28px] bg-neutral-100/80 px-5 py-4 pr-20 text-sm shadow-sm outline-none
                         placeholder:text-neutral-500 focus:ring-2 ring-red-500/60"
            />
            <button
              type="button"
              onClick={() => setShowPwd2(v => !v)}
              className="absolute inset-y-0 right-3 text-xs underline decoration-dotted"
            >
              {showPwd2 ? "إخفاء" : "إظهار"}
            </button>
          </div>

          <div className="flex justify-end">
            <a href="/login" className="text-sm underline underline-offset-2">عندك حساب؟</a>
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="rounded-full px-8 py-3 bg-red-600 text-white font-bold shadow
                         hover:bg-red-700 active:scale-[.99] transition"
            >
              إنشاء
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
