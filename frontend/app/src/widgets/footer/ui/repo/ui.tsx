import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const FooterRepositoryInfo = () => {
  return (
    <Link target={"_blank"} href={"https://github.com/exodie/meteora"}>
      <GitHubLogoIcon width={32} height={32} />
    </Link>
  );
};
