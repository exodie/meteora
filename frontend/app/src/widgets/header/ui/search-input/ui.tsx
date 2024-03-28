import { ChangeEvent } from "react";

export const SearchInput = () => {
  // TODO: Create debounce mode for handler
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <form
      // Test
      action={async () => {
        "use server";
        console.log("input is enter");
      }}
    >
      <input
        className="bg-background rounded-md text-md font-medium px-4 p-2 outline-none"
        type="text"
        placeholder="Поиск мест и адресов"
      />
    </form>
  );
};
