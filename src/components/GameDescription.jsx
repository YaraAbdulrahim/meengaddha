import React from "react";

function GameDescription() {
  return (
    <div className="flex flex-col" dir="rtl">

      {/* المربع الأحمر */}
      <div className="border-4 w-full h-200 bg-red-500 border-red-500 mt-40 flex flex-col items-center">
       
        {/* العنوان */}
        <h1 className="font-bold text-white text-4xl text-center mt-10">
          كوّن فريقك و ادخل التحدي و خلّي الكل يعرف مين قدها!
        </h1>

        {/* البوكسين البيضاء جنب بعض */}
        <div className="flex space-x-50 mt-30">

            
        <div className="border-2 border-white rounded-4xl bg-white w-130 h-100 flex flex-col items-center justify-start p-10">
         <h1 className="font-bold text-red-800 text-center text-3xl">
         التحدي بدأ.. فوزكم قدامكم!
         </h1>

         <p className="font-medium text-2xl text-red-500 text-center mt-20">

          اختبروا معلوماتكم في جو مليان تحدي و حماس !! 
          كل سؤال يرفع مستواكم اجمعوا أعلى النقاط و في النهاية؟ فوزوا واستمتعوا بالانتصار!
          </p>
          </div>

          <div className="border-2 border-white rounded-4xl bg-white w-130 h-100 flex flex-col items-center justify-start p-10">

          <h1 className="font-bold text-red-900 text-center text-3xl">
          8 فئات مجانيه مليانة تحدي ومعرفة!
          </h1>

         <p className="font-medium text-2xl text-red-700 text-center mt-20">
         اختاروا عدد الأسئلة اللي يناسبكم
         (4، 6، 8) و استعدوا مع 4 وسائل مساعدة لكل فريق تخلي كل جولة ممتعة من الإثارة والحماس! 
         </p>


          </div>
        </div>

      </div>

    </div>
  );
}

export default GameDescription;
