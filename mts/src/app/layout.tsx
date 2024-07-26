import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Favicon from "./components/Favicon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martin Tech Solutions",
  description: "Martin Tech Solutions is a software development company that specializes in building web applications and websites.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
          <Favicon name="Martin Tech Solutions" />

        </head>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
      </html>
    </>

  );
}
