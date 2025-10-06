/* represents every category card.
when chosen, calls (onTogggle)
changes its color when (selected) */

export default function Categories({ title, img, selected, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`boxOfCategory relative flex w-full aspect-[4/5] flex-col justify-between items-center rounded-2xl border-2 transition hover:shadow-lg md:hover:scale-105
    ${
      selected
        ? "border-red-600 shadow-lg"
        : "border-red-300 hover:border-red-500"
    }`}
     /* if selected, make border red and shadow, else gray border and hover effect 
        aspect-[4/5] for making fixed dimensions length and width */

      aria-pressed={selected}
      /* aria-pressed for accessibility, shows if button is toggled or not */
    >
      
      {/* Title of category: */}
      <div className=" w-full h-9 flex items-center justify-center rounded-lg bg-red-500 text-center text-xs font-bold text-white">
        {title}
      </div>

      {/* img of category: */}
      <div className="w-full flex-1 overflow-hidden rounded-b-xl ring-1 ring-red-200 bg-neutral-100">
        {img ? (
          <img
            src={img}
            alt=""
            className="h-full w-full object-cover pointer-events-none"
          />
        ) : null}
      </div>

      {selected && (
        <span className="pointer-events-none absolute inset-0 rounded-2xl ring-4 ring-red-600/10" />
      )}
    </button>
  );
}
