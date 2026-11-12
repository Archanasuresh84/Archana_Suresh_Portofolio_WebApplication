import profileImage from '../assets/profile.svg';
import SocialLinks from './SocialLinks';

export default function Home() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--light">Portfolio</p>
          <h1>Archana Suresh</h1>
          <p className="hero__headline">MCA Graduate | Software Testing | Software Development</p>
          <p className="hero__intro">
            MCA graduate with a background in software development and data analytics.
            Currently interning in software testing at Testing Mavens, and interested in
            learning new technologies through practical work.
          </p>
          <div className="hero__actions">
            <a className="btn btn--light" href="#projects">
              View My Projects
            </a>
            <a className="btn btn--ghost" href="#contact">
              Contact Me
            </a>
          </div>
          <SocialLinks />
        </div>
        <figure className="hero__portrait">
          <img src={profileImage} alt="Profile image placeholder for Archana Suresh" />
          <figcaption>Profile photo</figcaption>
        </figure>
      </div>
    </section>
  );
}
