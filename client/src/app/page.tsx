"use client"
import { useState } from "react";
import HeroSection from "@/app/(Components)/HeroSection";
import AboutMe from "@/app/(Components)/AboutMe";
import TechStack from "@/app/(Components)/TechStack";
import DarkModeToggle from "@/app/(Components)/DarkModeToggle";
import GitProjects from "./(Components)/GitProjects";
import Stats from "./(Components)/Stats";
import Chatbot from "./(Components)/ChatBot";
import Experience from "./(Components)/Experience";
import FooterSection from "./(Components)/FooterSection";
export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main className={darkMode ? "dark bg-[#1e293b] text-[#38bdf8]" : "bg-[#fef3c7] text-[#b45309]"}>
      
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Chatbot darkMode={darkMode} />
      <HeroSection darkMode={darkMode} />
      <AboutMe darkMode={darkMode} />
      <TechStack darkMode={darkMode} />
      <GitProjects darkMode={darkMode} />
      <Stats darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <FooterSection darkMode={darkMode} />
    </main>
  );
}
