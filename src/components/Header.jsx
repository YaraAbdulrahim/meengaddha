import React from "react";

function Header() {
  return (
    <div className="relative w-full" dir="rtl">
      {/* الخلفية */}
      <img src="Vector 14.png" alt="Background" className="w-200 h-auto" />

      {/* الهيدر فوق الخلفية */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4">


        {/* القسم اليمين (اللوقو + الرئيسية) */}
        <div className="flex items-center gap-4">
          <button>
            <img src="Logo.png" alt="Logo" className="h-20" />
          </button>
        <button className="bg-white text-red-500 rounded-2xl px-4 py-2 font-bold text-2xl ">
            الرئيسية
          </button>
        </div>

        {/* القسم اليسار (الأزرار) */}
        <div className="flex items-center gap-4">
          <button className="text-red-500 rounded-2xl px-4 py-2 font-bold text-2xl">
            طريقة اللعب
          </button>
          <button className="bg-white text-red-500 rounded-2xl px-4 py-2 font-bold text-2xl">
            الفئات
          </button>
          <button className="text-red-500 rounded-2xl px-4 py-2 font-bold text-2xl">
            تواصل معنا
          </button>
          <button className="bg-white text-red-500 rounded-2xl px-4 py-2 font-bold text-2xl">
            التسجيل
          </button>
          <button className="bg-red-500 text-white rounded-2xl px-4 py-2 font-bold text-2xl">
         الاشتراك
          </button>
        </div>
      </div>

      {/* اللوقو الكبير بالنص */}
      <div className="absolute inset-0 flex items-center justify-start ">
        <img src="Logo.png" alt="Big Logo" className="h-100" />
      </div>


      {/* الصوره الثانيه   */}
      <div className="absolute left-0 bottom-0">
        <img className="w-166" src="1-1.png" alt="" />
      </div>




    
    
    
    </div>
  );
}

export default Header;