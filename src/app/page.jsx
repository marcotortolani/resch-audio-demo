import React from "react";

import HomeSection from "../components/HomeSection";


export default function Home() {
  return (
    <main className=" w-screen min-h-[100svh] overflow-hidden flex flex-col items-center justify-between bg-background">
      <HomeSection />

      
      <section id="#images" className=" w-full h-screen min-h-fit bg-sky-700">
        <h3>Grilla de imagenes</h3>

        <div className=" w-full h-2/3 grid grid-cols-2 grid-rows-2 bg-gray-300">
          <div className=" w-full h-full col-span-1 row-span-1 bg-red-200 ">
            Imagen 01
          </div>
          <div className=" w-full h-full col-span-1 row-span-1 bg-blue-200 ">
            Imagen 02
          </div>
          <div className=" w-full h-full col-span-1 row-span-1 bg-green-200 ">
            Imagen 03
          </div>
          <div className=" w-full h-full col-span-1 row-span-1 bg-purple-200 ">
            Imagen 04
          </div>
        </div>
      </section>

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
