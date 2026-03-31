import React from "react";
import { SiGithubactions, SiLinux, SiTerraform, SiAnsible, SiPrometheus, SiGrafana } from "react-icons/si";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";

function DevOpsStack() {
  const techData = [
    { name: "Kubernetes", img: Kubernates },
    { name: "Git / GitOps", img: Git },
    { name: "GitHub Actions", icon: <SiGithubactions className="text-4xl" /> },
    { name: "Docker", img: Docker },
    { name: "Linux", icon: <SiLinux className="text-4xl" /> },
    { name: "Terraform", icon: <SiTerraform className="text-4xl" /> },
    { name: "Ansible", icon: <SiAnsible className="text-4xl" /> },
    { name: "Prometheus", icon: <SiPrometheus className="text-4xl" /> },
    { name: "Grafana", icon: <SiGrafana className="text-4xl" /> },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 pb-12">
      {techData.map((tech, index) => (
        <div 
          key={index} 
          className="w-32 h-32 md:w-36 md:h-36 flex flex-col items-center justify-center p-4 bg-dark-card/40 border border-white/5 backdrop-blur-sm rounded-xl hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)] hover:border-primary/30 transition-all duration-300 group cursor-pointer"
        >
          <div className="flex-grow flex items-center justify-center text-[#e2e8f0] group-hover:text-primary transition-colors duration-300 mb-2">
            {tech.img ? (
              <img 
                src={tech.img} 
                alt={tech.name} 
                className="w-12 h-12 md:w-16 md:h-16 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md" 
              />
            ) : (
              <div className="group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
            )}
          </div>
          <div className="text-xs md:text-sm font-medium text-text-muted group-hover:text-primary transition-colors text-center w-full truncate px-1">
            {tech.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DevOpsStack;
