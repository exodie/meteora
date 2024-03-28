"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { items } from "./config";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full flex flex-row items-center flex-wrap">
      <ul className="flex flex-row gap-x-4 mr-0 ml-auto">
        {items.map(({ text, href }) => (
          <li className={`text-lg`} key={text}>
            <Link
              className={`font-light hover:font-medium transition-all ${
                pathname === href && "font-medium"
              }`}
              href={href}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
