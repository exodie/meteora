import Link from "next/link";
import packageJson from "../../../../../package.json";

export const FooterCreator = () => {
  const currentYear = new Date().getFullYear();

  return (
    <span className="mx-auto text-center">
      {currentYear} - developed with ❤️ by{" "}
      <Link
        className="text-primaryColor"
        target="_blank"
        href={"https://github.com/exodie/"}
      >
        exodie
      </Link>{" "}
      | {` v${packageJson.version}`}
    </span>
  );
};
