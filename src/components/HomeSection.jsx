import React from "react";
import Image from "next/image";

import { bebasReg400 } from "../lib/fonts";

import heroImage from "../../public/img/resch-valvular.jpeg";

export default function HomeSection() {
  return (
    <section className=" relative w-full h-screen min-h-fit pt-0 flex flex-col items-center justify-center ">
      <div className=" z-20  w-full h-full sticky top-10 flex flex-col items-center justify-center">
        <div className=" w-fit px-4  bg-gradient-to-r from-blue-900 to-gray-100 bg-clip-text text-transparent">
          <h2
            className={
              bebasReg400.className +
              " text-center font-black text-6xl md:text-6xl lg:text-9xl uppercase cursor-default select-none "
            }
          >
            Audio High-End
          </h2>
        </div>
        <p className=" z-30 lg:bottom-4 w-4/6 h-fit  py-2 max-w-lg font-light text-white text-center leading-4 cursor-default select-none">
          Equipamiento de audio artesanal y de alta calidad
        </p>
      </div>
      <div className=" z-10 absolute top-0 w-full h-full flex items-center ">
        <div className="  relative w-full h-1/2 md:h-3/5 lg:h-2/3 flex flex-col items-center ">
          <Image
            className=" w-full object-cover"
            src={heroImage}
            alt="Resch Audio RA-SET-1"
            // width={500}
            // height={374}
            fill
            // layout="responsive"
          />
          <div className=" z-20 absolute top-0 w-full h-full flex items-center">
            <div className=" w-full h-full bg-black opacity-30 dark:opacity-80  " />
          </div>
        </div>
      </div>
    </section>
  );
}
