import { motion } from "framer-motion";

const projects = [
  {
    title: "Cost-Sensitive Wart Treatment Recommendation System",
    description: [
      "Built a machine-learning based decision support system to recommend optimal wart treatment methods.",
      "Performed preprocessing and feature engineering with StandardScaler."
    ],
    tech: ["Python", "Machine Learning", "Scikit-learn", "Streamlit"],
    link: "https://project---wart-treatment-gh7exzv3va8liynunuxemu.streamlit.app/",
  },
  {
    title: "Netflix Movies and TV Shows Data Analysis using SQL",
    description: [
      "Designed a relational schema in MySQL for 8,800+ Netflix records.",
      "Analyzed content distribution, trends, ratings, and durations.",
      "Structured reusable SQL scripts with industry-style documentation."
    ],
    tech: ["MySQL", "SQL", "Data Analysis"],
    link: "#",
  },
  {
    title: "Full-Stack Portfolio Website",
    description: [
      "Developed a responsive web application using React, HTML, CSS, and JavaScript.",
      "Deployed the application using Vercel and Render.",
      "Used Git and GitHub for version control and deployment workflows."
    ],
    tech: ["React", "Tailwind CSS", "Vercel", "Render", "GitHub"],
    link: "#",
  },
  {
    title: "Web Development Intern — CodSoft",
    description: [
      "Developed and deployed multiple web applications using HTML, CSS, and JavaScript.",
      "Worked in an Agile environment using Git and GitHub.",
      "Debugged and solved real-world frontend issues independently."
    ],
    tech: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    link: "#",
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative"
      style={{ height: `${projects.length * 110}vh` }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center pt-32 mb-24">
        <span className="gradient-text">Projects</span>
      </h2>

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          index={index}
        />
      ))}
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="sticky top-32 flex justify-center"
      style={{
        zIndex: 30 + index,
        marginTop: index === 0 ? "0px" : "-140px",
      }}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.6 }}
    >
      <div className="glass max-w-5xl w-full p-10 md:p-14">
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          {project.title}
        </h3>

        <div className="text-gray-300 space-y-2 mb-6">
          {project.description.map((line, i) => (
            <p key={i}>• {line}</p>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {project.tech.map((t) => (
            <span key={t} className="tech-pill">
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition text-white font-medium"
        >
          View Project →
        </a>
      </div>
    </motion.div>
  );
}
