import React from "react";

export default function AuthLayout({ children }) {
  return (
    <section
      dir="rtl"
      className="relative min-h-screen grid place-items-center bg-white px-4 overflow-hidden pb-28 md:pb-36"
    >   
     
      <img
        src="/img.png"      
        alt=""
        aria-hidden="true"
        className="
          absolute z-0
          left-1/2 -translate-x-1/2
          bottom-40 md:bottom-76
          opacity-20
        "
      />

      <div className="relative z-10 w-full max-w-2xl px-6">
        {children}
      </div>
    </section>
  );
}
