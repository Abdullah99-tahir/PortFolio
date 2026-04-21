import { personalInfo } from '../data/portfolioData';
import '../styles/Navbar.css';

const navLinks = [
  { href: '#about',      label: 'About'      },
  { href: '#skills',     label: 'Skills'     },
  { href: '#projects',   label: 'Projects'   },
  { href: '#experience', label: 'Experience' },
  { href: '#courses',    label: 'Courses'    },
  { href: '#contact',    label: 'Contact'    },
];

export default function Navbar() {
  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <div className="nav-logo">
        <span>&lt;/&gt;</span> Code with Abdullah
      </div>
      <ul className="nav-links">
        {navLinks.map(link => (
          <li key={link.href}>
            <a href={link.href} onClick={e => handleClick(e, link.href)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <a href={'https://mail.google.com/mail/u/0/#inbox?compose=DmwnWslzDGTdrnfjCBsGTvjvlplbvZjRgbPccdRPTJqnqjdbZsljPFvxdQpDbNwkgQjPHWKGKPzG'} className="nav-cta">
        Hire Me
      </a>
    </nav>
  );
}
