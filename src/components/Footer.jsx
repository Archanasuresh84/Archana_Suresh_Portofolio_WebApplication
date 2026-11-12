import { LINKEDIN_URL, GITHUB_URL } from '../config';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>Archana Suresh</p>
        <p className="footer__meta">MCA Graduate | Software Testing | Software Development</p>
        <div className="footer__links">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {GITHUB_URL ? (
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          ) : (
            <span>GitHub link coming soon</span>
          )}
        </div>
      </div>
    </footer>
  );
}
