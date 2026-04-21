import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import '../styles/Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    const { name, email, message } = form;
    if (!name || !email || !message) { alert('Please fill in all fields.'); return; }
    const mailto = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`;
    window.location.href = mailto;
  };

  const links = [
    { icon: '✉', text: personalInfo.email,    href: 'https://mail.google.com/mail/u/0/#inbox?compose=DmwnWslzDGTdrnfjCBsGTvjvlplbvZjRgbPccdRPTJqnqjdbZsljPFvxdQpDbNwkgQjPHWKGKPzG' },
    { icon: '🌐', text: 'resume-cv-delta.vercel.app', href: personalInfo.website },
    { icon: '💼', text: 'LinkedIn — Hafiz Abdullah Tahir', href: 'https://www.linkedin.com/in/hafiz-abdullah-tahir-b7825237b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrdAY1JnISAG9Rl4VQZOm6Q%3D%3D' },
    { icon: '⌥',  text: 'GitHub — hafiz-abdullah-tahir', href:  'https://github.com/Abdullah99-tahir' },
  ];

  return (
    <section id="contact">
      <div className="section-max">
        <div className="section-label">06 — Contact</div>
        <h2 className="section-heading reveal">
          Let's <span className="highlight">Connect</span>
        </h2>

        <div className="contact-inner">
          <div className="contact-left reveal">
            <p>
              Have a project in mind? Looking for a passionate CS student with design skills?
              Or just want to say hi — my inbox is open. Let's build something great together.
            </p>
            <div className="contact-links">
              {links.map(l => (
                <a href={l.href} key={l.text} className="c-link" target="_blank" rel="noreferrer">
                  <span className="c-link-icon">{l.icon}</span>
                  <span className="c-link-text">{l.text}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form reveal">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input name="name" value={form.name} onChange={handleChange}
                className="form-input" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label className="form-label">Your Email</label>
              <input name="email" value={form.email} onChange={handleChange}
                className="form-input" placeholder="john@example.com" type="email" />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange}
                className="form-textarea" placeholder="Tell me about your project..." />
            </div>
            <button className="form-btn" onClick={handleSubmit}>Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
}
