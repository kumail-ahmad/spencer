"use client";

import SkillCard from "@/components/ui/SkillCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
const cards = [
  {
    title: "DEVELOP",
    subtitle: "Full-Stack Engineering",
    description:
      "Started building websites with JavaScript and PHP, now I craft them with TypeScript, React, Express, Node and a little bit of magic!",
    href: "#",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "GSAP", "Three.js"],
  },
  {
    title: "DESIGN",
    subtitle: "UI / UX & Visual Design",
    description:
      "I started designing as my hobby, but like all good hobbies, it slowly crept into my career—now it won't leave me alone!",
    href: "#",
    skills: ["Figma",  "After Effects", "Spline", "Interaction Design", "Prototyping", "Branding","UI/UX Design","Framer"],
  },
];

import { useState } from "react";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

gsap.registerPlugin(ScrollTrigger);
export default function SkillsSection() {
  const whatRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: whatRef.current,
        scroller: "#smooth-wrapper",
        start: "top top",
        scrub: true,
        markers: false,
      },
    });

    tl.to(
      whatRef.current,
      {
        y: -120,
      },
      "a",
    );
  });
  return (
    <section className="w-full py-24 px-4 md:px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="md:w-1/2 w-full">
          <h1
            ref={whatRef}
            className={`${bebas.className} text-white text-7xl md:text-7xl lg:ml-36 md:ml-3 ml-5 font-black leading-[.9] tracking-wide uppercase text-left `}
          >
            WHAT <br />
            <span className="text-[#a855f7]">I DO</span>
          </h1>
        </div>

        <div 
          className="md:w-1/2 w-full flex flex-col gap-6 h-[580px]"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {cards.map((card, index) => (
            <SkillCard 
              key={card.title} 
              {...card} 
              isExpanded={activeIndex === index}
              onToggle={() => setActiveIndex(activeIndex === index ? null : index)}
              onHover={() => setActiveIndex(index)}
              onLeave={() => setActiveIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
