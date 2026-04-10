"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { Card } from "../ui/card";
import { ArrowUpRight } from "lucide-react";

const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "Hoppr",
    category: "Mapping and Location ",
    tools: ["Blender", "Substance Painter", "Low poly modeling"],
    image: "/imgPro/hoppr.png",
    layout: "text-top",
    url: "https://hoppr.vercel.app/",
  },
  {
    number: "02",
    title: "PalmLink",
    category: "Web design and development",
    tools: ["Javascript", "Scrollmagic", "PHP", "Blog admin"],
    image: "/imgPro/palmlink.png",
    layout: "image-top",
    url: "https://my-link-ruddy.vercel.app/",
  },
  {
    number: "03",
    title: "Ipresence",
    category: "Web design and development",
    tools: ["React", "Typescript", "Express", "Node", "Zustand", "Chakra UI"],
    image: "/imgPro/presence.png",
    layout: "text-top",
    url: "https://attendance-two-amber.vercel.app/",
  },
  {
    number: "04",
    title: "PassOP",
    category: "Web project",
    tools: ["PHP", "Javascript", "CSS", "CMS/Admin"],
    image: "/imgPro/passop.png",
    layout: "image-top",
    url: "https://pass-op-tau.vercel.app/",
  },
];

const ProjectSections = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    if (!section || !wrapper) return;

    const totalScroll = Math.max(0, section.scrollWidth - window.innerWidth);

    if (totalScroll > 0) {
      const scrollSpeedMultiplier = 4.5;
      wrapper.style.height = `${totalScroll * scrollSpeedMultiplier + window.innerHeight}px`;

      gsap.to(section, {
        x: -totalScroll,
        ease: "none",
        force3d: true,
        scrollTrigger: {
          trigger: wrapper,
          scroller: "#smooth-wrapper",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          markers: false,
        },
      });
    }
  }, []);

  return (
    <div ref={wrapperRef} className="relative bg-[#0a0a0a]">
      <section
        id="work"
        className="projects-section sticky -top-8 h-screen bg-[#0a0a0a] overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-100 bg-purple-600/15 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="h-screen flex flex-col pt-4 relative overflow-hidden">
          <div className="px-20 mb-6">
            <h1
              className={`${bebas.className} w-full text-white text-7xl md:text-7xl lg:ml-28 md:ml-3  mb-8 font-black leading-[.9] tracking-wide uppercase text-left `}
            >
              My <br />
              <span className="text-[#a855f7]">Work</span>
            </h1>
          </div>

          <div
            ref={sectionRef}
            className="flex flex-row h-[75vh] w-max items-stretch gap-0 border-y border-white/10"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[400px] md:w-[380px] ml-3  flex items-center justify-center border-r bg-transparent border-white/10"
              >
                <div className="flex flex-col w-[85%] h-full justify-center space-y-4">
                  {project.layout === "image-top" && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-[85%] h-32 mx-auto aspect-[16/9] block group overflow-hidden mb-2 rounded-md"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <ArrowUpRight className="text-white w-5 h-5" />
                      </div>
                    </a>
                  )}

                  <div className="flex justify-between items-start w-full">
                    <h2 className="text-4xl md:text-4xl mt-4 font-black text-white tracking-tight">
                      {project.number}
                    </h2>
                    <div className="text-right">
                      <h3 className="text-xl md:text-xl mt-5 font-medium text-white tracking-wide">
                        {project.title}
                      </h3>
                      <p className="text-white/50 text-xs md:text-sm mt-1 font-light tracking-wide">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <h4 className="text-base md:text-lg font-medium text-white tracking-wide">
                      Tools and features
                    </h4>
                    <p className="text-zinc-400 text-sm md:text-sm font-light leading-relaxed">
                      {project.tools.join(", ")}
                    </p>
                  </div>

                  {project.layout === "text-top" && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-[85%] h-32 mx-auto aspect-[16/9] block group overflow-hidden mt-6 rounded-md"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-4 right-4 bg-black/10 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <ArrowUpRight className="text-black w-5 h-5" />
                      </div>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectSections;
