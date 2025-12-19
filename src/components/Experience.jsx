import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="min-h-screen flex items-center justify-center px-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 150 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: "easeOut",
          },
        },
      }}
    >
      <div
        className="
          relative z-10
          max-w-6xl w-full
          glass
          p-10 md:p-14
        "
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          <span className="gradient-text">Experience</span>
        </h2>

        {/* EXPERIENCE CARD */}
        <div className="space-y-6 text-gray-300">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Web Development Intern — CODSOFT
            </h3>
              <p className="text-gray-400">09/2025 – 10/2025</p>

            <p className="mt-3 leading-relaxed">
              • Built responsive and user-friendly web interfaces using modern
              frontend technologies with a focus on clean UI and usability. <br />
              
              • Used Git and GitHub for version control, collaboration, and
              maintaining well-documented codebases.
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-3 mt-5">
              <span className="tech-pill">HTML</span>
              <span className="tech-pill">CSS</span>
              <span className="tech-pill">JavaScript</span>
              <span className="tech-pill">Git</span>
              <span className="tech-pill">GitHub</span>
            </div>

            {/* LIVE LINK */}
            <a
              href="https://srakeshvarma12.github.io/CODSOFT/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                mt-6
                px-8 py-3
                rounded-full
                bg-purple-600
                text-white font-medium
                hover:bg-purple-700
                transition
              "
            >
              View Work →
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
