export default function ProjectCard({ title, points, tech, link, zIndex }) {
  return (
    <div
      className={`
        sticky top-24
        ${zIndex}
        glass
        p-10 md:p-14
        rounded-3xl
      `}
    >
      <h3 className="text-2xl md:text-3xl font-semibold mb-6">
        {title}
      </h3>

      <ul className="text-gray-300 space-y-3 mb-6">
        {points.map((p, i) => (
          <li key={i}>• {p}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-3 mb-8">
        {tech.map(t => (
          <span key={t} className="tech-pill">{t}</span>
        ))}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition"
        >
          View Project →
        </a>
      )}
    </div>
  );
}
