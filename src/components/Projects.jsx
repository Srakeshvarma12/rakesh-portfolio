import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="relative z-10 max-w-6xl w-full glass p-10 md:p-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="gradient-text">Projects</span>
        </h2>

        <h3 className="text-2xl font-semibold text-white mb-4">
          Cost-Sensitive Wart Treatment Recommendation System
        </h3>

        <p className="text-gray-300 leading-relaxed mb-8">
          • Built a machine-learning based decision support system to recommend
          optimal wart treatment methods by balancing treatment cost and
          effectiveness.
          <br />
          • Performed data preprocessing and feature engineering including
          one-hot encoding and feature scaling with StandardScaler.
        </p>

        <div className="flex flex-wrap gap-3 mt-5">
          <span className="tech-pill">Python</span>
          <span className="tech-pill">Machine Learning</span>
          <span className="tech-pill">Scikit-learn</span>
          <span className="tech-pill">Streamlit</span>
          <span className="tech-pill">Pickle</span>
        </div>

        <br />

        <a
          href="https://project---wart-treatment-gh7exzv3va8liynunuxemu.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition text-white font-medium"
        >
          Live Demo →
        </a>
      </div>
    </motion.section>
  );
}
