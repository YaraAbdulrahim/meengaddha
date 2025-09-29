export default function Categories({ title, img, selected, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`group relative flex h-36 w-36 flex-col items-center justify-end overflow-hidden rounded-2xl border-2 p-2 transition
        ${selected ? "border-primary shadow" : "border-neutral-300 hover:border-primary/70"}`}
      aria-pressed={selected}
    >
      {img ? (
        <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover opacity-90" />
      ) : (
        <div className="absolute inset-0 bg-neutral-200" />
      )}

      <div className="relative z-10 w-full rounded-lg bg-white/90 px-2 py-1 text-center text-sm font-semibold text-neutral-800">
        {title}
      </div>

    </button>
  );
}
