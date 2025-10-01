import React, { useState, useEffect } from "react";

function Subscription() {
  // مصفوفة الكاردات مع ألوان وصور
  const cards = [
    { id: 1,  name: "الرياضة", color: "bg-gray-500", image: "/images/card1.png" },
    { id: 2,  name: "الرياضة", color: "bg-blue-500", image: "/images/card2.png" },
    { id: 3,  name: "الرياضة",color: "bg-green-500", image: "/images/card3.png" },
    { id: 4,  name: "الرياضة",color: "bg-yellow-500", image: "/images/card4.png" },
    { id: 5,  name: "الرياضة",color: "bg-purple-500", image: "/images/card5.png" },
    { id: 6,  name: "الرياضة", color: "bg-pink-500", image: "/images/card6.png" },
    { id: 7,  name: "الرياضة", color: "bg-orange-500", image: "/images/card7.png" },
    { id: 8,  name: "الرياضة", color: "bg-indigo-500", image: "/images/card8.png" },
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
    <div className="flex flex-col justify-center items-center min-h-screen p-[20px]" dir="rtl">
      {/* العنوان والفقرات */}
      <div className="text-center">
        <h1 className="text-red-900 font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl">
          متعة مستمرة و مجانية للجميع!
        </h1>
        <p className="text-red-700 font-medium text-lg sm:text-lg md:text-xl lg:text-2xl mt-4">
          فريقكم جاهز 🔥؟ العبوا 8 فئات مجانية بلا حدود و اذا اشتركتم تفتحوا فئات حصرية و تصنعوا فئتكم الخاصة!
        </p>
      </div>

      {/* Carousel الكاردات */}
      <div className="flex flex-wrap gap-4 overflow-hidden w-full mt-12 justify-center">
  {visibleCards.map((card) => (
    <div
      key={card.id}
      className={`w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 h-48 sm:h-64 md:h-72 lg:h-80 rounded-lg relative overflow-hidden ${card.color}`}
    >
      <img
        src={card.image}
        alt={`Card ${card.id}`}
        className="w-full h-full object-cover"
      />



{/* Overlay أسود شفاف لتحسين وضوح النصوص فوق الصورة وجعلها مقروءة أكثر،
    يعطي تأثير  للـ Card بدون إخفاء الصورة بالكامل */}
    
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>

      {/* عنوان الصوره*/}
      <h3 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-red-500 font-bold text-lg sm:text-xl md:text-2xl">
          فئة {card.name}
      </h3>
     </div>
  ))}
</div>


      {/* زر الاشتراك */}
      <div className="mt-12">
        <button className="border border-red-600 rounded-md bg-red-600 text-white px-6 py-3 text-sm sm:text-base md:text-lg lg:text-xl font-bold">
          اشترك!
        </button>
      </div>
    </div>
  );
}

export default Subscription;
