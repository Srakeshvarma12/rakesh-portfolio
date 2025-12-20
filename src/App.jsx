import CursorMagnet from "./components/CursorMagnet";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* Full-screen animated background */}
      <AnimatedBackground />

      {/* Fixed navbar */}
      <Navbar />

      {/* Cursor effect */}
      <CursorMagnet />

      {/* ✅ GLOBAL CENTER WRAPPER */}
      <main className="app-container">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
