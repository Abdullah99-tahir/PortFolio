import { courses } from '../data/portfolioData';
import '../styles/Courses.css';

export default function Courses() {
  return (
    <section id="courses">
      <div className="section-max">
        <div className="section-label">05 — Academia</div>
        <h2 className="section-heading reveal">
          Current <span className="highlight">Coursework</span>
        </h2>
        <div className="courses-grid reveal">
          {courses.map(c => (
            <div className="course-card" key={c.code}>
              <div className="course-code">{c.code}</div>
              <div className="course-name">{c.name}</div>
              <div className="course-sem">{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
