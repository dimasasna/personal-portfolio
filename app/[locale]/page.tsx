import Hero from "@/components/Hero"; 
import { getAllProjects } from "@/lib/mdx";
import ProjectCard from "@/components/ProjectCard";
import { getDictionary, Locale } from "@/lib/dictionary";

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  
  // Ambil data bahasa statis dan proyek mdx secara paralel berdasarkan locale URL
  const dict = await getDictionary(locale);
  const projects = getAllProjects(locale);

  return (
    <div className="space-y-28 pb-20">
      {/* Oper data kamus teks khusus hero ke komponen Client Hero */}
      <Hero dict={dict.hero} />

      {/* Section Daftar Proyek */}
      <section id="projects" className="scroll-mt-28">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-3 text-brand-text">
            {dict.projects.title} <span className="text-brand-purple">{dict.projects.accent}</span>.
          </h2>
          <p className="text-brand-text/60 font-medium max-w-md mx-auto text-lg">
            {dict.projects.subtitle}
          </p>
        </div>

        {/* Grid Proyek Terlokalisasi */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.slug} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </section>

      {/* Section Kontak Sementara */}
      <section id="contact" className="min-h-[30vh] flex flex-col items-center justify-center text-center pb-20 scroll-mt-28">
          <h3 className="text-2xl font-bold text-brand-text/70 mb-4">
            {locale === "id" ? "Ingin berkolaborasi?" : "Interested in collaborating?"}
          </h3>
          <p className="text-lg text-brand-text/50 font-medium max-w-lg">
            {locale === "id" ? "Section kontak sedang dalam pengembangan." : "The contact section is currently under development."}
          </p>
      </section>
    </div>
  );
}