"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const links = [
    {
      path: "/accordion",
      name: "accordion",
    },
    {
      path: "/alerts",
      name: "alerts",
    },
    {
      path: "/cards",
      name: "cards",
    },
  ];
  return (
    <aside className="bg-blue-500 text-white w-[10rem] fixed h-[calc(100%-4rem)]">
      <h2 className="mx-2 text-xs mb-3 text-slate-300 mt-2">Components</h2>
      <ul className="flex flex-col gap-1">
        {links.map((link) => (
          <li
            className={clsx(
              pathname == `/${link.name}` && "w-full bg-blue-400",
              "px-3 text-sm"
            )}
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
       
      </ul>
    </aside>
  );
};

export default Sidebar;
