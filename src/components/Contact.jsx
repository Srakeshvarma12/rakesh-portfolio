import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, CheckCircle, XCircle } from "lucide-react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // "", "success", "error"
  const [loading, setLoading] = useState(false);

  // ✅ Auto-hide message after 3 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("https://rakesh-portfolio-backend-cvyp.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="glass max-w-4xl w-full rounded-3xl p-10 md:p-14"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Contact <span className="gradient-text">Me</span>
        </h2>

        <p className="text-gray-300 mb-8 max-w-xl">
          Have a question or want to work together? Send a message or reach me
          directly via email.
        </p>

        {/* Email Button */}
        <a
          href="mailto:srvarma2004@gmail.com"
          className="
            inline-flex items-center gap-3
            px-6 py-3 mb-10
            rounded-full
            bg-white/5 border border-white/20
            text-white
            hover:border-purple-500 hover:text-purple-400
            transition
          "
        >
          <Mail size={18} />
          srvarma2004@gmail.com
        </a>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full px-5 py-4 rounded-xl
              bg-white/5 border border-white/20
              text-white placeholder-gray-400
              focus:outline-none focus:border-purple-500
              transition
            "
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="
              w-full px-5 py-4 rounded-xl
              bg-white/5 border border-white/20
              text-white placeholder-gray-400
              focus:outline-none focus:border-purple-500
              transition resize-none
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
              inline-flex items-center justify-center
              px-10 py-4 rounded-full
              bg-purple-600 hover:bg-purple-700
              transition font-semibold text-white
              disabled:opacity-50
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status Messages */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-green-400 mt-4"
              >
                <CheckCircle size={20} />
                Message sent successfully!
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-red-400 mt-4"
              >
                <XCircle size={20} />
                Something went wrong. Please try again.
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </section>
  );
}
