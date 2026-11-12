import { BarChart3, Code2, Database, Layout, Server, TestTube2 } from 'lucide-react';

const categories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    items: ['Java', 'Python', 'PHP', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: Layout,
    items: ['HTML', 'CSS', 'JavaScript', 'Responsive UI Design'],
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['PHP', 'Spring (Basics)', 'Node.js (Basics)'],
  },
  {
    title: 'Database',
    icon: Database,
    items: ['MySQL', 'SQL Optimization', 'ETL Pipelines', 'Data Validation'],
  },
  {
    title: 'Data Analytics',
    icon: BarChart3,
    items: ['Excel', 'Power BI', 'Tableau', 'Python', 'Pandas', 'Dashboard Design'],
  },
  {
    title: 'Software Testing',
    icon: TestTube2,
    items: [
      'Manual Testing',
      'API Testing',
      'Automation Testing',
      'Playwright',
      'TypeScript',
      'Test Case Design',
      'Schema Validation',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section--mist">
      <div className="container">
        <p className="eyebrow">Skills</p>
        <h2>Tools and areas I work with</h2>
        <p className="section__lead">
          Grouped by the kind of work they support. These are skills I have studied or
          used, without a ranked proficiency score.
        </p>
        <ul className="skill-grid">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <li key={category.title} className="skill-card">
                <div className="skill-card__title">
                  <span className="skill-card__icon" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <h3>{category.title}</h3>
                </div>
                <ul className="chip-list">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
