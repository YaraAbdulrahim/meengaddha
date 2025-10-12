import React from "react";

function Greeting (){
return(
<div className="flex flex-col justify-center items-center" dir="rtl">


<div className=" text-center mt-4">
    <h1 className="font-bold md:text-4xl text-3xl text-red-900">فريقكم سر قوتكم… قد التحدي؟</h1>
<p className="font-normal md:text-2xl text-xl mt-8 text-red-700">اسئلة سريعة , منافسة حامية , و متعة سعودية ما تنسى </p>

<div className="">
      <button className="border border-red-600 rounded-full w-48 bg-red-600 btn-text  text-white px-6 py-3 text-lg  md:text-lg font-medium mt-12">
          العب!
        </button>
      </div>

</div>
</div>



);

}
export default Greeting;