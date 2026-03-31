import React from "react";
import Particle from "./Particle";
import Techstack from "./About/Techstack";
import Toolstack from "./About/Toolstack";
import CloudStack from "./About/CloudStack";
import DevOpsStack from "./About/DevOpsStack";
import { motion } from "framer-motion";

function Skills() {
  return (
    <section className="relative min-h-screen pt-24 pb-12 overflow-hidden">
      <Particle />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Languages & DB Section */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-20"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center text-text-main mb-12">
            Languages, Dev & <strong className="text-primary text-glow">Databases</strong>
          </h1>
          <Techstack />
        </motion.div>
        
        {/* Cloud Computing Section */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-20"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center text-text-main mb-12">
            Cloud & <strong className="text-primary text-glow">Hybrid Infrastructure</strong>
          </h1>
          <CloudStack />
        </motion.div>

        {/* DevOps Section */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-20"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center text-text-main mb-12">
            DevOps & <strong className="text-primary text-glow">Infra Tools</strong>
          </h1>
          <DevOpsStack />
        </motion.div>

        {/* General Tools Section */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-20"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center text-text-main mb-12">
            General <strong className="text-primary text-glow">Tools</strong> I Use
          </h1>
          <Toolstack />
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;
