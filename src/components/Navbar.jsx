import {
  Home,
  User,
  Briefcase,
  Layers,
  Mail,
  Linkedin,
  Github,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav
  className="
    fixed top-6 left-1/2 -translate-x-1/2
    z-[9999]
    px-6 py-3
    rounded-full
    bg-white/10 backdrop-blur-xl
    border border-white/20
    flex items-center gap-5
  "
>

      {/* Section links */}
      <a href="#home" className="nav-icon"><Home size={18} /></a>
      <a href="#about" className="nav-icon"><User size={18} /></a>
      <a href="#experience" className="nav-icon"><Briefcase size={18} /></a>
      <a href="#projects" className="nav-icon"><Layers size={18} /></a>
      <a href="#contact" className="nav-icon"><Mail size={18} /></a>

      {/* Divider */}
      <span className="w-px h-5 bg-white/30 mx-1" />

      {/* Social */}
      <a
        href="https://www.linkedin.com/in/sangaraju-rakesh-varma/"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-icon"
      >
        <Linkedin size={18} />
      </a>

      <a
        href="https://github.com/srakeshvarma12"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-icon"
      >
        <Github size={18} />
      </a>
    </nav>
  );
}
