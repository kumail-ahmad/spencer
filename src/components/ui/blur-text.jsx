import { motion } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";

const buildKeyframes = (from, steps) => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });

  return keyframes;
};

export const BlurText = ({
  text = "",
  delay = 2,
  className = "text-2xl font-semibold bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent",
  leading = "leading-4",
  tracking = "tracking-[0.4em]",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
  repeat = true,
  repeatDelay = 0,
  multiline = false,
}) => {
  const lines = useMemo(() => {
    if (!multiline) return [text];
    return String(text).split("\n");
  }, [text, multiline]);

  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(currentRef);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(currentRef);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction],
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      {
        filter: "blur(0px)",
        opacity: 1,
        y: 0,
      },
    ],
    [direction],
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = Array.isArray(animationTo) ? animationTo : defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);

  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount <= 1 ? 0 : i / (stepCount - 1),
  );

  return (
    <p
      ref={ref}
      className={`${className} ${leading} ${tracking}`}
      style={{
        display: "flex",
        flexDirection: multiline ? "column" : "row",
        alignItems: "center",
      }}
    >
      {lines.map((line, lineIndex) => {
        const parts = animateBy === "words" ? String(line).split(" ") : String(line).split("");
        return (
          <span key={lineIndex} className={multiline ? "block" : "inline"}>
            {parts.map((segment, partIndex) => {
              const globalIndex =
                lineIndex * 10000 + partIndex; // stable-ish ordering across lines
              const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

              const spanTransition = {
                duration: totalDuration,
                times,
                delay: inView ? (globalIndex * delay) / 1000 : 0,
                ease: easing,
                repeat:
                  repeat === true || repeat === "infinite"
                    ? Infinity
                    : typeof repeat === "number"
                      ? repeat
                      : 0,
                repeatDelay,
              };

              return (
                <span key={partIndex} className="inline">
                  <motion.span
                    className={`will-change-[transform,filter,opacity] ${
                      multiline ? "inline-block" : "inline-block"
                    }`}
                    initial={fromSnapshot}
                    animate={inView ? animateKeyframes : fromSnapshot}
                    transition={spanTransition}
                    onAnimationComplete={
                      lineIndex === lines.length - 1 &&
                      partIndex === parts.length - 1 &&
                      inView
                        ? onAnimationComplete
                        : undefined
                    }
                  >
                    {segment}
                  </motion.span>
                  {animateBy === "words" && partIndex !== parts.length - 1 ? " " : null}
                </span>
              );
            })}
          </span>
        );
      })}
    </p>
  );
};
