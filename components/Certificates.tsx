"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Eye, X, Calendar } from "lucide-react";

interface CertificatesProps {
  dict: {
    title: string;
    accent: string;
  };
}

const certificates = [
  {
    id: 1,
    title: "Software Quality Assurance",
    issuer: "MySkill",
    date: "2026",
    img: "images/certificate/sqa.webp",
    alt: "Sertifikat Software Quality Assurance MySkill"
  },
  {
    id: 2,
    title: "CI/CD for Automation",
    issuer: "MySkill",
    date: "2024",
    img: "images/certificate/cicd.webp",
    alt: "Sertifikat CI/CD for Automation MySkill"
  },
  {
    id: 3,
    title: "Algoritma & Pemrograman",
    issuer: "Codepolitan",
    date: "2025",
    img: "images/certificate/algoritma.webp",
    alt: "Sertifikat Algoritma dan Pemrograman Codepolitan"
  },
  {
    id: 4,
    title: "Database Testing",
    issuer: "MySkill",
    date: "2026",
    img: "images/certificate/database.webp",
    alt: "Sertifikat Database Testing MySkill"
  },
  {
    id: 5,
    title: "JavaScript Programming",
    issuer: "Codepolitan",
    date: "2025",
    img: "images/certificate/javascript.webp",
    alt: "Sertifikat JavaScript Codepolitan"
  },
  {
    id: 6,
    title: "Mobile Test Automation",
    issuer: "MySkill",
    date: "2026",
    img: "images/certificate/mobile-automation.webp",
    alt: "Sertifikat Mobile Test Automation MySkill"
  },
];

export default function Certificates({ dict }: CertificatesProps) {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  // Mengunci scroll layar utama saat lightbox terbuka
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  return (
    <section id="certificates" className="scroll-mt-14 py-8 md:py-12 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Badge Judul */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-brand-text">
            {dict.title} <span className="text-brand-mint">{dict.accent}</span>.
          </h2>
        </div>

        {/* Grid Galeri Sertifikat */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              className="bg-brand-card border border-brand-text/10 rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-brand-mint/5 hover:-translate-y-2 hover:border-brand-mint/30 transition-all duration-300 flex flex-col h-full group cursor-pointer transform-gpu"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-text/5 border-b border-brand-text/5">
                <img
                  src={cert.img}
                  alt={cert.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover overlay with interactive zoom icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/95 text-brand-text rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-5 h-5 text-brand-mint" />
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider px-2.5 py-1 bg-brand-mint/10 text-brand-mint rounded-lg border border-brand-mint/10">
                    <Award className="w-3 h-3" /> {cert.issuer}
                  </span>

                  <span className="flex items-center gap-1 text-xs font-bold text-brand-text/40">
                    <Calendar className="w-3.5 h-3.5" /> {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-black text-brand-text leading-snug group-hover:text-brand-mint transition-colors duration-300">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/85 z-[100] cursor-zoom-out"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed inset-x-4 inset-y-8 md:inset-x-12 md:inset-y-12 lg:inset-x-24 z-[101] flex flex-col items-center justify-center pointer-events-none"
            >
              <div className="relative max-w-4xl w-full bg-brand-card border border-brand-text/10 rounded-[32px] overflow-hidden shadow-2xl pointer-events-auto flex flex-col max-h-[85vh]">

                {/* Modal Header */}
                <div className="px-6 py-4 md:px-8 border-b border-brand-text/5 flex items-center justify-between bg-brand-card/80 backdrop-blur-md">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-brand-mint bg-brand-mint/10 px-2.5 py-1 rounded-md">
                      {selectedCert.issuer}
                    </span>
                    <h4 className="text-lg md:text-xl font-black text-brand-text mt-1">
                      {selectedCert.title}
                    </h4>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="w-10 h-10 bg-brand-text/5 hover:bg-brand-mint hover:text-white rounded-full flex items-center justify-center text-brand-text transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-4 md:p-6 flex-1 overflow-y-auto flex items-center justify-center bg-brand-text/[0.02]">
                  <img
                    src={selectedCert.img}
                    alt={selectedCert.alt}
                    className="max-h-[55vh] md:max-h-[60vh] object-contain rounded-xl shadow-md border border-brand-text/5"
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