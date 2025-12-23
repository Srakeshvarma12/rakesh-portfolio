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
    link: "https://github.com/Srakeshvarma12/Netflix-SQL-Project/tree/main/Netflix-SQL-Project",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Stacked Cards Container */}
        <div className="flex flex-col pb-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // STICKY LOGIC HERE:
              // 'sticky' makes it stick. 'top-24' sets the base position.
              // We add a dynamic top offset so they stack nicely like a deck of cards.
              style={{ top: `calc(6rem + ${index * 20}px)` }} 
              className="sticky mb-12 last:mb-0" 
            >
              <div className="glass p-8 md:p-12 w-full transition-transform duration-300">
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <div className="text-gray-300 leading-relaxed mb-8 space-y-3 text-lg">
                  {project.description.map((point, i) => (
                    <p key={i}>• {point}</p>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    px-8 py-3 rounded-full
                    bg-[#a855f7] hover:bg-[#9333ea]
                    transition text-white font-medium
                    shadow-[0_0_20px_rgba(168,85,247,0.4)]
                    hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
                  "
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}