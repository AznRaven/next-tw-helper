"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const links = [
    {
      name: "Components",
      items: [
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
        }
      ]
    },
    {
      name: "Layout",
      items: [
        {
          path: '/breakpoint',
          name: 'breakpoint',
        },
        {
          path: '/container',
          name: 'container'
        }
      ]
    }
  ];

  return (
    <nav className="hidden lg:block fixed z-20 inset-0 top-[5rem] left-[7rem] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto">
      {links.map((category) => (
        <div key={category.name}>
          <h2 className="mx-2 mb-3 mt-2 text-sm font-bold ">{category.name}</h2>
          <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-700">
            {category.items.map((link) => (
              <li
                key={link.path}
                className={clsx(
                  pathname === link.path && "block border-l pl-4 -ml-px border-red-500 hover:border-red-400 dark:hover:border-red-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300",
                  "px-3 text-sm hover:border-red-500 border-l -ml-px",pathname !== link.path && "border-transparent"
                )}
              >
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default Sidebar;
