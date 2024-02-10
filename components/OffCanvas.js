
const OffCanvas = ({ isOpen, toggleMenu,setIsOpen }) => {
  return (
    <div className={`transition ease-in-out delay-150 fixed right-[7rem] z-20 top-[5rem] inset-0 flex ${isOpen ? "" : "hidden"}`}>
      <div className="fixed inset-y-0 right-0 flex flex-col w-64 bg-gray-800 bg-opacity-80">
        {/* <div className="flex items-center justify-end h-full px-4 sm:px-0">
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={()=>setIsOpen(!isOpen)}
          >
            &times;
          </button>
        </div> */}
        <div className="px-4 sm:px-0 py-6 sm:py-12 flex flex-col h-full items-center">
          <ul className="text-white">
            <li className="py-2">Menu Item 1</li>
            <li className="py-2">Menu Item 2</li>
            <li className="py-2">Menu Item 3</li>
            <li className="py-2">Menu Item 4</li>
          </ul>
        </div>
      </div>
      <div
        className="flex-1 h-full bg-transparent transition-opacity"
        onClick={()=>setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default OffCanvas;
