import Link from "next/link";

export const FooterCreator = () => {
  const currentYear = new Date().getFullYear();

  return (
    <span className="text-sm font-light">
      {currentYear} -{" "}
      <Link
        className="text-blue-600 underline"
        target="_blank"
        href={"https://t.me/sa_skja"}
      >
        @im.
      </Link>
    </span>
  );
};
