import React from "react";
function Overview () {
return(
  <div className="flex flex-row justify-between items-center" dir="rtl">

     {/*  العنوان والبراغراف */}
     <div className="flex flex-col items-start mr-36">
        <h1 className="text-3xl md:text-4xl text-red-900 mb-4 mt-20">
          نبذة عن <span className="font-bold">مين قدها؟</span>
        </h1>

        <p className="font-normal md:text-2xl text-xl text-red-700 mt-3">
          منصة سعودية للتحديات و الأسئلة <br />
          تجمعكم مع الأهل و الأصحاب في جو مليان حماس و ضحك !<br/>
           كوّنوا فريقكم، اختبروا معلوماتكم، و خلوا الكل يعرف مين قدها ! <br/>

        </p>
     </div>


     

  </div>  




);
}
export default Overview;