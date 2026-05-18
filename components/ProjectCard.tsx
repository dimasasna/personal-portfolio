"use client";

import { motion } from "framer-motion";
import { Globe, Code, Image as ImageIcon } from "lucide-react";
import Image from "next/image"; // Import komponen Image bawaan Next.js

interface ProjectCardProps {
  project: {
    slug: string;
    meta: {
      title?: string;
      description?: string;
      tech?: string[];
      color?: string;
      liveUrl?: string;
      githubUrl?: string;
      image?: string; // Tambahkan tipe data image di sini
    };
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white border-2 border-brand-text/10 rounded-2xl shadow-md overflow-hidden flex flex-col justify-between"
    >
      {/* Dekorasi Garis Atas Colorful */}
      <div className={`absolute top-0 inset-x-0 h-2 bg-gradient-to-r ${project.meta.color || 'from-brand-blue to-brand-mint'} z-10`} />

      <div>
        {/* Tempat Gambar Thumbnail */}
        <div className="relative w-full aspect-video bg-brand-text/5 overflow-hidden border-b border-brand-text/5">
          {project.meta.image ? (
            <Image
              src={project.meta.image}
              alt={project.meta.title || "Project Thumbnail"}
              fill
              sizes="(max-w-768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              priority={index < 2} // Optimasi loading gambar teratas
            />
          ) : (
            // Placeholder jika proyek belum punya gambar
            <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-text/30 gap-2">
              <ImageIcon className="w-8 h-8" />
              <span className="text-xs font-bold">No Preview Available</span>
            </div>
          )}
        </div>

        {/* Konten Teks Kartu */}
        <div className="p-6">
          <h2 className="text-2xl font-black tracking-tight text-brand-text">
            {project.meta.title}
          </h2>
          <p className="text-brand-text/70 text-sm mt-2 font-medium line-clamp-2">
            {project.meta.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.meta.tech?.map((t: string) => (
              <span key={t} className="px-3 py-1 bg-brand-text/5 rounded-full text-xs font-bold text-brand-text/80">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tombol Akses Langsung */}
      <div className="mx-6 mb-6 pt-4 border-t border-brand-text/5 flex items-center gap-3">
        {project.meta.liveUrl && (
          <a 
            href={project.meta.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-brand-purple hover:bg-brand-purple/90 text-white text-sm font-black rounded-xl shadow-sm transition-colors"
          >
            <Globe className="w-4 h-4" /> Live Demo
          </a>
        )}
        
        {project.meta.githubUrl && (
          <a 
            href={project.meta.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2 border-2 border-brand-text/10 hover:border-brand-text/20 text-brand-text rounded-xl transition-colors"
            title="Lihat Source Code"
          >
            <Code className="w-5 h-5" />
          </a>
        )}
      </div>
    </motion.div>
  );
}