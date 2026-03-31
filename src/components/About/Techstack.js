import React from "react";
import { SiSpringboot, SiGnubash, SiMysql, SiNextdotjs } from "react-icons/si";
import Go from "../../Assets/TechIcons/go.svg";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg"; // PostgreSQL
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

function Techstack() {
  const techData = [
    { name: "C++", img: C },
    { name: "Python", img: Python },
    { name: "Java", img: Java },
    { name: "Javascript", img: Javascript },
    { name: "Typescript", img: Typescript },
    { name: "Go", img: Go },
    { name: "Node.Js", img: Node },
    { name: "React.Js", img: ReactIcon },
    { name: "Next.js", icon: <SiNextdotjs className="text-4xl" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-4xl" /> },
    { name: "Bash", icon: <SiGnubash className="text-4xl" /> },
    { name: "MongoDB", img: Mongo },
    { name: "PostgreSQL", img: SQL },
    { name: "MySQL", icon: <SiMysql className="text-4xl" /> },
    { name: "Firebase", img: Firebase },
    { name: "Redux", img: Redux },
    { name: "Tailwind CSS", img: Tailwind },
    { name: "Material UI", img: MUI },
    { name: "Postman", img: Postman },
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

export default Techstack;
