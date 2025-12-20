export default function App() {
  return (
    <div className="app-wrapper">
      <AnimatedBackground />
      <Navbar />
      <CursorMagnet />

      {/* 🔒 CENTERED CONTENT */}
      <main className="app-container">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
