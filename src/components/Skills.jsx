import { skillCategories } from '../data/portfolioData';
import '../styles/Skills.css';

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-max">
        <div className="section-label">02 — Skills</div>
        <h2 className="section-heading reveal">
          Technical <span className="highlight">Arsenal</span>
        </h2>

        <div className="skills-grid">
          {skillCategories.map(cat => (
            <div className="skill-category reveal" key={cat.id}>
              <div className="cat-title">
                <span className="cat-icon">{cat.icon}</span>
                {cat.title}
              </div>

              {cat.skills && cat.skills.map(skill => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-top">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-pct">{skill.pct}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" data-w={skill.pct} />
                  </div>
                </div>
              ))}

              {cat.tags && (
                <div className="tags-wrap">
                  {cat.tags.map(tag => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
