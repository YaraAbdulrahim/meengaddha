/* represents categories inside the accordion.
   store chosen categories inside (Set).
   open modal (the actual pop up) when all 8
   categories are selected,
   and prevent scroll when modal is opened.
   when game starts, send data to (state) */

import React, { useEffect, useState } from "react"; // useState: to manage state, useEffect: side effects, useRef: DOM refs
import { useNavigate } from "react-router-dom"; // useNavigate: to navigate programmatically
import data from "../data/categories.json";
import Categories from "./Categories.jsx";
import Accordion from "./Accordion.jsx";
import { Modal } from "./modal.jsx";

export default function CategoriesPopup() {
  const nav = useNavigate(); // to navigate to /play with state

  const [selected, setSelected] = useState(new Set()); // choosing the categories
  const total = selected.size; // total number of selected categories (= 8)
  const [open, setOpen] = useState(false); // modal state for pop-up

  // categories data from json file (no useMemo now)
  const collections = data ?? [];

  // open/close modal (auto):
  useEffect(() => {
    // open the modal only when 8 categories are selected
    if (total === 8) setOpen(true);
    // close the modal if less than 8 categories are selected
    else if (total < 8 && open) setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  // prevent background scrolling when modal is open:
  useEffect(() => {
    if (!open) return; // if modal is not open, do nothing
    const prev = document.body.style.overflow; // remember previous style
    document.body.style.overflow = "hidden"; // disable scrolling
    return () => {
      // restore when modal unmounts or closes
      document.body.style.overflow = prev;
    };
  }, [open]);

  // toggle category selection:
  const toggle = (title) => {
    // update selected categories
    setSelected((prev) => {
      const next = new Set(prev); // avoid mutating state directly
      if (next.has(title)) next.delete(title); // if already selected, remove it
      else if (next.size < 8) next.add(title); // if less than 8 selected, add it
      return next;
    });
  };

  return (
    <div className="w-full min-h-screen px-4 py-6" dir="rtl">

      {/* fade effect when modal is open: */}
      <div
        className={`transition-opacity duration-200 ${
          open ? "opacity-60" : "opacity-100"
        }`}
      >
        {/* header with back button and title: */}
        <div className="mb-4 flex items-center gap-2 text-neutral-500">
          <button
            onClick={() => history.back()}
            aria-label="رجوع"
            className="rounded-lg px-2 py-1 hover:bg-neutral-100"
          >
            ↤
          </button>
        </div>

        {/* main header with title */}
        <header className="mb-3 text-center">
          <h1 className="text-2xl font-extrabold text-red-600">
            اختاروا ثمانية فئات وابدأوا اللعب
          </h1>
          {/* pic here later */}
        </header>

        {/* list of collections (accordions) */}

        <div className="space-y-3 w-100 md:w-150 lg:w-250 max-w-5xl mx-auto">

          
          {collections.map((col) => (
            <Accordion
              key={col.collection}
              title={
                <span className="text-sm font-bold text-neutral-800">
                  {col.collection}
                </span>
              }
              // no defaultOpen → all closed by default
            >
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
  {/* Cards */}
                {col.items.map(({ title, img }) => (
                  <Categories
                    key={title}
                    title={title}
                    img={img}
                    selected={selected.has(title)}
                    onToggle={() => toggle(title)}
                  />
                ))}
              </div>
            </Accordion>
          ))}
        </div>
      </div>

   

      {/* modal component, only rendered when (open) is true: */}
      {open && (
        <Modal
          onClose={() => setOpen(false)} // close modal
          onStart={(payload) => {
            setOpen(false);
            // navigate to /play with selected categories and other payload data
            nav("/play", {
              state: { ...payload, categories: Array.from(selected) },
            });
          }}
        />
      )}
    </div>
  );
}



