"use client";

import { useEffect, useState, createContext, useContext } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LenisContext = createContext(null);

export const useLenis = () => useContext(LenisContext);

export default function LenisProvider({ children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    let lenisInst = null;
    let retryTimeout = null;
    let rafId = null;

    const initLenis = () => {
      const wrapper = document.querySelector("#smooth-wrapper");
      const content = document.querySelector("#smooth-content");

      if (!wrapper || !content) {
        retryTimeout = setTimeout(initLenis, 50);
        return;
      }

      lenisInst = new Lenis({
        wrapper,
        content,
        duration: 1.1,
        smoothWheel: true,
        smoothTouch: false,   // native touch scroll — no lerp interpolation on mobile
        lerp: 0.1,
        wheelMultiplier: 1,
        touchMultiplier: 1,
      });

      setLenis(lenisInst);

      function raf(time) {
        lenisInst.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

      lenisInst.on("scroll", ScrollTrigger.update);

      // Proxy the wrapper (the actual scroll container). Lenis uses wrapper.scrollTop.
      ScrollTrigger.scrollerProxy(wrapper, {
        scrollTop(value) {
          if (arguments.length) {
            lenisInst.scrollTo(value, { immediate: true });
          } else {
            return lenisInst.scroll;
          }
        },
        getBoundingClientRect() {
          return wrapper.getBoundingClientRect();
        },
        // "transform" pinning stays in document flow and uses translateY — more
        // stable than "fixed" inside a position:fixed scroll wrapper on mobile.
        pinType: "transform",
      });

      ScrollTrigger.refresh();
    };

    requestAnimationFrame(initLenis);

    return () => {
      if (retryTimeout) clearTimeout(retryTimeout);
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisInst) lenisInst.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}
