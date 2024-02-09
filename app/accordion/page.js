"use client";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { marked } from "marked";
<script src="https://cdn.tailwindcss.com"></script>;
import React, { useEffect, useState } from "react";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    console.log(index);
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    console.log(activeIndex);
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
  const [cardcn, setCardcn] = useState("");
  const [titlecn, setTitlecn] = useState("");
  const [title, setTitle] = useState("Card Title");
  const [btn, setBtn] = useState("Button Text");
  const [description, setDescription] = useState(
    "Some quick example text to build on the card title and make up the bulk of the card's content."
  );
  const [imgInput, setImgInput] = useState(
    "https://th-thumbnailer.cdn-si-edu.com/zX9pgEQ5Kj1Zi6B5rdX_JYTdVZ8=/fit-in/1600x0/filters:focal(1501x569:1502x570)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/1e/1e/1e1e3aea-e930-45d2-9bc4-6dd50cccf66d/istock-511313058.jpg"
  );
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  const markdown = `
  \`\`\`js
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
  \`\`\`
`;

  const propertiesTopic = "text-center text-[13px] mt-5 border bg-slate-900";
  const propertiesSubTopic = "text-[10px]";
  const propertiesInput = "text-[10px] w-full text-black px-2 py-1";

  return (
    <main className="flex ml-[10rem] h-full">
      <article className="flex flex-col justify-between border-8 border-yellow-400 grow h-full overflow-y-auto">
        <section className="bg-gray-200 grid place-content-center h-full">
          <div className="wrapper w-[25rem]">
            {accordionItems.map((item, index) => (
              <button
                className="accordion button"
                type="button"
                onClick={() => setActiveIndex(item.title)}
              >
                <div
                  className="tab px-5 py-2 bg-white shadow-lg relative mb-2 rounded-md w-[25rem] flex flex-col"
                  key={index}
                >
                  <input
                    type="radio"
                    name={item.title}
                    id={item.title}
                    className="appearance-none peer"
                  />
                  <label
                    htmlFor={item.title}
                    className="flex items-center cursor-pointer font-semibold text-lg after:content-['+'] after:absolute after:right-5 after:text-2xl     after:text-gray-400 hover:after:text-gray-950 peer-checked:after:transform peer-checked:after:rotate-45"
                  >
                    <h2 className="w-8 h-8 bg-cyan-300 text-white flex justify-center items-center rounded-sm">
                      {/* <button
                      className="accordion button"
                      type="button"
                      onClick={() => setActiveIndex(item.title)}
                    > */}
                      {index + 1}
                      {/* </button> */}
                    </h2>

                    <h3 className="w-full text-center">{item.title}</h3>
                  </label>
                  <div
                    className={`answer content mt-5 h-0 transition-all ease-in-out delay-300 overflow-hidden peer-checked:h-full ${
                      activeIndex === item.title ? "show" : "hidden"
                    }`}
                  >
                    {item.content}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
        <section>fdsa</section>
        <section></section>
      </article>
      <aside className="w-[15rem] h-full bg-black text-white border-green-600 border-8">
        <h2 className="text-center text-sm my-2">Properties</h2>
        <hr />
        <h3 className={`${propertiesTopic}`}>Card top</h3>
        <section className="gap-2 px-2">
          <label className={`${propertiesSubTopic}`} htmlFor="image">
            Image URL
          </label>
          <input
            className={`${propertiesInput}`}
            type="text"
            id="image"
            value={imgInput}
            onChange={(e) => setImgInput(e.target.value)}
          />
        </section>

        <h3 className={`${propertiesTopic}`}>Card Body</h3>
        <section className="gap-2 px-2">
          <label className={`${propertiesSubTopic}`} htmlFor="title">
            Card Title
          </label>

          <input
            className={`${propertiesInput}`}
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className={`${propertiesSubTopic}`} htmlFor="description">
            Card Description
          </label>
          <textarea
            className="text-black px-2 py-1 h-20 text-[10px] w-full"
            type="textbox"
            id="description"
            value={description}
            onChange={(e) => {
              if (e.key === "Enter") {
                // Prevent default behavior (inserting newline)
                e.preventDefault();
                // Insert a newline character into the textarea value
                setDescription((prevDescription) => prevDescription + "\n");
              } else {
                // Replace all occurrences of \n with actual new line characters
                setDescription(e.target.value.replace(/\n/g, "\n"));
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                // Prevent default behavior (inserting newline)
                e.preventDefault();
                // Insert a newline character into the textarea value
                setDescription((prevDescription) => prevDescription + "\n");
              } else {
                // Replace all occurrences of \n with actual new line characters
                setDescription(e.target.value.replace(/\n/g, "\n"));
              }
            }}
          />
        </section>
        <h3 className={`${propertiesTopic}`}>Card Button</h3>
        <section>
          <div className="gap-2 px-2">
            <label className={`${propertiesSubTopic}`} htmlFor="btncn">
              Button Text
            </label>
            <input
              className={`${propertiesInput}`}
              type="text"
              id="btncn"
              value={btn}
              onChange={(e) => setBtn(e.target.value)}
            />
          </div>
        </section>
        <h3 className={`${propertiesTopic}`}>Custom Classname</h3>
        <section>
          <div className="gap-2 px-2">
            <label className={`${propertiesSubTopic}`} htmlFor="titlecn">
              Card Title
            </label>

            <input
              className={`${propertiesInput}`}
              type="text"
              id="titlecn"
              value={titlecn}
              onChange={(e) => setTitlecn(e.target.value)}
            />
            <label className={`${propertiesSubTopic}`} htmlFor="cardcn">
              Card Body
            </label>

            <input
              className={`${propertiesInput}`}
              type="text"
              id="cardcn"
              value={cardcn}
              onChange={(e) => setCardcn(e.target.value)}
            />
          </div>
        </section>
      </aside>
    </main>
  );
};

export default Accordion;
