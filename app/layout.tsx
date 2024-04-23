import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navigation/Navbar";
import { GoogleAnalytics } from '@next/third-parties/google'

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
    <html lang="en" className="text-text-default bg-background-default dark">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
      <GoogleAnalytics gaId="G-BN804S2RP3" />
    </html>
  );
}
