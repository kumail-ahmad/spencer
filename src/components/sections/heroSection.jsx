"use client";

import { useRef } from "react";
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
import { Kdam_Thmor_Pro, Bebas_Neue } from "next/font/google";

import {
  TextStaggerHover,
  TextStaggerHoverActive,
  TextStaggerHoverHidden,
  TextStaggerReveal,
} from "../text-stagger-hover";

import { useLenis } from "../lenis";

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
  const bgRef = useRef(null);
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
      bgRef.current,
      {
        scale: 1.3,
      },
      "a",
    );
    tl.to(heroRef.current, {
      y: 500,
    });
  });

  const outlineText =
    "text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.9)] [text-shadow:0_0_24px_rgba(0,0,0,0.25)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.9)]";

  const blockImageAction = (e) => {
    e.preventDefault();
  };

  const imageGuardClass =
    "pointer-events-none select-none [-webkit-user-drag:none] [touch-callout:none]";

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[100svh] min-h-screen overflow-hidden z-30 bg-[#5aabdf]"
    >
      <div
        className="absolute inset-0 z-0 overflow-hidden select-none"
        onContextMenu={blockImageAction}
        onCopy={blockImageAction}
        onCut={blockImageAction}
        onDragStart={blockImageAction}
      >
        {/* blurred fill — hides any edge bleed on mobile */}
        <div className="absolute inset-0 z-0 md:hidden" aria-hidden>
          <Image
            src="/shimM.PNG"
            alt=""
            fill
            priority
            draggable={false}
            sizes="100vw"
            onContextMenu={blockImageAction}
            onDragStart={blockImageAction}
            className={`object-cover object-[52%_20%] scale-110 blur-xl ${imageGuardClass}`}
          />
        </div>

        <div
          ref={bgRef}
          className="absolute -inset-[7%] md:inset-0 z-[1] origin-center will-change-transform"
        >
          <Image
            src="/shimM.PNG"
            alt="Kumail Ahmad"
            fill
            priority
            draggable={false}
            sizes="100vw"
            onContextMenu={blockImageAction}
            onDragStart={blockImageAction}
            className={`object-cover object-[52%_38%] md:object-[51%_42%] ${imageGuardClass}`}
          />
        </div>

        {/* blocks direct interaction with the photo layer */}
        <div
          className="absolute inset-0 z-[2]"
          aria-hidden
          onContextMenu={blockImageAction}
          onDragStart={blockImageAction}
        />
      </div>

      <div className="absolute flex w-full h-screen justify-center items-end bottom-0 pointer-events-none">
        <div className="absolute left-4 right-4 top-4 z-30 pointer-events-auto">
          <div className="flex items-center justify-between md:hidden">
            <h1
              className={`text-xl font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)] ${kdam.className}`}
            >
              K$
            </h1>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-3 items-center mt-4 md:mt-0">
            <h1
              className={`hidden md:block text-2xl font-bold justify-self-start text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)] ${kdam.className}`}
            >
              K$
            </h1>

            <div
              className={`flex flex-wrap justify-center text-sm md:text-lg gap-4 md:gap-12 font-bold justify-self-center text-white ${kdam.className}`}
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
                <Instagram
                  className="text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)] hover:text-white/80"
                  size={22}
                />
              </a>

              <a
                href="https://linkedin.com/in/kumail-ahmad-a3035b15b"
                target="_blank"
              >
                <Linkedin
                  className="text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)] hover:text-white/80"
                  size={22}
                />
              </a>

              <a href="https://github.com/kumail-ahmad" target="_blank">
                <Github
                  className="text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)] hover:text-white/80"
                  size={22}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 top-[57%] z-10 flex -translate-y-1/2 items-center justify-between px-3 sm:px-4 md:px-10 lg:px-16 pointer-events-none">
          <div ref={textRef} className="flex w-full max-w-[min(100%,1400px)] mx-auto items-center justify-between uppercase">
            <h2
              className={`
                ${bebas.className}
                origin-left text-left font-black leading-[0.85] tracking-[-0.02em]
                text-[clamp(2.25rem,7.5vw,5.5rem)] md:text-[clamp(3rem,6vw,6rem)]
                lg:translate-x-8 xl:translate-x-12
                ${outlineText}
              `}
            >
              <TextStaggerReveal
                text={"KUMAIL\nAhmad"}
                animation="top"
                staggerDirection="middle"
              />
            </h2>
            <h2
              className={`
                ${bebas.className}
                origin-right text-right font-black leading-[0.85] tracking-[0.08em] md:tracking-[0.12em]
                text-[clamp(1.5rem,4.8vw,3.25rem)] md:text-[clamp(2rem,3.5vw,3.75rem)]
                lg:-translate-x-8 xl:-translate-x-12
                ${outlineText}
              `}
            >
              <TextStaggerReveal
                text={"DEVELOPER\nDESIGNER"}
                animation="top"
                staggerDirection="middle"
                delayOffset={0.28}
              />
            </h2>
          </div>
        </div>

        <div className="resume absolute top-4 right-4 md:top-3 md:right-12 z-30 flex items-center gap-2 tracking-wider pointer-events-auto">
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
