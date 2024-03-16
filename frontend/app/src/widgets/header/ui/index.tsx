import Image from "next/image";
import Link from "next/link";

import { Navbar } from "./navbar";

export const Header = () => {
  return (
    <header className="bg-header px-4 py-8">
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
