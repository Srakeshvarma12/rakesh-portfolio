import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";
import {
  SiPython, SiHtml5, SiCss3, SiJavascript, SiReact,
  SiTailwindcss, SiMysql, SiGit, SiGithub, SiVercel,
} from "react-icons/si";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-24 px-6 flex flex-col items-center justify-center relative">
      
      {/* ========================================= */}
      {/* 1. HEADING (OUTSIDE THE GLASS CARD)       */}
      {/* ========================================= */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          About <span className="gradient-text">Me</span>
        </h2>
      </motion.div>

      {/* ========================================= */}
      {/* 2. GLASS CARD (CONTENT ONLY)              */}
      {/* ========================================= */}
      <motion.div
        className="relative z-10 max-w-6xl w-full glass p-10 md:p-14 border border-white/10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN: Image & Bio */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src={profileImg}
              alt="Rakesh Varma"
              className="w-44 h-44 rounded-2xl object-cover border-2 border-white/20 mb-8 shadow-2xl"
            />

            <p className="text-gray-300 leading-relaxed mb-4 text-lg">
              I’m a Computer Science Engineering student with strong fundamentals
              in Python and frontend development. I enjoy building clean,
              responsive interfaces and logic-driven applications.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              Through internships and academic projects, I’ve gained hands-on
              experience with modern web technologies, version control, and
              structured development practices.
            </p>
            
            <div className="mt-8">
              <span className="text-sm text-gray-400 flex items-center gap-2 bg-white/5 px-5 py-2 rounded-full border border-white/10">
                📍 Andhra Pradesh, India
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Education & Tech Stack */}
          <div className="flex flex-col justify-center h-full">
            
            {/* Education Section */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-5 text-white flex items-center gap-3">
                <span className="w-2 h-8 bg-purple-500 rounded-full inline-block"></span>
                Education
              </h3>
              
              <div className="ml-5">
                <p className="font-bold text-xl text-white">
                  Bachelor of Technology in CSE
                </p>
                <p className="text-purple-400 font-medium mt-1 text-lg">
                  GITAM University, Bangalore
                </p>
                <p className="text-gray-400 mt-1">2021 – 2025</p>
              </div>
            </div>

            {/* Tech Stack Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
                <span className="w-2 h-8 bg-pink-500 rounded-full inline-block"></span>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3 ml-2">
                <Skill icon={<SiPython />} name="Python" />
                <Skill icon={<SiHtml5 />} name="HTML" />
                <Skill icon={<SiCss3 />} name="CSS" />
                <Skill icon={<SiJavascript />} name="JavaScript" />
                <Skill icon={<SiReact />} name="ReactJS" />
                <Skill icon={<SiTailwindcss />} name="Tailwind" />
                <Skill icon={<SiMysql />} name="MySQL" />
                <Skill icon={<SiGit />} name="Git" />
                <Skill icon={<SiGithub />} name="GitHub" />
                <Skill icon={<SiVercel />} name="Vercel" />
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Simple Helper Component for Skills
function Skill({ icon, name }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/20 text-sm text-gray-200 hover:bg-white/10 hover:border-purple-500/50 transition duration-300 cursor-default">
      <span className="text-lg text-purple-400">{icon}</span>
      {name}
    </div>
  );
}