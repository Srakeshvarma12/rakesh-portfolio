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
    <div className="app-wrapper">
      <AnimatedBackground />
      <Navbar />
      <CursorMagnet />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
