import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaTools,
} from "react-icons/fa"
import {
  SiTailwindcss,
  SiMui,
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiSqlite,
} from "react-icons/si"
import { MdWork, MdSchool, MdEmail, MdPhone, MdLocationOn } from "react-icons/md"
import { BsLinkedin, BsGithub } from "react-icons/bs"

// Banner images (import your created banners here)
import InstaBanner from "../assets/insta_banner.png"
import JobbyBanner from "../assets/jobby_banner.png"
import NxtWatchBanner from "../assets/nxtwatch_banner.png"
import Hero from "../assets/hero.png"

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
    { name: "HTML", icon: FaHtml5, level: 99 },
    { name: "CSS", icon: FaCss3Alt, level: 95 },
    { name: "Bootstrap", icon: FaBootstrap, level: 95 },
    { name: "JavaScript", icon: SiJavascript, level: 99 },
    { name: "TypeScript", icon: SiTypescript, level: 75 },
    { name: "React.js", icon: FaReact, level: 99 },
    { name: "Redux", icon: SiRedux, level: 96 },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: 98 },
    { name: "Material UI", icon: SiMui, level: 90 },
    { name: "Python", icon: FaPython, level: 90 },
    { name: "Node.js", icon: FaNodeJs, level: 94 },
    { name: "Express.js", icon: FaNodeJs, level: 96 },
    { name: "MySQL", icon: SiSqlite, level: 95 },
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
      title: "Product Searching App",
      banner:
        "https://img.freepik.com/premium-vector/3d-illustration-e-commerce-online-shopping-search-product-mobile-application_210682-118.jpg",
      tech: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      ],
      desc: `A high-performance e-commerce platform built with React and Redux Toolkit, featuring micro-frontend architecture for scalability. 
    Includes product listing, detailed product pages, state management for cart functionality, and a modern Tailwind-powered UI. 
    Deployed on Vercel for seamless CI/CD and optimized hosting.`,
      live: "https://host-product-app.vercel.app",
    },
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




// export const projects = [
//   {
//     title: "Instagram Clone – Social Media Web Application",
//     tech: "React.js, JSX, CSS, Tailwind CSS, Material UI (MUI) Fetch API, js-cookie, react-icons, Git/GitHub",
//     desc: "Developed a fully functional, responsive social media web application inspired by Instagram, featuring User Profile viewing, post feeds, search functionality, likes, and comments. This module specifically handles dynamic profile rendering based on URL parameters, API-driven data fetching, and optimized rendering performance. The app emphasizes accessibility, performance, and clean code architecture. \n\nUse this credentials for demo:- \nusername: rahul \npassword: rahul@2021.",
//     live: "https://shubhaminsta.ccbp.tech",
//   },
//   {
//     title: "Jobby App – Find Your Next Job Fast",
//     tech: "React.js, Tailwind CSS, React Router, Fetch API, js-cookie, react-icons, Git/GitHub",
//     desc: "The Jobby App is a fully responsive job search platform that allows users to explore, search, and filter job listings in real-time. It integrates user authentication, dynamic filtering, and API-driven data fetching to deliver a smooth and interactive experience. \n\nUse this credentials for demo:- \nusername: rahul \npassword: rahul@2021.",
//     live: "https://jobbyshubham.ccbp.tech",
//   },
//   {
//     title: "Nxt Watch App – YouTube Clone with Dark Mode",
//     tech: "React.js, Context API, React Router, js-cookie, REST API, Tailwind CSS, Git/GitHub",
//     desc: "The Nxt Watch App is a fully responsive YouTube clone where users can browse, search, and watch videos. It includes features like dark/light mode toggle, authentication using JWT tokens, save/like/dislike videos, and protected routes. Seamlessly integrates with APIs for video data and user actions.\n\nUse this credentials for demo:- \nusername: rahul \npassword: rahul@2021.",
//     live: "https://shubhamwatchnxt.ccbp.tech"
//   },
//   {
//     title: "Nxt Trendz (E-commerce Clone)",
//     tech: "React Router, JWT, REST APIs",
//     desc: "A full-fledged e-commerce clone inspired by Amazon and Flipkart, featuring authentication with JWT, protected routes, product listing, detailed product pages, and a responsive UI. It demonstrates handling REST APIs, secure login, and state management for a seamless shopping experience.\n\nDemo Credentials:\nusername: rahul\npassword: rahul@2021.",
//     live: "http://shubhamnxttrend.ccbp.tech",
//   },
//   {
//     title: "Recipe App",
//     tech: "React, Redux Toolkit, Tailwind CSS, MicroFrontend Arch",
//     desc: "An advanced recipe management application built with a micro-frontend architecture. Users can browse, search, and view detailed recipes with dynamic rendering and global state handling via Redux Toolkit. Styled with Tailwind CSS, it offers a modern, scalable, and modular design approach for large applications.",
//     live: "https://food-recipe-app-rouge-psi.vercel.app/ ",
//   },
//   {
//     title: "E-commerce Vercel App",
//     tech: "React, Redux Toolkit, Tailwind CSS",
//     desc: "A high-performance e-commerce platform built with React and Redux Toolkit, featuring micro-frontend architecture for scalability. Includes product listing, detailed product pages, state management for cart functionality, and a modern Tailwind-powered UI. Deployed on Vercel for seamless CI/CD and optimized hosting.",
//     live: "https://host-product-app.vercel.app/",
//   },
// ];
