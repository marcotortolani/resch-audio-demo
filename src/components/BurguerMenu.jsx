import Link from "next/link";
import { Button } from "../components/ui/button";
import SocialNetFooter from "../components/SocialNetFooter";
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

import { AlignJustify } from "lucide-react";

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
            <span className=" font-light text-md">Resch Audio</span>
          </SheetTitle>
          <SheetDescription>
            <span className=" font-extralight text-xs">
              Diseño y fabricación de audio High-End Argentina.
            </span>
          </SheetDescription>
        </SheetHeader>

        <div className="grid gap-2 py-10">
          <Link
            href="/"
            target="_self"
            className=" p-2 pl-0 hover:pl-2 hover:bg-gradient-to-r from-foreground to-transparent hover:text-background rounded-lg"
          >
            Home
          </Link>
          <Link
            href="/works"
            target="_self"
            className=" p-2 pl-0 hover:pl-2 hover:bg-gradient-to-r from-foreground to-transparent hover:text-background rounded-lg"
          >
            Nuestro trabajo
          </Link>
          <Link
            href="/about"
            target="_self"
            className=" p-2 pl-0 hover:pl-2 hover:bg-gradient-to-r from-foreground to-transparent hover:text-background rounded-lg"
          >
            Nosotros
          </Link>
          <Link
            href="/contact"
            target="_self"
            className=" p-2 pl-0 hover:pl-2 hover:bg-gradient-to-r from-foreground to-transparent hover:text-background rounded-lg"
          >
            Contacto
          </Link>
        </div>
        <SheetFooter className=" w-full h-fit">
          <SocialNetFooter />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
