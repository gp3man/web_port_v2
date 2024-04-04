import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarTop } from "./components/navigation/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gregs Web Portal",
  description: "Web Portfolio",
};
export const revalidate = 1800;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavbarTop/>
        {children}
        </body>
    </html>
  );
}
