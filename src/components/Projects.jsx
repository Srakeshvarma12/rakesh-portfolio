import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold mb-24 text-center">
          <span className="gradient-text">Projects</span>
        </h2>

        {/* THIS DIV CREATES SCROLL SPACE */}
        <div className="relative space-y-[120vh]">

          <ProjectCard
            zIndex="z-10"
            title="Cost-Sensitive Wart Treatment Recommendation System"
            points={[
              "Built a machine-learning based decision support system.",
              "Performed preprocessing and feature engineering with StandardScaler."
            ]}
            tech={["Python", "Machine Learning", "Scikit-learn", "Streamlit"]}
            link="https://project---wart-treatment-gh7exzv3va8liynunuxemu.streamlit.app/"
          />

          <ProjectCard
            zIndex="z-20"
            title="Netflix Movies and TV Shows Data Analysis using SQL"
            points={[
              "Designed a relational schema for 8,800+ Netflix records.",
              "Analyzed content trends, ratings, and durations.",
              "Structured reusable SQL scripts with documentation."
            ]}
            tech={["MySQL", "SQL", "Data Analysis"]}
          />

          <ProjectCard
            zIndex="z-30"
            title="Full-Stack Portfolio Website"
            points={[
              "Developed a responsive React-based portfolio.",
              "Deployed using Vercel and Render.",
              "Used Git and GitHub for version control."
            ]}
            tech={["React", "Tailwind CSS", "Vercel", "Render", "GitHub"]}
          />

          <ProjectCard
            zIndex="z-40"
            title="Web Development Intern — CodSoft"
            points={[
              "Built multiple web apps using HTML, CSS, JavaScript.",
              "Worked in Agile workflow using Git and GitHub.",
              "Solved real-world frontend issues independently."
            ]}
            tech={["HTML", "CSS", "JavaScript", "Git", "GitHub"]}
          />

        </div>
      </div>
    </section>
  );
}
