import React from "react";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

function Home2() {
  return (
    <section className="py-20 bg-dark-bg/50 relative z-10" id="about">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Text Description */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/3"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-text-main">
              LET ME <span className="text-primary text-glow"> INTRODUCE </span> MYSELF
            </h1>
            
            <div className="text-lg md:text-xl text-text-muted space-y-6 leading-relaxed">
              <p>
                I’m a Software Engineer passionate about turning ideas into scalable, 
                cloud-ready solutions. With hands-on experience in Cloud Computing, DevOps, 
                and Backend Development, I enjoy building reliable systems, optimizing performance, 
                and delivering intuitive user experiences. I’m driven by continuous learning and real-world problem solving.
              </p>
              
              <p>
                I’m proficient in 
                <span className="text-primary font-semibold"> JavaScript, C++, Python, Go, and Java </span>
                — and I enjoy working across both backend and frontend stacks to design high-performance, scalable systems, leveraging cloud technologies and automation.
              </p>
              
              <p>
                My key areas of interest include developing 
                <span className="text-primary font-semibold"> DevOps practices, Cloud Platforms, Infrastructure as Code, </span>
                and exploring new ways to bridge on-chain and off-chain systems.
              </p>
              
              <p>
                Whenever possible, I love building projects with 
                <span className="text-primary font-semibold"> Docker, Kubernetes, Terraform, Ansible, </span> 
                and building automation pipelines along with modern frameworks like 
                <span className="text-primary font-semibold"> React.js </span> and 
                <span className="text-primary font-semibold"> Next.js</span>.
              </p>
            </div>
          </motion.div>

          {/* Avatar Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/3 flex justify-center lg:justify-end"
          >
            <Tilt 
              tiltMaxAngleX={10} 
              tiltMaxAngleY={10} 
              perspective={1000} 
              scale={1.05} 
              transitionSpeed={2000}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary/30 p-4 bg-white/5 backdrop-blur-sm shadow-[0_0_30px_rgba(139,92,246,0.2)]"
            >
              <img src={myImg} className="w-full h-full object-contain" alt="avatar" />
            </Tilt>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Home2;
