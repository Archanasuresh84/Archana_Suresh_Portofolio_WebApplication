const entries = [
  {
    title: 'Integrated Master of Computer Applications (MCA)',
    place: 'Amrita Vishwa Vidyapeetham, Kochi',
    years: '2020–2025',
  },
  {
    title: 'Higher Secondary Education',
    place: 'Kerala Board of Public Examination',
    years: '2018–2020',
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="eyebrow">Education</p>
        <h2>Academic background</h2>
        <ol className="timeline">
          {entries.map((entry) => (
            <li key={entry.title} className="timeline__item">
              <article className="timeline__card">
                <p className="timeline__years">{entry.years}</p>
                <h3>{entry.title}</h3>
                <p>{entry.place}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
