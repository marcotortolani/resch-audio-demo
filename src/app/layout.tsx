import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import Header from "../components/Header";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Resch Audio",
  description: "Equipos de audio High-End",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark" style={{ colorScheme: 'dark' }}>
      <body
        className={
          font.className +
          " w-full h-fit overflow-hidden overflow-y-scroll scroll-smooth flex flex-col items-center"
        }
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
