"use client";

import React, { useEffect, useState } from "react";
import { clsx } from "clsx";
import Code from "@/components/ui/Code";

const Cards = () => {
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
  const markdown = `
  <div className="">
    <img src="${imgInput}" className="" alt="...">
    <div className="p-2 ${cardcn}">
        <h5 className="${titlecn}">${title}</h5>
        <p className="">${description}</p>
        <Link href={"/"} className="border py-1 px-2 rounded-md mt-4 text-white bg-blue-700 text-[12px]">${btn}</Link>
    </div>
</div>
`;

  const propertiesTopic = "text-center text-[13px] mt-5 border bg-slate-900";
  const propertiesSubTopic = "text-[10px]";
  const propertiesInput = "text-[10px] w-full text-black px-2 py-1";
  return (
    <main className="flex ml-[10rem] h-full">
      <article className="flex flex-col justify-between border-8 border-yellow-400 h-full overflow-y-auto">
        <h1 className="text-center text-2xl font-bold">Cards</h1>

        {/* Cards Header */}
        {/* Cards Content */}
        <section className="border-8 py-10 flex flex-col items-center gap-10 border-red-700">
          <h1 className="text-center text-2xl font-bold">Image Cards</h1>
          <p className="text-center">
            Flexible and extensible content container with multiple variants and
            options.
          </p>
          {/* Show Card */}
          <div className="md:w-1/2 w-full lg:w-1/4">
            <img src={imgInput} className="border rounded-t-lg" alt="..." />
            <div className={clsx(`${cardcn} border rounded-b-lg p-2`)}>
              <h5 className={`${titlecn} text-bold text-[16px]`}>{title}</h5>
              <p
                className="text-[13px]"
                dangerouslySetInnerHTML={{
                  __html: description.replace(/\n/g, "<br>"),
                }}
              ></p>
              <a
                href="#"
                className="border py-1 px-2 rounded-md mt-4 text-white bg-blue-700 text-[12px]"
              >
                {btn}
              </a>
            </div>
          </div>
          {/* Show Code */}
          <div className="flex w-full flex-col">
            {/* <div
                className="bg-black text-white p-2 overflow-auto"
                dangerouslySetInnerHTML={{ __html: marked(markdown) }}
              ></div> */}
          </div>
        </section>

        <section className="h-1/2">
          <div className="">
            <Code language="html" code={markdown} />
          </div>
        </section>
        <section></section>
      </article>
      <aside className="w-[600px] h-full bg-black text-white border-green-600 border-8">
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

export default Cards;
