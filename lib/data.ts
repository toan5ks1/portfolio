import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import oap from "@/public/oap.jpg";
import sorryGpt from "@/public/sorry-gpt.png";
import github1 from "@/public/github1.png";
import github2 from "@/public/github2.png";
import award from "@/public/award.png";
import { OAP_URL, SORRYGPT_URL } from "./const";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Featured",
    hash: "#featured",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Information Technology",
    location: "Vietnam National University, Ho Chi Minh City, UIT",
    description:
      "Graduated with a degree in Information Technology from one of Vietnam's top universities.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 – 2022",
  },
  {
    title: "Web Developer (Intern)",
    location: "VN Ngay Nay",
    description:
      "An online newspaper application offering the latest news from Vietnam and worldwide.",
    icon: React.createElement(FaReact),
    date: "04/2021 – 09/2021",
  },
  {
    title: "Frontend Engineer",
    location: "Manabie",
    description:
      "An educational technology company applying Japanese learning methods across Japan, Vietnam, and Singapore, providing licensed learning resources for schools.",
    icon: React.createElement(CgWorkAlt),
    date: "10/2021 – 09/2022",
  },
  {
    title: "Frontend Lead",
    location: "Maybank Investment Bank (Vietnam)",
    description:
      "Led a frontend team of 3 for Vietnam's first stock firm with foreign partners, providing full securities services. Collaborated across teams to plan and assign tasks, optimize code, and build reusable components. Responsible for the frontend codebase of two core projects.",
    icon: React.createElement(CgWorkAlt),
    date: "09/2022 – Present",
  },
] as const;

export const projectsData = [
  {
    title: "Open Trading Account Page (OAP)",
    description:
      "A digital platform to opening trading accounts. Integrated with eKYC & liveness checks.",
    tags: [
      "Next.js",
      "ShadCN UI",
      "Tailwind CSS",
      "NextAuth",
      "Responsive Design",
    ],
    imageUrl: oap,
    href: OAP_URL,
  },
  {
    title: "SorryGPT-4o Extension",
    description:
      "A Chrome extension offering free, seamless access to GPT-4o with automated account switching and unlimited prompts.",
    tags: ["TypeScript", "Turborepo", "Service Worker", "Vite", "React"],
    imageUrl: sorryGpt,
    href: SORRYGPT_URL,
  },
] as const;

export const featuredData = [
  {
    title: "Contributions",
    description: "Github Enterprise",
    imageUrl: github1,
  },
  {
    title: "Contributions",
    description: "Github Personal",
    imageUrl: github2,
  },
  {
    title: "Award",
    description: "Nominated for Young Maybanker of the Year award",
    imageUrl: award,
  },
] as const;

export const skillsData = [
  "📄 HTML",
  "🎨 CSS",
  "⚙️ JavaScript",
  "🔷 TypeScript",
  "⚛️ React",
  "🇳 Next.js",
  "🌱 Node.js",
  "🐙 Git",
  "🌬️ Tailwind",
  "🔶 Prisma",
  "🔁 Redux",
  "🚆 Express",
  "⚡ Fastify",
  "📡 GraphQL",
  "📞 tRPC",
  "🌐 RESTful",
  "📲 WebSocket",
  "🍃 MongoDB",
  "🐘 PostgreSQL",
] as const;
