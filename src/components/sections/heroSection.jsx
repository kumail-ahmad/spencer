"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Github,
  Instagram,
  File as FileIcon,

  Linkedin,
} from "lucide-react";
import Image from "next/image";
import { BlurText } from "../ui/blur-text";

import { Kdam_Thmor_Pro, Roboto, Bebas_Neue } from "next/font/google";

import {
  TextStaggerHover,
  TextStaggerHoverActive,
  TextStaggerHoverHidden,
} from "../text-stagger-hover";

import { useLenis } from "../lenis";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700"],
});

const kdam = Kdam_Thmor_Pro({
  weight: ["400"],
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const textRef = useRef(null);
  const heroRef = useRef(null);
  const contRef = useRef(null);
  const imgRef = useRef(null);
  const lenis = useLenis();

  const navItems = [
    { label: "ABOUT", id: "about" },
    { label: "WORK", id: "work" },
    { label: "CONTACT", id: "contact" },
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(`#${id}`, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard lenis easing
      });
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        scroller: "#smooth-wrapper",
        start: "top top",
        markers: false,
        scrub: true,
        // pin: true,
        // pinSpacing: false,
      },
    });
    tl.to(
      textRef.current,
      {
        y: -200,
        scale: 1.3,
      },
      "a",
    );
    tl.to(
      imgRef.current,
      {
        scale: 1.3,
      },
      "a",
    );
    tl.to(heroRef.current, {
      y: 500,
    });
  });

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden z-30 bg-[#f0ece2]"
    >
      <div className="absolute flex w-full h-screen justify-center items-end bottom-0  ">
        <Image
          className="object-cover ml-16 z-100 -translate-y-8 md:translate-y-0 scale-y-[1.2] md:scale-y-[1]"
          src="/bg2.png"
          width={600}
          height={400}
          alt="bg"
          ref={imgRef}
        />
        <div className="absolute left-4 right-4 top-4 z-30">
          <div className="flex items-center justify-between md:hidden">
            <h1 className={`text-xl font-bold ${kdam.className}`}>K$</h1>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-3 items-center mt-4 md:mt-0">
            <h1
              className={`hidden md:block text-2xl font-bold justify-self-start ${kdam.className}`}
            >
              K$
            </h1>

            <div
              className={`flex flex-wrap justify-center text-sm md:text-lg gap-4 md:gap-12 font-bold justify-self-center ${kdam.className} text-black md:text-[#ff0000]`}
            >
              {navItems.map((item) => (
                <TextStaggerHover
                  key={item.label}
                  as="a"
                  href={`#${item.id}`}
                  onClick={(e) => handleScroll(e, item.id)}
                  className="uppercase cursor-pointer"
                >
                  <TextStaggerHoverActive
                    animation="top"
                    staggerDirection="middle"
                  >
                    {item.label}
                  </TextStaggerHoverActive>

                  <TextStaggerHoverHidden
                    animation="bottom"
                    staggerDirection="middle"
                  >
                    {item.label}
                  </TextStaggerHoverHidden>
                </TextStaggerHover>
              ))}
            </div>

            {/* ICONS */}
            <div className="flex gap-5 mt-3 md:mt-0 justify-self-end lg:hidden">
              <a href="https://instagram.com/mainly.kumail" target="_blank">
                <Instagram className="hover:text-gray-500" size={22} />
              </a>

              <a
                href="https://linkedin.com/in/kumail-ahmad-a3035b15b"
                target="_blank"
              >
                <Linkedin className="hover:text-gray-500" size={22} />
              </a>

              <a href="https://github.com/kumail-ahmad" target="_blank">
                <Github className="hover:text-gray-500" size={22} />
              </a>
            </div>
          </div>
        </div>
        <div
          ref={contRef}
          className="introducLeft absolute w-full flex items-center justify-center bottom-[10px] uppercase z-10"
        >
          <div ref={textRef} className="w-full flex justify-center">
            <h1
              className={`
                ${bebas.className}
                hero-name
                uppercase font-black
                leading-[0.7] md:leading-none
                tracking-[-0.03em]
                text-[180px] md:text-[300px]
                text-center md:text-left
                text-[#ff0000]
                origin-top
                -translate-y-[260%] md:-translate-y-[70%]
                scale-y-[2.9] md:scale-y-[2.1]
                [-webkit-text-stroke:1px_currentColor] md:[-webkit-text-stroke:6px_currentColor]
              `}
            >
              <span className="block md:inline mb-2 md:mb-0">KUMAIL</span>
              <span className="hidden md:inline md:ml-4">AHMAD</span>
            </h1>
          </div>
        </div>
        <div className="introDucRight absolute right-42  -translate-y-1/2 top-1/2 uppercase  ">
          <BlurText
            text={`designer \n developer`}
            multiline
            repeat={10000}
            repeatDelay={5}
            leading="leading-tight"
            tracking="tracking-[0.35em]"
          />
        </div>

        <div className="resume absolute top-4 right-4 md:top-3 md:right-12 flex items-center gap-2 tracking-wider">
          <TextStaggerHover
            as="a"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 bg-[#d2ff00] text-sm md:text-lg rounded-lg px-4 py-2 md:px-6 md:py-4 leading-tight font-bold cursor-pointer ${kdam.className}`}
          >
            <TextStaggerHoverActive animation="top" staggerDirection="middle">
              RESUME
            </TextStaggerHoverActive>
            <TextStaggerHoverHidden
              animation="bottom"
              staggerDirection="middle"
            >
              RESUME
            </TextStaggerHoverHidden>
            <FileIcon size={18} />
          </TextStaggerHover>
        </div>
      </div>
    </section>
  );
}
