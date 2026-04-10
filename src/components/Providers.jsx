"use client";

import LenisProvider from "@/components/lenis";
import TargetCursor from "./cursorCube";

export default function Providers({ children }) {
  return (
    <LenisProvider>
      {/* <TargetCursor/> */}
      <div
        id="smooth-wrapper"
        style={{
          overflow: "auto",
          overflowX: "hidden",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          background: "#d4cfc9",
        }}
      >
        <div id="smooth-content">{children}</div>
      </div>
    </LenisProvider>
  );
}
