import React from "react";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";

function Toolstack() {
  const tools = [
    { name: "Mac OS", img: macOs },
    { name: "Google Chrome", img: chrome },
    { name: "Vs Code", img: vsCode },
    { name: "IntelliJ", img: intelliJ },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 pb-12">
      {tools.map((tool, index) => (
        <div 
          key={index} 
          className="w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center p-4 bg-dark-card/40 border border-white/5 backdrop-blur-sm rounded-xl hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)] transition-all duration-300 group cursor-pointer"
        >
          <img 
            src={tool.img} 
            alt={tool.name} 
            className="w-12 h-12 md:w-16 md:h-16 mb-4 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md" 
          />
          <div className="text-sm md:text-base font-medium text-text-muted group-hover:text-primary transition-colors text-center">
            {tool.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;
