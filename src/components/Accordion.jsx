import { useState } from "react";

export default function Accordion({ title, children, defaultOpen=false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl border-2 border-primary/40 bg-white">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="flex w-full items-center justify-between gap-2 px-4 py-3"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-neutral-700">{title}</span>
        <span className="text-primary">{open ? "▾" : "▸"}</span>
      </button>
      {open && <div className="border-t p-4">{children}</div>}
    </div>
  );
}
