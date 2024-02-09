// components/Modal.js

import React, { useState } from "react";

const Modal = ({ isOpen, children, name, setName, closeModal, type }) => {
  const [input, setInput] = useState(name);

  if (!isOpen) return null;

  const saveModal = () => {
    console.log('save')
    console.log(input)
    setName(input);
    console.log(name)

    closeModal();
  };
  const cancelModal = () => {
    setInput(name);
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="relative bg-white p-8 rounded-lg">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={closeModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
        {type === 'text' && (
          <input
            className="border text-center"
            type={type}
            name="newTitle"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Edit Title..."
          />
        )}
        {type === 'textarea' && (
          <textarea onChange={(e)=>setInput(e.target.value)} id="story" name="story" rows="5" cols="33">
            {name}
          </textarea>
        )}

        <div className="flex justify-around">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={cancelModal}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={saveModal}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
