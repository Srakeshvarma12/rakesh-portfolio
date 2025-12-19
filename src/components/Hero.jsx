export default function Hero() {
  return (
    <section id="home" className="hero-bg flex items-center justify-center relative">
      {/* Glow behind hero */}
      <div className="hero-glow" />

      {/* Hero content */}
      <div className="relative z-20 text-center max-w-3xl px-6 animate-float">
        {/* Badge */}
        <span className="seeking-badge">
        Actively Seeking Opportunities
        </span>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Crafting{" "}
          <span className="gradient-text">
            Beautiful & Functional
          </span>{" "}
          Web Experiences
        </h1>

        {/* Sub headline */}
        <p className="text-gray-300 text-lg md:text-xl mb-10">
          Full Stack Developer focused on building modern,
          scalable, and user-centric web applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center mt-8">
          {/* Resume Button */}
          <a
            href="https://1drv.ms/b/c/9497be968dad6f4b/IQAbQ99_zQF7T6WjVOufgv99Advfi1wDDRF3dij8de0hGxM?e=iJgYwa"
            target="_blank"
            rel="noopener noreferrer"
            className="
      px-7 py-3 rounded-full
      bg-white text-black font-semibold
      hover:scale-105 transition
    "
          >
            My Resume
          </a>

          {/* Secondary CTA */}
          {/* <a
            href="#projects"
            className="
      px-7 py-3 rounded-full
      bg-white/10 text-white
      border border-white/20
      hover:bg-white/20 transition
    "
          >
            View Projects
          </a> */}
        </div>

      </div>
    </section>
  );
}
