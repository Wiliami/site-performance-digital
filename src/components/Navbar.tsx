import LogoP from "../assets/LogoP.png";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
 {/* import { ModeToggle } from "./mode-toggle"; */}


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >

              <img 
                className="rounded-full dark:bg-transparent"
                src={LogoP}
                width={70}
                height={75}
                alt="logo"
              />

            </a>
          </NavigationMenuItem>


            
          <div className="hidden md:flex gap-2 items-center">
            <a href="http://localhost:3000/login">Login</a>

            <a href="#" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-400-700 focus:outline-none dark:focus:ring-blue-800">
              Solicitar acesso
            </a>
              {/* <ModeToggle /> */}

          </div>
          

        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
