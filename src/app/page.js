"use client";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import ClickSpark from "@/components/ClickSpark";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black space-y-10">
      <h1 className="text-6xl md:text-8xl font-extralight tracking-tight text-stone-900">
        Hello, I am <span className="font-normal">Kumail</span>
      </h1>
      {/* <div classNameName="list"> <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu></div> */}
      <div className="flex flex-col md:flex-row items-center justify-center text-xl md:text-3xl text-stone-500 font-light gap-2 md:gap-3">
        <span>I build</span>
        <div className="flex flex-wrap justify-center items-center gap-3">
          <span className="text-stone-800 font-normal border-b border-transparent hover:border-stone-800 transition-colors cursor-default">
            Websites
          </span>
          <span className="text-stone-300 hidden md:inline">,</span>
          <span className="text-stone-800 font-normal border-b border-transparent hover:border-stone-800 transition-colors cursor-default">
            Models
          </span>
          <span className="text-stone-300 hidden md:inline">&amp;</span>
          <span className="text-stone-800 font-normal border-b border-transparent hover:border-stone-800 transition-colors cursor-default">
            Applications
          </span>
        </div>
      </div>

      <div className=" mt-16 flex items-center gap-3 px-4 py-2 bg-white border border-stone-100 rounded-full shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-stone-600"></span>
        </span>
        <span className="text-xs font-medium text-stone-500 uppercase tracking-widest ">
          Site To Be Up Soon
        </span>
      </div>
      <div className="opacity-45  text-sm">THANK YOU </div>
    </div>
  );
}
