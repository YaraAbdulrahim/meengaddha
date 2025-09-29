import { useEffect, useRef } from "react";

export default function Modal({ open, onClose, children, labelledBy="modal-title" }) {
  const ref = useRef(null);

  useEffect(() => {
    if (open) {
      const prev = document.activeElement;
      ref.current?.focus();
      return () => prev?.focus();
    }
  }, [open]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
      onClick={onClose}
    >
      <div
        ref={ref}
        tabIndex={-1}
        className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-xl ring-1 ring-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
