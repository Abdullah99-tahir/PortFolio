import { personalInfo } from '../data/portfolioData';
import { useTypewriter } from '../hooks/usePortfolio';
import '../styles/Hero.css';

export default function Hero() {
  const typed = useTypewriter(personalInfo.roles);

  const handleScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero">
      <div className="hero-inner">
        <p className="hero-eyebrow">Available for freelance projects</p>

        <h1 className="hero-name">
          <div className="first">{personalInfo.firstName}</div>
          <div className="last glitch" data-text={personalInfo.lastName}>
            {personalInfo.lastName}
          </div>
        </h1>

        <div className="hero-title">
          <span id="typed">{typed}</span>
        </div>

        <p className="hero-desc">
          CS student @ UET Lahore building things at the intersection of<br />
          web, systems &amp; intelligent software. Turning coffee &amp; curiosity<br />
          into real-world solutions since 2024.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-primary" onClick={e => handleScroll(e, '#projects')}>
            View Projects
          </a>
          <a href={`mailto:${personalInfo.email}`} className="btn-outline">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
