import Image from "next/image";

import { Button } from "@/components/ui/button";

import heroImage from "../../public/img/resch-valvular.jpeg";

export default function Home() {
  return (
    <main className=" w-full h-full min-h-screen flex flex-col items-center justify-between bg-background">
      <section className=" w-full h-screen min-h-fit pt-16 flex flex-col justify-around ">
        <div className=" w-full mx-2 my-6 flex flex-col items-center">
          <div className=" w-fit px-4 text-center font-black text-5xl uppercase bg-gradient-to-r from-foreground to-background bg-clip-text text-transparent">
            <h2 className="  whitespace-pre-wrap">Audio High-End</h2>
          </div>
        </div>
        <div className=" z-10 relative w-full h-1/2 ">
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
            <div className=" w-1/2 h-full bg-black bg-gradient-to-l from-transparent to-background bg-opacity-20" />
            <div className=" w-1/2 h-full bg-black bg-gradient-to-r from-transparent to-background bg-opacity-20" />
          </div>
        </div>

        <div className=" w-full my-2  text-center font-normal text-lg bg-gradient-to-r from-sky-500 to-white bg-clip-text text-transparent">
          Made in Argentina
        </div>
      </section>

      <section className=" w-full h-screen min-h-fit bg-gray-500">
        Seccion 2
      </section>
    </main>
  );
}
