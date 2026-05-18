import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; 
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import { Locale } from "@/lib/dictionary";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Deft Valian Exanova | Fullstack Developer Portfolio",
  description: "Website portofolio personal Fullstack Developer yang colorful dan interaktif.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>; // Next.js terbaru membaca params secara asynchronous
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${plusJakartaSans.className} bg-brand-bg text-brand-text antialiased selection:bg-brand-pink selection:text-white`}>
        <Preloader />
        
        {/* Kirim locale aktif ke Navbar untuk tombol switcher */}
        <Navbar locale={locale} />
        
        <main className="pt-28 min-h-screen px-6 md:px-12 max-w-6xl mx-auto w-full">
          {children}
        </main>
      </body>
    </html>
  );
}