"use client";

import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaBars,
  FaBriefcase,
  FaCheck,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
  FaPaperPlane,
  FaPhone,
  FaScissors,
  FaStore,
  FaWandMagicSparkles,
  FaXmark,
} from "react-icons/fa6";
import resumeData from "../src/data/resumeData";
import GithubStats from "./github-stats";
import { RevealSection } from "./motion";

type Asset = string | { src: string };

function assetUrl(asset: Asset | undefined) {
  if (!asset) return "";
  return typeof asset === "string" ? asset : asset.src;
}

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Shubham-168", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shubham8014/",
    icon: FaLinkedin,
  },
  { label: "Email", href: "mailto:saini68shubham@gmail.com", icon: FaEnvelope },
];

const projectOrder = [
  "TapGro Salon",
  "TapGro Marketplace",
  "Justflip Portal",
];
const projects = [...resumeData.projects].sort((a, b) => {
  const indexA = projectOrder.findIndex((title) => a.title.includes(title));
  const indexB = projectOrder.findIndex((title) => b.title.includes(title));
  return (indexA === -1 ? projectOrder.length : indexA) -
    (indexB === -1 ? projectOrder.length : indexB);
});

export default function Home() {
  const projectRail = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion ?? false;

  const scrollProjects = (direction: -1 | 1) => {
    projectRail.current?.scrollBy({
      left: direction * (projectRail.current.clientWidth * 0.8),
      behavior: "smooth",
    });
  };

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setFormStatus("");

    try {
      await emailjs.send(
        "service_roqvrxo",
        "template_5y91m39",
        form,
        "lXsIOhinH26cq7LoD",
      );
      setForm({ name: "", email: "", message: "" });
      setFormStatus("Thanks for reaching out — I’ll get back to you soon.");
    } catch (error) {
      console.error("EmailJS error:", error);
      setFormStatus("Your message couldn’t be sent. Please email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden">
      <motion.header
        className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#080b18]/85 backdrop-blur-xl"
        initial={reduceMotion ? false : { opacity: 0, y: -16 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a className="flex items-center gap-3" href="#home" aria-label="Shubham Saini home">
            <span className="brand-mark">S</span>
            <span className="text-sm font-semibold tracking-wide text-white">Shubham Saini</span>
          </a>
          <div className="hidden items-center gap-5 text-[13px] text-slate-300 md:flex lg:gap-7">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#experience">Experience</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>
          <button
            className="mobile-menu-toggle md:hidden"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>
          <a className="button-primary !px-4 !py-2.5 text-xs" href="#contact">
            Let’s Talk <FaArrowUpRightFromSquare />
          </a>
        </nav>
        {menuOpen && (
          <div className="mobile-menu md:hidden">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Projects", "#projects"],
              ["Services", "#services"],
              ["Experience", "#experience"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a className="mobile-menu-link" href={href} key={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        )}
      </motion.header>

      <section id="home" className="hero-section scroll-mt-24">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="relative mx-auto grid min-h-[710px] max-w-7xl items-center gap-8 px-5 pb-12 pt-28 sm:px-8 lg:min-h-[690px] lg:grid-cols-[1.05fr_.95fr] lg:pb-16 lg:pt-24">
          <motion.div
            className="relative z-10 max-w-2xl"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          >
            <div className="eyebrow mb-6"><FaWandMagicSparkles /> Open to exciting opportunities</div>
            <p className="mb-3 text-sm font-medium text-slate-300">Hello, I’m</p>
            <h1 className="text-balance text-5xl font-bold leading-[1.04] tracking-[-0.055em] text-white sm:text-6xl lg:text-[76px]">
              Shubham <span className="gradient-text">Saini</span>
            </h1>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {resumeData.role}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              {resumeData.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="button-primary" href="#contact">Hire Me <FaArrowUpRightFromSquare /></a>
              <a className="button-secondary" href="/Shubham_Saini_NewResume.pdf" download="Shubham_Saini_Resume.pdf">
                <FaDownload /> Download Resume
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a className="social-button" key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero-art relative mx-auto flex h-[380px] w-full max-w-[540px] items-center justify-center sm:h-[480px]"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
          >
            <div className="portrait-glow" />
            <div className="portrait-frame">
              <Image src="/images/portfolio-hero.webp" alt="Developer illustration with modern web technology icons" fill priority sizes="(min-width: 1024px) 45vw, 90vw" />
            </div>
            <motion.div
              className="float-chip float-chip-one"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: [0, -6, 0], rotate: -7 }}
              transition={{ opacity: { delay: 0.55, duration: 0.35 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
            ><span className="text-cyan-300">N</span> Next.js</motion.div>
            <motion.div
              className="float-chip float-chip-two"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: [0, -7, 0], rotate: 7 }}
              transition={{ opacity: { delay: 0.7, duration: 0.35 }, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" } }}
            ><span className="text-sky-300">⚛</span> React</motion.div>
            <motion.div
              className="float-chip float-chip-three"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: [0, -6, 0], rotate: -5 }}
              transition={{ opacity: { delay: 0.85, duration: 0.35 }, y: { duration: 4.2, repeat: Infinity, ease: "easeInOut" } }}
            ><span className="text-blue-300">TS</span> TypeScript</motion.div>
            <motion.div
              className="float-chip float-chip-four"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: [0, -7, 0], rotate: 6 }}
              transition={{ opacity: { delay: 1, duration: 0.35 }, y: { duration: 4.6, repeat: Infinity, ease: "easeInOut" } }}
            ><span className="text-cyan-200">≋</span> Tailwind</motion.div>
          </motion.div>
        </div>
      </section>

      <RevealSection id="stats" className="section-wrap -mt-2 scroll-mt-28">
        <div className="stats-panel">
          {resumeData.stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div className="stat-item" key={stat.label}>
                <Icon className="stat-icon" />
                <div>
                  <p className="text-sm font-semibold text-white">{stat.value.split(" ")[0]}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</p>
                </div>
                <span className="sr-only">{stat.value}</span>
              </div>
            );
          })}
        </div>
      </RevealSection>

      <RevealSection aria-label="Technology stack" className="section-wrap pt-5">
        <div className="tech-strip">
          <p className="shrink-0 text-xs font-semibold text-slate-200 sm:text-sm">Tech Stack I Work With</p>
          <div className="hidden h-7 w-px bg-white/15 sm:block" />
          <div className="flex flex-wrap items-center justify-around gap-x-6 gap-y-3">
            {resumeData.skills.slice(0, 12).map((skill) => {
              const Icon = skill.icon;
              return <span className="tech-icon" title={skill.name} key={skill.name}><Icon /></span>;
            })}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="projects" className="section-wrap section-space scroll-mt-24">
        <div className="section-heading-row">
          <div className="max-w-md">
            <span className="section-label"><FaCode /> Featured work</span>
            <h2 className="section-title mt-4">Some of My<br />Recent Projects</h2>
            <p className="section-copy mt-4">A selection of real-world products I’ve helped design and build.</p>
          </div>
          <div className="flex gap-2">
            <button className="round-control" onClick={() => scrollProjects(-1)} aria-label="Scroll projects left"><FaArrowLeft /></button>
            <button className="round-control" onClick={() => scrollProjects(1)} aria-label="Scroll projects right"><FaArrowRight /></button>
          </div>
        </div>
        <div className="project-rail mt-8" ref={projectRail}>
          {projects.map((project, index) => (
            <article className={`project-card ${index === 0 ? "project-card-featured" : ""}`} key={project.title}>
              <div className="project-image-wrap">
                {index === 0 && <span className="featured-pill">Featured</span>}
                {project.banner ? (
                  <Image className="project-image" src={assetUrl(project.banner)} alt={`${project.title} project preview`} width={540} height={320} sizes="(min-width: 760px) 33vw, 85vw" unoptimized />
                ) : (
                  <div className={`project-placeholder project-placeholder-${project.cover}`}>
                    {project.cover === "salon" ? <FaScissors /> : <FaStore />}
                    <span>{project.coverLabel}</span>
                  </div>
                )}
              </div>
              <div className="flex h-[calc(100%-178px)] flex-col p-4">
                <h3 className="text-base font-semibold text-white">{project.title}</h3>
                <p className="mt-2 line-clamp-3 text-xs leading-[1.65] text-slate-400">{project.desc}</p>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2">
                    {project.tech.slice(0, 5).map((tech) => (
                      <Image className="h-5 w-5 object-contain" src={assetUrl(tech.logo)} alt={tech.name} title={tech.name} key={tech.name} width={20} height={20} unoptimized />
                    ))}
                  </div>
                  {project.live ? (
                    <a className="project-link" href={project.live} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}><FaArrowUpRightFromSquare /></a>
                  ) : (
                    <span className="project-link-placeholder">Live URL unavailable</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection id="experience" className="section-wrap section-space border-t border-white/[0.06] scroll-mt-24">
        <div className="section-heading-row">
          <div className="max-w-sm">
            <span className="section-label"><FaBriefcase /> Experience</span>
            <h2 className="section-title mt-4">My Professional<br />Journey</h2>
            <p className="section-copy mt-4">A quick look at my work experience and how I’ve grown.</p>
          </div>
          <div className="experience-list">
            {resumeData.experience.map((job) => (
              <article className="experience-card" key={job.company}>
                <div className="experience-company-mark"><FaBriefcase /></div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white">{job.company}</h3>
                  <p className="mt-1 text-xs text-slate-400">{job.role} <span className="mx-1.5 text-violet-300">•</span> {job.years}</p>
                </div>
                <p className="experience-details">{job.details}</p>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="services" className="section-wrap section-space border-t border-white/[0.06] scroll-mt-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="section-label"><FaWandMagicSparkles /> Services</span>
            <h2 className="section-title mt-4">What I Can Do for You</h2>
          </div>
          <p className="section-copy max-w-lg">I turn ideas into fast, modern, and user-friendly web experiences.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resumeData.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article className={`service-card ${index === 0 ? "service-card-featured" : ""}`} key={service.title}>
                <Icon className="mb-5 text-2xl text-violet-300" />
                <h3 className="font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{service.desc}</p>
                <FaArrowUpRightFromSquare className="absolute right-5 top-5 text-xs text-slate-400" />
              </article>
            );
          })}
        </div>
      </RevealSection>

      <RevealSection id="about" className="section-wrap section-space grid items-center gap-10 border-t border-white/[0.06] scroll-mt-24 lg:grid-cols-[.72fr_1.2fr_1fr]">
        <div className="about-photo">
        <Image src="/images/shubham-profile.png" alt="Shubham Saini" width={460} height={460} sizes="(min-width: 1024px) 20vw, 60vw" />
        </div>
        <div>
          <span className="section-label">About me</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">Hi, I’m Shubham <span className="text-violet-300">👋</span></h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">{resumeData.subtitle}</p>
          <ul className="mt-5 space-y-2 text-sm text-slate-300">
            {["Problem Solver", "Team Collaborator", "Continuous Learner"].map((item) => <li className="flex items-center gap-2" key={item}><FaCheck className="text-xs text-violet-300" /> {item}</li>)}
          </ul>
        </div>
        <div className="about-interests">
          <span className="section-label">Beyond coding</span>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {["Gaming", "Traveling", "Photography", "Learning"].map((item) => (
              <div className="interest-card" key={item}><FaWandMagicSparkles className="text-violet-300" /><span>{item}</span></div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section-wrap section-space border-t border-white/[0.06]" id="skills">
        <div className="section-heading-row mb-8">
          <div>
            <span className="section-label"><FaCode /> Skills</span>
            <h2 className="section-title mt-4">Tools behind the work</h2>
          </div>
          <p className="section-copy max-w-lg">A practical toolkit for building polished products from interface to API.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {resumeData.skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div className="skill-card" key={skill.name}>
                <div className="flex items-center gap-3"><Icon className="text-lg text-violet-300" /><span className="text-sm font-medium text-slate-200">{skill.name}</span></div>
                <span className="text-xs text-slate-500">{skill.level}%</span>
                <div className="skill-track"><div className="skill-fill" style={{ width: `${skill.level}%` }} /></div>
              </div>
            );
          })}
        </div>
      </RevealSection>

      <GithubStats />

      <RevealSection id="contact" className="contact-banner section-wrap scroll-mt-24">
        <div className="contact-glow" />
        <div className="relative grid gap-8 p-6 sm:p-9 lg:grid-cols-[1fr_.85fr] lg:items-center lg:p-12">
          <div>
            <span className="section-label"><FaPaperPlane /> Get in touch</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Let’s build something<br className="hidden sm:block" /> amazing together.</h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-300">Have a project in mind or just want to say hi? I’d love to hear from you.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="contact-detail" href="mailto:saini68shubham@gmail.com"><FaEnvelope /> saini68shubham@gmail.com</a>
              <a className="contact-detail" href="tel:+919368208014"><FaPhone /> +91 9368208014</a>
              <span className="contact-detail"><FaLocationDot /> Amroha, Uttar Pradesh</span>
            </div>
          </div>
          <form className="contact-form" onSubmit={sendMessage}>
            <label>
              <span>Your name</span>
              <input required name="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Shubham Saini" />
            </label>
            <label>
              <span>Email address</span>
              <input required type="email" name="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@example.com" />
            </label>
            <label>
              <span>How can I help?</span>
              <textarea required name="message" rows={3} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Tell me a little about your project..." />
            </label>
            <button className="button-primary w-full" type="submit" disabled={sending}>{sending ? "Sending..." : "Send Message"} <FaPaperPlane /></button>
            {formStatus && <p className="text-xs leading-5 text-slate-300" role="status">{formStatus}</p>}
          </form>
        </div>
      </RevealSection>

      <motion.footer
        className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/[0.07] px-5 py-7 text-xs text-slate-500 sm:flex-row sm:px-8"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <a href="#home" className="font-semibold text-slate-300">© 2026 Shubham Saini</a>
        <p>Crafting digital experiences, one line of code at a time.</p>
        <a href="#home" className="flex items-center gap-2 hover:text-white">Back to top <FaArrowDown className="rotate-180" /></a>
      </motion.footer>
    </main>
  );
}
