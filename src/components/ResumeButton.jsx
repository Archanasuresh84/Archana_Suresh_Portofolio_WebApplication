import { useState } from 'react';
import { Download } from 'lucide-react';
import { getResumeDownloadUrl } from '../config';

const FILE_NAME = 'Archana-Suresh-Resume.pdf';
const MISSING_LINK_MESSAGE =
  'Add your resume link in src/config.js (RESUME_URL).';

export default function ResumeButton({ variant = 'primary' }) {
  const href = getResumeDownloadUrl();
  const [message, setMessage] = useState('');
  const className = `resume-btn resume-btn--${variant}`;

  const content = (
    <>
      <Download size={18} aria-hidden="true" />
      <span>Download Resume</span>
    </>
  );

  if (!href) {
    return (
      <div className="resume-btn-wrap">
        <button
          type="button"
          className={className}
          onClick={() => setMessage(MISSING_LINK_MESSAGE)}
        >
          {content}
        </button>
        {message ? (
          <p className="resume-btn__note" role="status">
            {message}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <a
      className={className}
      href={href}
      download={FILE_NAME}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
}
