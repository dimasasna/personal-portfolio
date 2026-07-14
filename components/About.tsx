"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Eye, X, FileText } from "lucide-react";
import Image from "next/image";

interface AboutProps {
  dict: {
    sectionTitle: string;
    greeting: string;
    name: string;
    role: string;
    bio: string;
    downloadCv: string;
    previewCv: string;
  };
}

export default function About({ dict }: AboutProps) {
  const [isCvOpen, setIsCvOpen] = useState(false);

  // Mengunci scroll layar utama saat preview CV terbuka
  useEffect(() => {
    if (isCvOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCvOpen]);

  return (
    <section id="about" className="scroll-mt-14 py-8 md:py-12 ">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-5xl mx-auto px-6">
        {/* KOLOM KIRI: Image Container (stacks vertically on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm shrink-0"
        >
          {/* Aksen Background Solid */}
          <div className="absolute inset-0 bg-brand-amber/15 rounded-[32px] transform translate-x-4 translate-y-4 -rotate-3" />

          {/* Frame Foto Utama */}
          <div className="relative aspect-[4/5] bg-brand-card rounded-[32px] shadow-xl border border-brand-text/5 overflow-hidden z-10 transition-colors duration-300">
            <Image
              src="/images/about.webp"
              alt="Profil"
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* KOLOM KANAN: Text Container (stacks vertically on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 space-y-6"
        >
          {/* Sapaan dengan Aksen Solid Color */}
          <h2 className="flex flex-col items-start gap-2.5 md:gap-4 text-2xl md:text-4xl font-black text-brand-text uppercase w-full">
            {/* Baris 1: Sapaan & Nama */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2.5 w-full">
              <span>{dict.greeting}</span>
              <span className="bg-brand-blue text-white px-3 py-1.5 rounded-xl whitespace-normal md:whitespace-nowrap -rotate-1 shadow-sm inline-block">
                {dict.name}
              </span>
            </div>

            {/* Baris 2: Role */}
            <span className="bg-brand-mint text-brand-text px-3 py-1.5 rounded-xl whitespace-normal md:whitespace-nowrap rotate-1 shadow-sm inline-block">
              {dict.role}
            </span>
          </h2>

          {/* Bio Container */}
          <div className="border-l-4 border-brand-purple pl-4 md:pl-6 py-1.5 md:py-2 my-4 md:my-6">
            <p className="text-lg whitespace-pre-line text-brand-text/70 font-medium leading-relaxed">
              {dict.bio}
            </p>
          </div>

          {/* Tombol Container */}
          <div className="pt-2">
            {/* Button Download CV yang membuka preview */}
            <button
              onClick={() => setIsCvOpen(true)}
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 bg-brand-text text-brand-bg font-black rounded-full shadow-md hover:bg-brand-purple hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer text-sm md:text-base"
            >
              <Download className="w-5 h-5" /> {dict.downloadCv}
            </button>
          </div>
        </motion.div>
      </div>

      {/* CV Lightbox Modal */}
      <AnimatePresence>
        {isCvOpen && (
          <>
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCvOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[99999] cursor-pointer"
            />

            {/* Modal Content Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-4 md:inset-10 lg:inset-20 z-[100000] flex items-center justify-center pointer-events-none"
            >
              <div className="bg-brand-card w-full max-w-4xl max-h-full rounded-[32px] border border-brand-text/10 shadow-2xl overflow-hidden flex flex-col pointer-events-auto transition-colors duration-300">
                {/* Modal Header */}
                <div className="p-4 md:p-6 border-b border-brand-text/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-purple/10 rounded-xl flex items-center justify-center text-brand-purple">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-brand-text text-sm md:text-base leading-tight">
                        CV - {dict.name}
                      </h4>
                      <p className="text-[10px] md:text-xs text-brand-text/60 font-bold uppercase tracking-wider mt-0.5">
                        {dict.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <a
                      href="/CV-DimasAsnaNugraha.pdf"
                      download="CV-DimasAsnaNugraha.pdf"
                      className="w-10 h-10 bg-brand-text/5 hover:bg-brand-purple hover:text-white rounded-full flex items-center justify-center text-brand-text transition-colors mr-2 cursor-pointer"
                      title="Download PDF"
                    >
                      <Download className="w-5 h-5" />
                    </a>
                    <button
                      onClick={() => setIsCvOpen(false)}
                      className="w-10 h-10 bg-brand-text/5 hover:bg-brand-mint hover:text-white rounded-full flex items-center justify-center text-brand-text transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-4 flex-1 overflow-hidden bg-brand-text/[0.02] flex items-center justify-center">
                  <iframe
                    src="https://drive.google.com/file/d/1Ti_hifjscaKtjxPg2rJanYvDqhaKJhTS/preview"
                    className="w-full h-[60vh] md:h-[65vh] rounded-2xl border border-brand-text/10"
                    title="CV Preview"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
