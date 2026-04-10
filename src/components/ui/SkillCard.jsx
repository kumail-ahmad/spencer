"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

// Corner bracket SVG decorations
function CornerBracket({ position }) {
  const isTop = position.includes("top");
  const isLeft = position.includes("left");

  return (
    <div className={`absolute w-5 h-5 ${position}`} style={{ lineHeight: 0 }}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: `
            scaleX(${isLeft ? 1 : -1})
            scaleY(${isTop ? 1 : -1})
          `,
        }}
      >
        {/* Vertical arm */}
        <line x1="2" y1="2" x2="2" y2="14" stroke="white" strokeWidth="1.5" />
        {/* Horizontal arm */}
        <line x1="2" y1="2" x2="14" y2="2" stroke="white" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export default function SkillCard({
  title = "DEVELOP",
  subtitle = "Description",
  description = "Started building websites with JavaScript and PHP, now I craft them with TypeScript, React, Express, Node, … and a little bit of magic!",
  href = "#",
  skills = [],
  isExpanded,
  onToggle,
  onHover,
  onLeave,
}) {
  const handleToggle = (e) => {
    // Stop propagation to avoid double toggling if we add click to the whole card later
    e.stopPropagation();
    e.preventDefault();
    onToggle?.();
  };

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`relative w-full max-w-md mx-auto group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden ${
        isExpanded ? "flex-[3]" : "flex-1"
      }`}
    >
      {/* Corner brackets */}
      <CornerBracket position="top-0 left-0" />
      <CornerBracket position="top-0 right-0" />
      <CornerBracket position="bottom-0 left-0" />
      <CornerBracket position="bottom-0 right-0" />

      {/* Card body */}
      <div
        className="
          relative mx-4 px-5
          h-full
          py-5
        "
        style={{
          background: "rgba(15, 15, 15, 0.6)",
          borderLeft: "1px dashed rgba(255,255,255,0.25)",
          borderRight: "1px dashed rgba(255,255,255,0.25)",
        }}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="overflow-hidden">
            {/* Title */}
            <h2
              className={`text-4xl text-white mb-1 tracking-wide ${bebas.className}`}
              style={{ letterSpacing: "0.04em" }}
            >
              {title}
            </h2>

            {/* Subtitle */}
            <p className="text-sm text-zinc-400 mb-4 font-light tracking-wide">
              {subtitle}
            </p>

            {/* Description - Always visible as requested */}
            <p className="text-sm text-zinc-300 leading-relaxed mb-3 pr-10">
              {description}
            </p>

            <div
              className={`
                overflow-hidden
                transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${isExpanded ? "h-auto opacity-100 mt-4" : "h-0 opacity-0"}
              `}
            >
              <p className="text-xs text-zinc-500 mb-3">Skillset & tools</p>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3 py-1 text-xs
                      border border-zinc-600
                      rounded-full
                      text-white
                      bg-white/5
                      transition-all duration-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Chevron button — bottom right */}
          <div className="flex justify-end mt-4">
            <div
              onClick={handleToggle}
              className={`
                flex items-center justify-center w-9 h-9
                border border-zinc-500
                transition-all duration-300
                ${isExpanded ? "bg-[#d2ff00] border-[#d2ff00] text-black" : "text-white hover:bg-white hover:text-black"}
              `}
            >
              <ChevronDown
                size={16}
                className={`
                  transition-all duration-700
                  ${isExpanded ? "rotate-180 translate-y-0" : "rotate-0"}
                `}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
