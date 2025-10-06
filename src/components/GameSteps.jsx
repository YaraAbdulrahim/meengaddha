import React from "react";
function GameSteps(){
return(
<div className="" dir="rtl">

<div className="flex flex-col justify-center">
<h1 className="font-bold text-4xl text-red-900 -600 mt-30 mr-170">خطوات التحدي !</h1>
</div>



<div className="flex justify-center gap-10 mt-39 ">
    {/*الكارد الاول */}
<div className=" relative w-100 h-100 border-4 border-gray-100 bg-gray-100 rounded-3xl">
    <div className="absolute w-30 h-30 rounded-2xl bg-red-600 border-red-600 -mt-10 mr-34">
        <img src="كونوا فريقكم.png" className="w-15 h-15 mr-7 mt-8"/>
    </div>
    <div className="flex flex-col items-center justify-start mt-30">
    <h1 className="text-red-900 text-3xl font-bold p-10">كوّنوا فريقكم</h1>
    <p className="font-medium text-2xl text-red-700 text-center">حددوا مين معاكم واجتمعوا.. استعدوا لأقوى تحدي في جمعاتكم!</p>
</div>
</div>


    {/*الكارد الثاني */}
    <div className=" relative w-100 h-100 border-4 border-gray-100 bg-gray-100 rounded-3xl">
    <div className="absolute w-30 h-30 rounded-2xl bg-red-600 border-red-600 -mt-10 mr-34">
    <img src="اختاروا الفئات.png" className="w-12 h-15 mr-9 mt-8"/>
    </div>
    <div className="flex flex-col items-center justify-start mt-30">
    <h1 className="text-red-900 text-3xl font-bold p-10">اختاروا الفئات</h1>
    <p className="font-medium text-2xl text-red-700 text-center">كل فريق يختار اللي يحبه.. حضّروا نفسكم للمعركة الثقافية والضحك!</p>
</div>
</div>



    {/*الكارد الثالث */}
    <div className=" relative w-100 h-100 border-4 border-gray-100 bg-gray-100 rounded-3xl">
    <div className="absolute w-30 h-30 rounded-2xl bg-red-600 border-red-600 -mt-10 mr-34">
    <img src="عيشوا الحماس.png" className="w-19 h-19 mr-6 mt-7"/>
    </div>
    <div className="flex flex-col items-center justify-start mt-30">
    <h1 className="text-red-900 text-3xl font-bold p-10">عيشوا الحماس</h1>
    <p className="font-medium text-2xl text-red-700 text-center">شغّلوا اللعبة على التلفزيون و تنافسوا و اجمعوا أعلى النقاط و اضحكوا واستمتعوا مع كل سؤال!</p>
</div>
</div>


</div>



</div>
);
}

export default GameSteps;