import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Cost-Sensitive Wart Treatment Recommendation System",
    description: [
      "Built a machine-learning based decision support system to recommend optimal wart treatment methods by balancing treatment cost and effectiveness.",
      "Performed data preprocessing and feature engineering including one-hot encoding of categorical variables and feature scaling with StandardScaler, ensuring consistency between training and inference pipelines."
    ],
    techStack: ["Python", "Pandas", "Numpy", "Scikit-learn", "Streamlit", "GitHub", "Pickle"],
    link: "https://project---wart-treatment-gh7exzv3va8liynunuxemu.streamlit.app/",
    hasLink: true
  },
  {
    title: "Netflix Movies and TV Shows Data Analysis using SQL",
    description: [
      "Designed and implemented a relational schema in MySQL to analyze 8,800+ Netflix records, ensuring accurate querying and scalable data analysis.",
      "Applied SQL-based data modeling and querying techniques to simulate backend-style data access patterns on a real-world media dataset."
    ],
    techStack: ["MySQL", "SQL", "Relational Schema", "Data Modeling", "Data Analysis"],
    link: "https://github.com/Srakeshvarma12/Netflix-SQL-Project/tree/main/Netflix-SQL-Project",
    hasLink: true
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Title Section - Static at the top */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="gradient-text">Projects</span>
        </motion.h2>

        {/* Projects Container */}
        <div className="flex flex-col gap-20"> {/* gap-20 creates space to scroll between stacks */}
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="sticky top-28 self-start w-full" 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div
                className="
                  glass
                  p-10 md:p-14
                  rounded-2xl
                  border border-white/10
                  backdrop-blur-lg
                  shadow-2xl
                "
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {project.title}
                </h3>

                <div className="text-gray-300 leading-relaxed mb-8 space-y-2">
                  {project.description.map((point, i) => (
                    <p key={i}>• {point}</p>
                  ))}
                </div>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-3 mt-5 mb-8">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.hasLink && (
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
                    Live Demo →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}