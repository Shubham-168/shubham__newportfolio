import { FaCode, FaLaptopCode, FaDatabase, FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaTools, FaCreditCard, FaLock } from "react-icons/fa"
import { SiTailwindcss, SiMui, SiRedux, SiJavascript, SiTypescript, SiMongodb, SiSqlite, SiNextdotjs, SiShadcnui, SiReactquery, SiPostman, SiVercel, SiGithub } from "react-icons/si"
import { MdWork, MdSchool, MdEmail, MdPhone, MdLocationOn } from "react-icons/md"
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { GiBearHead } from "react-icons/gi";
import { VscVscode } from "react-icons/vsc"
import justflipBanner from '../assets/justflipBanner.jpg';

// import Hero from "../assets/hero.png"

const resumeData = {
  name: "Shubham",
  surname: "Saini",
  role: "Frontend / Full-Stack Developer",
  subtitle:
    "I build production web applications with Next.js, React, TypeScript, Node.js, and REST APIs. My work spans SaaS platforms, marketplaces, D2C and e-commerce products, authentication, payment integrations, and responsive client websites.",
  stats: [
    { label: "Featured Products", value: "3+ Production Applications", icon: FaCode },
    { label: "Active Users", value: "5K+ Users Served", icon: MdWork },
    { label: "Experience", value: "1.5+ Years of Professional Development", icon: FaLaptopCode },
    { label: "Technologies", value: "10+ Modern Tools & Frameworks", icon: FaTools },
  ],
  services: [
    {
      title: "Frontend Development",
      desc: "Building modern, scalable and responsive frontend apps with React.js, Redux, Tailwind CSS.",
      icon: FaLaptopCode,
    },
    {
      title: "Backend Development",
      desc: "Developing REST APIs and server-side applications with Node.js, Express, and MongoDB.",
      icon: FaDatabase,
    },
    {
      title: "Full-Stack Solutions",
      desc: "Delivering end-to-end applications integrating frontend, backend, and deployment pipelines.",
      icon: FaCode,
    },
  ],
  skills: [
    { name: "React.js", icon: FaReact, level: 99 },
    { name: "Next.js", icon: SiNextdotjs, level: 95 },
    { name: "Zustand", icon: GiBearHead, level: 95 },
    { name: "JavaScript", icon: SiJavascript, level: 99 },
    { name: "TypeScript", icon: SiTypescript, level: 90 },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: 98 },
    { name: "Material UI", icon: SiMui, level: 95 },
    { name: "ShadCN UI", icon: SiShadcnui, level: 90 },
    { name: "TanStack Query", icon: SiReactquery, level: 90 },
    { name: "Python", icon: FaPython, level: 90 },
    { name: "HTML", icon: FaHtml5, level: 99 },
    { name: "CSS", icon: FaCss3Alt, level: 95 },
    { name: "Node.js", icon: FaNodeJs, level: 94 },
    { name: "Express.js", icon: FaNodeJs, level: 96 },
    { name: "REST APIs", icon: FaCode, level: 99 },
    { name: "Redux Toolkit", icon: SiRedux, level: 96 },
    { name: "MongoDB", icon: SiMongodb, level: 90 },
    { name: "SQLite", icon: SiSqlite, level: 95 },
    { name: "Razorpay", icon: FaCreditCard, level: 90 },
    { name: "Authentication", icon: FaLock, level: 90 },
    { name: "Git", icon: FaGitAlt, level: 99 },
    { name: "GitHub", icon: SiGithub, level: 99 },
    { name: "Postman", icon: SiPostman, level: 90 },
    { name: "VS Code", icon: VscVscode, level: 90 },
    { name: "Vercel", icon: SiVercel, level: 90 },
  ],
  projects: [
    {
      title: "TapGro Salon Management SaaS",
      cover: "salon",
      coverLabel: "Salon management",
      tech: [
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "REST APIs", logo: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png" },
      ],
      desc: "Developed a SaaS salon management platform with responsive interfaces, authentication workflows, API integrations, and core salon management features using Next.js, React, and TypeScript.",
    },
    {
      title: "TapGro Marketplace – Beauty Products",
      cover: "marketplace",
      coverLabel: "Beauty products marketplace",
      tech: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Razorpay", logo: "https://razorpay.com/favicon.png" },
        { name: "REST APIs", logo: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png" },
      ],
      desc: "Built a responsive beauty-products marketplace with product discovery, authentication, cart functionality, Razorpay payments, and API-driven workflows.",
    },
    {
      title: "Justflip Portal – Real Estate Marketplace",
      banner: justflipBanner,
      coverLabel: "Real estate marketplace",
      tech: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Redux Toolkit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "Material UI", logo: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" },
      ],
      desc: "Developed a property exploration platform with advanced filtering, project listings, SEO-focused pages, and reusable responsive UI using React, Redux Toolkit, Tailwind CSS, and Material UI.",
      live: "https://justflip.in/"
    },
  ],
  experience: [
    {
      company: "TapGro Technologies Pvt. Ltd.",
      role: "Frontend Developer",
      years: "Feb 2026 - Present · India",
      details:
        "Developed production applications with Next.js, React, and TypeScript across SaaS, marketplace, D2C/e-commerce, and client projects. Built salon management interfaces, authentication and API workflows, product discovery and cart experiences, Razorpay checkout, and reusable responsive client websites.",
      icon: MdWork,
    },
    {
      company: "Mark Anthony Ventures",
      role: "Frontend Developer",
      years: "Jun 2025 - Feb 2026 · Bengaluru, IN",
      details:
        "Built responsive real-estate applications with React, Next.js, Redux Toolkit, TypeScript, Zustand, Material UI, and Tailwind CSS, serving over 5K active users. Developed multi-step property upload and update forms and enhanced SEO-focused property listings and location modules.",
      icon: MdWork,
    },
  ],
  education: [
    {
      school: "Nxtwave Disruptive Technologies",
      degree: "Industry Ready Certification in Full-stack Development",
      year: "Jan 2023 - May 2025",
      icon: MdSchool,
    },
    {
      school: "Mahatma Jyotiba Phule Rohilkhand University, Bareilly",
      degree: "B.Sc. Mathematics",
      year: "2018 - 2021",
      icon: MdSchool,
    },
  ],
  contact: [
    { type: "Email", value: "saini68shubham@gmail.com", icon: MdEmail },
    { type: "Phone", value: "9368208014", icon: MdPhone },
    { type: "LinkedIn", value: "https://www.linkedin.com/in/shubham8014/", icon: BsLinkedin },
    { type: "GitHub", value: "https://github.com/Shubham-168", icon: BsGithub },
    { type: "Location", value: "Amroha, Uttar Pradesh, 244221", icon: MdLocationOn },
  ],
}

export default resumeData
