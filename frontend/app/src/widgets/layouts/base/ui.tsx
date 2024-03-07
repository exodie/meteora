import { Header } from "app/widgets/header";
import { type PropsWithChildren } from "react";

export const BaseLayouts = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
