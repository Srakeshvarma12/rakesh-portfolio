import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";
import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 glass p-10 md:p-14 will-change-transform"
      >
        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={profileImg}
            alt="Rakesh Varma"
            className="w-44 h-44 rounded-2xl object-cover border border-white/20 mb-6"
          />

          <p className="text-gray-300 leading-relaxed">
            I’m a Computer Science Engineering student with strong fundamentals in Python and frontend development.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Through internships and academic projects, I’ve gained hands-on experience with modern web technologies.
          </p>

          <span className="text-sm text-gray-400 flex items-center gap-2 mt-4">
            📍 Andhra Pradesh, India
          </span>
        </div>

        {/* RIGHT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <p className="font-medium text-white">
              Bachelor of Technology in Computer Science Engineering
            </p>
            <p className="text-gray-400">GITAM University, Bangalore</p>
            <p className="text-gray-400">2021 – 2025</p>
          </div>

          <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>

          <div className="flex flex-wrap gap-3">
            <Skill icon={<SiPython />} name="Python" />
            <Skill icon={<SiHtml5 />} name="HTML" />
            <Skill icon={<SiCss3 />} name="CSS" />
            <Skill icon={<SiJavascript />} name="JavaScript" />
            <Skill icon={<SiReact />} name="ReactJS" />
            <Skill icon={<SiTailwindcss />} name="Tailwind CSS" />
            <Skill icon={<SiMysql />} name="MySQL" />
            <Skill icon={<SiGit />} name="Git" />
            <Skill icon={<SiGithub />} name="GitHub" />
            <Skill icon={<SiVercel />} name="Vercel" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Skill({ icon, name }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/20 text-sm text-white">
      {icon}
      {name}
    </div>
  );
}
