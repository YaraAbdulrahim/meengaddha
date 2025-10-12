import React, { useState } from "react";

// ✅ على الأقل ٨ أحرف وبداخلها رقم أو رمز واحد على الأقل
const isValidPassword = (pwd) => /^(?=.*[0-9!@#$%^&*]).{8,}$/.test(pwd);

export default function ChangePassword() {
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    if (!pwd1 || !pwd2) return setMsg("فضلاً املأ الحقول");
    if (!isValidPassword(pwd1))
      return setMsg("⚠️ كلمة السر يجب أن تكون ٨ أحرف على الأقل وتحتوي رقم أو رمز");
    if (pwd1 !== pwd2) return setMsg("كلمتا السر غير متطابقتين");

    setSaving(true);
    try {
      // API call (محاكاة)
      await new Promise((r) => setTimeout(r, 800));
      setMsg("تم تغيير كلمة السر بنجاح ✅");
      setPwd1(""); setPwd2("");
    } catch {
      setMsg("تعذر التغيير، حاول مجدداً.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <section dir="rtl" className="flex justify-center items-center min-h-screen bg-neutral-50">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 md:px-8 py-8">
        <form onSubmit={onSubmit} className="rounded-3xl border-2 border-red-200 bg-white/80 p-4 sm:p-6 md:p-8 shadow-sm">
          <h1 className="text-xl sm:text-2xl font-extrabold text-neutral-900 text-center mb-5">تغيير كلمة السر</h1>

          <div className="space-y-5">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-neutral-700">كلمة السر الجديدة</label>
              <input
                type="password"
                value={pwd1}
                onChange={(e) => setPwd1(e.target.value)}
                placeholder="••••••••"
                className="w-full h-12 sm:h-14 rounded-2xl border-2 border-red-200 focus:border-red-400 outline-none px-4 text-base sm:text-lg bg-white"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-neutral-700">إعادة كلمة السر الجديدة</label>
              <input
                type="password"
                value={pwd2}
                onChange={(e) => setPwd2(e.target.value)}
                placeholder="••••••••"
                className="w-full h-12 sm:h-14 rounded-2xl border-2 border-red-200 focus:border-red-400 outline-none px-4 text-base sm:text-lg bg-white"
              />
            </div>

            {msg && (
              <div className="rounded-xl bg-neutral-100 px-3 py-2 text-sm text-neutral-700 ring-1 ring-neutral-200">
                {msg}
              </div>
            )}

            <div className="pt-2 flex justify-center">
              <button
                type="submit"
                disabled={saving}
                className={`h-12 sm:h-13 px-10 sm:px-14 rounded-full text-white text-sm sm:text-base font-extrabold ${
                  saving ? "bg-neutral-400" : "bg-red-600 hover:bg-red-700"
                }`}
              >
                {saving ? "جاري الحفظ..." : "حفظ"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
