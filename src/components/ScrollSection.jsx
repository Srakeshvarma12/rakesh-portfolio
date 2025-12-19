import { motion } from "framer-motion";

export default function ScrollSection({ children, id }) {
  return (
    <motion.section
      id={id}
      className="min-h-screen flex items-center justify-center px-6"
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -120 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1], // premium easing
      }}
      viewport={{ once: false, amount: 0.25 }}
    >
      {children}
    </motion.section>
  );
}
