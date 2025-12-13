import { FaCode, FaLaptopCode, FaDatabase, FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaTools, FaEnvelopeOpenText, } from "react-icons/fa"
import { SiTailwindcss, SiMui, SiRedux, SiJavascript, SiTypescript, SiMongodb, SiSqlite, SiNextdotjs } from "react-icons/si"
import { MdWork, MdSchool, MdEmail, MdPhone, MdLocationOn } from "react-icons/md"
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { GiBearHead } from "react-icons/gi";
import justflipPlotsBanner from '../assets/justflipPlotsBanner.jpg';
import justflipBanner from '../assets/justflipBanner.jpg';
import CRMBanner from '../assets/CRMBanner.jpg';
import bear from "../assets/zustand.png"; 

// import Hero from "../assets/hero.png"

const resumeData = {
  name: "Shubham",
  surname: "Saini",
  role: "Full-Stack Web Developer",
  subtitle: "I design and build modern, scalable, and user-friendly applications.",
  stats: [
    { label: "Projects", value: "4+ Full-Stack Applications Delivered", icon: FaCode },
    { label: "Clients", value: "Open Source & Training Work", icon: MdWork },
    { label: "Experience", value: "1+ Years of Practical Development", icon: FaLaptopCode },
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
    { name: "Next.js", icon: SiNextdotjs, level: 90 },
    { name: "Zustand", icon: GiBearHead, level: 95 },
    { name: "JavaScript", icon: SiJavascript, level: 99 },
    { name: "TypeScript", icon: SiTypescript, level: 75 },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: 98 },
    { name: "Material UI", icon: SiMui, level: 90 },
    { name: "Python", icon: FaPython, level: 90 },
    { name: "HTML", icon: FaHtml5, level: 99 },
    { name: "CSS", icon: FaCss3Alt, level: 95 },
    { name: "Node.js", icon: FaNodeJs, level: 94 },
    { name: "Express.js", icon: FaNodeJs, level: 96 },
    { name: "Bootstrap", icon: FaBootstrap, level: 95 },
    { name: "MySQL", icon: SiSqlite, level: 95 },
    { name: "Redux", icon: SiRedux, level: 96 },
    { name: "MongoDB", icon: SiMongodb, level: 90 },
    { name: "API Testing", icon: FaCode, level: 99 },
    { name: "Git", icon: FaGitAlt, level: 99 },
    { name: "Manual Testing", icon: FaCode, level: 99 },
  ],
  projects: [
    {
      title: "Insta Share (Instagram Clone)",
      banner:
        "https://berqwp-cdn.sfo3.cdn.digitaloceanspaces.com/cache/miracuves.com/wp-content/uploads/2025/06/Social-Media-Interaction-in-Style.webp?bwp",
      tech: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "Material UI", logo: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      ],
      desc: `Developed a fully functional, responsive social media web application inspired by Instagram, featuring User Profile viewing, post feeds, search functionality, likes, and comments. 
    This module specifically handles dynamic profile rendering based on URL parameters, API-driven data fetching, and optimized rendering performance.

    Use these credentials for Demo:
    Username: rahul,
    Password: rahul@2021.`,
      live: "https://shubhaminsta.ccbp.tech",
    },
    {
      title: "Jobby App – Job Search Platform",
      banner:
        "https://ideausher.com/wp-content/uploads/2021/12/Idea-Usher-Mid-Image-App-Development-Phone-Mockup-How-To-Get-An-App-Idea-Developed-2.webp",
      tech: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      ],
      desc: `The Jobby App is a fully responsive job search platform that allows users to explore, search, and filter job listings in real-time. 
    It integrates user authentication, dynamic filtering, and API-driven data fetching to deliver a smooth and interactive experience. 

    Use these credentials for Demo:
    Username: rahul,
    Password: rahul@2021.`,
      live: "https://jobbyshubham.ccbp.tech",
    },
    {
      title: "Nxt Watch (YouTube Clone)",
      banner:
        "https://s3-alpha.figma.com/hub/file/1803556575/dddad4ab-afbe-4c4b-bfbd-5f872db64b12-cover.png",
      tech: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      ],
      desc: `The Nxt Watch App is a fully responsive YouTube clone where users can browse, search, and watch videos. 
    It includes features like dark/light mode toggle, authentication using JWT tokens, save/like/dislike videos, and protected routes. 
    Seamlessly integrates with APIs for video data and user actions.

    Use these credentials for Demo:
    Username: rahul,
    Password: rahul@2021.`,
      live: "https://shubhamwatchnxt.ccbp.tech",
    },
    {
      title: "Justflip Plots – Real Estate",
      banner: justflipPlotsBanner,
      tech: [
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "Vercel", logo: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
      ],
      desc: `A modern real-estate platform built with Next.js for discovering premium plotted developments across Bengaluru. 
            Features include advanced filtering (location, price, amenities), mobile-responsive carousels, developer listings, reviews, 
            and an optimized UI powered by Tailwind CSS. Integrated with Next.js Image Optimization and deployed on Vercel for fast, 
            SEO-friendly performance and seamless production delivery.`,
      live: "https://justflip-plots-ten.vercel.app/"
    },

    {
      title: "Justflip Portal – Real Estate",
      banner: justflipBanner,
      tech: [
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Vercel", logo: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" }
      ],
      desc: `Full-featured real-estate marketplace for property discovery, built with Next.js and Node.js. The portal supports listing creation, search with faceted filters, server-side rendering for SEO, dynamic property pages, and optimized image loading. Integrated user authentication, contact forms, and analytics for conversion tracking.`,
      live: "https://justflip.in/"
    },
    // {
    //   title: "Justflip Dashboard – Agent & Admin Console",
    //   banner: justflipDashboardBanner,
    //   tech: [
    //     { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    //     { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    //     { name: "Chart.js", logo: "https://www.vectorlogo.zone/logos/chartjs/chartjs-icon.svg" },
    //     { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    //     { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    //     { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
    //   ],
    //   desc: `A powerful admin and agent dashboard providing real-time analytics, lead management, property approval workflows, and reporting. Features include role-based access, charts & KPIs for sales and traffic, bulk import/export, and integrations with messaging and email services for notifications.`,
    //   live: "https://justflip-dashboard.example.com"
    // },
    {
      title: "Justflip CRM – Leads & Sales ",
      banner: CRMBanner,
      tech: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Zustand", logo: bear },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      ],
      desc: `Customer Relationship Management system tailored for real-estate teams. Manages leads, automated follow-ups, pipeline stages, reminders, and agent assignments. Includes email & SMS integrations, lead scoring, note history, and a lightweight rules engine for automations. Demo Credentials - Username: developer@markanthony.co.in  Password: 1234.`,
      live: "https://crm-testing-markanthony.vercel.app/login"
    }
  ],
  experience: [
    {
      company: "MARK ANTHONY VENTURES",
      role: "Frontend Developer",
      years: "Jun 2025 - Ongoing",
      details:
        "Built responsive web apps with React.js, Redux Toolkit, and Tailwind CSS. Created reusable UI components, implemented features with React hooks & APIs, assisted in micro-frontend integration, followed Git workflows and Agile.",
      icon: MdWork,
    },
  ],
  education: [
    {
      school: "Nxtwave Disruptive Technologies",
      degree: "Industry Ready Certification in Full-stack Development",
      year: "Jan 2023 - Ongoing",
      icon: MdSchool,
    },
    {
      school: "MJP Rohilkhand University, Bareilly",
      degree: "BSc Mathematics (56%)",
      year: "2018 - 2021",
      icon: MdSchool,
    },
    {
      school: "Hilton Convent Senior Secondary School, Amroha",
      degree: "Intermediate MPC (68%)",
      year: "2017 - 2018",
      icon: MdSchool,
    },
    {
      school: "Hilton Convent Senior Secondary School, Amroha",
      degree: "Secondary School Certificate (9.4 CGPA)",
      year: "2015 - 2016",
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
