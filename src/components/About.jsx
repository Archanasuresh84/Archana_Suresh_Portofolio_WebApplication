const facts = [
  {
    label: 'Education',
    text: 'Integrated MCA, Amrita Vishwa Vidyapeetham, Kochi',
  },
  {
    label: 'Current internship',
    text: 'Software testing intern at Testing Mavens',
  },
  {
    label: 'Previous internship',
    text: 'Data Analyst Intern at RP2',
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about__grid">
        <div>
          <p className="eyebrow">About Me</p>
          <h2>A short introduction</h2>
          <div className="prose">
            <p>
              I am an MCA graduate from Amrita Vishwa Vidyapeetham, Kochi. My background is
              in software development and data analytics, including web applications with
              database integration and work with structured data.
            </p>
            <p>
              I am currently doing an internship at Testing Mavens in software testing.
              Before that, I worked as a Data Analyst Intern at RP2. I am interested in
              learning new technologies and developing practical skills I can use on real
              projects.
            </p>
          </div>
        </div>
        <ul className="fact-list">
          {facts.map((fact) => (
            <li key={fact.label} className="fact-card">
              <p className="fact-card__label">{fact.label}</p>
              <p>{fact.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
