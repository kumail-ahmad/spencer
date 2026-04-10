import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLenis } from "./lenis";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const lenis = useLenis();
  const lenisRef = useRef(lenis);
  
  const loaderRef = useRef(null);
  const marqueeRef1 = useRef(null);
  const marqueeRef2 = useRef(null);
  const pillRef = useRef(null);
  const glowRef = useRef(null);
  const loadingContentRef = useRef(null);
  const welcomeContentRef = useRef(null);
  const countRef = { val: 0 };

  useEffect(() => {
    lenisRef.current = lenis;
    if (lenis) {
      lenis.stop();
    }
  }, [lenis]);

  useEffect(() => {
    // Progress counter animation
    gsap.to(countRef, {
      val: 100,
      duration: 3,
      ease: "power1.inOut",
      onUpdate: () => {
        setProgress(Math.floor(countRef.val));
      },
      onComplete: () => {
        // Swap LOADING to WELCOME
        gsap.to(loadingContentRef.current, {
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
             // Hide loading div completely so welcome is centered
             if(loadingContentRef.current) loadingContentRef.current.style.display = 'none';
             if(welcomeContentRef.current) {
               welcomeContentRef.current.style.display = 'flex';
               gsap.to(welcomeContentRef.current, { opacity: 1, duration: 0.4 });
             }
          }
        });

        // Trigger massive white glow transition
        gsap.to(glowRef.current, {
          scale: 40,
          opacity: 1,
          duration: 1.2,
          ease: "power2.inOut",
          delay: 0.8,
          onComplete: () => {
            // Fade out the entire loader safely
            gsap.to(loaderRef.current, {
              opacity: 0,
              duration: 0.6,
              onComplete: () => {
                if (lenisRef.current) lenisRef.current.start();
                if (onComplete) onComplete();
              }
            });
          }
        });
      },
    });

    // Marquee animation
    gsap.to(marqueeRef1.current, {
      xPercent: -100,
      repeat: -1,
      duration: 15,
      ease: "linear",
    });

    gsap.to(marqueeRef2.current, {
      xPercent: -100,
      repeat: -1,
      duration: 15,
      ease: "linear",
    });

    // Pill entrance animation
    gsap.fromTo(
      pillRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" }
    );

    // Lock body scroll (backup for non-lenis environments)
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
      if (lenisRef.current) lenisRef.current.start();
    };
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed top-0 left-0 w-full h-screen sm:h-[100dvh] z-[9999] bg-[#f2eff4] overflow-hidden font-sans"
    >
      {/* Top Left Text */}
      <div className="absolute top-8 left-8 text-black font-bold text-lg tracking-tight z-10">
        mainly.kumail
      </div>

      {/* Top Right Animated Bars */}
      <div className="absolute top-8 right-8 flex items-center space-x-1 z-10">
        <div className="w-[3px] h-4 bg-black animate-pulse"></div>
        <div className="w-[3px] h-6 bg-purple-500 animate-pulse delay-75"></div>
        <div className="w-[3px] h-3 bg-black animate-pulse delay-150"></div>
        <div className="w-[3px] h-5 bg-black animate-pulse delay-200"></div>
      </div>

      {/* Gigantic Marquee Text */}
      <div className="absolute top-1/2 left-0 overflow-hidden w-full -translate-y-1/2 flex whitespace-nowrap opacity-[0.9] pointer-events-none z-0">
        <div ref={marqueeRef1} className="flex flex-shrink-0 items-center pr-8 md:pr-16">
          <span className="text-[14vw] md:text-[9vw] font-black tracking-tighter text-[#1a1a1a]/90 uppercase leading-none" style={{ fontFamily: "Arial, sans-serif" }}>
            CREATIVE DEVELOPER CREATIVE DESIGNER • 
          </span>
        </div>
        <div ref={marqueeRef2} className="flex flex-shrink-0 items-center pr-8 md:pr-16">
          <span className="text-[14vw] md:text-[9vw] font-black tracking-tighter text-[#1a1a1a]/90 uppercase leading-none" style={{ fontFamily: "Arial, sans-serif" }}>
            CREATIVE DEVELOPER CREATIVE DESIGNER • 
          </span>
        </div>
      </div>

      {/* Center Pill */}
      <div
        ref={pillRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center bg-gradient-to-r from-[#2f1b4c] via-black to-black px-6 py-3 rounded-full shadow-[0_0_40px_rgba(0,0,0,0.15)] border border-[#ffffff0f] w-[220px] md:w-[240px] h-[80px]"
      >
        {/* Loading Content */}
        <div ref={loadingContentRef} className="flex w-full items-center justify-center gap-4 md:gap-8">
          <span className="text-white font-semibold text-xl tracking-widest">
            LOADING
          </span>
          <div className="flex items-center space-x-1.5">
            <span className="text-gray-400 font-mono text-base">{progress}%</span>
            <div className="w-3 h-3 bg-gray-500/30 overflow-hidden relative">
              <div 
                className="absolute bottom-0 left-0 w-full bg-white transition-all duration-100 ease-linear"
                style={{ height: `${progress}%` }}
              />
            </div>
          </div>
        </div>
        
        {/* Welcome Content */}
        <div ref={welcomeContentRef} className="items-center justify-center space-x-3 hidden opacity-0 w-full">
          <div className="w-2 h-3 bg-white"></div>
          <span className="text-white font-bold text-xl tracking-[0.15em] uppercase">
            WELCOME
          </span>
        </div>
      </div>

      {/* Massive White Glow for Transition */}
      <div 
        ref={glowRef} 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[10vw] h-[10vw] bg-white rounded-full opacity-0 pointer-events-none z-[50]" 
        style={{ filter: "blur(60px)" }}
      ></div>
    </div>
  );
};

export default Loader;
