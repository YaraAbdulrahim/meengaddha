import React from "react";

function GameSteps() {
  return (
    <div className="px-4 py-10" dir="rtl">
      {/* العنوان */}
      <div className="flex justify-center ">
        <h1 className="font-bold text-xl md:text-4xl text-red-900 mt-10 md:mt-20 md:text-center">
          خطوات التحدي !
        </h1>
      </div>

      {/* الكروت */}
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly gap-8 md:gap-10 mt-10 md:mt-20">
        {/* الكارد الاول */}
        <div className="relative w-full md:w-80 lg:w-96 h-auto border-4 border-gray-100 bg-gray-100 rounded-3xl p-2">
          <div className="absolute -top-8 right-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-red-600 flex items-center justify-center">
            <img src="كونوا فريقكم.png" className="w-10 md:w-14 h-auto" />
          </div>
          <div className="flex flex-col items-center justify-start mt-10">
            <h1 className="text-red-900 text-xl md:text-4xl font-bold text-center ">
              كوّنوا فريقكم
            </h1>
            <p className="font-medium text-lg  md:text-xl text-red-700 text-center mt-8">
              حددوا مين معاكم و اجتمعوا.. استعدوا لأقوى تحدي في جمعاتكم!
            </p>
          </div>
        </div>

        {/* الكارد الثاني */}
        <div className="relative w-full md:w-80 lg:w-96 h-auto border-4 border-gray-100 bg-gray-100 rounded-3xl p-2">
          <div className="absolute -top-8 right-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-red-600 flex items-center justify-center">
            <img src="اختاروا الفئات.png" className="w-8 md:w-10 h-auto" />
          </div>
          <div className="flex flex-col items-center justify-start mt-10">
            <h1 className="text-red-900 text-xl md:text-4xl font-bold text-center">
              اختاروا الفئات
            </h1>
            <p className="font-medium text-lg  md:text-xl text-red-700 text-center mt-8">
            كل فريق يختار اللي يحبه.. حضّروا نفسكم للمعركة الثقافية والضحك !
            </p>
          </div>
        </div>

        {/* الكارد الثالث */}
        <div className="relative w-full md:w-80 lg:w-96 h-auto border-4 border-gray-100 bg-gray-100 rounded-3xl p-2">
          <div className="absolute -top-8 right-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-red-600 flex items-center justify-center">
            <img src="عيشوا الحماس.png" className="w-12 md:w-16 h-auto" />
          </div>
          <div className="flex flex-col items-center justify-start mt-10">
            <h1 className="text-red-900 text-xl md:text-4xl font-bold text-center">
              عيشوا الحماس
            </h1>
            <p className="font-medium text-lg  md:text-xl text-red-700 text-center mt-8">
              شغّلوا اللعبة على التلفزيون و تنافسوا و اجمعوا اعلى النقاط
              و استمتعوا مع كل سؤال !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameSteps;
