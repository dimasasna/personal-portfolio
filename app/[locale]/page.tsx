import Hero from "@/components/Hero"; 
import About from "@/components/About"; // Import Komponen Baru
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import { getAllProjects } from "@/lib/mdx";
import ProjectCard from "@/components/ProjectCard";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({ params }: { params: any }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "id";
  
  const dict = (await getDictionary(locale)) as any;
  const projects = getAllProjects(locale);

  return (
    <div className="space-y-28 pb-20">
      {/* 1. Hero / Home Section */}
      {dict?.hero && <Hero dict={dict.hero} />}

      {/* 2. About Me Section Baru */}
      {dict?.about && <About dict={dict.about} />}

      {dict?.skills && <Skills dict={dict.skills} />}

      {/* Section Galeri Sertifikat */}
      {dict?.certificates && <Certificates dict={dict.certificates} />}

      {dict?.experience && <Experience dict={dict.experience} />}

      

      {/* 3. Section Daftar Proyek */}
      <section id="projects" className="scroll-mt-28">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-3 text-brand-text">
            {dict?.projects?.title} <span className="text-brand-purple">{dict?.projects?.accent}</span>.
          </h2>
          <p className="text-brand-text/60 font-medium max-w-md mx-auto text-lg">
            {dict?.projects?.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.slug} 
              project={project as any} 
              index={index} 
            />
          ))}
        </div>
      </section>
      

      {/* Section Kontak Baru */}
      {dict?.contact && <Contact dict={dict.contact} />}
    </div>
  );
}