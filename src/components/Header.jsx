
import React, { useState } from "react";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="relative w-full" dir="rtl">
      {/* الخلفية */}
      <img
        src="الخلفية الورديه في الهيدر.png"
        alt="Background"
        className="w-100 md:w-200 h-auto"
      />


      {/* الهيدر فوق الخلفية */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-4 py-4 z-30">
        {/* القسم اليمين (اللوقو + الرئيسية) */}
        <div className="flex items-center gap-3">
          <button>
            <img
              src="لوقو مين قدها ؟.png"
              alt="Logo"
              className="h-12 md:h-20"
            />
          </button>
          {/* الرئيسية - تظهر من md وفوق */}
          <button className="hidden md:block bg-white text-red-600 rounded-2xl px-4 py-2 font-medium text-lg md:text-2xl">
            الرئيسية
          </button>
        </div>


        {/* زر المنيو للجوال */}
        <button
          className="md:hidden text-red-600 font-bold text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>


        {/* الأزرار - تظهر من md وفوق */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-red-600 rounded-2xl px-3 py-2 font-medium text-lg">
            طريقة اللعب
          </button>
          <button className="bg-white text-red-600 rounded-2xl px-3 py-2 font-medium text-lg">
            الفئات
          </button>
          <button className="text-red-600 rounded-2xl px-3 py-2 font-medium text-lg">
            تواصل معنا
          </button>
          <button className="bg-white text-red-600 rounded-2xl px-3 py-2 font-medium text-lg">
            التسجيل
          </button>
          <button className="bg-red-600 text-white rounded-2xl px-3 py-2 font-medium text-lg">
            الاشتراك
          </button>
        </div>
      </div>


      {/* منيو للجوال */}
      {menuOpen && (
        <div className="absolute top-20 left-0 bg-white shadow-lg rounded-lg flex flex-col gap-2 p-4 md:hidden z-50">
          <button className="text-red-600 font-medium">الرئيسية</button>
          <button className="text-red-600 font-medium">طريقة اللعب</button>
          <button className="text-red-600 font-medium">الفئات</button>
          <button className="text-red-600 font-medium">تواصل معنا</button>
          <button className="text-red-600 font-medium">التسجيل</button>
          <button className="bg-red-600 text-white font-medium rounded-lg py-1">
            الاشتراك
          </button>
        </div>
      )}


      {/* اللوقو الكبير بالنص */}
      <div className="absolute inset-0 flex items-center justify-start z-10">
        <img
          src="لوقو مين قدها ؟.png"
          alt="Big Logo"
          className="w-80 md:w-150 h-auto"
        />
      </div>


      {/* الصورة الثانية */}
      <div className="absolute left-0 md:left-20 bottom-16 md:bottom-0 z-20">
        <img className="w-60 md:w-150" src="صورة الاستفهامات مع السيوف.png" alt="" />
      </div>
    </div>
  );
}


export default Header;