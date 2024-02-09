"use client";
import "highlight.js/styles/github.css";
import hljs from 'highlight.js';
import { marked } from "marked";


import React, { useEffect, useState } from "react";

const Cards = () => {
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
  <div className="card">
    <img src="${imgInput}" className="" alt="...">
    <div className="">
        <h5 className="">${title}</h5>
        <p class="card-text">${description}</p>
        <Link href={"/"}>${btn}</Link>
    </div>
</div>
  \`\`\`
`;
  return (
    <main className="flex ml-[10rem] h-full">
      <article className="flex flex-col justify-between border-8 border-yellow-400 h-full overflow-y-auto">
        {/* Cards */}
        <div className="border-8 border-red-400">
          {/* Cards Header */}
          <h1 className="text-center text-2xl font-bold">Cards</h1>
          <p className="text-center">
            Flexible and extensible content container with multiple variants and
            options.
          </p>
          {/* Cards Content */}
          <section className="border-8 py-10 flex flex-col items-center gap-10">
            {/* Show Card */}
            <div className="md:w-1/2 w-full lg:w-1/4">
              <img src={imgInput} className="border rounded-t-lg" alt="..." />
              <div class="card-body border rounded-b-lg ">
                <h5 class="card-title w-fit hover:border-2 hover:border-red-500">
                  {title}
                </h5>
                <p
                  className="card-text"
                  dangerouslySetInnerHTML={{
                    __html: description.replace(/\n/g, "<br>"),
                  }}
                ></p>
                <a href="#" className="btn btn-primary">
                  {btn}
                </a>
              </div>
            </div>
            {/* Show Code */}
            <div className="flex w-full flex-col">
            <div className="bg-black text-white p-2 overflow-auto" dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
            </div>
          </section>
        </div>
        <section>fdsa</section>
        <section></section>
      </article>
      <aside className="w-[30rem] h-full bg-black text-white border-green-600 border-8">
        <h2 className="text-center text-sm my-2">Properties</h2>
        <hr />
        <h3>Card top</h3>
        <div className="gap-2 px-2">
          <label className="text-sm" htmlFor="image">
            Image URL
          </label>
          <input
            className="text-black w-full px-2"
            type="text"
            id="image"
            value={imgInput}
            onChange={(e) => setImgInput(e.target.value)}
          />
        </div>

        <h3>Card Body</h3>
        <div className="gap-2 px-2">
          <label className="text-sm" htmlFor="title">
            Card Title
          </label>

          <input
            className="text-black w-full px-2"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="gap-2 px-2">
          <label className="text-sm" htmlFor="description">
            Card Description
          </label>
          <textarea
            className="text-black w-full px-2 h-auto"
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
        </div>
        <h3>Card Button</h3>
        <div className="gap-2 px-2">
          <label className="text-sm" htmlFor="btn">
            Button Text
          </label>
          <input
            className="text-black w-full px-2"
            type="text"
            id="btn"
            value={btn}
            onChange={(e) => setBtn(e.target.value)}
          />
        </div>
      </aside>
    </main>
  );
};

export default Cards;
