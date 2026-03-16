import React from "react";
// Please ensure your new photo is named 'profile.jpg' and placed in the 'src/Assets' folder.
import myPhoto from "../../Assets/profile.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <div className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden" id="home">
        <Particle />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-3/5 text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-4 leading-tight">
                Hi There!{" "}
                <motion.span
                  className="inline-block"
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop" }}
                  role="img"
                  aria-labelledby="wave"
                >
                  👋🏻
                </motion.span>
              </h1>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-8 leading-tight">
                I'M <span className="text-primary text-glow">BOKAM PRANAV SAI ADITYA</span>
              </h1>

              <div className="text-2xl md:text-3xl font-medium text-primary/90 h-16 mb-8">
                <Type />
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
              >
                <Link to="/project" className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transform hover:-translate-y-1">
                  View Projects
                </Link>
                <Link to="/resume" className="px-8 py-3 rounded-full bg-white/10 text-white font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-1">
                  Download Resume
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-col items-center lg:items-start"
              >
                <p className="text-text-muted mb-4 font-medium">Connect with me</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/PRANAV6429"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-text-main hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20"
                  >
                    <AiFillGithub size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pranav-sai-aditya/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-text-main hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20"
                  >
                    <FaLinkedinIn size={22} />
                  </a>
                  <a
                    href="mailto:pranavsai6429@gmail.com"
                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-text-main hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20"
                  >
                    <AiFillMail size={24} />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Photo Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-2/5 flex justify-center mt-10 lg:mt-0"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_40px_rgba(139,92,246,0.3)] animate-float">
                <img
                  src={myPhoto}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <Home2 />
    </section>
  );
}

export default Home;
