import React, { useState } from "react";
import Particle from "./Particle";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import { FiSend, FiMapPin, FiCheckCircle } from "react-icons/fi";

const socialLinks = [
  {
    icon: <AiFillMail className="text-xl" />,
    label: "pranavsai6429@gmail.com",
    href: "mailto:pranavsai6429@gmail.com",
    color: "from-red-500 to-orange-400",
  },
  {
    icon: <AiFillPhone className="text-xl" />,
    label: "+91-6281740902",
    href: "tel:+916281740902",
    color: "from-emerald-500 to-teal-400",
  },
  {
    icon: <AiFillLinkedin className="text-xl" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pranav-sai-aditya/",
    color: "from-blue-600 to-sky-400",
  },
  {
    icon: <AiFillGithub className="text-xl" />,
    label: "GitHub",
    href: "https://github.com/PRANAV6429",
    color: "from-gray-600 to-gray-400",
  },
  {
    icon: <FiMapPin className="text-xl" />,
    label: "Visakhapatnam, India",
    href: null,
    color: "from-violet-500 to-purple-400",
  },
];

const elevatorStatements = [
  {
    emoji: "☁️",
    title: "Cloud Architect",
    text: "I design scalable, resilient cloud infrastructure on AWS — from VPC networking to serverless deployments.",
  },
  {
    emoji: "⚙️",
    title: "DevOps Engineer",
    text: "I automate everything — CI/CD pipelines, container orchestration, and infrastructure provisioning with Terraform & Kubernetes.",
  },
  {
    emoji: "🚀",
    title: "Deployment Specialist",
    text: "From Docker containers to EKS clusters, I ship production-ready applications with zero-downtime strategies.",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/pranavsai6429@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || "Not specified",
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.subject}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", company: "", subject: "", message: "" });
      }
    } catch (error) {
      // Fallback: open mailto
      const mailtoLink = `mailto:pranavsai6429@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\n${formData.message}`
      )}`;
      window.open(mailtoLink);
    }

    setSending(false);
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <Particle />
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
          >
            <FiSend className="text-2xl text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h1>
          <p className="text-text-muted text-lg max-w-xl mx-auto leading-relaxed">
            Have a project in mind? Need cloud infrastructure expertise? I'm always open to discussing new opportunities and creative ideas.
          </p>
        </motion.div>

        {/* Elevator statements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14"
        >
          {elevatorStatements.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative bg-[#0d1117] border border-white/[0.08] rounded-2xl p-5 hover:border-primary/30 transition-all duration-500"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-primary opacity-0 group-hover:opacity-[0.06] blur-xl transition-all duration-700" />
              <div className="relative">
                <span className="text-2xl mb-3 block">{s.emoji}</span>
                <h3 className="text-white font-bold mb-1.5">{s.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main content: Form + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Contact Form (3/5) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="relative bg-[#0d1117] border border-white/[0.08] rounded-3xl p-6 md:p-8 overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-cyan-400" />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    >
                      <FiCheckCircle className="text-6xl text-emerald-400 mx-auto mb-6" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-text-muted mb-6">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-text-main hover:bg-white/10 transition-all text-sm font-medium"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <h2 className="text-xl font-bold text-white mb-2">Send me a message</h2>
                    <p className="text-sm text-text-muted mb-6">Fill out the form below and I'll respond promptly.</p>

                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-text-muted uppercase tracking-wider font-semibold mb-2">
                          Your Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-text-muted uppercase tracking-wider font-semibold mb-2">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Company + Subject row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-text-muted uppercase tracking-wider font-semibold mb-2">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Acme Corp"
                          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-text-muted uppercase tracking-wider font-semibold mb-2">
                          Subject <span className="text-red-400">*</span>
                        </label>
                        <select
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300 appearance-none"
                          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25rem', backgroundRepeat: 'no-repeat' }}
                        >
                          <option value="" className="bg-[#0d1117]">Select a topic...</option>
                          <option value="Cloud/DevOps Consultation" className="bg-[#0d1117]">Cloud / DevOps Consultation</option>
                          <option value="Job Opportunity" className="bg-[#0d1117]">Job Opportunity</option>
                          <option value="Freelance Project" className="bg-[#0d1117]">Freelance Project</option>
                          <option value="Collaboration" className="bg-[#0d1117]">Collaboration</option>
                          <option value="General Inquiry" className="bg-[#0d1117]">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs text-text-muted uppercase tracking-wider font-semibold mb-2">
                        Your Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, requirements, or just say hello..."
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={sending}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-primary to-blue-500 text-white font-semibold text-sm hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300 disabled:opacity-50"
                    >
                      {sending ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <FiSend />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right sidebar (2/5) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Direct contact card */}
            <div className="relative bg-[#0d1117] border border-white/[0.08] rounded-3xl p-6 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400" />
              <h3 className="text-lg font-bold text-white mb-5">Direct Contact</h3>
              <div className="space-y-3">
                {socialLinks.map((link, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                  >
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("mailto") || link.href.startsWith("tel") ? "_self" : "_blank"}
                        rel="noreferrer"
                        className="group flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-300"
                      >
                        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          {link.icon}
                        </div>
                        <span className="text-sm text-text-muted group-hover:text-white transition-colors">{link.label}</span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center text-white shadow-md`}>
                          {link.icon}
                        </div>
                        <span className="text-sm text-text-muted">{link.label}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="relative bg-[#0d1117] border border-white/[0.08] rounded-3xl p-6 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-violet-400" />
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-400 animate-ping opacity-40" />
                </div>
                <span className="text-sm text-emerald-400 font-semibold">Available for opportunities</span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Currently open to full-time roles, internships, and freelance projects in <span className="text-primary font-medium">Cloud Computing</span> and <span className="text-primary font-medium">DevOps Engineering</span>.
              </p>
              <div className="flex flex-wrap gap-2">
                {["AWS", "DevOps", "Docker", "Kubernetes", "CI/CD", "Terraform"].map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-primary/10 text-[11px] text-primary font-medium border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="relative bg-[#0d1117] border border-white/[0.08] rounded-3xl p-6 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-400" />
              <h3 className="text-lg font-bold text-white mb-2">⚡ Fast Response</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                I typically respond within <span className="text-white font-semibold">24 hours</span>. For urgent inquiries, feel free to reach out via phone or LinkedIn.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
