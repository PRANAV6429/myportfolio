import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

function ProjectCards(props) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full flex flex-col bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_15px_40px_rgba(139,92,246,0.15)] hover:border-primary/30 transition-colors duration-300"
    >
      <div className="relative overflow-hidden group">
        <img 
          src={props.imgPath} 
          alt={props.title} 
          className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors">
          {props.title}
        </h3>
        
        <p className="text-sm text-text-muted leading-relaxed mb-6 flex-grow text-justify">
          {props.description}
        </p>
        
        <div className="flex flex-wrap gap-3 mt-auto">
          <a 
            href={props.ghLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-white/5 text-text-main hover:bg-white/10 hover:text-white border border-white/10 transition-all duration-300 font-medium text-sm"
          >
            <BsGithub size={18} />
            {props.isBlog ? "Blog" : "GitHub"}
          </a>
          
          {!props.isBlog && props.demoLink && (
            <a 
              href={props.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-primary text-white hover:bg-primary-dark shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all duration-300 font-medium text-sm"
            >
              <CgWebsite size={18} />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCards;
