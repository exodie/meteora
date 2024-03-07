import Image from "next/image";
import { Navbar } from "./navbar";
import { SearchInput } from "./search-input";

export const Header = () => {
  return (
    <header className="bg-header px-4 py-8">
      <div className="flex flex-row items-center">
        <Image
          className=""
          width={175}
          height={100}
          alt="Meteora"
          src={"/logo.svg"}
        />

        <div className="ml-20">
          <SearchInput />
        </div>

        <Navbar />
      </div>
    </header>
  );
};
