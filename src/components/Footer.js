import React from "react";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="w-full bg-dark-bg/95 backdrop-blur-md border-t border-white/5 py-8 mt-16">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-text-main font-medium text-lg">
            Designed and Developed by <span className="text-primary font-semibold">Pranav Aditya</span>
          </h3>
        </div>

        {/* Center: Copyright */}
        <div className="text-center">
          <p className="text-text-muted text-sm pb-0 mb-0">
            Copyright © {year} PA
          </p>
        </div>

        {/* Right: Social Links */}
        <div className="flex justify-center md:justify-end gap-5">
          <a
            href="https://github.com/PRANAV6429"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-main hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20"
          >
            <AiFillGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/pranav-sai-aditya/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-main hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="mailto:pranavsai6429@gmail.com"
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-main hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20"
          >
            <AiFillMail size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
