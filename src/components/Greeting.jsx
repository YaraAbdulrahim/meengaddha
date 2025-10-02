import React from "react";
function Greeting (){
return(
<div className="flex flex-col justify-center items-center" dir="rtl">


<div className=" text-center mt-30">
    <h1 className="font-bold md:text-4xl text-lg text-red-900">فريقكم سر قوتكم… قد التحدي؟</h1>
<p className="font-medium md:text-xl text-lg mt-8 text-red-700">اسئلة سريعة , منافسة حامية , و متعة سعودية ما تنسى </p>

<div>
<button className="border border-red-600 rounded-md bg-red-600 text-white px-6 py-3 text-sm sm:text-base md:text-lg lg:text-xl font-bold mt-12">
          العب!
        </button>
        </div>

</div>
</div>



);

}
export default Greeting;