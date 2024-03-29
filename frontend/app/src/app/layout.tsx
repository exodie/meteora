import type { Metadata } from "next";
import "./globals.css";
import "./main.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/shared/lib";

import { BaseLayouts } from "@/widgets/layouts";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Meteora",
  description: "Online shoping clothes magazine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <BaseLayouts>{children}</BaseLayouts>
      </body>
    </html>
  );
}
