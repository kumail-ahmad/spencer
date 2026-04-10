"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

export default function AboutSection() {
  const containerRef = useRef(null);
  const text =
    "I’m a developer and designer who combines technical skill with creative thinking. Motivated by curiosity, I continuously explore new ideas, tools, and technologies to create engaging and meaningful digital experiences. ";
  const words = text.split(" ");

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const scrollerEl = document.querySelector("#smooth-wrapper");
    if (!containerRef.current || !scrollerEl) return;

    const timeout = setTimeout(() => {
      const ctx = gsap.context(() => {
        const wordEls = gsap.utils.toArray(".word-highlight");

        if (wordEls.length > 0) {
          gsap.to(wordEls, {
            opacity: 1,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              scroller: scrollerEl,
              start: "top center",
              end: "bottom 60%",
              scrub: true,
            },
          });
        }
      }, containerRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative h-[200vh]  z-40 bg-[#0a0a0a]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden w-full px-4 ">
        <div className="flex flex-wrap max-w-5xl text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold p-6  leading-7 ">
          <h1
            className={`${bebas.className} w-full text-white text-6xl md:text-6xl md:ml-2  mb-8 font-black leading-[.9] tracking-wide uppercase text-left `}
          >
            About <br />
            <span className="text-[#a855f7]">Me</span>
          </h1>

          {words.map((word, i) => (
            <span key={i} className="relative mx-1 lg:mx-2 mt-2 lg:mt-3">
              <span className="absolute opacity-30 text-zinc-500">{word}</span>
              <span
                className="word-highlight text-white relative z-10"
                style={{ opacity: 0.15 }}
              >
                {word}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
