"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Briefcase, Globe } from "lucide-react";
import { Locale } from "@/lib/dictionary";

interface NavbarProps {
  locale: Locale;
}

export default function Navbar({ locale }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "-10% 0px -40% 0px", 
      threshold: 0.1,
    });

    const sections = ["about", "projects"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Fungsi navigasi bahasa pintar: Mempertahankan tanda pagar (#anchor) saat ganti URL bahasa
  const handleLanguageToggle = () => {
    const nextLocale = locale === "id" ? "en" : "id";
    const currentHash = window.location.hash;
    window.location.href = `/${nextLocale}${currentHash}`;
  };

  // Label menu dilokalisasi manual secara ringan di tingkat komponen
  const menuItems = [
    { id: "about", name: locale === "id" ? "Tentang" : "About", path: "#about", icon: User, color: "bg-brand-blue" },
    { id: "projects", name: locale === "id" ? "Proyek" : "Projects", path: "#projects", icon: Briefcase, color: "bg-brand-purple" },
  ];

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-2 bg-white/80 backdrop-blur-md border-2 border-brand-text/10 px-4 py-2 rounded-full shadow-lg">
        {/* Logo */}
        <a href="#about" onClick={() => setActiveSection("about")} className="font-black text-xl tracking-tighter px-2 text-brand-text hover:scale-105 transition-transform">
          DV<span className="text-brand-pink">.</span>
        </a>

        <div className="h-6 w-[1px] bg-brand-text/10 mx-1" />

        {/* Menu Navigasi */}
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;

          return (
            <a key={item.id} href={item.path} onClick={() => setActiveSection(item.id)} className="relative px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-colors text-brand-text">
              {isActive && (
                <motion.span layoutId="activeNav" className={`absolute inset-0 rounded-full ${item.color} -z-10`} transition={{ type: "spring", stiffness: 380, damping: 30 }} />
              )}
              <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-brand-text"}`} />
              <span className={isActive ? "text-white" : "hover:text-brand-purple transition-colors"}>
                {item.name}
              </span>
            </a>
          );
        })}

        <div className="h-6 w-[1px] bg-brand-text/10 mx-1" />

        {/* TOMBOL UNGGULAN: Language Switcher Toggle */}
        <button 
          onClick={handleLanguageToggle}
          className="flex items-center gap-1.5 px-3 py-1.5 border border-brand-text/10 rounded-full text-xs font-black bg-brand-text/5 hover:bg-brand-text/10 text-brand-text transition-all active:scale-95"
          title={locale === "id" ? "Ubah ke Bahasa Inggris" : "Switch to Indonesian"}
        >
          <Globe className="w-3.5 h-3.5 text-brand-text/70" />
          <span>{locale.toUpperCase()}</span>
        </button>
      </nav>
    </header>
  );
}