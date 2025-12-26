import { motion } from "framer-motion";
import { link } from "framer-motion/client";

const projects = [
  {
    title: "Cost-Sensitive Wart Treatment Recommendation System",
    description: [
      "Built a machine-learning based decision support system to recommend optimal wart treatment methods by balancing treatment cost and effectiveness.",
      "Performed data preprocessing and feature engineering including one-hot encoding of categorical variables and feature scaling with StandardScaler."
    ],
    tech: ["Python", "Machine Learning", "Scikit-learn", "Streamlit"],
    link: "https://project---wart-treatment-gh7exzv3va8liynunuxemu.streamlit.app/",
    hasLink: true,
  },
  {
    title: "Netflix Movies and TV Shows Data Analysis using SQL",
    description: [
      "Designed and implemented a relational schema in MySQL to analyze 8,800+ Netflix records, ensuring accurate querying and scalable data analysis.",
      "Applied SQL-based data modeling and querying techniques to simulate backend-style data access patterns on a real-world media dataset."
    ],
    tech: ["MySQL", "SQL", "Data Analysis", "Database Design"],
    link: "https://github.com/Srakeshvarma12/Netflix-SQL-Project/tree/main/Netflix-SQL-Project", 
    hasLink: true,
  },
  {
    title: "E-Commerce Web Application Automation Testing",
    description:[
      "Built an end-to-end Selenium automation framework for an e-commerce web application using Python and Pytest, automating core user flows such as login, add-to-cart, and checkout.",
      "Implemented the Page Object Model (POM) for better test maintainability and generated HTML test reports to validate execution results."
    ],
    tech: ["Python, Selenium WebDriver, Pytest, POM, pytest-html, Git, GitHub"],
    link: "https://github.com/Srakeshvarma12/ecommerce-automation-testing",
    hasLink: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* PROJECTS LIST */}
        <div className="flex flex-col pb-24">
          {projects.map((project, index) => (
            // 1. OUTER DIV: Handles Sticky Positioning (No Animation)
            // We moved 'sticky' here so transforms don't break it.
            <div
              key={index}
              className="sticky mb-24 last:mb-0 w-full"
              style={{ 
                // Base top offset (120px) + Dynamic stacking offset (40px per card)
                top: `calc(120px + ${index * 40}px)` 
              }}
            >
              {/* 2. INNER DIV: Handles Animation (Framer Motion) */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                {/* 3. CARD DESIGN */}
                <div className="glass p-8 md:p-12 w-full border border-white/10 shadow-2xl backdrop-blur-xl">
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    {project.title}
                  </h3>

                  <div className="text-gray-300 leading-relaxed mb-8 space-y-3 text-lg">
                    {project.description.map((point, i) => (
                      <p key={i}>• {point}</p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech) => (
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
                        bg-[#a855f7] hover:bg-[#9333ea]
                        transition text-white font-medium
                        shadow-[0_0_20px_rgba(168,85,247,0.4)]
                        hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
                      "
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}