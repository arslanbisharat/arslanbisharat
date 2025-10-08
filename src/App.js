import './App.css';
import { useState } from 'react';
import React from 'react';
import Education from './components/Education';
import ResearchPapers from './components/ResearchPapers';
import Experience from './components/Experience';
import Awards from './components/Awards';
import News from './components/News';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track active section on scroll and show/hide scroll to top button
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['news', 'education', 'research', 'awards', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // If at the very top, clear active section
      if (window.scrollY < 100) {
        setActiveSection('');
      }

      // Show scroll to top button after 25% of page height
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (window.scrollY / pageHeight) * 100;
      setShowScrollTop(scrollPercentage > 25);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update theme when dark mode changes
  React.useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav className="nav-container">
          <div className="logo">Arslan Bisharat</div>

          {/* Hamburger Menu */}
          <button
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <a
                href="#news"
                className={activeSection === 'news' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('news');
                  setMobileMenuOpen(false);
                }}
              >
                News
              </a>
            </li>
            <li>
              <a
                href="#education"
                className={activeSection === 'education' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('education');
                  setMobileMenuOpen(false);
                }}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#research"
                className={activeSection === 'research' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('research');
                  setMobileMenuOpen(false);
                }}
              >
                Research
              </a>
            </li>
            <li>
              <a
                href="#awards"
                className={activeSection === 'awards' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('awards');
                  setMobileMenuOpen(false);
                }}
              >
                Awards
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={activeSection === 'experience' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('experience');
                  setMobileMenuOpen(false);
                }}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                  setMobileMenuOpen(false);
                }}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-btn"
              title="Download CV"
            >
              <i className="bi bi-file-earmark-pdf"></i>
              <span className="cv-text">CV</span>
            </a>
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <i className={`bi bi-${isDarkMode ? 'sun-fill' : 'moon-fill'}`}></i>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-left">
            {/* <div className="hero-image-container">
              <img
                src="https://ysilva.cs.luc.edu/BullyBlocker/images/ArslanBisharat.jpg"
                alt="Arslan Bisharat"
                className="hero-image"
              />
            </div> */}
            <div className="hero-text">
              <h1 className="hero-title">Arslan Bisharat</h1>
              <p className="hero-role">PhD in Computer Science</p>
              <p className="hero-affiliation">Loyola University Chicago</p>
              <div className="cta-buttons">
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="btn btn-primary">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <p className="hero-bio">
              I'm a builder at heart, blending biology, code, and algorithms to solve real-world problems.
              Currently pursuing a PhD in Computer Science at Loyola University Chicago, I work at the
              intersection of biomedical data science, AI safety, and cybersecurity, where impact matters
              and innovation is non-negotiable. I work with{' '}
              <a href="https://ysilva.cs.luc.edu/" target="_blank" rel="noopener noreferrer" className="bio-link">Dr. Yasin Silva</a>,{' '}
              <a href="https://abuhamad.cs.luc.edu/" target="_blank" rel="noopener noreferrer" className="bio-link">Dr. Mohammed Abuhammad</a>, and{' '}
              <a href="https://jamesjilab.com/" target="_blank" rel="noopener noreferrer" className="bio-link">Dr. Hong-Long Ji</a>.{' '}
              My journey started in the life sciences, but curiosity pulled me
              into programming and data. The future of AI belongs to those who can cross disciplines.
            </p>
            <div className="hero-highlights">
              <div className="highlight-item">
                <i className="bi bi-clipboard2-pulse highlight-icon"></i>
                <span>Biomedical AI</span>
              </div>
              <div className="highlight-item">
                <i className="bi bi-shield-check highlight-icon"></i>
                <span>Fairness & Privacy</span>
              </div>
              <div className="highlight-item">
                <i className="bi bi-diagram-3 highlight-icon"></i>
                <span>Federated Learning</span>
              </div>
              <div className="highlight-item">
                <i className="bi bi-bar-chart-line highlight-icon"></i>
                <span>Clinical Data Science</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <News />

      {/* Education Section */}
      <Education />

      {/* Research Papers Section */}
      <ResearchPapers />

      {/* Awards Section */}
      <Awards />

      {/* Experience Section */}
      <Experience />

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }} className="contact-intro">
            I'm always open to discussing research opportunities, collaborations, or potential projects.
            Feel free to reach out through LinkedIn, GitHub, or email.
          </p>

          <div className="contact-info-grid">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <div className="contact-info-label">Office Address</div>
                <div className="contact-info-value">
                  Doyle Hall Room 206, Data Lab<br />
                  1052 W Loyola Ave<br />
                  Chicago, IL 60626
                </div>
              </div>
            </div>
          </div>

          <div className="contact-links">
            <a href="https://www.linkedin.com/in/arslanbisharat/" target="_blank" rel="noopener noreferrer" className="contact-link linkedin">
              <i className="bi bi-linkedin"></i>
              LinkedIn
            </a>
            <a href="https://github.com/arslanbisharat" target="_blank" rel="noopener noreferrer" className="contact-link github">
              <i className="bi bi-github"></i>
              GitHub
            </a>
            <a href="mailto:marslan@luc.edu" className="contact-link email">
              <i className="bi bi-envelope-fill"></i>
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Arslan Bisharat. All rights reserved.</p>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      )}
    </div>
  );
}

export default App;
