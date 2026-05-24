"use client"; // Tambahkan use client

import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectDrawer from "@/components/ProjectDrawer";

interface ProjectsProps {
  dict: any;
  projects: any[];
}

export default function Projects({ dict, projects }: ProjectsProps) {
  // State untuk melacak proyek mana yang sedang dipilih (null = laci tertutup)
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <section id="projects" className="scroll-mt-28 relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-3 text-brand-text">
            {dict.title} <span className="text-brand-amber">{dict.accent}</span>.
          </h2>
          <p className="text-brand-text/60 font-medium max-w-md mx-auto text-lg">
            {dict.subtitle}
          </p>
        </div>

        {/* Grid Daftar Proyek */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.slug} 
              onClick={() => setSelectedProject(project)} // Buka laci saat diklik
              className="cursor-pointer" // Ubah kursor jadi tangan
            >
              {/* Kita hapus fungsi klik bawaan link di ProjectCard (jika ada) di langkah 4 */}
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
        
      </div>

      {/* Komponen Laci (Drawer) */}
      <ProjectDrawer 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
        dict={dict.drawer} 
      />
    </section>
  );
}