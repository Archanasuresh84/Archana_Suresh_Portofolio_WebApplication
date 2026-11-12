import { PROJECT_GITHUB_URLS } from '../config';

const projects = [
  {
    id: 'adhdDetection',
    title: 'Advanced ADHD Detection Using Hybrid Machine Learning Models',
    note: 'Presented at IEEE ICDSA 2025',
    description:
      'Worked with rs-fMRI brain-imaging datasets, including preprocessing, feature analysis, and model evaluation for ADHD classification.',
    technologies: ['Python', 'Machine Learning', 'Statistical Modeling'],
  },
  {
    id: 'corporationManagement',
    title: 'Online Corporation Management System',
    note: 'Team project',
    description:
      'Developed a citizen-facing platform for applying to government schemes, including backend logic and database integration.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
  {
    id: 'boutiqueManagement',
    title: 'Boutique Management System',
    note: 'Team project',
    description:
      'Developed features for inventory management, customer orders, and sales records.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section section--mist">
      <div className="container">
        <p className="eyebrow">Projects</p>
        <h2>Selected project work</h2>
        <ul className="project-grid">
          {projects.map((project) => {
            const githubUrl = PROJECT_GITHUB_URLS[project.id];
            return (
              <li key={project.id}>
                <article className="project-card">
                  <p className="project-card__note">{project.note}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="chip-list">
                    {project.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  {githubUrl ? (
                    <a
                      className="text-link"
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  ) : (
                    <p className="project-card__pending">GitHub link coming soon</p>
                  )}
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
