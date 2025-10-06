/* modal component for game setup, receives onClose and onStart (start the game) as props: */

import React, {useState, useRef } from "react"; // useState: to manage state, useEffect: side effects

export function Modal({ onClose, onStart }) { // onClose: to close modal, onStart: to start game with data
  const boxRef = useRef(null); // reference to the modal box for focus management
  const [gameName, setGameName] = useState(""); // state for game name input
  const [teamA, setTeamA] = useState(""); // state for team 1 name input
  const [teamB, setTeamB] = useState(""); // state for team 2 name input
  const [qCount, setQCount] = useState(8); // state for question count, default to 8

  // form validation: all fields must be filled and qCount must be one of 4, 6, or 8
  const valid =
    gameName.trim() &&
    teamA.trim() &&
    teamB.trim() &&
    [4, 6, 8].includes(Number(qCount));

  // Optional focus/ESC handling:
  // useEffect(() => {
  //   const onKey = (e) => e.key === "Escape" && onClose?.();
  //   window.addEventListener("keydown", onKey);
  //   setTimeout(() => boxRef.current?.focus(), 0);
  //   return () => window.removeEventListener("keydown", onKey);
  // }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      /* full screen overlay with semi-transparent background */
      role="dialog"
      aria-modal="true"
      aria-labelledby="setup-title"
      onClick={onClose} // close modal when clicking outside the box
    >
      {/* modal box: */}
      <div
        ref={boxRef} // reference to the modal box
        tabIndex={-1} // make div focusable for accessibility
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside the box
        className="w-full max-w-md rounded-3xl bg-white p-5 shadow-2xl ring-1 ring-neutral-200"
      >
        {/* Title and helper text */}
        <h3
          id="setup-title"
          className="mb-2 text-center text-base font-extrabold text-neutral-900"
        >
          تم! الحين يمديك تضيف اسم لكل فريق ونخش في الثقيل!
        </h3>
        <p className="mb-4 text-center text-xs text-neutral-600">
          اسم اللعبة، وعدد الأسئلة، واختاروا الفرق 👇
        </p>

        {/* questions count selection: */}
        <div className="mb-4">
          <label className="mb-2 block text-xs font-semibold text-neutral-700">
            عدد الأسئلة
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[4, 6, 8].map(
              (n) => (
                // buttons for selecting question count
                <button
                  key={n} // unique key for each button
                  type="button"
                  onClick={() => setQCount(n)} // set question count on click
                  className={`rounded-xl border px-3 py-2 text-sm font-bold ${
                    qCount === n
                      ? "border-red-600 text-red-600"
                      : "border-gray-300 text-gray-700"
                  }`} // highlight selected button
                  aria-pressed={qCount === n}
                >
                  {n}
                </button>
              )
            )}
          </div>
        </div>

        {/* form inputs: team names and game name */}
        <div className="flex flex-row gap-3 mb-4">
          <div className="flex-1">
            <label className="mb-1 block text-xs font-semibold text-neutral-700">
              الفريق الأول
            </label>
            <input
              className="w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:border-red-600"
              value={teamA}
              onChange={(e) => setTeamA(e.target.value)}
            />
          </div>

          <div className="flex-1">
            <label className="mb-1 block text-xs font-semibold text-neutral-700">
              الفريق الثاني
            </label>
            <input
              className="w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:border-red-600"
              value={teamB}
              onChange={(e) => setTeamB(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold text-neutral-700">
            اسم اللعبة
          </label>
          <input
            className="w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:border-red-600"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
          />
        </div>

        {/* action button: start game */}
        <div className="mt-5 flex gap-3">
          <button
            type="button"
            disabled={!valid}
            onClick={() =>
              valid && onStart({ gameName, teamA, teamB, qCount: Number(qCount) })
            }
            className={`flex-1 rounded-xl px-4 py-2 text-sm font-bold text-white ${
              valid ? "bg-red-600 hover:bg-red-700" : "bg-neutral-300 cursor-not-allowed"
            }`}
          >
            ابدأ اللعب
          </button>
        </div>
      </div>
    </div>

    
  );
}
