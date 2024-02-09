import React from "react";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className="fixed top-0 w-full h-[4rem] bg-slate-950 flex items-center text-sm text-white">
      <ul className="flex justify-between px-5 py-3 w-full">
        <h1 className="text-center">AznRaven's TW Helper</h1>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Nav;
