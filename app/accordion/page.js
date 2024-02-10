"use client";
// import "highlight.js/styles/github.css";
// import hljs from "highlight.js";
import { marked } from "marked";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

{
  /* <script src="https://cdn.tailwindcss.com"></script>; */
}
import React, { useEffect, useState } from "react";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import Accordions from "@/components/Accordions";
import Code from "@/components/ui/Code";

const Accordion = () => {
  const [innerHTML, setInnerHTML] = useState("");

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
    // hljs.highlightAll();
    const wrapperElement = document.querySelector(".wrapper");
    if (wrapperElement) {
      setInnerHTML(wrapperElement.innerHTML);
    }
  }, []);

  const markdown = `<div className="p-4 bg-gray-200 rounded-lg my-1">
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
</div>`;
  const codeExample = `

`;
  const propertiesTopic = "text-center text-[13px] mt-5 border bg-slate-900";
  const propertiesSubTopic = "text-[10px]";
  const propertiesInput = "text-[10px] w-full text-black px-2 py-1";

  return (
    <main className="flex h-full border-8 border-red-600">
      <article className="flex flex-col justify-between rounded-lg w-4/5 h-1/4 overflow-y-auto min-w-80 border-8 border-red-400">
        <section className="bg-gradient-to-r from-indigo-500 to-blue-500 place-content-center h-1/2 rounded-lg flex justify-center py-5 space-y-5">
          <div className="wrapper w-1/3">
            {accordionItems.map((item, index) => (
              <div className="px-4 py-1 bg-gray-200 rounded-lg my-1">
                {/* <Accordions key={index} title={item.title} content={item.content} /> */}
                <div className="py-2 ">
                  <button
                    className="flex justify-between w-full"
                    onClick={() =>
                      setAccordionOpen(accordionOpen === index ? null : index)
                    }
                    key={index}
                  >
                    <span className="text-sm">{item.title}</span>
                    {/* <span>+</span> */}
                    <svg
                      className="fill-indigo-500 shrink-0 ml-8 scale-50"
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
                    <div className="overflow-hidden text-xs">
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="text-[10px] h-1/2">
          <div className="flex gap-5 justify-center">
            <button>Main</button>
            <button>Component</button>
          </div>
          {/* Code */}
          <div className="flex flex-col h-[30rem]">
            <Code language="js" code={markdown} />
          </div>
        </section>
      </article>
    </main>
  );
};

export default Accordion;
