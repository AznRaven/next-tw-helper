"use client";

import React, { useEffect, useState } from "react";
import { clsx } from "clsx";
import Code from "@/components/ui/Code";
import Modal from "@/components/ui/Modal";

const Cards = () => {
  const [cardcn, setCardcn] = useState("");
  const [titlecn, setTitlecn] = useState("");
  const [title, setTitle] = useState("Card Title");
  const [titleModal, setTitleModal] = useState(false);
  const [description, setDescription] = useState(
    "Some quick example text to build on the card title and make up the bulk of the card's content."
  );
  const [descriptionModal, setDescriptionModal] = useState(false);
  const [btn, setBtn] = useState("Button Text");
  const [imgInput, setImgInput] = useState(
    "https://th-thumbnailer.cdn-si-edu.com/zX9pgEQ5Kj1Zi6B5rdX_JYTdVZ8=/fit-in/1600x0/filters:focal(1501x569:1502x570)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/1e/1e/1e1e3aea-e930-45d2-9bc4-6dd50cccf66d/istock-511313058.jpg"
  );
  const [imgModal, setImgModal] = useState(false);
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
  const openModal = () => {
    setIsOpen(true);
  };

  const closeTitleModal = () => {
    setTitleModal(false);
  };

  const propertiesTopic = "text-center text-[13px] mt-5 border bg-slate-900";
  const propertiesSubTopic = "text-[10px]";
  const propertiesInput = "text-[10px] w-full text-black px-2 py-1";

  const handleDescriptionChange = (newDescription) => {
    setDescription(newDescription);
  };

  return (
    <main className="flex ml-[10rem] h-full">
      <article className="flex flex-col justify-between p-2 h-full overflow-y-auto gap-3">
        <section className="bg-gradient-to-r from-indigo-500 to-blue-500 flex flex-col items-center gap-10 p-10 rounded-lg h-full">
          {/* Cards Header */}
          <h1 className="text-center text-2xl font-bold">Image Cards</h1>
          <p className="text-center">
            Flexible and extensible content container with multiple variants and
            options.
          </p>
          <div className="md:w-1/2 w-full">
            {/* Card Image*/}

            <img
              src={imgInput}
              className="hover:border-2 rounded-t-lg hover:border-red-500 object-cover h-auto max-w-full"
              alt="..."
              onClick={() => setImgModal(true)}
            />
            {/* Card Body */}
            <div className={clsx(`${cardcn} border rounded-b-lg p-2 bg-white`)}>
              <div className="flex flex-col">
                {/* Card Title */}
                <button onClick={() => setTitleModal(true)}>
                  <h5
                    className={`${titlecn} text-bold text-[16px] hover:border-2 border-red-500 hover:cursor-pointer`}
                  >
                    {title}
                  </h5>
                </button>
                {/* Card Description */}
                <button
                  className="hover:border-red-500 hover:border-2"
                  onClick={() => setDescriptionModal(true)}
                >
                  <div className="hover:border-red-500">
                    <p
                      className="text-[13px] text-start hover:border-red-500 border border-white"
                      dangerouslySetInnerHTML={{
                        __html: description.replace(/\n/g, "<br>"),
                      }}
                    ></p>
                  </div>
                </button>
              </div>
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

          {/* Modal */}
          <Modal
            isOpen={imgModal}
            onClose={() => setImgModal(false)}
            name={imgInput}
            setName={setImgInput}
            closeModal={() => setImgModal(false)}
            type="text"
          >
            <p className="text-center">Update Content</p>
          </Modal>
          <Modal
            isOpen={titleModal}
            onClose={() => setTitleModal(false)}
            name={title}
            setName={setTitle}
            closeModal={() => setTitleModal(false)}
            type="text"
          >
            <p className="text-center">Update Content</p>
          </Modal>
          <Modal
            isOpen={descriptionModal}
            onClose={() => setDescriptionModal(false)}
            name={description}
            setName={handleDescriptionChange}
            closeModal={() => setDescriptionModal(false)}
            type="textarea"
          >
            <p className="text-center">Update Content</p>
          </Modal>
        </section>

        <section className="">
          <div className="">
            <Code language="html" code={markdown} />
          </div>
        </section>
        <section>
          <div class="relative bottom-0 right-0 bg-blue-300 h-32 w-32 mx-auto shadow-red-400 shadow-lg flex justify-center items-center">
            <p>P</p>
            <div class="absolute h-14 w-14 -left-4 -top-4 backdrop-blur-sm transition ease-in-out hover:-translate-x-6 transform-gpu hover:scale-125 duration-300 bg-slate-600/30 shadow-red-400 shadow-lg rounded-full flex justify-center items-center">
              <p>C</p>
            </div>
          </div>
        </section>
        <section>
        <div class="w-3/4 ...">
  <div class="whitespace-break-spaces ...">Hey everyone!

It's almost 2022         and                 we 
still don't know if there       is aliens living among us, or do we? Maybe the person writing this is an alien.

You will never know.</div>
</div>
        </section>
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
