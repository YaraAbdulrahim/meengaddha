import React, { useState } from "react";
import AuthLayout from "../layouts/AuthLayout.jsx";
import { Link } from "react-router-dom";

export default function Signup() {
  const [showPwd, setShowPwd] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);
  const [msg, setMsg] = useState("");

  const isValidPassword = (pwd) => /^(?=.*[0-9!@#$%^&*]).{8,}$/.test(pwd);
  const isValidEmail = (email) => /^[\w.-]+@[\w.-]+\.com$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("");
    const FormDataObj = new FormData(e.currentTarget);
    const email = FormDataObj.get("email")?.toString().trim();
    const pwd = FormDataObj.get("password")?.toString();
    const pwd2 = FormDataObj.get("password2")?.toString();

    if (!isValidEmail(email))
      return setMsg("⚠️ البريد يجب أن يحتوي على @ وينتهي بـ .com");
    if (!isValidPassword(pwd))
      return setMsg("⚠️ كلمة السر يجب أن تكون ٨ أحرف على الأقل وتحتوي رقم أو رمز");
    if (pwd !== pwd2)
      return setMsg("⚠️ كلمتا السر غير متطابقتين");

    // 🔸 محاكاة فحص الإيميل الفريد
    const usedEmails = ["test@gmail.com"];
    if (usedEmails.includes(email))
      return setMsg("❌ هذا البريد مستخدم بالفعل، جرّب بريد آخر.");

    setMsg("✅ تم إنشاء الحساب بنجاح!");
  };

  return (
    <AuthLayout>
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

        <div className="relative">
          <input
            name="password2"
            type={showPwd2 ? "text" : "password"}
            required
            placeholder="إعادة كلمة السر"
            className="w-full rounded-[28px] bg-neutral-100/80 px-5 py-4 pr-20 text-sm shadow-sm outline-none placeholder:text-neutral-500 focus:ring-2 ring-red-500/60"
          />
          <button
            type="button"
            onClick={() => setShowPwd2((v) => !v)}
            className="absolute inset-y-0 right-3 text-xs underline decoration-dotted"
          >
            {showPwd2 ? "إخفاء" : "إظهار"}
          </button>
        </div>

        {msg && (
          <p className="text-center text-sm font-semibold text-red-600 bg-red-50 py-2 rounded-xl">
            {msg}
          </p>
        )}

        <div className="flex justify-end">
          <Link to="/login" className="text-sm underline underline-offset-2">
            عندك حساب؟
          </Link>
        </div>

        <div className="flex justify-center pt-2">
          <button
            type="submit"
            className="rounded-full px-8 py-3 bg-red-600 text-white font-bold shadow hover:bg-red-700 active:scale-[.99] transition"
          >
            إنشاء
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}
