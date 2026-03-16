import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className="bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 shadow-xl">
      <blockquote className="space-y-6">
        <p className="text-lg text-text-muted leading-relaxed">
          Hi everyone! I’m <span className="text-primary font-semibold">Pranav Sai Aditya</span>{" "}
          from <span className="text-primary font-semibold">Visakhapatnam, India</span>.
          <br />
          <br />
          I’m currently a{" "}
          <span className="text-primary font-semibold">Software Developer Engineer</span> passionate about{" "}
          <span className="text-primary font-semibold">DevOps and Cloud Computing</span>.
          <br />
          I'm currently a student at Lovely Professional University and I enjoy{" "}
          <span className="text-primary font-semibold">architecting</span>{" "}
          <span className="text-primary font-semibold">CI/CD pipelines</span>.
          <br />
          <br />
          Outside of My domain work, I love engaging in activities that keep me
          creative and inspired:
        </p>

        <ul className="space-y-3 pl-4">
          <li className="flex items-center gap-3 text-text-main group">
            <ImPointRight className="text-primary transition-transform group-hover:translate-x-1" />  
            <span>Playing Basketball 🏀</span>
          </li>
          <li className="flex items-center gap-3 text-text-main group">
            <ImPointRight className="text-primary transition-transform group-hover:translate-x-1" /> 
            <span>Reading self-help books 📚</span>
          </li>
          <li className="flex items-center gap-3 text-text-main group">
            <ImPointRight className="text-primary transition-transform group-hover:translate-x-1" /> 
            <span>Traveling and Exploring New Places 🌍</span>
          </li>
        </ul>

        <div className="pt-6 border-t border-white/10 mt-6">
          <p className="text-xl font-medium text-primary/80 italic mb-2">
            "I design and deploy systems that don’t just work they scale."
          </p>
          <footer className="text-sm text-text-muted flex items-center gap-2">
            <div className="w-8 h-[1px] bg-primary"></div>
            Pranav Aditya
          </footer>
        </div>
      </blockquote>
    </div>
  );
}

export default AboutCard;
