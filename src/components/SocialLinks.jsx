import { Github, Linkedin } from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL } from '../config';

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        className="icon-btn"
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
      >
        <Linkedin size={18} aria-hidden="true" />
      </a>
      {GITHUB_URL ? (
        <a
          className="icon-btn"
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <Github size={18} aria-hidden="true" />
        </a>
      ) : (
        <span
          className="icon-btn icon-btn--disabled"
          title="GitHub link coming soon"
          aria-label="GitHub link coming soon"
        >
          <Github size={18} aria-hidden="true" />
        </span>
      )}
    </div>
  );
}
