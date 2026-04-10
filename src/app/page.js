"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/sections/heroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectSection from "@/components/sections/ProjectSections";
import ExperienceSection from "@/components/sections/ExperienceSection";

import Footer from "@/components/sections/Footer";
import Loader from "@/components/Loader";
import { Skeleton } from "boneyard-js/react";
import TargetCursor from "@/components/cursorCube";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <Loader onComplete={() => setIsLoading(false)} />
      )}
      
      <TargetCursor variant="target " style={{ backgroundColor: "red" }}/>

      <div className="min-h-screen">
        <Skeleton name="hero" loading={isLoading}>
          <HeroSection /> 
        </Skeleton>
      </div>

      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectSection />
      <Footer />
    </>
  );
}
