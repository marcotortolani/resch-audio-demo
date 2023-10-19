import React from "react";
import Link from "next/link";

import { Instagram, Facebook, Youtube } from "lucide-react";

export default function SocialNetFooter() {
  return (
    <div className=" w-full p-4 flex items-center justify-evenly">
      <Link
        href="https://www.instagram.com/resch.audio/"
        target="_blank"
        className=" group p-1 hover:bg-gradient-to-b from-blue-500 to-pink-500 cursor-pointer rounded-lg"
      >
        <Instagram className=" text-foreground group-hover:text-background" />
      </Link>
      <Link
        href="https://www.facebook.com/resch.audio"
        target="_blank"
        className=" group p-1 hover:bg-gradient-to-b from-blue-400 to-blue-600 cursor-pointer rounded-lg"
      >
        <Facebook className=" text-foreground group-hover:text-background"/>
      </Link>
      <Link
        href="https://www.youtube.com/@reschaudio"
        target="_blank"
        className=" group p-1 hover:bg-gradient-to-b from-red-400 to-red-600 cursor-pointer rounded-lg"
      >
        <Youtube className=" text-foreground group-hover:text-background"/>
      </Link>
    </div>
  );
}
