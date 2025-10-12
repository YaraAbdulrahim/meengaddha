import React from "react";

export default function QuestionMarks({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute left-0 bottom-[-40px] flex flex-col items-start gap-[-30px] pointer-events-none select-none z-[1] ${className}`}
    >
   
      <img
        src="/Illustration-1.png"
        alt=""
        className="w-[300px] sm:w-[320px] opacity-25 -translate-x-10"
      />


      <img
        src="/Illustration-1.png"
        alt=""
        className="w-[280px] sm:w-[300px] opacity-30 -translate-x-12 -translate-y-16"
      />

      <img
        src="/Illustration-1.png"
        alt=""
        className="w-[250px] sm:w-[270px] opacity-35 -translate-x-14 -translate-y-28"
      />
    </div>
  );
}
