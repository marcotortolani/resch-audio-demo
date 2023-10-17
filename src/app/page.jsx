import Image from "next/image";

import { Button } from "@/components/ui/button";
//import Video from "../components/Video";

import heroImage from "../../public/img/resch-valvular.jpeg";
//import video from "../../public/video/pexels_parlante-720p.mp4";

export default function Home() {
  return (
    <main className=" w-full min-h-screen overflow-hidden flex flex-col items-center justify-between bg-background">
      <section className=" w-full h-screen min-h-fit pt-16 flex flex-col justify-around ">
        <div className=" z-20 sticky top-10 w-full h-fit my-6 mb-4 flex flex-col items-center justify-around ">
          <div className=" w-fit px-4  bg-gradient-to-r from-sky-800 to-purple-800 bg-clip-text text-transparent">
            <h2 className=" text-center font-black text-4xl md:text-6xl lg:text-8xl uppercase ">Audio High-End</h2>
          </div>
          
        </div>
        <div className=" z-10 relative w-full h-full md:h-4/5 lg:h-1/2 flex flex-col items-center ">
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
            <div className=" w-full h-full bg-black opacity-80  " />
            {/* <div className=" w-1/2 h-full  bg-gradient-to-r from-transparent to-black bg-opacity-50" /> */}
          </div>
          <p className=" z-30 absolute bottom-36 lg:bottom-4 w-4/6 max-w-lg text-white text-center ">
            Equipamiento de audio artesanal y de alta calidad
          </p>
        </div>

        {/* <div className=" w-full my-2  text-center font-normal text-lg bg-gradient-to-r from-sky-500 to-white bg-clip-text text-transparent">
          Made in Argentina
        </div> */}
      </section>

      <section className=" w-full h-screen min-h-fit bg-gray-500">
        Seccion 2
      </section>
    </main>
  );
}
