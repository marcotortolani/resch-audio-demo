import React from "react";
import Link from "next/link";

import DarkModeToggle from "./DarkModeToggle";
import BurguerMenu from "./BurguerMenu";

export default function Header() {
  return (
    <header className=" z-50 fixed top-0 w-screen min-h-fit py-2  flex items-center justify-around bg-background dark:bg-black backdrop-filter backdrop-blur-lg bg-opacity-40 dark:bg-opacity-40 border-b-[0.01rem] border-white dark:border-gray-700">
      <DarkModeToggle />
      <div className=" font-light text-lg text-foreground  cursor-none">
        <Link href="#">Resch Audio</Link>
      </div>
      <div className=" z-30">
      <BurguerMenu />
        
      </div>
    </header>
  );
}
