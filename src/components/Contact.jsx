import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, LOCATION, PHONE } from '../config';
const INITIAL_VALUES = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (!values.subject.trim()) errors.subject = 'Enter a subject.';
  if (!values.message.trim()) {
    errors.message = 'Enter a message.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setStatus('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      event.currentTarget.elements[firstInvalid]?.focus();
      setStatus('');
      return;
    }

    const body = `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`;
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus(
      'Your email app should open with this message. This website does not send or store messages. If the app does not open, email me directly.',
    );
  }

  return (
    <section id="contact" className="section">
      <div className="container contact__grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Get in touch</h2>
          <p className="section__lead">
            The form checks your details, then opens an email to me. Nothing is sent or
            stored by this website.
          </p>
          <ul className="contact-list">
            <li>
              <Mail size={18} aria-hidden="true" />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <Phone size={18} aria-hidden="true" />
              <a href={`tel:${PHONE}`}>{PHONE}</a>
            </li>
            <li>
              <MapPin size={18} aria-hidden="true" />
              <span>{LOCATION}</span>
            </li>
          </ul>
          <div className="contact__profiles">
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

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={updateField}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name ? (
              <p id="name-error" className="field__error">
                {errors.name}
              </p>
            ) : null}
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={updateField}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email ? (
              <p id="email-error" className="field__error">
                {errors.email}
              </p>
            ) : null}
          </div>
          <div className="field">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={values.subject}
              onChange={updateField}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
            />
            {errors.subject ? (
              <p id="subject-error" className="field__error">
                {errors.subject}
              </p>
            ) : null}
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={values.message}
              onChange={updateField}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message ? (
              <p id="message-error" className="field__error">
                {errors.message}
              </p>
            ) : null}
          </div>
          <button className="btn btn--primary" type="submit">
            Submit
          </button>
          {status ? (
            <p className="form-status" role="status">
              {status}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
