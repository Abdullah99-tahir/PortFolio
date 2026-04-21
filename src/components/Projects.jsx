import { projects } from '../data/portfolioData';
import '../styles/Projects.css';

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-max">
        <div className="section-label">03 — Projects</div>
        <h2 className="section-heading reveal">
          Things I've <span className="highlight">Built</span>
        </h2>

        <div className="projects-grid">
          {projects.map(project => (
            <div
              key={project.id}
              className={`project-card reveal${project.featured ? ' featured' : ''}`}
            >
              {project.featured && (
                <>
                  <div className="corner-deco tl" />
                  <div className="corner-deco br" />
                </>
              )}
              <div className="project-num">
                {project.featured ? `Featured Project — ${project.num}` : project.num}
              </div>
              <span className="project-icon">{project.icon}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span className="p-tag" key={tag}>{tag}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
