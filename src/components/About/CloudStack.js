import React from "react";
import { SiMicrosoftazure, SiGooglecloud } from "react-icons/si";
import { AiOutlineCloudServer } from "react-icons/ai";
import AWS from "../../Assets/TechIcons/AWS.svg";

function CloudStack() {
  const techData = [
    { name: "AWS", img: AWS },
    { name: "Microsoft Azure", icon: <SiMicrosoftazure className="text-4xl" /> },
    { name: "Google Cloud (GCP)", icon: <SiGooglecloud className="text-4xl" /> },
    { name: "Private Cloud", icon: <AiOutlineCloudServer className="text-4xl" /> },
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

export default CloudStack;
