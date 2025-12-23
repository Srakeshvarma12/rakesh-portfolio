import { motion } from "framer-motion";

const experiences = [
  {
    role: "Web Development Intern",
    company: "CODSOFT",
    duration: "09/2025 – 10/2025",
    description: [
      "Built responsive and user-friendly web interfaces using modern frontend technologies with a focus on clean UI and usability.",
      "Used Git and GitHub for version control, collaboration, and maintaining well-documented codebases."
    ],
    tech: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    link: "https://srakeshvarma12.github.io/CODSOFT/",
  },
  // Add more experience items here to see the stacking effect
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        
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
            <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* ========================================= */}
        {/* 2. CARDS CONTAINER                        */}
        {/* ========================================= */}
        <div className="flex flex-col pb-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // Sticky Logic
              style={{ top: `calc(6rem + ${index * 20}px)` }} 
              className="sticky mb-12 last:mb-0"
            >
              {/* THE GLASS CARD STARTS HERE */}
              <div className="glass p-8 md:p-12 w-full transition-transform duration-300">
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {exp.role} <span className="text-purple-400">@ {exp.company}</span>
                  </h3>
                  <span className="text-gray-400 font-medium whitespace-nowrap bg-white/5 px-4 py-1 rounded-full border border-white/10">
                    {exp.duration}
                  </span>
                </div>

                <div className="text-gray-300 leading-relaxed mb-8 space-y-3 text-lg">
                  {exp.description.map((point, i) => (
                    <p key={i}>• {point}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {exp.link && (
                  <a
                    href={exp.link}
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
                    View Work →
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