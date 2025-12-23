import { motion } from "framer-motion";

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
    link: "https://github.com/your-github/netflix-sql-project",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
        <span className="gradient-text">Projects</span>
      </h2>

      <div className="relative space-y-32">
        {projects.map((project, index) => (
          <StickyCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function StickyCard({ project, index }) {
  return (
    <motion.div
      className="sticky top-28 flex justify-center"
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ zIndex: 10 + index }}
    >
      <div
        className="
          glass
          w-full max-w-5xl
          p-10 md:p-14
        "
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          {project.title}
        </h3>

        <div className="text-gray-300 space-y-2 mb-6">
          {project.description.map((line, i) => (
            <p key={i}>• {line}</p>
          ))}
        </div>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tech.map((t) => (
            <span key={t} className="tech-pill">
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
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
      </div>
    </motion.div>
  );
}
