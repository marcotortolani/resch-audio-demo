import React from "react";

import DarkModeToggle from "./DarkModeToggle";
import BurguerMenu from "./BurguerMenu"

export default function Header() {
  return (
    <header className=" fixed top-0 w-full p-2 flex items-center justify-around bg-background">
      <DarkModeToggle />
      <div className=" font-light text-foreground">Resch Audio</div>
      <BurguerMenu />
    </header>
  );
}
