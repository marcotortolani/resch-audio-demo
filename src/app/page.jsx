import React from "react";

import HomeSection from "../components/HomeSection";
import ImagesGrid from "../components/ImagesGrid";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <main className=" w-screen min-h-[100svh] overflow-hidden flex flex-col items-center justify-between bg-background">
      <HomeSection />

      <ImagesGrid />

      <AboutSection />

      <footer className="  w-full h-1/4 bg-background"></footer>
    </main>
  );
}
