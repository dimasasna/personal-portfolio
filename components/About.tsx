"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

interface AboutProps {
  dict: {
    sectionTitle: string;
    greeting: string;
    name: string;
    role: string;
    bio: string;
    downloadCv: string;
  };
}

export default function About({ dict }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-14 py-8 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-5xl mx-auto px-6">
        
        {/* KOLOM KIRI: Foto Bersih & Elegan (Tanpa Blur/Glow Berat) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-xs md:max-w-sm shrink-0"
        >
          {/* Aksen Background Solid yang Lembut (Sangat ringan diproses) */}
          <div className="absolute inset-0 bg-brand-pink/15 rounded-[32px] transform translate-x-4 translate-y-4 -rotate-3" />
          
          {/* Frame Foto Utama */}
          <div className="relative aspect-[4/5] bg-white rounded-[32px] shadow-xl border border-brand-text/5 overflow-hidden z-10">
            <img 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" 
              alt="Profil" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </motion.div>

        {/* KOLOM KANAN: Teks Rapi, Solid, & Profesional */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 space-y-6"
        >
          {/* Badge Judul Simple */}
          <div className="inline-block bg-brand-text/5 text-brand-text/60 px-5 py-1.5 rounded-full border border-brand-text/10">
            <h2 className="text-sm font-bold tracking-widest">{dict.sectionTitle}</h2>
          </div>

          {/* Sapaan dengan Aksen Solid Color (Tidak norak) */}
          <h3 className="text-3xl md:text-4xl font-black leading-snug text-brand-text uppercase">
            {dict.greeting}{" "}
            {/* Pil Nama: Solid Biru */}
            <span className="bg-brand-blue text-white px-3 py-1 rounded-xl whitespace-nowrap inline-block -rotate-1 shadow-sm">
              {dict.name}
            </span>, <br className="hidden md:block" />
            
            {/* Pil Role: Solid Mint */}
            <span className="bg-brand-mint text-brand-text px-3 py-1 mt-3 inline-block rounded-xl whitespace-nowrap rotate-1 shadow-sm">
              {dict.role}
            </span>
          </h3>

          {/* Bio Rapi dengan Garis Samping Solid */}
          <div className="border-l-4 border-brand-purple pl-6 py-2 my-6">
            <p className="text-lg text-brand-text/70 font-medium leading-relaxed">
              {dict.bio}
            </p>
          </div>

          {/* Tombol Clean & Modern */}
          <div className="pt-2">
            <a 
              href="/cv.pdf" 
              download
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-text text-white font-black rounded-full shadow-md hover:bg-brand-purple hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Download className="w-5 h-5" /> {dict.downloadCv}
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}