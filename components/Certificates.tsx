"use client";

import { motion } from "framer-motion";

interface CertificatesProps {
  dict: {
    title: string;
    accent: string;
  };
}

// Data sementara (Ganti link Unsplash ini dengan link foto sertifikat asli Anda nanti)
const certificates = [
  { id: 1, alt: "Sertifikat 1", img: "https://images.unsplash.com/photo-1593344609121-66236bba7881?q=80&w=800&auto=format&fit=crop" },
  { id: 2, alt: "Sertifikat 2", img: "https://images.unsplash.com/photo-1589330694653-efa647530e38?q=80&w=800&auto=format&fit=crop" },
  { id: 3, alt: "Sertifikat 3", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop" },
  { id: 4, alt: "Sertifikat 4", img: "https://images.unsplash.com/photo-1523289297619-7564d67c5147?q=80&w=800&auto=format&fit=crop" },
  { id: 5, alt: "Sertifikat 5", img: "https://images.unsplash.com/photo-1558025137-0b4eaef2a65a?q=80&w=800&auto=format&fit=crop" },
  { id: 6, alt: "Sertifikat 6", img: "https://images.unsplash.com/photo-1557425955-df376b5903c8?q=80&w=800&auto=format&fit=crop" },
];

export default function Certificates({ dict }: CertificatesProps) {
  return (
    <section id="certificates" className="scroll-mt-14 py-8 md:py-12 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Badge Judul */}
        <div className="text-center mb-12 md:mb-16">
          
          <h3 className="text-4xl md:text-5xl font-black tracking-tight text-brand-text">
            {dict.title} <span className="text-brand-mint">{dict.accent}</span>.
          </h3>
        </div>

        {/* Grid Galeri Sertifikat 
          KUNCI EFEK: Class 'group' pada container ini akan mendeteksi jika salah satu anak di-hover.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 group">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Card Sertifikat
                - group-hover:opacity-60 : Meredupkan semua foto saat grid di-hover
                - hover:!opacity-100 : Mengembalikan opacity 100% HANYA pada foto yang sedang disorot
                - transform-gpu : Memastikan animasi scale ringan dan tidak lag
              */}
              <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden bg-brand-text/5 border border-brand-text/10 cursor-pointer transition-all duration-500 ease-out hover:scale-105 hover:z-10 hover:shadow-2xl hover:shadow-brand-purple/20 group-hover:opacity-50 hover:!opacity-100 transform-gpu">
                
                <img 
                  src={cert.img} 
                  alt={cert.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                />
                
                {/* Overlay transparan halus yang hilang saat di hover */}
                <div className="absolute inset-0 bg-brand-text/10 mix-blend-overlay transition-opacity duration-300 hover:opacity-0" />
                
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}