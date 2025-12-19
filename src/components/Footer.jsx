export default function Footer() {
  return (
    <footer className="relative px-6 pb-10">
      <div className="glass max-w-6xl mx-auto rounded-3xl p-8 md:p-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">
              Rakesh Varma
            </h3>
            <p className="text-sm text-gray-400">
              Full Stack Developer
            </p>
          </div>

          {/* Right */}
          <div className="flex gap-6 text-sm">
            <a
              href="https://www.linkedin.com/in/sangaraju-rakesh-varma/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/srakeshvarma12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="h-px bg-white/10 my-6" />

        <p className="text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Rakesh Varma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
