import React, { useState } from "react";
import Particle from "./Particle";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineLink, AiOutlineCloudServer, AiOutlineSafetyCertificate } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

import certSAA from "../Assets/cert_aws_saa.png";
import certCP from "../Assets/cert_aws_cp.png";
import certDevOps from "../Assets/cert_udemy_devops.png";
import certTraining from "../Assets/cert_aws_training.png";

const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    shortTitle: "Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Feb 2026",
    image: certSAA,
    link: "https://www.credly.com/badges/02122888-5b7f-4752-bf96-db911991f21f/public_url",
    keywords: ["Cloud Architecture", "EC2", "S3", "VPC", "IAM", "High Availability", "Cost Optimization"],
    description: "Validates expertise in designing distributed systems on AWS, optimizing costs, and implementing scalable, highly-available architectures.",
    gradient: "from-orange-600 via-amber-500 to-yellow-400",
    bgGlow: "bg-orange-500",
    ring: "ring-orange-500/30",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    shortTitle: "Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Feb 2026",
    image: certCP,
    link: "https://www.credly.com/badges/91d60a73-4979-461f-9a6a-9d7ed4848c20/linked_in_profile",
    keywords: ["Cloud Concepts", "AWS Services", "Security", "Billing", "Pricing"],
    description: "Demonstrates foundational understanding of AWS Cloud services, security, architecture, pricing, and support models.",
    gradient: "from-blue-600 via-sky-500 to-cyan-400",
    bgGlow: "bg-blue-500",
    ring: "ring-blue-500/30",
  },
  {
    title: "DevOps Beginners to Advanced",
    shortTitle: "DevOps Mastery",
    issuer: "Udemy",
    date: "Jan – Sep 2025",
    image: certDevOps,
    link: "https://www.udemy.com/certificate/UC-4ed5338c-e743-4fcb-8e0b-1a1d503aced6/",
    keywords: ["CI/CD", "Docker", "Kubernetes", "Jenkins", "Ansible", "Terraform", "Linux"],
    description: "Comprehensive DevOps training covering containerization, orchestration, infrastructure automation, and continuous integration/delivery pipelines.",
    gradient: "from-violet-600 via-purple-500 to-fuchsia-400",
    bgGlow: "bg-violet-500",
    ring: "ring-violet-500/30",
  },
  {
    title: "Cloud Computing using AWS – Training",
    shortTitle: "AWS Cloud Training",
    issuer: "Gokboru Tech",
    date: "Jun – Jul 2025",
    image: certTraining,
    link: "https://drive.google.com/file/d/1-mOr85OIEwVd_XPLoIw-5L1_YdlWLyNW/view?usp=sharing",
    keywords: ["EC2", "S3", "Lambda", "API Gateway", "CloudWatch", "Docker", "Serverless"],
    description: "6-week hands-on training covering AWS core services, serverless architecture, containerization, and real-world capstone deployment.",
    gradient: "from-emerald-600 via-teal-500 to-green-400",
    bgGlow: "bg-emerald-500",
    ring: "ring-emerald-500/30",
  },
];

/* ── Expanded modal ── */
function CertModal({ cert, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 40 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
      >
        {/* Certificate image full */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/50 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all text-lg"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="bg-[#0d1117] p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3">
            <span className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${cert.gradient}`} />
            <span className="text-xs text-text-muted uppercase tracking-widest font-bold">{cert.issuer}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{cert.title}</h2>
          <p className="text-text-muted leading-relaxed mb-6">{cert.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {cert.keywords.map((kw, i) => (
              <span key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-text-main font-medium">
                {kw}
              </span>
            ))}
          </div>

          <a
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${cert.gradient} text-white font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300`}
          >
            <FiExternalLink />
            View Credential
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Single cert card ── */
function CertCard({ cert, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      {/* Animated glow behind the card */}
      <div className={`absolute -inset-0.5 rounded-3xl ${cert.bgGlow} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`} />

      <div className={`relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0d1117] ring-1 ${cert.ring} ring-opacity-0 group-hover:ring-opacity-100 transition-all duration-500`}>

        {/* Top: certificate image preview */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/60 to-transparent" />

          {/* Animated gradient line at top */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

          {/* Issuer floating badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${cert.gradient} flex items-center justify-center shadow-lg`}>
              <AiOutlineCloudServer className="text-white text-sm" />
            </div>
            <span className="text-xs font-bold text-white/90 tracking-wider uppercase bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md">
              {cert.issuer}
            </span>
          </div>

          {/* View button on hover */}
          <motion.div
            initial={false}
            className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-white font-medium opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-400"
          >
            <AiOutlineLink className="text-sm" />
            Preview
          </motion.div>
        </div>

        {/* Body */}
        <div className="p-5 pt-3">
          {/* Date pill */}
          <div className="flex items-center justify-between mb-3">
            <div className={`flex items-center gap-1.5`}>
              <AiOutlineSafetyCertificate className={`text-lg bg-gradient-to-r ${cert.gradient} bg-clip-text`} style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }} />
              <span className="text-[11px] font-bold uppercase tracking-widest text-text-muted">Certified</span>
            </div>
            <span className={`text-[11px] font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${cert.gradient} text-white shadow-sm`}>
              {cert.date}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:transition-all group-hover:duration-500" style={{}}>
            {cert.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-2">
            {cert.description}
          </p>

          {/* Keywords */}
          <div className="flex flex-wrap gap-1.5">
            {cert.keywords.slice(0, 5).map((kw, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-md text-[10px] font-medium text-text-muted bg-white/[0.04] border border-white/[0.06] group-hover:border-white/10 group-hover:bg-white/[0.06] transition-all duration-300"
              >
                {kw}
              </span>
            ))}
            {cert.keywords.length > 5 && (
              <span className="px-2 py-0.5 rounded-md text-[10px] font-medium text-primary/60">
                +{cert.keywords.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Bottom gradient line (animated width on hover) */}
        <div className="h-[2px] mx-5 mb-4 rounded-full bg-white/[0.03] overflow-hidden">
          <div className={`h-full w-0 group-hover:w-full bg-gradient-to-r ${cert.gradient} transition-all duration-700 ease-out rounded-full`} />
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main page ── */
function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <Particle />
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
          >
            <AiOutlineSafetyCertificate className="text-3xl text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications
          </h1>
          <p className="text-text-muted text-lg max-w-xl mx-auto leading-relaxed">
            Industry-recognized credentials validating expertise in cloud architecture, DevOps, and modern infrastructure.
          </p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-8 mt-8"
          >
            {[
              { label: "Certifications", value: "4" },
              { label: "Providers", value: "3" },
              { label: "Cloud Hours", value: "500+" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>
                  {stat.value}
                </p>
                <p className="text-xs text-text-muted uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <CertCard key={i} cert={cert} index={i} onClick={() => setSelectedCert(cert)} />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

export default Certifications;
