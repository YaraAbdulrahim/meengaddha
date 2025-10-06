{/* Accordion component for collapsible sections (قابلة للطيء) */}

import { useState } from "react";

export default function Accordion({ title, children, defaultOpen=false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl border-2 border-red-600/30 bg-white">

      {/* الهيدر اللي يضغط عليه عشان يفتح ويقفل */}
      
      <button
        type="button"
        dir="rtl"
        onClick={() => setOpen(o => !o)}
        className="flex w-full items-center justify-between px-4 py-3"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-gray-700">
          {title}
        </span>
        <span className="shrink-0 leading-none translate-y-[1px]">
          {open ? "▾" : "▸"}
        </span>
      </button>

      {/* المحتوى يظهر تحت الهيدر بس لما يكون مفتوح */}
      {open && (
        <div className="border-t border-red-600/30 p-4">
          {children}
        </div>
      )}
    </div>
  );
}

