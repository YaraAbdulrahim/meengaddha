import React from "react";
function CategoriesIntro() {
  return (
    <div className="flex flex-col justify-center items-center" dir="rtl">

      <div className="border-2 bg-red-500 border-red-500 w-full h-36 mt-28 md:h-52 md:mt-32">
        <div className="">
          <h1 className="text-3xl md:text-4xl font-bold text-center mt-5 md:mt-16  text-white">الفئات</h1>
          <p className="text-xl md:text-2xl font-normal text-center mt-3 md:mt-5 text-white">
            جهزوا فريقكم ! فئات متنوعة قدامكم،اختاروا بحكمة… لأن كل اختيار هو سر قوتكم للفوز !
          </p>
        </div>
      </div>

    </div>
  );
}
export default CategoriesIntro;
