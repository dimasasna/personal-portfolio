"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Fungsi pemetaan Tag ke URL Logo Devicon
const getTechIcon = (tag: string) => {
  const icons: Record<string, string> = {
    // SQA Frameworks & Tools
    "selenium": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
    "cypress": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg",
    "playwright": "https://playwright.dev/img/playwright-logo.svg",
    "appium": "https://upload.wikimedia.org/wikipedia/commons/d/db/Appium-logo.png",
    "cucumber": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Cucumber_logo.svg",
    "postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    "jmeter": "https://upload.wikimedia.org/wikipedia/commons/1/11/Apache_Jmeter_Logo.svg",
    "jest": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
    "katalon": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Katalon_Studio_icon.svg",
    "pytest": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Pytest_logo.svg",

    // Project Management & SQA Tracking
    "jira": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
    "trello": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original.svg",
    "google sheet": "https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg",
    "google sheets": "https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg",
    "excel": "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",

    // CI/CD & Version Control
    "jenkins": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
    "github action": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    "github actions": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    "git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    "github": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    "gitlab": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",

    // Languages & Web Dev
    "python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    "javascript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "typescript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "php": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    "laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    "nextjs": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    "tailwind css": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "ui/ux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    "cms": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",

    // Databases
    "mysql": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    "postgresql": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
  };
  return icons[tag.toLowerCase()]; // Case-insensitive lookup
};

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop";

/**
 * Normalisasi src gambar dari MDX frontmatter:
 * - URL eksternal (http/https) → dipakai langsung
 * - Path lokal tanpa '/' → tambahkan '/' di depan
 * - Kosong/undefined → pakai fallback
 */
function normalizeImageSrc(src: string | undefined): string {
  if (!src) return FALLBACK_IMAGE;
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return src.startsWith("/") ? src : `/${src}`;
}

interface ProjectCardProps {
  project: any;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const data = project?.frontmatter || project?.meta || project || {};

  const title = data.title || "Proyek Tanpa Judul";
  const description = data.description || "";
  const image = normalizeImageSrc(data.image);
  const tags = data.tags || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="bg-brand-card border border-brand-text/10 rounded-[32px] overflow-hidden group hover:shadow-xl hover:border-brand-amber/30 transition-all duration-300 hover:-translate-y-1.5 transform-gpu h-full flex flex-col">
        <div className="relative aspect-video w-full bg-brand-text/5 overflow-hidden border-b border-brand-text/5">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-brand-text/0 group-hover:bg-brand-amber/5 transition-colors duration-300 pointer-events-none" />
        </div>

        <div className="p-6 md:p-8 flex flex-col flex-1">
          <h4 className="text-2xl font-black text-brand-text mb-3 group-hover:text-brand-amber transition-colors duration-300 line-clamp-1">
            {title}
          </h4>

          <p className="text-brand-text/70 font-medium leading-relaxed mb-6 line-clamp-2 flex-1">
            {description}
          </p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-brand-text/5">
              {tags.slice(0, 3).map((tag: string, i: number) => (
                // UPDATE: Desain Pill Baru dengan Logo
                <span
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-text/5 text-brand-text/80 text-xs font-bold rounded-full border border-brand-text/5 transition-colors group-hover:bg-brand-card group-hover:shadow-sm group-hover:border-brand-text/10"
                >
                  {/* Cek apakah logonya ada di fungsi mapping kita */}
                  {getTechIcon(tag) && (
                    <Image
                      src={getTechIcon(tag) as string}
                      alt={tag}
                      width={14}
                      height={14}
                      className="w-3.5 h-3.5 object-contain"
                      unoptimized
                    />
                  )}
                  {tag}
                </span>
              ))}

              {tags.length > 3 && (
                <span className="flex items-center px-3 py-1.5 bg-brand-text/5 text-brand-text/50 text-xs font-bold rounded-full border border-brand-text/5">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
