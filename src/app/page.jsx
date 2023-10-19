import React from "react";

import HomeSection from "../components/HomeSection";
import ImagesGrid from "../components/ImagesGrid"



export default function Home() {
  return (
    <main className=" w-screen min-h-[100svh] overflow-hidden flex flex-col items-center justify-between bg-background">
      <HomeSection />

      <ImagesGrid />
      
      

      <section id="#about-us" className=" w-full h-screen min-h-fit bg-green-700">
        <h3>Resumen Nosotros</h3>

        <div className=" w-full h-full">
          <div className=" w-1/2 h-2/3">Foto hermanos Resch trabajando</div>
          <p>
            Duis nisi enim sint proident dolore magna eiusmod qui duis pariatur
            in exercitation. Velit velit in deserunt incididunt et ullamco minim
            sunt elit occaecat commodo eu duis. Non esse non consectetur et sint
            elit cillum.
          </p>
        </div>
      </section>

      <footer className="  w-full h-1/4 bg-background"></footer>
    </main>
  );
}
