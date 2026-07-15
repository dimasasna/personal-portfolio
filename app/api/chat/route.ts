import { NextRequest, NextResponse } from "next/server";

// ─────────────────────────────────────────
// Knowledge Base: all facts about Dimas
// ─────────────────────────────────────────
const KB = {
  en: {
    name: "Dimas Asna Nugraha",
    role: "Software Quality Assurance Engineer",
    location: "Yogyakarta, Indonesia",
    email: "dimas.asna@gmail.com",
    linkedin: "linkedin.com/in/dimasasna",
    github: "github.com/dimasasna",
    education: "Information Systems graduate",
    bio: "As an Information Systems graduate with a passion for quality, Dimas specializes in designing and executing test strategies that catch what others miss. From manual testing and exploratory analysis to automated pipelines and CI/CD integration, he thrives on ensuring software is reliable, performant, and production-ready.",
    experience: {
      company: "PT Talenta Sinergi Group",
      role: "Software Quality Assurance",
      period: "October 2023 – January 2024",
      duration: "around 4 months",
      location: "Yogyakarta, Indonesia",
      highlights: [
        "Created 50+ manual test cases, reducing overlooked defects during regression testing",
        "Improved regression testing efficiency by creating Selenium IDE test cases",
        "Documented test results, defect findings, and testing scenarios for clearer issue tracking",
        "Collaborated cross-functionally with developers to ensure UI consistency across all internal tools",
      ],
      technologies: ["Postman", "Selenium", "Jira", "MySQL", "Git"],
    },
    skills: {
      testing: ["Postman", "Selenium", "Jira", "Katalon Studio"],
      programming: ["Python", "JavaScript", "TypeScript", "SQL"],
      databases: ["MySQL"],
      devops: ["Git", "GitHub", "CI/CD pipelines"],
      types: ["Manual testing", "Regression testing", "Exploratory testing", "API testing", "UI testing", "Automation testing"],
    },
    projects: "Dimas has worked on several QA-focused projects, including test automation frameworks, API testing suites, and QA documentation. You can check the Projects section of the portfolio for full details and live demos! 🚀",
    certificates: "Dimas holds various certificates in software quality assurance and technology. Visit the Certificates & Awards section for the complete list!",
    contact: "You can reach Dimas by email at dimas.asna@gmail.com, or use the Contact form on this page. He's always open to new opportunities and collaborations! 🤝",
    hire: "Dimas is open to new opportunities! He brings solid QA experience with both manual and automation testing expertise. Feel free to reach out at dimas.asna@gmail.com or through the Contact section. 💼",
    greeting: "Hi there! 👋 I'm ASNA Bot. Ask me anything about Dimas — his experience, skills, projects, or how to get in touch!",
    unknown: "Hmm, I don't have specific info about that. Try asking about Dimas's work experience, skills, projects, or contact details. You can also reach him directly at dimas.asna@gmail.com 😊",
    // New intents
    salary: "Dimas's salary expectation is **negotiable** based on the role, responsibilities, and company culture. Feel free to discuss directly with him at dimas.asna@gmail.com — he's always open to a fair conversation! 💬",
    remote: "Dimas is **flexible** with work arrangements — remote, hybrid, or onsite. What matters most is a great team and impactful work. Let's talk about what works best for both sides! 🌏",
    availability: "Dimas is **immediately available** and actively open to new opportunities right now! Don't hesitate to reach out at dimas.asna@gmail.com or through the Contact form. ⚡",
    why_qa: "Great question! Dimas chose QA because he believes quality is the backbone of great software. He's passionate about preventing bugs before they reach users, not just fixing them. It's a role that combines analytical thinking, attention to detail, and collaboration — which suits him perfectly! 🎯",
    social: "You can find Dimas on:\n\n🔗 **LinkedIn:** linkedin.com/in/dimasasna\n💻 **GitHub:** github.com/dimasasna\n📧 **Email:** dimas.asna@gmail.com",
    achievement: "One of Dimas's proudest achievements is building **50+ structured manual test cases** from scratch at PT Talenta Sinergi Group, which significantly reduced overlooked defects during regression cycles. He also successfully introduced Selenium IDE automation, improving the team's testing efficiency! 🏆",
    future_goals: "Dimas's goal is to grow into a **Senior QA Engineer** with deep expertise in test automation and CI/CD integration. He's also interested in expanding into **QA Lead** roles where he can mentor teams and shape quality culture. Long-term, he sees himself driving quality engineering at scale. 🔮",
    work_style: "Dimas thrives in **collaborative team environments**, but is equally comfortable working independently when needed. He believes in open communication, early bug reporting, and cross-functional collaboration with developers and product teams to deliver reliable software. 🤝",
  },
  id: {
    name: "Dimas Asna Nugraha",
    role: "Software Quality Assurance Engineer",
    location: "Yogyakarta, Indonesia",
    email: "dimas.asna@gmail.com",
    linkedin: "linkedin.com/in/dimasasna",
    github: "github.com/dimasasna",
    education: "Lulusan Sistem Informasi",
    bio: "Sebagai lulusan Sistem Informasi dengan semangat tinggi terhadap kualitas, Dimas berspesialisasi dalam merancang dan menjalankan strategi pengujian yang menangkap setiap celah sebelum sampai ke pengguna. Dari pengujian manual hingga otomatisasi pipeline dan integrasi CI/CD.",
    experience: {
      company: "PT Talenta Sinergi Group",
      role: "Software Quality Assurance",
      period: "Oktober 2023 – Januari 2024",
      duration: "sekitar 4 bulan",
      location: "Yogyakarta, Indonesia",
      highlights: [
        "Membuat 50+ kasus uji manual, mengurangi cacat yang terlewat saat regression testing",
        "Meningkatkan efisiensi regression testing dengan membuat test case Selenium IDE",
        "Mendokumentasikan hasil pengujian, temuan bug, dan skenario testing untuk pelacakan isu yang lebih jelas",
        "Berkolaborasi lintas tim dengan developer untuk memastikan konsistensi UI di semua tools internal",
      ],
      technologies: ["Postman", "Selenium", "Jira", "MySQL", "Git"],
    },
    skills: {
      testing: ["Postman", "Selenium", "Jira", "Katalon Studio"],
      programming: ["Python", "JavaScript", "TypeScript", "SQL"],
      databases: ["MySQL"],
      devops: ["Git", "GitHub", "CI/CD pipelines"],
      types: ["Manual testing", "Regression testing", "Exploratory testing", "API testing", "UI testing", "Automation testing"],
    },
    projects: "Dimas telah mengerjakan beberapa proyek QA, termasuk framework automation testing, suite API testing, dan dokumentasi QA. Kunjungi bagian Projects di portfolio untuk detail lengkap dan demo-nya! 🚀",
    certificates: "Dimas memiliki berbagai sertifikat di bidang software quality assurance dan teknologi. Kunjungi bagian Sertifikat & Penghargaan untuk daftar lengkapnya!",
    contact: "Kamu bisa menghubungi Dimas via email di dimas.asna@gmail.com, atau gunakan form Kontak di halaman ini. Dia selalu terbuka untuk peluang baru dan kolaborasi! 🤝",
    hire: "Dimas terbuka untuk peluang kerja baru! Beliau membawa pengalaman QA yang solid dengan keahlian manual dan automation testing. Hubungi di dimas.asna@gmail.com atau lewat bagian Kontak. 💼",
    greeting: "Halo! 👋 Saya ASNA Bot. Tanya apa saja tentang Dimas — pengalaman kerja, keahlian, proyek, atau cara menghubunginya!",
    unknown: "Hmm, saya tidak punya info spesifik tentang itu. Coba tanya tentang pengalaman kerja, keahlian, proyek, atau kontak Dimas. Kamu juga bisa menghubunginya langsung di dimas.asna@gmail.com 😊",
    // New intents
    salary: "Ekspektasi gaji Dimas bersifat **negotiable** tergantung posisi, tanggung jawab, dan budaya perusahaan. Silakan diskusikan langsung dengannya di dimas.asna@gmail.com — beliau selalu terbuka untuk obrolan yang fair! 💬",
    remote: "Dimas **fleksibel** soal setup kerja — remote, hybrid, maupun onsite. Yang terpenting adalah tim yang solid dan pekerjaan yang berdampak. Mari diskusikan yang paling cocok! 🌏",
    availability: "Dimas **segera tersedia** dan saat ini aktif mencari peluang baru! Jangan ragu untuk menghubungi di dimas.asna@gmail.com atau lewat form Kontak. ⚡",
    why_qa: "Pertanyaan bagus! Dimas memilih QA karena percaya bahwa kualitas adalah tulang punggung software yang baik. Beliau passionate dalam mencegah bug sebelum sampai ke pengguna, bukan sekadar memperbaikinya. Peran ini menggabungkan pemikiran analitis, perhatian terhadap detail, dan kolaborasi — sangat cocok dengannya! 🎯",
    social: "Kamu bisa menemukan Dimas di:\n\n🔗 **LinkedIn:** linkedin.com/in/dimasasna\n💻 **GitHub:** github.com/dimasasna\n📧 **Email:** dimas.asna@gmail.com",
    achievement: "Salah satu pencapaian terbesar Dimas adalah membangun **50+ manual test case terstruktur** dari nol di PT Talenta Sinergi Group, yang secara signifikan mengurangi cacat yang terlewat saat regression testing. Beliau juga berhasil memperkenalkan automation dengan Selenium IDE, meningkatkan efisiensi testing tim! 🏆",
    future_goals: "Tujuan Dimas adalah berkembang menjadi **Senior QA Engineer** dengan keahlian mendalam di test automation dan CI/CD. Beliau juga tertarik untuk naik ke posisi **QA Lead** di mana bisa membimbing tim dan membentuk budaya kualitas. Jangka panjangnya, beliau ingin mendorong quality engineering dalam skala besar. 🔮",
    work_style: "Dimas sangat nyaman bekerja dalam **lingkungan tim yang kolaboratif**, namun juga bisa mandiri saat dibutuhkan. Beliau percaya pada komunikasi terbuka, pelaporan bug sejak dini, dan kolaborasi lintas fungsi dengan developer dan tim produk. 🤝",
  },
};

// ─────────────────────────────────────────
// Intent detection by keywords
// ─────────────────────────────────────────
type Intent =
  | "greeting"
  | "experience"
  | "duration"
  | "company"
  | "technologies"
  | "skills"
  | "skills_testing"
  | "skills_programming"
  | "projects"
  | "certificates"
  | "contact"
  | "hire"
  | "education"
  | "location"
  | "bio"
  | "name"
  | "salary"
  | "remote"
  | "availability"
  | "why_qa"
  | "social"
  | "achievement"
  | "future_goals"
  | "work_style"
  | "unknown";

// Helper: check if text contains ANY of the given keywords
function has(text: string, keywords: string[]): boolean {
  return keywords.some((kw) => text.includes(kw));
}

function detectIntent(text: string): Intent {
  const t = text.toLowerCase().trim();

  // Greeting
  if (has(t, ["hi ", "hello", "hey ", "halo", " hai", "hai ", "selamat", "apa kabar", "how are you", "good morning", "good afternoon", "pagi", "siang", "malam"])
    || t === "hi" || t === "hai" || t === "hey" || t === "halo") return "greeting";

  // Salary / gaji
  if (has(t, ["salary", "gaji", "upah", "bayaran", "kompensasi", "compensation", "ekspektasi gaji", "how much", "berapa gaji", "gaji berapa", "rate per", "honor"])) return "salary";

  // Remote / WFH
  if (has(t, ["remote", "wfh", "work from home", "onsite", "on-site", "hybrid", "kerja dari rumah", "kerja remote", "bisa remote", "lokasi kerja", "flexible work", "wfo"])) return "remote";

  // Availability / kapan bisa mulai
  if (has(t, ["kapan bisa", "kapan mulai", "when can", "when start", "available now", "immediately", "segera tersedia", "sedang cari", "aktif cari", "notice period", "join date", "start date"])) return "availability";

  // Why QA
  if (has(t, ["why qa", "kenapa qa", "kenapa quality", "mengapa qa", "why not dev", "kenapa bukan dev", "alasan qa", "alasan pilih", "passion qa", "pilih qa", "choose qa", "tertarik qa", "minat qa", "kenapa tertarik", "why quality"])) return "why_qa";

  // Social media / LinkedIn / GitHub
  if (has(t, ["linkedin", "github", "sosmed", "social media", "instagram", "twitter", "ig ", " ig", "profile link", "portfolio link", "akun", "follow", "connect di"])) return "social";

  // Achievement / pencapaian terbesar
  if (has(t, ["achievement", "pencapaian", "terbesar", "biggest", "proudest", "bangga", "accomplishment", "best moment", "highlight", "paling membanggakan", "prestasi terbesar", "capai", "berhasil"])) return "achievement";

  // Future goals / career goals
  if (has(t, ["future goal", "career goal", "tujuan karir", "impian", "5 year", "10 year", "ke depan", "rencana ke", "cita-cita", "next step", "aspiration", "ambisi", "target karir", "plan ke", "mau jadi", "ingin jadi", "visi"])) return "future_goals";

  // Work style / team vs solo
  if (has(t, ["work style", "gaya kerja", "kerja tim", "kerja solo", "team player", "kolaborasi", "collaboration", "cara kerja", "work personality", "suka tim", "lebih suka", "preferensi kerja"])) return "work_style";

  // Hire / open to work
  if (has(t, ["hire", "rekrut", "open to work", "lowongan", "pekerjaan baru", "job opportunity", "freelance", "mau recruit", "butuh qa", "butuh tester", "cari qa", "cari tester"])) return "hire";

  // Contact
  if (has(t, ["contact", "kontak", "hubungi", "reach out", "dm ", " dm", "whatsapp", "wa ", " wa", "telpon", "call ", "message", "pesan", "email", "menghubungi", "cara hubungi"])) return "contact";

  // Duration / how long
  if (has(t, ["how long", "berapa lama", "berapa tahun", "berapa bulan", "duration", "lama kerja", "since when", "sejak kapan", "sudah berapa", "pengalaman berapa"])) return "duration";

  // Company
  if (has(t, ["company", "perusahaan", "tempat kerja", "kerja di mana", "di mana kerja", "talenta", "sinergi", "pt ", " pt", "klien", "client"])) return "company";

  // Technologies / tools used
  if (has(t, ["tech stack", "teknologi", "technology", "tools", "tool apa", "alat", "postman", "selenium", "jira", "mysql", "git ", "katalon", "menggunakan apa", "pakai apa", "dipakai"])) return "technologies";

  // Testing skills
  if (has(t, ["testing", "pengujian", "test case", "manual test", "automation", "automat", "regression", "regresi", "exploratory", "api test", "ui test", "functional test", "bug report", "defect"])) return "skills_testing";

  // Programming skills
  if (has(t, ["programming", "pemrograman", "coding", "koding", "python", "javascript", "typescript", "sql", "bahasa program", "code ", " code", "ngoding"])) return "skills_programming";

  // Skills general — MUST include plural forms and Indonesian suffixes
  if (has(t, ["skill", "keahlian", "kemampuan", "ability", "expertise", "proficient", "ahli", "bisa apa", "bisa ngapain", "bisa apa aja", "technical", "kompetensi", "kualifikasi", "qualification", "what can", "apa yang bisa", "mampu"])) return "skills";

  // Experience general
  if (has(t, ["experience", "pengalaman", "riwayat kerja", "riwayat", "history", "karir", "career", "pernah kerja", "kerja di", "bekerja", "job history"])) return "experience";

  // Projects
  if (has(t, ["project", "proyek", "karya", "portofolio", "portfolio", "hasil kerja", "demo", "showcase", "pernah buat", "pernah kerjakan"])) return "projects";

  // Certificates / awards
  if (has(t, ["certificate", "sertifikat", "award", "penghargaan", "prestasi", "lisensi", "licence", "certified", "sertifikasi", "penghargaan"])) return "certificates";

  // Education
  if (/\b(education|pendidikan|kuliah|universitas|university|jurusan|study|belajar|degree|gelar|sarjana|graduate|lulus)\b/.test(t)) return "education";

  // Location
  if (/\b(location|lokasi|domisili|tinggal|where|di mana|city|kota|yogya|jogja)\b/.test(t)) return "location";

  // Bio / about
  if (/\b(bio|about|tentang|deskripsi|description|siapa|who is|cerita|tell me about|who are you)\b/.test(t)) return "bio";

  // Name
  if (/\b(name|nama|siapa namanya|full name)\b/.test(t)) return "name";

  return "unknown";
}

// ─────────────────────────────────────────
// Build response from intent
// ─────────────────────────────────────────
function buildResponse(intent: Intent, locale: "en" | "id"): string {
  const k = KB[locale];
  const exp = k.experience;
  const skills = k.skills;

  switch (intent) {
    case "greeting":
      return k.greeting;

    case "name":
      return locale === "en"
        ? `Dimas's full name is **${k.name}**. He works as a ${k.role} based in ${k.location}.`
        : `Nama lengkapnya adalah **${k.name}**. Beliau bekerja sebagai ${k.role} dan berlokasi di ${k.location}.`;

    case "bio":
      return k.bio;

    case "education":
      return locale === "en"
        ? `Dimas is an **${k.education}** with a focus on information technology and software quality. His academic background directly supports his expertise in QA processes and systematic problem-solving.`
        : `Dimas adalah seorang **${k.education}** dengan fokus pada teknologi informasi dan kualitas perangkat lunak. Latar belakang akademisnya mendukung keahliannya dalam proses QA dan pemecahan masalah secara sistematis.`;

    case "location":
      return locale === "en"
        ? `Dimas is currently based in **${k.location}**. 📍`
        : `Dimas saat ini berdomisili di **${k.location}**. 📍`;

    case "experience":
      return locale === "en"
        ? `Dimas worked as **${exp.role}** at **${exp.company}** (${exp.period}), located in ${exp.location}.\n\nKey achievements:\n${exp.highlights.map((h) => `• ${h}`).join("\n")}`
        : `Dimas bekerja sebagai **${exp.role}** di **${exp.company}** (${exp.period}), berlokasi di ${exp.location}.\n\nPencapaian utama:\n${exp.highlights.map((h) => `• ${h}`).join("\n")}`;

    case "duration":
      return locale === "en"
        ? `Dimas has professional work experience at **${exp.company}** for **${exp.duration}** (${exp.period}). He's also been continuously learning and building QA skills through personal projects and certifications! 💪`
        : `Dimas memiliki pengalaman kerja profesional di **${exp.company}** selama **${exp.duration}** (${exp.period}). Beliau juga terus belajar dan mengembangkan skill QA melalui proyek pribadi dan sertifikasi! 💪`;

    case "company":
      return locale === "en"
        ? `Dimas worked at **${exp.company}** as ${exp.role} from ${exp.period}, based in ${exp.location}. It's a company where he handled QA for internal tools used by both office and factory teams.`
        : `Dimas bekerja di **${exp.company}** sebagai ${exp.role} dari ${exp.period}, berlokasi di ${exp.location}. Di sana beliau menangani QA untuk aplikasi internal yang digunakan oleh tim kantor dan lapangan.`;

    case "technologies":
      return locale === "en"
        ? `Technologies Dimas used at ${exp.company}:\n${exp.technologies.map((t) => `• **${t}**`).join("\n")}\n\nHe's also familiar with Katalon Studio, Python, TypeScript, and CI/CD pipelines for broader testing work.`
        : `Teknologi yang Dimas gunakan di ${exp.company}:\n${exp.technologies.map((t) => `• **${t}**`).join("\n")}\n\nBeliau juga familiar dengan Katalon Studio, Python, TypeScript, dan CI/CD pipelines untuk pekerjaan testing yang lebih luas.`;

    case "skills_testing":
      return locale === "en"
        ? `Dimas's QA & Testing skills:\n\n🧪 **Tools:** ${skills.testing.join(", ")}\n📋 **Test types:** ${skills.types.join(", ")}\n\nHe's experienced in both manual and automation testing, including building regression test suites from scratch!`
        : `Keahlian QA & Testing Dimas:\n\n🧪 **Tools:** ${skills.testing.join(", ")}\n📋 **Jenis testing:** ${skills.types.join(", ")}\n\nBeliau berpengalaman dalam manual dan automation testing, termasuk membangun regression test suite dari nol!`;

    case "skills_programming":
      return locale === "en"
        ? `Dimas's programming skills:\n\n💻 **Languages:** ${skills.programming.join(", ")}\n🗄️ **Databases:** ${skills.databases.join(", ")}\n🔧 **DevOps:** ${skills.devops.join(", ")}`
        : `Keahlian pemrograman Dimas:\n\n💻 **Bahasa:** ${skills.programming.join(", ")}\n🗄️ **Database:** ${skills.databases.join(", ")}\n🔧 **DevOps:** ${skills.devops.join(", ")}`;

    case "skills":
      return locale === "en"
        ? `Here's an overview of Dimas's skill set:\n\n🧪 **Testing:** ${skills.testing.join(", ")}\n💻 **Programming:** ${skills.programming.join(", ")}\n🗄️ **Databases:** ${skills.databases.join(", ")}\n🔧 **DevOps:** ${skills.devops.join(", ")}`
        : `Berikut gambaran keahlian Dimas:\n\n🧪 **Testing:** ${skills.testing.join(", ")}\n💻 **Pemrograman:** ${skills.programming.join(", ")}\n🗄️ **Database:** ${skills.databases.join(", ")}\n🔧 **DevOps:** ${skills.devops.join(", ")}`;

    case "projects":
      return k.projects;

    case "certificates":
      return k.certificates;

    case "contact":
      return k.contact;

    case "hire":
      return k.hire;

    // ── New intents ──
    case "salary":
      return k.salary;

    case "remote":
      return k.remote;

    case "availability":
      return k.availability;

    case "why_qa":
      return k.why_qa;

    case "social":
      return k.social;

    case "achievement":
      return k.achievement;

    case "future_goals":
      return k.future_goals;

    case "work_style":
      return k.work_style;

    default:
      return k.unknown;
  }
}

// ─────────────────────────────────────────
// API Handler
// ─────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const { messages, locale } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
    }

    const safeLocale: "en" | "id" = locale === "en" ? "en" : "id";
    const lastMessage = messages[messages.length - 1];
    const userText: string = lastMessage?.content || "";

    const intent = detectIntent(userText);
    const response = buildResponse(intent, safeLocale);

    // Small delay so it feels natural
    await new Promise((r) => setTimeout(r, 300));

    return NextResponse.json({ reply: response });
  } catch (error) {
    console.error("[AsnaBot] Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
