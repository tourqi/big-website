/* =========================
   file: src/InteriorDesignSite.jsx
========================= */
import React from "react";
import Navbar from "@/components/Navbar.jsx";
import Hero from "@/sections/Hero.jsx";
import Services from "@/sections/Services.jsx";
import Portfolio from "@/sections/Portfolio.jsx";
import About from "@/sections/About.jsx";
import Cta from "@/sections/Cta.jsx";
import Contact from "@/sections/Contact.jsx";
import Testimonial from "./sections/Testimonial.jsx";
import Footer from "@/components/Footer.jsx";

export default function InteriorDesignSite() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Testimonial />
        <Cta />
        <Contact />
      </main>
    </div>
  );
}

