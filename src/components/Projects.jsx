import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Cost-Sensitive Wart Treatment Recommendation System",
    description: [
      "Built a machine-learning based decision support system to recommend optimal wart treatment methods.",
      "Performed preprocessing and feature engineering with StandardScaler.",
    ],
    tech: ["Python", "Machine Learning", "Scikit-learn", "Streamlit"],
    link: "https://project---wart-treatment-gh7exzv3va8liynunuxemu.streamlit.app/",
  },
  {
    title: "Netflix Movies and TV Shows Data Analysis using SQL",
    description: [
      "Designed a relational schema in MySQL for 8,800+ Netflix records.",
      "Analyzed content distribution, trends, ratings, and durations.",
      "Structured reusable SQL scripts with industry-style documentation.",
    ],
    tech: ["MySQL", "SQL", "Data Analysis"],
    link: "https://github.com/Srakeshvarma12/Netflix-SQL-Project/tree/main/Netflix-SQL-Project", // optional
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative min-h-[200vh] px-6"
    >
      {projects.map((project, index) => {
        const y = useTransform(
          scrollYProgress,
          [index * 0.3, index * 0.3 + 0.3],
          [100, 0]
        );

        const scale = useTransform(
          scrollYProgress,
          [index * 0.3, index * 0.3 + 0.3],
          [0.95, 1]
        );

        return (
          <motion.div
            key={index}
            style={{ y, scale }}
            className="
              sticky top-24
              mx-auto max-w-6xl
              glass
              p-10 md:p-14
              mb-24
            "
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              {project.title}
            </h2>

            <ul className="text-gray-300 space-y-2 mb-6">
              {project.description.map((line, i) => (
                <li key={i}>• {line}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 mb-6">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  px-8 py-3 rounded-full
                  bg-purple-600 hover:bg-purple-700
                  transition text-white font-medium
                "
              >
                View Project →
              </a>
            )}
          </motion.div>
        );
      })}
    </section>
  );
}
