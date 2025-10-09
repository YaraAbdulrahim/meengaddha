import React from "react";

function GameSteps() {
  return (
    <div className="px-4 py-10" dir="rtl">
      {/* العنوان */}
      <div className="flex justify-center ">
        <h1 className="font-medium text-3xl md:text-4xl text-red-900 mt-10 md:mt-20 md:text-center">
          خطوات التحدي !
        </h1>
      </div>

      

      {/* الكروت */}



      <div className="flex flex-col md:flex-row justify-center items-center  md:justify-evenly gap-12 md:gap-10 mt-14 md:mt-20">
        {/* الكارد الأول */}
<div className={`relative w-3/4 md:w-1/4 h-48 md:h-72 border-4 border-gray-100 bg-gray-100 rounded-3xl p-2`}>
  {/* أيقونة أو صورة */}
  <div className="absolute -top-8 right-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-red-600 flex items-center justify-center">
    <img src=" ايموجي المكعب.png" className="w-11 md:w-14 h-auto" />
  </div>

  {/* محتوى الكارد */}
  <div className="flex flex-col items-center justify-start mt-10">
    <h1 className="text-red-900 text-3xl md:text-4xl font-medium text-center">
      كوّنوا فريقكم
    </h1>
    <p className="font-normal text-xl md:text-2xl text-red-700 text-center mt-4">
      حددوا مين معاكم و اجتمعوا.. استعدوا لأقوى تحدي في جمعاتكم!
    </p>
  </div>
</div>


        {/* الكارد الثاني */}
<div className="relative w-3/4 md:w-1/4 h-48 md:h-72 border-4 border-gray-100 bg-gray-100 rounded-3xl p-2">
  <div className="absolute -top-8 right-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-red-600 flex items-center justify-center">
    <img src="ايموجي النار.png" className="w-12 md:w-14 h-auto" />
  </div>
  <div className="flex flex-col items-center justify-start mt-10">
    <h1 className="text-red-900 text-3xl md:text-4xl font-medium text-center">
      اختاروا الفئات
    </h1>
    <p className="font-normal text-xl md:text-2xl text-red-700 text-center mt-4">
      كل فريق يختار اللي يحبه.. حضّروا نفسكم للمعركة الثقافية والضحك!
    </p>
  </div>
</div>

{/* الكارد الثالث */}
<div className="relative w-3/4 md:w-1/4 h-48 md:h-72 border-4 border-gray-100 bg-gray-100 rounded-3xl p-2">
  <div className="absolute -top-8 right-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-red-600 flex items-center justify-center">
    <img src="ايموجي التارقت.png" className="w-14 md:w-16 h-auto" />
  </div>
  <div className="flex flex-col items-center justify-start mt-10">
    <h1 className="text-red-900 text-3xl md:text-4xl font-medium text-center">
      عيشوا الحماس
    </h1>
    <p className="font-normal text-xl md:text-2xl text-red-700 text-center mt-4">
      شغّلوا اللعبة على التلفزيون وتنافسوا، اجمعوا أعلى النقاط واستمتعوا مع كل سؤال!
    </p>
  </div>
</div>

      </div>
    </div>
  );
}

export default GameSteps;
