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
  // 🔽 TEMPORARY PLACEHOLDER (Delete this later) 🔽
  // I added this so you can SEE the stacking effect work!
  {
    role: "Frontend Developer", 
    company: "Demo Mode",
    duration: "Present",
    description: [
      "This is a demo card to test the stacking effect.",
      "Scroll down and you will see this card slide OVER the Codsoft card."
    ],
    tech: ["React", "Demo", "Testing"],
    link: "#",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADING (Centered & Outside the cards, just like Projects) */}
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

        {/* STACK CONTAINER */}
        <div className="flex flex-col pb-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // 🔒 STICKY LOGIC
              style={{ top: `calc(150px + ${index * 30}px)` }} 
              className="sticky mb-24 last:mb-0 self-start w-full"
            >
              {/* CARD DESIGN */}
              <div className="glass p-8 md:p-12 w-full border border-white/10 shadow-2xl backdrop-blur-xl">
                
                {/* Header: Role — Company */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {exp.role} <span className="text-gray-500 mx-2">—</span> <span className="text-purple-400">{exp.company}</span>
                  </h3>
                  
                  <span className="text-gray-400 font-medium whitespace-nowrap bg-white/5 px-4 py-1 rounded-full border border-white/10 w-fit">
                    {exp.duration}
                  </span>
                </div>

                {/* Description */}
                <div className="text-gray-300 leading-relaxed mb-8 space-y-3 text-lg">
                  {exp.description.map((point, i) => (
                    <p key={i}>• {point}</p>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
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