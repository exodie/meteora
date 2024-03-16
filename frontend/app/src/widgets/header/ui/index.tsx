import Image from "next/image";
import Link from "next/link";

import { Navbar } from "./navbar";

export const Header = () => {
  return (
    <header className="bg-header m-4 rounded-2xl px-10 py-6">
      <div className="flex flex-row items-center">
        <Link href="/">
          <Image
            className=""
            width={175}
            height={100}
            alt="Meteora"
            src={"/logo.svg"}
          />
        </Link>

        <Navbar />
      </div>
    </header>
  );
};
