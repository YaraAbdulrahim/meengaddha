import React, { useState, useEffect } from "react";

function Subscription() {
  // مصفوفة الكاردات مع ألوان وصور
  const cards = [
    { id: 1,  name: "لهجات سعودية", color: "bg-gray-500", image: "صورة فئة اللهجات.jpg" },
    { id: 2,  name: "ولا كلمة", color: "bg-blue-500", image: "صورة فئة ولا كلمة.jpg" },
    { id: 3,  name: " مسلسلات و افلام سعودية",color: "bg-green-500", image: "صورة فئة المسلسلات و الافلام.jpg" },
    { id: 4,  name: " اغاني و شعر",color: "bg-yellow-500", image: "صورة فئة الاغاني والشعر.jpg" },
    { id: 5,  name: "اكلات سعودية",color: "bg-purple-500", image: "صورة فئة الاكلات.jpg" },
    { id: 6,  name: "امثلة شعبية", color: "bg-pink-500", image: "صورة فئة الامثلة.jpg" },
    { id: 7,  name: "براندات و شركات سعودية", color: "bg-orange-500", image: "صورة فئة البراندات و الشركات.jpg" },
    { id: 8,  name: "تاريخ السعودية", color: "bg-indigo-500", image: "صورة فئة التاريخ.jpg" },
  ];

  const [index, setIndex] = useState(0);
  const visibleCount = 3; // عدد الكاردات الظاهرة في كل مرة

  // تغيير الكاردات تلقائياً كل 3 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + visibleCount) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // دالة تجيب الكاردات الظاهرة بشكل دائري
  const getVisibleCards = () => {
    let result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(cards[(index + i) % cards.length]);
    }
    return result;
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-14" dir="rtl">
      {/* العنوان والفقرات */}
      <div className="text-center">
        <h1 className="text-red-900 font-bold text-lg md:text-4xl">
        فئات مجانية كثيرة بانتظاركم – العبوا بلا حدود !     </h1>
        <p className="text-red-700 font-medium text-lg  md:text-xl  mt-4">
        لكن لا تنسوا… الفئات المميزه ما يفتحها الا المشتركين و اذا اشتركت ؟ تقدر تصنع فئتك الخاصة مع فريقك و تعيش التحدي بطريقتكم الخاصه !       </p>
      </div>



      {/* Carousel الكاردات */}

    
      <div className="flex flex-wrap gap-4 overflow-hidden w-full mt-12 justify-center">
  {visibleCards.map((card) => (
    <div
      key={card.id}
      className={`w-3/4 md:w-1/4 h-48 md:h-72 rounded-lg relative overflow-hidden ${card.color}`}
    >
        {/*في  مربع العنوان الأبيض بداية الكارد */}
      <div className="absolute top-60 left-0 w-full  border-gray-100 bg-gray-100 bg-opacity-90 py-2 text-center rounded-b-md z-10">
      <h3 className="text-red-900 font-bold text-lg md:text-2xl">
              {card.name}
      </h3>
     </div>

      <img
        src={card.image}
        alt={`Card ${card.id}`}
        className="w-full h-full object-cover "
      />     
     </div>
  ))}
</div>


      {/* زر الاشتراك */}
      <div className="mt-12">
      <button className="border border-red-600 rounded-full w-48 bg-red-600 btn-text  text-white px-6 py-3 text-lg  md:text-lg font-medium mt-12">
          اشترك!
        </button>
      </div>
    </div>
  );
}

export default Subscription;
