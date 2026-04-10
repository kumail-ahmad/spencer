"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Bebas_Neue } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);
const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});
export default function ExperienceSection() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const dotRef = useRef(null);

  useGSAP(() => {
    const line = lineRef.current;
    const dot = dotRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeline-container",
        scroller: "#smooth-wrapper",
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: false,
      },
    });

    tl.fromTo(line, { scaleY: 0 }, { scaleY: 1, ease: "none" });

    tl.fromTo(
      dot,
      { y: 0 },
      {
        y: () => line.offsetHeight - 16,
        ease: "none",
      },
      0,
    );
  });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0a0a] text-white px-10 py-20 md:py-28"
    >
      <h1
        className={` ${bebas.className} w-full text-white text-7xl md:text-7xl lg:ml-36 md:ml-3 ml-5 mb-20 font-black leading-[.9] tracking-wide uppercase text-left `}
      >
        My  <br />
        <span className="text-[#a855f7]">Career</span>
      </h1>

      <div className="relative max-w-6xl mx-auto grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-12 lg:gap-20 timeline-container pb-10">
        <div className="flex flex-col space-y-16 md:space-y-24 py-2">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between pr-4 md:pr-10">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">
                Burn Hall School
              </h2>
              <p className="text-purple-400 font-medium mt-1">
                Higher Secondary Education
              </p>
            </div>
            <p className="text-3xl md:text-4xl font-bold mt-2 lg:mt-0">2023</p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between pr-4 md:pr-10">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">
                 Codevera Technologies
              </h2>
              <p className="text-purple-400 font-medium mt-1">
                Full-Stack Web Developer
              </p>
            </div>
            <p className="text-3xl md:text-4xl font-bold mt-2 lg:mt-0">2024</p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between pr-4 md:pr-10">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">IUST</h2>
              <p className="text-purple-400 font-medium mt-1">
                Btech - Computer Science Engineering
              </p>
            </div>
            <p className="text-3xl md:text-4xl font-bold text-gray-400 mt-2 lg:mt-0">
              NOW
            </p>
          </div>
        </div>

        <div className="relative flex justify-center w-full">
          {/* Background line */}
          <div className="absolute top-0 w-[2px] h-full bg-white/10" />

          {/* Animated line */}
          <div
            ref={lineRef}
            className="absolute top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-purple-500/70 to-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.5)] origin-top scale-y-0"
          />

          {/* Dot */}
          <div
            ref={dotRef}
            className="absolute top-0 w-4 h-4 bg-purple-300 rounded-full shadow-[0_0_30px_#a855f7] -translate-x-[0.5px]"
          />
        </div>

        <div className="flex flex-col space-y-16 md:space-y-24 text-white/80 pl-4 md:pl-10 py-2">
          <div className="max-w-md">
            <p className="text-sm leading-relaxed">
             Completed my schooling with a strong academic foundation, developing early interest in technology and problem-solving.
            </p>
          </div>

          <div className="max-w-md">
            <p className="text-sm leading-relaxed">
              Built web features, product prototypes, and reusable
              components/microservices, implemented UI improvements and 3D UI
              interface compatible with Modern Web Standards.
            </p>
          </div>

          <div className="max-w-md">
            <p className="text-sm leading-relaxed">
            Currently pursuing my degree while strengthening my skills in full-stack development, system design, and modern web technologies such as TypeScript, React, Node.js, and 3D web interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
