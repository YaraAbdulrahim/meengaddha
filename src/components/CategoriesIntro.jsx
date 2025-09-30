import React from "react";
function CategoriesIntro() {
  return (
    <div className="flex flex-col justify-center items-center" dir="rtl">

      <div className="border-2 bg-red-500 border-red-500 w-full h-[70px] mt-[70px]">
        <div className="">
          <h1 className="text-4xl font-bold text-center mt-[15px] ml-[15px] text-white">الفئات</h1>
          <p className="text-2xl font-medium text-center mt-[10px] text-white">
            جهزوا فريقكم! فئات متنوعة قدامكم، اختاروا بحكمة… لأن كل اختيار هو سر قوتكم للفوز!
          </p>
        </div>
      </div>

    </div>
  );
}
export default CategoriesIntro;
