"use client";
// import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { marked } from "marked";
{
  /* <script src="https://cdn.tailwindcss.com"></script>; */
}
import React, { useEffect, useState } from "react";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import Accordions from "@/components/Accordions";

const Accordion = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (itemId) => {
    setActiveId((prevItemId) => (prevItemId === itemId ? null : itemId));
  };

  const accordionItems = [
    {
      title: "Accordion Item #1",
      content:
        "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      title: "Accordion Item #2",
      content:
        "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      title: "Accordion Item #3",
      content:
        "This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
  ];
  const [accordionOpen, setAccordionOpen] = useState("");

  useEffect(() => {
    hljs.highlightAll();
  }, []);
  const markdown = `
  \`\`\`js

  import { useState } from "react";

  const [activeIndex, setActiveIndex] = useState(null);

  const accordionItems = [
    {
      title: "Accordion Item #1",
      content:
        "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      title: "Accordion Item #2",
      content:
        "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      title: "Accordion Item #3",
      content:
        "This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
  ];


  \`\`\`
`;

  const propertiesTopic = "text-center text-[13px] mt-5 border bg-slate-900";
  const propertiesSubTopic = "text-[10px]";
  const propertiesInput = "text-[10px] w-full text-black px-2 py-1";

  return (
    <main className="flex ml-[10rem] h-full">
      <article className="flex flex-col justify-between border-8 border-yellow-400 w-4/5 h-full overflow-y-auto min-w-80">
        <section className="bg-gradient-to-r from-indigo-500 to-blue-500 grid place-content-center h-full">
          <div className="wrapper w-[25rem]">
            {accordionItems.map((item, index) => (
              <div className="p-4 bg-gray-200 rounded-lg my-1">
                {/* <Accordions key={index} title={item.title} content={item.content} /> */}
                <div className="py-2 ">
                  <button
                    className="flex justify-between w-full"
                    onClick={() =>
                      setAccordionOpen(accordionOpen === index ? null : index)
                    }
                    key={index}
                  >
                    <span>{item.title}</span>
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
                        className={clsx(
                          accordionOpen === index && "!rotate-180",
                          "transform origin-center transition duration-300 ease-out"
                        )}
                      />
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={clsx(
                          accordionOpen === index && "!rotate-180",
                          "transform origin-center rotate-90 transition duration-300 ease-out"
                        )}
                      />
                    </svg>
                  </button>
                  <div
                    className={clsx(
                      accordionOpen === index
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                      "grid overflow-hidden transition-all duration-600 ease-in-out text-slate-600"
                    )}
                  >
                    <div className="overflow-hidden">{item.content}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="flex w-full flex-col">
            <div
              className="bg-black text-white p-2 overflow-auto text-[10px]"
              dangerouslySetInnerHTML={{ __html: marked(markdown) }}
            ></div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Accordion;
