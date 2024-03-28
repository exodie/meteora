import { FooterCreator } from "./creator";
import { FooterRepositoryInfo } from "./repo";

export const Footer = () => {
  return (
    <footer className="bg-background sticky flex flex-row items-center flex-wrap justify-center gap-y-2 rounded-2xl px-10 py-4 m-4 top-4">
      <FooterRepositoryInfo />
      <FooterCreator />
    </footer>
  );
};
