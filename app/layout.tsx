import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "./provider";
import LinkSideBar from "./components/LinkSideBar";
import { FloatingNav } from "./components/ui/floating-navbar";
import TopNav from "./components/TopNav";

const chakra = Chakra_Petch({ weight: ["300", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gregs Web Portal",
  description: "Web Portfolio",
};
export const revalidate = 200;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className="dark scroll-smooth">
        <body className={chakra.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
          <TopNav />
          {children}
          <LinkSideBar />
      </ThemeProvider>
        </body>
      <GoogleAnalytics gaId="G-BN804S2RP3" />
    </html>
  );
}
