import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignJustify, Instagram, Facebook, Youtube } from "lucide-react";

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <AlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <h1 className=" font-light">Resch Audio</h1>
          </SheetTitle>
          <SheetDescription>
            Diseño y fabricación de audio High-End Argentina.
          </SheetDescription>
        </SheetHeader>

        <div className="grid gap-4 py-4"></div>
        <SheetFooter className=" w-full h-fit">
          <div className=" w-full p-4 flex items-center justify-evenly">
            <Link href="https://www.instagram.com/resch.audio/" target="_blank">
              <Instagram />
            </Link>
            <Link href="https://www.facebook.com/resch.audio" target="_blank">
              <Facebook />
            </Link>
            <Link href="https://www.youtube.com/@reschaudio" target="_blank">
              <Youtube />
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
