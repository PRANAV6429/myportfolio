import React from "react";
import Particle from "./Particle";
import Techstack from "./About/Techstack";
import Toolstack from "./About/Toolstack";
import { motion } from "framer-motion";

function Skills() {
  return (
    <section className="relative min-h-screen pt-24 pb-12 overflow-hidden">
      <Particle />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Skills Section */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="mb-20"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center text-text-main mb-12">
            Professional <strong className="text-primary text-glow">Skillset</strong>
          </h1>
          <Techstack />
        </motion.div>

        {/* Tools Section */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-20"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center text-text-main mb-12">
            <strong className="text-primary text-glow">Tools</strong> I Use
          </h1>
          <Toolstack />
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;
