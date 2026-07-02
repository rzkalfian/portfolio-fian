import { Box1, Layer, Code, Filter, Command, CommandSquare } from "iconsax-react";
import type { Icon } from "iconsax-react";

// ─── Types ───────────────────────────────────────────────────────────────────

export type ServiceCard = {
  Icon: Icon;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
};

// ─── Service cards (ServiceSection di HomePage) ───────────────────────────────

export const serviceCards: ServiceCard[] = [
  {
    Icon: Box1,
    iconBg: "radial-gradient(circle, #1a3a6e 0%, #0d1f3c 100%)",
    iconColor: "#5B9CF6",
    title: "Pengembangan",
    description:
      "Menciptakan antarmuka intuitif dan estetis yang berfokus pada pengalaman pengguna.",
  },
  {
    Icon: Layer,
    iconBg: "radial-gradient(circle, #3d3000 0%, #1a1500 100%)",
    iconColor: "#D4A017",
    title: "Teknisi Flutter",
    description:
      "Membangun aplikasi mobile lintas platform berperforma tinggi dengan fungsionalitas mulus.",
  },
  {
    Icon: Code,
    iconBg: "radial-gradient(circle, #0d3d2e 0%, #051a14 100%)",
    iconColor: "#2DD4BF",
    title: "Frontend Dev",
    description:
      "Mengembangkan antarmuka web yang responsif dan interaktif menggunakan teknologi modern.",
  },
  {
    Icon: Filter,
    iconBg: "radial-gradient(circle, #0d3d1e 0%, #051a0e 100%)",
    iconColor: "#22C55E",
    title: "Manual Tester",
    description:
      "Menjamin kualitas perangkat lunak melalui pengujian teliti dan deteksi bug.",
  },
  {
    Icon: Command,
    iconBg: "radial-gradient(circle, #1a2f6e 0%, #0d1535 100%)",
    iconColor: "#5B9CF6",
    title: "Kerja Tim",
    description:
      "Berkolaborasi secara efektif untuk mencapai tujuan bersama dan kesuksesan proyek.",
  },
  {
    Icon: CommandSquare,
    iconBg: "radial-gradient(circle, #3d3000 0%, #1a1500 100%)",
    iconColor: "#D4A017",
    title: "Berpikir Kritis",
    description:
      "Menyelesaikan masalah kompleks dengan pendekatan analitis dan solusi inovatif.",
  },
];

// ─── Skill tag lists (ServicePage) ───────────────────────────────────────────

export const uiuxSkills: string[] = [
  "User Research & Analysis",
  "Wireframing",
  "High Fidelity Design",
  "Prototyping",
  "Design System",
  "Figma",
  "Usability Testing",
  "Information Architecture",
];

export const flutterSkills: string[] = [
  "Flutter SDK",
  "Dart",
  "State Management",
  "REST API Integration",
  "Firebase",
  "iOS & Android",
  "Responsive Layout",
  "Performance Optimization",
];

export const frontendSkills: string[] = [
  "React",
  "Next.js",
  "Vue.js",
  "TypeScript",
  "Tailwind CSS",
  "Bootstrap",
  "Chakra UI",
  "Material UI",
  "Vite",
  "Responsive Web",
];

export const qaSkills: string[] = [
  "Manual Testing",
  "Bug Reporting",
  "UI/UX Validation",
  "Cross-browser Testing",
  "Test Documentation",
  "Regression Testing",
];

export const teamSkills: string[] = [
  "Agile / Scrum",
  "Design–Dev Handoff",
  "Figma Collaboration",
  "Code Review",
  "Sprint Planning",
  "Retrospective",
];

export const orgSkills: string[] = [
  "Design System Governance",
  "Technical Documentation",
  "Onboarding Junior",
  "SOP Pembuatan UI",
  "Style Guide",
  "Component Library",
];
