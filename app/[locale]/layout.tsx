import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import ClientEffects from "@/components/effects/ClientEffects";
import { Locale } from "@/lib/dictionary";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://deftvalian.vercel.app"),
  title: {
    default: "Dimas Asna Nugraha | Software Quality Assurance",
    template: "%s | Dimas Asna Nugraha",
  },
  description:
    "Website portofolio personal Software Quality Assurance Engineer yang colorful dan interaktif.",
  openGraph: {
    title: "Dimas Asna Nugraha | Software Quality Assurance",
    description: "Portofolio interaktif dan modern dari seorang Software Quality Assurance Engineer.",
    url: "/",
    siteName: "Dimas Asna Nugraha",
    images: [
      {
        url: "/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Dimas Asna Nugraha Portfolio Thumbnail",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimas Asna Nugraha | Software Quality Assurance",
    description: "Portofolio interaktif dan modern dari seorang Software Quality Assurance Engineer.",
    images: ["/images/profile.jpeg"],
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  // 1. PERUBAHAN DISINI: 'Locale' diganti jadi 'string' agar Next.js tidak marah
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body
        className={`${plusJakartaSans.className} bg-brand-bg text-brand-text antialiased selection:bg-brand-pink selection:text-white `}
        suppressHydrationWarning
      >
        <ClientEffects />

        {/* 2. PERUBAHAN DISINI: Tambahkan 'as Locale' agar komponen Navbar tetap aman */}
        <Navbar locale={locale as Locale} />

        <main className="pt-14 min-h-screen px-6 md:px-12 max-w-6xl mx-auto w-full overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
