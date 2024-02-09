import clsx from "clsx";
import React, { useState } from "react";

const Accordions = ({title, key, content}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 ">
      <button
        className="flex justify-between w-full"
        onClick={() => setAccordionOpen(!accordionOpen)}
        key={key}
      >
        <span>{title}</span>
        {/* <span>+</span> */}
        <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-300 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-300 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={clsx(
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0",
          "grid overflow-hidden transition-all duration-600 ease-in-out text-slate-600"
        )}
      >
        <div className="overflow-hidden">{content}</div>
      </div>
    </div>
  );
};

export default Accordions;
