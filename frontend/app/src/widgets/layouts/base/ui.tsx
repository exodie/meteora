import { type ReactNode } from "react";

import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

export const BaseLayouts = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
