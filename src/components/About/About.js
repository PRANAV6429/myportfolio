import React from "react";
import Particle from "../Particle";
import Github from "./Github";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="relative min-h-screen pt-24 pb-20 overflow-hidden" id="about">
      <Particle />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center text-text-main mb-12">
            About <strong className="text-primary text-glow">Me</strong>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {/* Left Column (1/3) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Quick Facts */}
            <div className="bg-dark-card/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:border-primary/40 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-6">Quick Facts</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 mt-1 shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider font-semibold mb-1">Location</p>
                    <p className="text-white font-medium">Visakhapatnam, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mt-1 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                    <span className="text-xl">🎓</span>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider font-semibold mb-1">Education</p>
                    <p className="text-white font-medium">Pursuing B.Tech CSE</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 mt-1 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                    <span className="text-xl">💼</span>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider font-semibold mb-1">Experience</p>
                    <p className="text-white font-medium">Software Developer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Beyond the Terminal */}
            <div className="bg-dark-card/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:border-primary/40 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Beyond the Terminal</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
                  <span className="text-2xl drop-shadow-md">🏀</span>
                  <span className="text-text-main font-medium">Playing Basketball</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
                  <span className="text-2xl drop-shadow-md">📚</span>
                  <span className="text-text-main font-medium">Reading Books</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
                  <span className="text-2xl drop-shadow-md">🌍</span>
                  <span className="text-text-main font-medium">Exploring Places</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (2/3) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* My Journey */}
            <div className="bg-dark-card/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl hover:border-primary/40 transition-all duration-300 flex-grow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full blur-2xl pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold text-primary text-glow mb-5">My Journey</h3>
              <p className="text-text-main text-lg leading-relaxed mb-5">
                Hello! I'm <span className="font-semibold text-white">Pranav Sai Aditya</span>, a passionate developer with a deep fascination for <span className="text-primary font-medium">Cloud Computing</span> and <span className="text-primary font-medium">DevOps</span>.
              </p>
              <p className="text-text-main text-lg leading-relaxed mb-5">
                My journey in tech began with a curiosity for how large-scale systems operate, which quickly evolved into a focused expertise in architecting robust digital infrastructure. I specialize in designing, automating, and deploying applications using modern cloud services and CI/CD pipelines.
              </p>
              <p className="text-text-main text-lg leading-relaxed">
                What drives me is the intersection of development and operations—finding that perfect balance between writing clean code and ensuring functional, scalable, and highly-available deployments. I'm constantly expanding my skills through hands-on cloud projects and keeping up with emerging technologies.
              </p>
            </div>

            {/* My Approach */}
            <div className="bg-dark-card/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl hover:border-blue-400/40 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full blur-2xl pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold text-blue-400 mb-5" style={{textShadow: "0 0 15px rgba(96, 165, 250, 0.4)"}}>My Approach</h3>
              <p className="text-text-main text-lg leading-relaxed">
                I believe in creating architecture that's not just functional, but resilient. Every pipeline I build and every system I deploy aims to solve real problems and enhance operational efficiency. I value clean code, automated workflows, collaborative development, and continuous learning as the foundations of great software.
              </p>
              
              <div className="mt-8 p-5 border-l-4 border-primary bg-primary/10 rounded-r-xl">
                <p className="text-white italic font-medium text-lg leading-relaxed">
                  "I design and deploy systems that don't just work, they scale."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* GitHub Contributions */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="mt-12"
        >
          <Github />
        </motion.div>

      </div>
    </section>
  );
}

export default About;
