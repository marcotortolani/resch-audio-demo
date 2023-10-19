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

export default function ImagesGrid() {
  const [imageSelected, setImageSelected] = useState(0);

  return (
    <section
      id="#images"
      className=" relative w-full max-w-5xl h-full min-h-fit"
    >
      <ul className=" w-full h-fit grid grid-cols-3 grid-rows-2 gap-6  ">
        {images.map((image) => (
          <li
            key={image.id}
            className=" w-full h-fit col-span-1 row-span-1 flex items-center justify-center rounded-2xl "
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

      {imageSelected && (
        <div className=" absolute top-0 w-full h-full p-5 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-md drop-blur-md border-foreground border-2 rounded-xl ">
          <div className=" absolute top-4 right-4">
            <button
              className=" px-4 py-1 bg-foreground font-bold text-background hover:bg-gray-400 active:scale-90 rounded-full"
              onClick={() => setImageSelected(0)}
            >
              X
            </button>
          </div>
          <div className=" relative w-5/6 h-5/6 bg-blue-300 rounded-[inherit]">
            <Image
              className=" w-full h-auto object-cover rounded-[inherit]"
              // width={250}
              // height={200}
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
