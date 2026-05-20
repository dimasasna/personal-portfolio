"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

interface ContactProps {
  dict: {
    title: string;
    accent: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
  };
}

export default function Contact({ dict }: ContactProps) {
  return (
    <section id="contact" className="scroll-mt-28 py-16 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Kolom Kiri: Teks & Info Kontak */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-8"
          >
            <div>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-brand-text mb-4">
                {dict.title} <span className="text-brand-purple">{dict.accent}</span>.
              </h3>
              <p className="text-lg text-brand-text/70 font-medium leading-relaxed">
                {dict.subtitle}
              </p>
            </div>

            {/* Kartu Info Kontak */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 border border-brand-blue/20">
                  <Mail className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-text/60 uppercase tracking-wide">Email</p>
                  <a href="mailto:contact@danovadigital.id" className="text-lg font-black text-brand-text hover:text-brand-purple transition-colors">
                    deftvalian2411@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center shrink-0 border border-brand-pink/20">
                  <MapPin className="w-5 h-5 text-brand-pink" />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-text/60 uppercase tracking-wide">Lokasi</p>
                  <p className="text-lg font-black text-brand-text">
                    Bekasi, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Kolom Kanan: Formulir Kontak (Sudah Berfungsi!) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <div className="bg-white border border-brand-text/10 rounded-[32px] p-8 md:p-10 shadow-lg">
              
              {/* PERUBAHAN DISINI: Tambahkan action dan method POST */}
              {/* Ganti URL_FORMSPREE_ANDA dengan link dari Formspree */}
              <form action="https://formspree.io/f/xojbeear" method="POST" className="space-y-6">
                
                {/* Input Nama */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-brand-text/80 pl-2">
                    {dict.name}
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" // <--- WAJIB ADA
                    placeholder={dict.namePlaceholder}
                    className="w-full px-5 py-4 bg-brand-text/[0.03] border border-brand-text/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all font-medium text-brand-text placeholder:text-brand-text/30"
                    required
                  />
                </div>

                {/* Input Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-brand-text/80 pl-2">
                    {dict.email}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" // <--- WAJIB ADA
                    placeholder={dict.emailPlaceholder}
                    className="w-full px-5 py-4 bg-brand-text/[0.03] border border-brand-text/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all font-medium text-brand-text placeholder:text-brand-text/30"
                    required
                  />
                </div>

                {/* Input Pesan */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-brand-text/80 pl-2">
                    {dict.message}
                  </label>
                  <textarea 
                    id="message" 
                    name="message" // <--- WAJIB ADA
                    rows={4}
                    placeholder={dict.messagePlaceholder}
                    className="w-full px-5 py-4 bg-brand-text/[0.03] border border-brand-text/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all font-medium text-brand-text placeholder:text-brand-text/30 resize-none"
                    required
                  ></textarea>
                </div>

                {/* Tombol Kirim */}
                <button 
                  type="submit"
                  className="w-full inline-flex justify-center items-center gap-2 px-8 py-4 bg-brand-text text-white font-black rounded-2xl shadow-md hover:bg-brand-purple hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <Send className="w-5 h-5" /> {dict.send}
                </button>

              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}