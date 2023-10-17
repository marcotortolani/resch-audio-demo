import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import Header from "../components/Header"

const font = Poppins({ subsets: ["latin"], weight: ["200", "400", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body
          className={font.className + " w-screen h-fit overflow-hidden overflow-y-scroll flex flex-col items-center"}
        >
          <Header />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
