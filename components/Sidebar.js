"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="bg-blue-500 text-white w-[10rem] fixed h-[calc(100%-4rem)]">
      <h2 className="mx-2 text-xs mb-3 text-slate-300 mt-2">Components</h2>
      <ul className="flex flex-col gap-1">
        <li className={clsx(pathname == '/cards' && 'w-full bg-blue-400', 'px-3 text-sm')}>
          <Link className={''} href={"/cards"}>Cards</Link>
        </li>
        <li className={clsx(pathname == '/footer' && 'w-full bg-blue-400', 'px-3 text-sm')}>
          <Link className={''} href={"/footer"}>Footer</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
