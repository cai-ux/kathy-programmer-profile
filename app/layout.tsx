import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kathy’s Programmer Profile",
  description: "A cute, cat-themed portfolio for Kathy, an Information Technology student.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
