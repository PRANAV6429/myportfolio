import React, { useState } from "react";
import Particle from "../Particle";
import pdf from "../../Assets/PranavSaiAditya Resume (5).pdf";
import { AiOutlineDownload, AiFillMail, AiFillGithub, AiFillLinkedin, AiFillPhone } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

/* ────────── DATA ────────── */
const contactInfo = [
  { icon: <AiFillMail />, text: "pranavsai6429@gmail.com", href: "mailto:pranavsai6429@gmail.com" },
  { icon: <AiFillPhone />, text: "+91-6281740902", href: "tel:+916281740902" },
  { icon: <AiFillLinkedin />, text: "LinkedIn", href: "https://www.linkedin.com/in/pranav-sai-aditya/" },
  { icon: <AiFillGithub />, text: "GitHub", href: "https://github.com/PRANAV6429" },
];

const tabs = ["Education", "Skills", "Projects", "Training", "Certifications"];

const education = [
  {
    school: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    grade: "CGPA: 7.79",
    date: "Since Aug 2023",
  },
  {
    school: "ST. Francis Junior College",
    location: "Midhilapuri, Visakhapatnam",
    degree: "Intermediate",
    grade: "Percentage: 93.3",
    date: "Oct 2021 - Mar 2023",
  },
  {
    school: "ST. Anns CBSE School",
    location: "Bakkannapalem, Visakhapatnam",
    degree: "Matriculation",
    grade: "Percentage: 87",
    date: "Mar 2021",
  },
];

const skills = {
  "Languages/Dev/DB": ["Python", "C++", "Java", "Spring Boot", "Bash", "MySQL", "PostgreSQL", "MongoDB"],
  "Infra/Tools": ["Kubernetes", "GitOps", "GitHub Actions", "Docker", "Linux", "Terraform", "Ansible"],
  "Cloud/Hybrid": ["AWS", "Azure", "EKS", "VPC", "EC2", "S3", "Private Cloud"],
  "Soft Skills": ["Effective Communication", "Team Collaboration", "Adaptability & Learning Agility"],
};

const projects = [
  {
    tag: "DEVOPS",
    title: "DevOps-Enabled Go Web Application",
    link: "https://github.com/PRANAV6429",
    date: "Feb 2026",
    bullets: [
      "Implemented and deployed a production-style Go web application to simulate an end-to-end DevOps pipeline, demonstrating CI/CD automation, containerization, and Kubernetes-based cloud deployment.",
      "Containerized the application using multi-stage Docker builds, designed Kubernetes manifests and Helm charts for scalable and environment-specific deployments.",
      "Implemented a GitHub Actions CI pipeline to automate Docker image builds and pushes, followed GitOps principles for declarative Kubernetes updates, and deployed on AWS EKS with Ingress-based external exposure.",
    ],
    tech: ["Go", "Docker", "Kubernetes", "Helm", "GitHub Actions", "AWS EKS"],
  },
  {
    tag: "AI / ML",
    title: "MuSys - AI Music Recommender System",
    link: "https://github.com/PRANAV6429",
    date: "Oct 2025",
    bullets: [
      "Built with the objective of delivering accurate mood-based song recommendations using AI, targeting 90%+ sentiment detection accuracy.",
      "Designed a scalable architecture, developed the Flask backend, integrated AWS Comprehend (NLP), Polly (TTS), and DynamoDB (NoSQL logging), containerized the system using Docker, and deployed on Railway.",
      "Delivered a fully serverless, real-time AI recommendation system, reducing backend overhead by 100%, improving response efficiency by 40%.",
    ],
    tech: ["Flask", "AWS Comprehend", "DynamoDB", "Docker", "Railway"],
  },
];

const training = [
  {
    tag: "TRAINING",
    title: "Cloud Computing using AWS",
    org: "Gokboru Tech",
    date: "Jun - Jul 2025",
    link: "#",
    bullets: [
      "Completed 6-week AWS Cloud Computing training, working hands-on 80% with EC2, S3, IAM, VPC, Load Balancer, Lambda, API Gateway, Docker & CloudWatch.",
      "Gained practical experience in NLP, serverless workflows, containerization, NoSQL and CI/CD tools improving cloud and DevOps proficiency by 70%.",
      "Applied cloud, NLP, and serverless concepts in a real-world capstone project, working end-to-end across architecture design, AWS integrations, backend development, and deployment.",
    ],
    tech: ["AWS", "EC2", "S3", "Lambda", "Docker", "CloudWatch"],
  },
];

const certifications = [
  { title: "AWS Certified Solutions Architect Associate", issuer: "AWS", date: "Feb 2026", link: "#" },
  { title: "AWS Certified Cloud Practitioner", issuer: "AWS", date: "Feb 2026", link: "#" },
  { title: "DevOps Beginners to Advance", issuer: "Udemy", date: "Jan - Sep 2025", link: "#" },
];

/* ────────── SUBCOMPONENTS ────────── */
const TabButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      active
        ? "bg-primary text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]"
        : "text-text-muted hover:text-white hover:bg-white/10"
    }`}
  >
    {label}
  </button>
);

const ExperienceCard = ({ tag, title, org, date, bullets, tech, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="bg-dark-card/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:border-primary/40 transition-all duration-300 group"
  >
    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-1">
      <span className="text-[11px] font-bold tracking-[0.2em] text-primary/80 uppercase">{tag}</span>
      <span className="text-sm text-text-muted font-medium">{date}</span>
    </div>
    <div className="flex flex-col sm:flex-row justify-between items-start gap-1 mb-1">
      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{title}
        {link && link !== "#" && (
          <a href={link} target="_blank" rel="noreferrer" className="text-primary/70 text-sm font-normal ml-2 hover:text-primary hover:underline">
            ( GitRepo )
          </a>
        )}
      </h3>
    </div>
    {org && <p className="text-text-muted text-sm mb-4">{org}</p>}
    <ul className="space-y-2 mb-5">
      {bullets.map((b, i) => (
        <li key={i} className="flex items-start gap-2 text-text-main text-sm leading-relaxed">
          <span className="text-primary mt-1.5 text-xs">•</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
    {tech && tech.length > 0 && (
      <div className="flex flex-wrap gap-2">
        <span className="text-xs text-text-muted font-medium mr-1">Tech:</span>
        {tech.map((t, i) => (
          <span key={i} className="px-2 py-0.5 rounded-md bg-white/5 text-xs text-text-muted border border-white/10">
            {t}
          </span>
        ))}
      </div>
    )}
  </motion.div>
);

/* ────────── TAB CONTENT RENDERERS ────────── */
function EducationTab() {
  return (
    <div className="space-y-6">
      {education.map((ed, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-dark-card/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:border-primary/40 transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2">
            <div>
              <h3 className="text-xl font-bold text-white">{ed.school}</h3>
              <p className="text-text-muted text-sm">{ed.location}</p>
            </div>
            <span className="text-sm text-primary font-medium whitespace-nowrap">{ed.date}</span>
          </div>
          <p className="text-text-main">{ed.degree}</p>
          <p className="text-primary font-semibold mt-1">{ed.grade}</p>
        </motion.div>
      ))}
    </div>
  );
}

function SkillsTab() {
  const categoryColors = {
    "Languages/Dev/DB": "border-blue-500/30 hover:border-blue-400/60",
    "Infra/Tools": "border-emerald-500/30 hover:border-emerald-400/60",
    "Cloud/Hybrid": "border-orange-500/30 hover:border-orange-400/60",
    "Soft Skills": "border-pink-500/30 hover:border-pink-400/60",
  };
  const labelColors = {
    "Languages/Dev/DB": "text-blue-400",
    "Infra/Tools": "text-emerald-400",
    "Cloud/Hybrid": "text-orange-400",
    "Soft Skills": "text-pink-400",
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Object.entries(skills).map(([cat, items], i) => (
        <motion.div
          key={cat}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`bg-dark-card/80 backdrop-blur-md border rounded-2xl p-6 transition-all duration-300 ${categoryColors[cat]}`}
        >
          <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 ${labelColors[cat]}`}>{cat}</h4>
          <div className="flex flex-wrap gap-2">
            {items.map((s, j) => (
              <span key={j} className="px-3 py-1.5 rounded-lg bg-white/5 text-sm text-text-main border border-white/10 hover:bg-white/10 hover:text-white transition-all">
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ProjectsTab() {
  return (
    <div className="space-y-6">
      {projects.map((p, i) => (
        <ExperienceCard key={i} {...p} />
      ))}
    </div>
  );
}

function TrainingTab() {
  return (
    <div className="space-y-6">
      {training.map((t, i) => (
        <ExperienceCard key={i} {...t} />
      ))}
    </div>
  );
}

function CertificationsTab() {
  return (
    <div className="space-y-5">
      {certifications.map((c, i) => (
        <motion.a
          key={i}
          href={c.link}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="block bg-dark-card/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{c.title}</h3>
              <p className="text-text-muted text-sm">{c.issuer}</p>
            </div>
            <span className="text-sm text-primary font-medium whitespace-nowrap">{c.date}</span>
          </div>
        </motion.a>
      ))}
    </div>
  );
}

const tabComponents = {
  Education: EducationTab,
  Skills: SkillsTab,
  Projects: ProjectsTab,
  Training: TrainingTab,
  Certifications: CertificationsTab,
};

/* ────────── MAIN COMPONENT ────────── */
function ResumeNew() {
  const [activeTab, setActiveTab] = useState("Education");
  const ActiveTabContent = tabComponents[activeTab];

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <Particle />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-4xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6">
            My <strong className="text-primary text-glow">Resume</strong>
          </h1>

          {/* Contact Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {contactInfo.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.href.startsWith("mailto") || c.href.startsWith("tel") ? "_self" : "_blank"}
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-text-muted text-sm hover:bg-white/10 hover:text-white hover:border-primary/30 transition-all duration-300"
              >
                <span className="text-primary text-base">{c.icon}</span>
                {c.text}
              </a>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <TabButton key={tab} label={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)} />
            ))}
          </div>
        </motion.div>

        {/* Active Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ActiveTabContent />
          </motion.div>
        </AnimatePresence>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:-translate-y-1"
          >
            <AiOutlineDownload className="text-xl" />
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default ResumeNew;
