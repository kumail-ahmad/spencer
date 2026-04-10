"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const socials = [
    { name: "Github", url: "https://github.com/kumail-ahmad" },
    { name: "Linkedin", url: "https://linkedin.com/in/kumail-ahmad-a3035b15b" },
    { name: "Twitter", url: "https://x.com/mainlykumail" },
    { name: "Instagram", url: "https://instagram.com/mainly.kumail" },
  ];
  return (
    <footer id="contact" className="bg-[#0a0a0a] text-white py-24 px-10 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto ">
        <div className="relative mb-24 inline-block ">
          {/* Glowing Purple Ball */}
          {/* <div className="absolute -top-3 left-13 -translate-x-1/2 w-42 h-12 bg-[#e9d5ff] rounded-full shadow-[0_0_60px_20px_rgba(168,85,247,0.5)]" /> */}
          <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold tracking-tighter uppercase leading-[0.8] text-white relative z-10">
            Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* Column 1: Email & Location */}
          <div className="space-y-3">
            <div className="flex flex-col">
              <p className="text-zinc-500 text-sm font-semibold uppercase tracking-widest mb-4">
                Email
              </p>
              <a
                href="mailto:kum018405@iust.ac.in"
                className="text-xl font-medium hover:text-purple-400 transition-colors duration-300"
              >
                connect@kumail.dev
              </a>
            </div>

            <div className="flex flex-col">
              <p className="text-zinc-500 text-sm font-semibold uppercase tracking-widest mb-4">
                Location
              </p>
              <p className="text-xl font-medium">Srinagar,Kashmir</p>
            </div>
          </div>

          {/* Column 2: Socials */}
          <div className="flex flex-col z-50">
            <p className="text-zinc-500 text-sm font-semibold uppercase tracking-widest mb-2">
              Social
            </p>
            <div className="flex flex-col ">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-2 border-b border-zinc-800 hover:border-purple-400 transition-all duration-300 max-w-[150px]"
                >
                  <span className="text-xl font-medium tracking-tight group-hover:text-purple-400 transition-colors flex flex-row">
                    {social.name}
                    <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-purple-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ml-3" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Credits & Year */}
          <div className="flex flex-col justify-between items-start md:items-end space-y-16 md:space-y-0">
            <div className="md:text-right">
              <p className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight text-zinc-100">
                Designed and Developed <br className="hidden md:block" />
                by <span className="text-[#a855f7]">Kumail Ahmad</span>
              </p>
              <p className="text-3xl text-zinc-600 font-medium">© 2025</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
