import React, { useState } from "react";
import AuthLayout from "../layouts/AuthLayout.jsx";
import { Link } from "react-router-dom";

// ✅ تحقق بسيط للإيميل: لازم فيه @ وينتهي بـ .com
const isValidEmail = (email) => /^[\w.-]+@[\w.-]+\.com$/.test(email);

export default function Signin() {
  const [showPwd, setShowPwd] = useState(false);
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr("");
    const fd = new FormData(e.currentTarget);
    const email = fd.get("email")?.toString().trim();
    const password = fd.get("password")?.toString();

    if (!isValidEmail(email)) {
      setErr("⚠️ البريد يجب أن يحتوي على @ وينتهي بـ .com");
      return;
    }

    // TODO: استدعاء API الدخول
    console.log({ email, password });
  };

  return (
    <AuthLayout>
      <h1 className="text-center text-2xl sm:text-3xl font-extrabold text-red-800 mb-8">
        هلا والله 😎
        <br className="sm:hidden" />
        سجّل دخولك وخلّنا نشوف شطارتك من جديد 👊
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="email"
          type="email"
          required
          placeholder="بريدك الإلكتروني"
          className="w-full rounded-[28px] bg-neutral-100/80 px-5 py-4 text-sm shadow-sm outline-none placeholder:text-neutral-500 focus:ring-2 ring-red-500/60"
        />

        <div className="relative">
          <input
            name="password"
            type={showPwd ? "text" : "password"}
            required
            placeholder="كلمة السر"
            className="w-full rounded-[28px] bg-neutral-100/80 px-5 py-4 pr-20 text-sm shadow-sm outline-none placeholder:text-neutral-500 focus:ring-2 ring-red-500/60"
          />
          <button
            type="button"
            onClick={() => setShowPwd((v) => !v)}
            className="absolute inset-y-0 right-3 text-xs underline decoration-dotted"
          >
            {showPwd ? "إخفاء" : "إظهار"}
          </button>
        </div>

        {err && (
          <p className="text-center text-sm font-semibold text-red-600 bg-red-50 py-2 rounded-xl">
            {err}
          </p>
        )}

        <div className="flex justify-end">
          <Link to="/signup" className="text-sm underline underline-offset-2">
            ما عندك حساب؟
          </Link>
        </div>

        <div className="flex justify-center pt-2">
          <button
            type="submit"
            className="rounded-full px-8 py-3 bg-red-600 text-white font-bold shadow hover:bg-red-700 active:scale-[.99] transition"
          >
            سجّل دخولك الآن!
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}
