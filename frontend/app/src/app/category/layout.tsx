import { type ReactNode } from "react";

export default function CategoryLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <section>{children}</section>;
}
