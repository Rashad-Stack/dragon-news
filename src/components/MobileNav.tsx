import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Description } from "@radix-ui/react-dialog";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <HiBars3CenterLeft className="text-2xl" />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-full flex-col justify-between flex">
        <SheetHeader>
          <SheetTitle>Logo</SheetTitle>

          <nav>
            <ul>
              <li>
                <SheetTrigger asChild>
                  <Link to="/">Home</Link>
                </SheetTrigger>
              </li>
              <li>
                <SheetTrigger asChild>
                  <Link to="/about">About</Link>
                </SheetTrigger>
              </li>
              <li>
                <SheetTrigger asChild>
                  <Link to="/contact">Contact</Link>
                </SheetTrigger>
              </li>
            </ul>
          </nav>
        </SheetHeader>

        <Description>
          <Button className="w-full">Login</Button>
        </Description>
      </SheetContent>
    </Sheet>
  );
}
