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

  const timelineData = [
    {
      title: "Burn Hall School",
      subtitle: "Higher Secondary Education",
      year: "2023",
      description: "Completed my schooling with a strong academic foundation, developing early interest in technology and problem-solving.",
    },
    {
      title: "Codevera Technologies",
      subtitle: "Full-Stack Web Developer",
      year: "2024",
      description: "Built web features, product prototypes, and reusable components/microservices, implemented UI improvements and 3D UI interface compatible with Modern Web Standards.",
    },
    {
      title: "IUST",
      subtitle: "Btech - Computer Science Engineering",
      year: "NOW",
      description: "Currently pursuing my degree while strengthening my skills in full-stack development, system design, and modern web technologies such as TypeScript, React, Node.js, and 3D web interfaces.",
    },
  ];

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
      className="relative bg-[#0a0a0a] text-white px-4 md:px-10 py-20 md:py-28"
    >
      <h1
        className={` ${bebas.className} w-full text-white text-7xl md:text-7xl lg:ml-36 md:ml-3 ml-5 mb-20 font-black leading-[.9] tracking-wide uppercase text-left `}
      >
        My  <br />
        <span className="text-[#a855f7]">Career</span>
      </h1>

      <div className="relative max-w-6xl mx-auto timeline-container pb-10 px-0 md:px-0">
        {/* Background line */}
        <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 top-0 w-[2px] h-full bg-white/10" />

        {/* Animated line */}
        <div
          ref={lineRef}
          className="absolute left-[24px] md:left-1/2 -translate-x-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-purple-500/70 to-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.5)] origin-top scale-y-0"
        />

        {/* Dot */}
        <div
          ref={dotRef}
          className="absolute left-[24px] md:left-1/2 -translate-x-1/2 top-0 w-4 h-4 bg-purple-300 rounded-full shadow-[0_0_30px_#a855f7]"
        />

        <div className="space-y-16 md:space-y-24 relative z-10">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[48px_1fr] md:grid-cols-[1fr_96px_1fr] gap-4 md:gap-12 lg:gap-20 items-start"
            >
              <div className="hidden md:flex flex-col lg:flex-row lg:items-start lg:justify-between text-right pr-2">
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold">
                    {item.title}
                  </h2>
                  <p className="text-purple-400 font-medium mt-1 text-sm md:text-base">
                    {item.subtitle}
                  </p>
                </div>
                <p className="text-3xl md:text-4xl font-bold ml-6 mt-2 lg:mt-0 whitespace-nowrap">
                  {item.year}
                </p>
              </div>

              <div className="w-12 md:w-24 flex justify-center items-start pt-1.5">
                <div className="w-3 h-3 md:w-4 md:w-4 rounded-full bg-purple-500 border-2 border-black z-20" />
              </div>

              <div className="flex flex-col space-y-3 pl-2 md:pl-0">
                <div className="md:hidden flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {item.title}
                    </h2>
                    <p className="text-purple-400 font-medium text-sm">
                      {item.subtitle}
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-white self-start sm:self-auto">
                    {item.year}
                  </p>
                </div>

                <div className="max-w-md">
                  <p className="text-sm leading-relaxed text-white/80">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
