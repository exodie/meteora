"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { items } from "./config";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full flex flex-row items-center flex-wrap">
      <ul className="flex flex-row gap-x-2 mr-0 ml-auto">
        {items.map(({ text, href }) => {
          const isCurrentPage = pathname === href;

          return (
            <li className={`text-xl font-bold`} key={text}>
              <Link
                className={`${isCurrentPage ? "font-medium" : "font-light"}`}
                href={href}
              >
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
