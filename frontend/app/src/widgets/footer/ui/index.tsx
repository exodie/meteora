import { FooterCreator } from "./creator";
import { CurrentVersionProject } from "./version";

export const Footer = () => {
  return (
    <footer className="bg-background sticky flex flex-row items-center flex-wrap justify-between rounded-2xl px-4 py-2 m-2">
      <FooterCreator />
      <CurrentVersionProject />
    </footer>
  );
};
