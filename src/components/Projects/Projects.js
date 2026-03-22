import React from "react";
import Particle from "../Particle";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

import chatify from "../../Assets/musicRecom.jpg";
import bitsOfCode from "../../Assets/terraform.webp";
import editor from "../../Assets/track.png";
import leaf from "../../Assets/bookera.png";
import suicide from "../../Assets/AWSlift.png";
import emotion from "../../Assets/image.png";

/* ── project data ── */
const projectsData = [
  {
    img: chatify,
    title: "MuSys – AI Music Recommender",
    tag: "AI · AWS · CLOUD",
    date: "Oct 2025",
    description:
      "Built a cloud-native web application to analyze user sentiment with 90% NLP accuracy and deliver mood-based song recommendations. Integrated AWS Comprehend, Polly, and DynamoDB with a Flask backend, containerized with Docker, and deployed on Railway.",
    tech: ["Flask", "AWS Comprehend", "DynamoDB", "Docker", "Railway"],
    ghLink: "https://github.com/PRANAV6429/Music-recommender-AWS",
    color: "from-violet-500/20 via-transparent to-transparent",
    accent: "border-violet-500/40",
    glow: "group-hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]",
  },
  {
    img: bitsOfCode,
    title: "Terraform EC2 Web Server",
    tag: "IAC · TERRAFORM · AWS",
    date: "Nov 2025",
    description:
      "Architected a cloud-hosted web server setup to automate 100% of the provisioning workflow. Applied Infrastructure-as-Code principles with Terraform to reduce manual operations by 80%, deploying EC2 instances with security groups and VPC networking.",
    tech: ["Terraform", "AWS EC2", "VPC", "IAM", "Bash"],
    ghLink: "https://github.com/PRANAV6429/terraformProject",
    color: "from-emerald-500/20 via-transparent to-transparent",
    accent: "border-emerald-500/40",
    glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]",
  },
  {
    img: suicide,
    title: "AWS Lift & Shift Migration",
    tag: "AWS · MIGRATION · CLOUD",
    date: " Mar 2025",
    description:
      "Migrated an existing on-premises application to AWS with minimal modifications to leverage cloud benefits like scalability, reliability, and cost-efficiency. Configured VPC, EC2, S3, RDS, and Route 53 for a complete cloud deployment.",
    tech: ["AWS", "EC2", "S3", "RDS", "Route 53", "VPC"],
    ghLink: "https://github.com/PRANAV6429/AWS-Lift-Shift",
    color: "from-orange-500/20 via-transparent to-transparent",
    accent: "border-orange-500/40",
    glow: "group-hover:shadow-[0_0_40px_rgba(249,115,22,0.2)]",
  },
  {
    img: editor,
    title: "Order Tracker Chatbot",
    tag: "FULLSTACK · REACT · TS",
    date: "Mar 2025",
    description:
      "A real-time order tracking and customer support chatbot system built with React, TypeScript, and Tailwind CSS. Features intelligent routing, live status updates, and a clean conversational UI.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    ghLink: "https://github.com/PRANAV6429/OrderTracker",
    color: "from-blue-500/20 via-transparent to-transparent",
    accent: "border-blue-500/40",
    glow: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]",
  },
  {
    img: leaf,
    title: "BookEra",
    tag: "WEB · FULLSTACK",
    date: " Dec 2024",
    description:
      "A full-stack book recommendation platform with online PDF reading and Amazon purchase integration. Built to help users discover, read, and buy books seamlessly in one place.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js"],
    ghLink: "https://github.com/PRANAV6429/BookEra",
    color: "from-pink-500/20 via-transparent to-transparent",
    accent: "border-pink-500/40",
    glow: "group-hover:shadow-[0_0_40px_rgba(236,72,153,0.2)]",
  },
  {
    img: emotion,
    title: "Fitness Streak",
    tag: "WEB · HEALTH",
    date: " Feb2024",
    description:
      "A fitness-focused web application with activity tracking, workout suggestions, and streak-based motivation to help users build healthy habits consistently.",
    tech: ["HTML", "CSS", "JavaScript"],
    ghLink: "https://github.com/PRANAV6429/rep1",
    color: "from-cyan-500/20 via-transparent to-transparent",
    accent: "border-cyan-500/40",
    glow: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]",
  },
];

/* ── single timeline card ── */
function TimelineCard({ project, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-center w-full mb-4 md:mb-0">
      {/* ── Desktop: alternating layout ── */}
      <div className="hidden md:flex w-full items-center">
        {/* Left content */}
        <div className={`w-5/12 ${isLeft ? "" : "order-3"}`}>
          {isLeft && <CardContent project={project} index={index} align="right" />}
          {!isLeft && <CardContent project={project} index={index} align="left" />}
        </div>

        {/* Center timeline node */}
        <div className="w-2/12 flex justify-center order-2">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="relative z-10"
          >
            <div className="w-5 h-5 rounded-full bg-primary border-4 border-dark-bg shadow-[0_0_15px_rgba(139,92,246,0.6)]" />
          </motion.div>
        </div>

        {/* Right content */}
        <div className={`w-5/12 ${isLeft ? "order-3" : ""}`}>
          {isLeft && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-sm text-text-muted font-medium pl-8"
            >
              {project.date}
            </motion.p>
          )}
          {!isLeft && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-sm text-text-muted font-medium text-right pr-8"
            >
              {project.date}
            </motion.p>
          )}
        </div>
      </div>

      {/* ── Mobile: single column ── */}
      <div className="flex md:hidden w-full items-start gap-4">
        <div className="flex flex-col items-center shrink-0">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          >
            <div className="w-4 h-4 rounded-full bg-primary border-[3px] border-dark-bg shadow-[0_0_12px_rgba(139,92,246,0.6)]" />
          </motion.div>
          <div className="w-0.5 flex-grow bg-gradient-to-b from-primary/40 to-transparent mt-2 min-h-[40px]" />
        </div>
        <div className="flex-grow pb-8">
          <CardContent project={project} index={index} align="left" />
        </div>
      </div>
    </div>
  );
}

/* ── card content ── */
function CardContent({ project, index, align }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "right" ? 60 : -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`group relative bg-gradient-to-br ${project.color} bg-dark-card/80 backdrop-blur-md border border-white/10 ${project.accent} rounded-2xl overflow-hidden transition-all duration-500 ${project.glow} hover:border-opacity-80`}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-44">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent opacity-70" />
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-dark-bg/70 backdrop-blur-sm border border-white/10 text-[10px] font-bold tracking-[0.15em] text-primary uppercase">
          {project.tag}
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] text-text-muted border border-white/5 group-hover:border-primary/20 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <a
            href={project.ghLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-text-main hover:bg-white/10 hover:text-white border border-white/10 hover:border-primary/30 transition-all duration-300 text-sm font-medium"
          >
            <BsGithub size={15} />
            Code
          </a>
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium"
            >
              <FiExternalLink size={15} />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ── main component ── */
function Projects() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden" id="projects">
      <Particle />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4">
            Deployment <strong className="text-primary text-glow">Pipeline</strong>
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            A timeline of projects I've architected, containerized, and deployed — each one a milestone in my cloud & DevOps journey.
          </p>
        </motion.div>

        {/* Timeline spine (desktop only) */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

          {/* Cards */}
          <div className="flex flex-col gap-12">
            {projectsData.map((project, index) => (
              <TimelineCard key={index} project={project} index={index} />
            ))}
          </div>

          {/* Terminal node */}
          <div className="hidden md:flex justify-center mt-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-3 h-3 rounded-full bg-primary/40 shadow-[0_0_10px_rgba(139,92,246,0.4)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
