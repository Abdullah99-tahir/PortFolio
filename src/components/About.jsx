import { personalInfo } from '../data/portfolioData';
import '../styles/About.css';

export default function About() {
  return (
    <section id="about">
      <div className="section-max">
        <div className="section-label">01 — About</div>
        <h2 className="section-heading reveal">
          Who I <span className="highlight">Am</span>
        </h2>

        <div className="about-grid">
          {/* Left: text */}
          <div className="about-text reveal">
            <p>
              I'm <strong>Hafiz Abdullah Tahir</strong>, a Computer Science undergraduate at the
              University of Engineering &amp; Technology, Lahore — one of Pakistan's most
              prestigious engineering institutions.
            </p>
            <p>
              I combine deep academic foundations in algorithms, systems &amp; databases with
              hands-on creative work in web design, UI/UX, and graphic design. My brand{' '}
              <strong className="cyan-text">&lt;/&gt; Code with Abdullah</strong> reflects my
              passion for clean, purposeful digital experiences.
            </p>
            <p>
              Beyond the screen, I volunteered at the <strong>Voice of Hope</strong> seminar by
              JZT Pakistan, and I believe great software begins with great empathy for people.
            </p>

            <div className="code-accent">
              <span className="cm">{'// profile.json'}</span>
              <br />{'{'}
              <br />
              &nbsp;&nbsp;<span className="kw">"university"</span>:{' '}
              <span className="str">"UET Lahore — CS"</span>,<br />
              &nbsp;&nbsp;<span className="kw">"location"</span>:{' '}
              <span className="str">"Gujranwala, Pakistan 🇵🇰"</span>,<br />
              &nbsp;&nbsp;<span className="kw">"status"</span>:{' '}
              <span className="str">"Open to freelance"</span>,<br />
              &nbsp;&nbsp;<span className="kw">"superpower"</span>:{' '}
              <span className="fn">buildCoolStuff</span>()
              <br />
              {'}'}
            </div>

            <div className="about-info">
              <div className="info-row">
                <span className="info-key">Email</span>
                <span className="info-val">
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </span>
              </div>
              <div className="info-row">
                <span className="info-key">University</span>
                <span className="info-val">{personalInfo.university}</span>
              </div>
              <div className="info-row">
                <span className="info-key">Degree</span>
                <span className="info-val">{personalInfo.degree}</span>
              </div>
              <div className="info-row">
                <span className="info-key">City</span>
                <span className="info-val">{personalInfo.location}</span>
              </div>
              <div className="info-row">
                <span className="info-key">Hobbies</span>
                <span className="info-val">Travel · Music · Sport</span>
              </div>
            </div>
          </div>

          {/* Right: stats + badges */}
          <div className="reveal">
            <div className="about-stats">
              {personalInfo.stats.map(s => (
                <div className="stat-box" key={s.label}>
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="badges-wrap">
              {personalInfo.badges.map(b => (
                <span key={b.label} className={`badge badge-${b.type}`}>
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
