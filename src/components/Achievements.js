import React from "react";
import Particle from "./Particle";
import { motion } from "framer-motion";
import { AiOutlineTrophy, AiOutlineLink } from "react-icons/ai";

const achievements = [
  {
    title: "Top 5 in CloudClubs DevOps Workshop",
    description: "Among 400+ participants and 30+ teams, leveraging AWS, Docker, and Terraform.",
    date: "Nov 2025",
    link: "https://drive.google.com/file/d/1hSCUkOk4LdE9oKozTMHhzKl5x_8CkPa7/view?usp=sharing",
    color: "from-yellow-500/20 to-orange-500/10",
    borderColor: "border-yellow-500/30 hover:border-yellow-400/60",
    iconColor: "text-yellow-400",
    glowColor: "shadow-[0_0_15px_rgba(234,179,8,0.15)]",
  },
  {
    title: "AWS Academy Cloud Foundations Graduate",
    description: "Demonstrated strong proficiency in AWS core services, cloud concepts, and architecture fundamentals.",
    date: "May 2025",
    link: "https://www.credly.com/badges/8d20c79e-c4c0-4ddf-8736-c9a7722187a7/linked_in_profile",
    color: "from-blue-500/20 to-cyan-500/10",
    borderColor: "border-blue-500/30 hover:border-blue-400/60",
    iconColor: "text-blue-400",
    glowColor: "shadow-[0_0_15px_rgba(59,130,246,0.15)]",
  },
  {
    title: "Top 10 in University Club Hackathon",
    description: "Among 1000+ participants and 50+ teams.",
    date: "Feb 2024",
    link: "https://drive.google.com/file/d/1rPF3iV7SsgGoWLX6x7rynVqgv547GXa8/view?usp=sharing",
    color: "from-emerald-500/20 to-green-500/10",
    borderColor: "border-emerald-500/30 hover:border-emerald-400/60",
    iconColor: "text-emerald-400",
    glowColor: "shadow-[0_0_15px_rgba(16,185,129,0.15)]",
  },
];

function Achievements() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <Particle />
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4">
            My <strong className="text-primary text-glow">Achievements</strong>
          </h1>
          <p className="text-text-muted text-lg">Recognition and milestones from my journey</p>
        </motion.div>

        <div className="space-y-6">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`relative bg-gradient-to-r ${a.color} backdrop-blur-md border ${a.borderColor} rounded-2xl p-6 md:p-8 transition-all duration-300 cursor-pointer group ${a.glowColor}`}
            >
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full blur-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center ${a.iconColor} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <AiOutlineTrophy className="text-2xl" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {a.title}
                    </h3>
                    <span className="text-sm text-text-muted font-medium whitespace-nowrap">{a.date}</span>
                  </div>
                  <p className="text-text-main leading-relaxed mb-3">{a.description}</p>
                  {a.link && (
                    <a
                      href={a.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-white hover:underline transition-colors"
                    >
                      <AiOutlineLink className="text-base" />
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
