import { timeline } from '../data/portfolioData';
import '../styles/Experience.css';

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-max">
        <div className="section-label">04 — Journey</div>
        <h2 className="section-heading reveal">
          Education &amp; <span className="highlight">Milestones</span>
        </h2>

        <div className="timeline">
          {timeline.map(item => (
            <div className="tl-item reveal" key={item.id}>
              <div className="tl-dot" />
              <div className="tl-year">{item.year}</div>
              <div className="tl-title">{item.title}</div>
              <div className="tl-sub">{item.sub}</div>
              <div className="tl-body">{item.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
