import React, {useState} from "react";
function Lifelines(){
const Lifelines=[
                {id:1, name:" إستدعاء العقل المدبّر GPT" , description:" ضايعين ؟ لا تشيلوا هم ! اطلبوا مساعدة العقل المدبّر و خذوا إجابة جاهزة… بس مرة وحدة فكروا قبل ما تستخدموها ! "},
                {id:2 , name:"مُضاعِف الفوز ×2", description:"اي سؤال تجيبونه صح يتضاعف ! استخدموها بحكمة… الفوز ممكن ينقلب بثواني !  "},
                {id:3 , name:"قنبلة الصمت !!", description:"سكتوا الفريق الثاني ! لا كلام ولا إجابات…الصمت سيّد الموقف !"},

                ] 


// الحالة: المربع الكبير يعرض إما شرح أو null
const [ selected, setselected]=useState(null);




  // الصورة الافتراضية التي تظهر عند عدم المرور على أي مربع
  const defaultImage = "صورة مربع وسائل المساعدة.png";


return(

<div className=" mt-20" dir="rtl">
  
  
  {/* العنوان*/}

<div className="flex flex-col justify-center items-center ">
<h1 className="text-red-900 font-bold text-3xl md:text-4xl mt-5 md:-mt-20 text-center md:text-center ">وسائل المساعدة</h1>


  {/* ديف المربعات كلها*/}

<div className="flex flex-row justify-evenly items-start gap-4 w-full">

  {/* ماب المربعات الصغيره بدال ما اكتبها مربع مربع */}

<div className="flex flex-col gap-16 mt-20">
  {Lifelines.map((item) => (
    <div
      key={item.id}
      className="border-4 rounded-xl bg-rose-50 border-rose-50 md:w-96 md:h-20 w-44 h-20 mt-1 flex items-center justify-center cursor-pointer hover:bg-rose-100"
      onMouseEnter={() => setselected(item)}
      onMouseLeave={() => setselected(null)}
    >
      <h1 className="text-xl  md:text-2xl text-center text-red-900 font-bold transition-colors duration-300 ease-in-out hover:text-red-700 ">{item.name}</h1>
    </div>
  ))}
</div>



<div className="border-8 rounded-4xl bg-rose-50 border-rose-50 md:w-96 md:h-96 w-64 h-96 flex items-center justify-center mt-20 p-4 text-center">
  {selected ? (
    <p className="text-red-700 font-normal text-xl md:text-2xl ">{selected.description}</p>
  ) : (
    <img
      src={defaultImage}
      alt="Default"
      className="w-96 h-96 object-contain"
    />
  )}
</div>

</div>
</div>
</div>

);
}

export default Lifelines;