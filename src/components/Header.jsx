"use client";
import React from "react";
import Link from "next/link";

import { useState, useEffect, useCallback } from "react";

import DarkModeToggle from "./DarkModeToggle";
import BurguerMenu from "./BurguerMenu";

export default function Header() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lowerPosition, setLowerPosition] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > lowerPosition + 100) {
      setLowerPosition(scrollPosition);
      setIsNavbarVisible(false);
    }
    if (scrollPosition + 50 <= lowerPosition) {
      setLowerPosition(scrollPosition);
      setIsNavbarVisible(true);
    }
  }, [lowerPosition]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`${
        isNavbarVisible ? "top-0" : "-top-28"
      }  z-50 fixed w-screen min-h-fit py-2 transition-all flex items-center justify-around bg-background dark:bg-black backdrop-filter backdrop-blur-lg bg-opacity-40 dark:bg-opacity-40 border-b-[0.01rem] border-white dark:border-gray-700`}
    >
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
