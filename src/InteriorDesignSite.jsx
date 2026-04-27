/* =========================
   file: src/InteriorDesignSite.jsx
========================= */
import React from "react";
import Hero from "@/sections/Hero.jsx";
import Services from "@/sections/Services.jsx";
import Portfolio from "@/sections/Portfolio.jsx";
import About from "@/sections/About.jsx";
import Cta from "@/sections/Cta.jsx";
import Contact from "@/sections/Contact.jsx";
import Testimonial from "./sections/Testimonial.jsx";
import PageMeta from "@/lib/PageMeta.jsx";

export default function InteriorDesignSite() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-black selection:text-white">
      <PageMeta
        description="Jasa interior custom, kitchen set, furnitur, dan renovasi di Bogor & Jakarta. 50+ proyek selesai, konsultasi gratis, harga transparan mulai Rp 1,6 juta/m²."
      />
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

