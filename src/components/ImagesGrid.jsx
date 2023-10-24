"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    src: "/img/resch-audio-valvular-01.jpg",
    title: "Image",
  },
  {
    id: 2,
    src: "/img/resch-audio-valvular-03.jpg",
    title: "Image",
  },
  {
    id: 3,
    src: "/img/resch-valvular.jpeg",
    title: "Image",
  },
  {
    id: 4,
    src: "/img/resch-audio-render02.jpg",
    title: "Image",
  },
  {
    id: 5,
    src: "/img/resch-audio-02.jpg",
    title: "Image",
  },
  {
    id: 6,
    src: "/img/resch-audio-valvular-02.jpg",
    title: "Image",
  },
];

import { ArrowLeftCircle, ArrowRightCircle, XSquare } from "lucide-react";

export default function ImagesGrid() {
  const [imageSelected, setImageSelected] = useState(0);

  console.log(imageSelected);

  function handleNextImage() {
    if (imageSelected === images.length) {
      setImageSelected(1);
    } else {
      setImageSelected((prev) => prev + 1);
    }
  }
  function handlePreviousImage() {
    if (imageSelected === 1) {
      setImageSelected(images.length);
    } else {
      setImageSelected((prev) => prev - 1);
    }
  }

  return (
    <section
      id="images"
      className=" relative w-screen h-fit min-h-[600px] py-10 flex items-center justify-center "
    >
      <ul className=" w-full max-w-5xl h-fit p-2 md:p-4 grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-2 md:gap-6  ">
        {images.map((image) => (
          <li
            key={image.id}
            className=" w-full h-fit col-span-1 row-span-1 flex items-center justify-center rounded-2xl cursor-pointer "
          >
            <div className="w-full h-auto rounded-[inherit] hover:scale-110 hover:border-foreground border-background border-2 transition-all">
              <Image
                className=" w-full h-auto object-cover rounded-[inherit]"
                width={250}
                height={200}
                src={image.src}
                alt={`Image ${image.title}`}
                // fill={true}
                onClick={() => setImageSelected(image.id)}
              />
            </div>
          </li>
        ))}
      </ul>

      {imageSelected !== 0 && (
        <div className=" absolute top-10  w-screen md:w-[90vw] max-w-7xl h-[90%]  p-4 flex items-center justify-center bg-gray-400 bg-opacity-20 backdrop-blur-md drop-blur-md border-foreground border-2 rounded-xl ">
          <div className="z-30 absolute bottom-14 sm:bottom-0 w-full h-full flex items-end sm:items-center justify-between ">
            <button
              className=" absolute left-5 sm:left-0 md:left-2 m-2 p-2 transition-all hover:bg-accent rounded-full cursor-pointer"
              onClick={handlePreviousImage}
            >
              <ArrowLeftCircle size={40} />
            </button>
            <button
              className=" absolute right-5 sm:right-0 md:right-2 m-2 p-2 transition-all hover:bg-accent rounded-full cursor-pointer"
              onClick={handleNextImage}
            >
              <ArrowRightCircle size={40} />
            </button>
          </div>
          <div className=" z-50 absolute top-4 right-4">
            <button
              className=" p-2 font-bold text-foreground bg-background hover:bg-accent active:scale-90 rounded-sm cursor-pointer pointer-events-auto "
              onClick={() => setImageSelected(0)}
            >
              <XSquare size={30} />
            </button>
          </div>
          <div className=" z-20 relative w-full sm:w-5/6 h-3/6 md:h-5/6 rounded-[inherit]">
            <Image
              className=" w-full h-auto object-cover rounded-[inherit]"
              src={images[imageSelected - 1].src}
              alt={`Image ${images[imageSelected - 1].title}`}
              fill={true}
            />
          </div>
        </div>
      )}
    </section>
  );
}
