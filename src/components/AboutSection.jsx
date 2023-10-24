import React from "react";

import { bebasReg400 } from "../lib/fonts";

export default function AboutSection() {
  return (
    <section
      id="about-us"
      className=" relative  w-full h-screen p-2 flex items-center justify-center "
    >
      <div className=" w-full max-w-7xl h-full md:h-5/6 p-2 flex flex-col items-center justify-center gap-2 ">
        <h3 className={bebasReg400.className + ` text-5xl `}>Hermanos Resch</h3>

        <div className=" w-full h-full p-2 sm:px-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 ">
          <div className=" w-full md:w-1/2 h-2/3 min-h-[200px] flex items-center justify-center bg-blue-700 text-foreground rounded-lg md:rounded-xl">
            Foto hermanos Resch trabajando
          </div>
          <div className=" w-full md:w-2/3 lg:w-1/3 flex md:flex-col gap-2">
            <p className=" w-full">
              Duis nisi enim sint proident dolore magna eiusmod qui duis
              pariatur in exercitation. Velit velit in deserunt incididunt et
              ullamco minim sunt elit occaecat commodo eu duis. Non esse non
              consectetur et sint elit cillum.
            </p>
            <p className=" w-full">
              Duis nisi enim sint proident dolore magna eiusmod qui duis
              pariatur in exercitation. Velit velit in deserunt incididunt et
              ullamco minim sunt elit occaecat commodo eu duis. Non esse non
              consectetur et sint elit cillum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
