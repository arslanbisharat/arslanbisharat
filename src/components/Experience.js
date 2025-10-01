import React, { useState } from 'react';

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      id: 'loyola',
      year: 'Present',
      status: 'Aug 2023',
      title: 'Graduate Research Assistant',
      company: 'Loyola University Chicago',
      isGrouped: true,
      positions: [
        {
          id: 1,
          period: 'May 2025 - Present',
          subtitle: 'Ji Lab',
          details: [
            'Conducting research in multi-modal deep learning for clinical data integration',
            'Developing frameworks for integrating medical images, EHR data, and laboratory results',
            'Contributing to publications in biomedical AI and medical informatics'
          ]
        },
        {
          id: 2,
          period: 'Aug 2024 - Present',
          subtitle: 'AISecure Lab',
          details: [
            'Researching AI safety, security, and adversarial robustness',
            'Developing defense mechanisms against adversarial attacks on neural networks',
            'Collaborating with mentors including Dr. Yasin Silva and Dr. Mohammed Abuhammad'
          ]
        },
        {
          id: 3,
          period: 'Aug 2023 - Present',
          subtitle: 'BullyBlocker Lab',
          details: [
            'Building ML models to detect and prevent cyberbullying on social media platforms',
            'Conducting robustness evaluations to enhance model resilience',
            'Translating research findings into practical insights for academic publications'
          ]
        }
      ]
    },
    {
      id: 4,
      year: 'Present',
      status: 'Sep 2021',
      title: 'Research Scholar',
      company: 'MLC Research Lab',
      details: [
        'Developed malware detection model for IIoT devices using XGBoost and GLCM techniques',
        'Designed deep features-based approach with modified ResNet50 for visual sentiment classification',
        'Enhanced detection accuracy and computational efficiency in cybersecurity applications'
      ]
    },
    {
      id: 5,
      year: '2023',
      status: 'Jan 2023',
      title: 'Research Scholar',
      company: 'University of Birmingham',
      details: [
        'Developed 1D-CNN architecture for IIoT cybersecurity achieving 99.90% accuracy',
        'Created gradient-boosting algorithm for neonatal sleep research',
        'Advanced biomedical applications through improved classification accuracy'
      ]
    },
    {
      id: 6,
      year: '2023',
      status: 'Nov 2021',
      title: 'Full-stack Developer',
      company: 'Contco.',
      details: [
        'Led end-to-end development using TypeScript, React.js, and Redux.js',
        'Enhanced client business operations efficiency by 30%',
        'Established testing strategy with Jest, reducing production bugs by 40%',
        'Delivered 6 major projects on time with multidisciplinary teams'
      ]
    },
    {
      id: 7,
      year: '2023',
      status: 'May 2020',
      title: 'Code Reviewer',
      company: 'Microverse',
      details: [
        'Completed 7000+ code reviews for HTML, CSS, Ruby, Rails, JavaScript, and React projects',
        'Helped junior developers improve code quality and understanding of core concepts',
        'Created merge requests to improve project requirements and review quality'
      ]
    },
    {
      id: 8,
      year: '2022',
      status: 'Apr 2022',
      title: 'Research Intern',
      company: 'Air University',
      details: [
        'Developed AI-based system for autonomous vehicles with YOLOv8',
        'Achieved 85.5% accuracy in real-time object recognition',
        'Collaborated in multidisciplinary team on AI and Data Science challenges'
      ]
    },
    {
      id: 9,
      year: '2021',
      status: 'Mar 2021',
      title: 'Technical Support Representative',
      company: 'Jotform',
      details: [
        'Delivered technical support for web-based applications and browser compatibility',
        'Resolved complex issues related to user accounts and system configurations',
        'Documented support cases and collaborated with development team'
      ]
    },
    {
      id: 10,
      year: '2021',
      status: 'May 2020',
      title: 'Technical Support Specialist',
      company: 'StellarAIO LLC',
      details: [
        'Assisted users with technical troubleshooting using Discord and Intercom',
        'Performed data collection and analysis on daily activities',
        'Developed improved processes for desktop application efficiency'
      ]
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <div className="education-timeline-vertical">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item-vertical">
            <div className="timeline-year-side">
              <div className="timeline-year-badge">
                <div className="year">{exp.year}</div>
                <div className="status">{exp.status}</div>
              </div>
              <div className="timeline-dot-vertical"></div>
            </div>
            <div className="timeline-content-vertical experience-card">
              <div className="experience-header">
                <div>
                  <h3>{exp.title}</h3>
                  <div className="timeline-institution">{exp.company}</div>
                </div>
                <button
                  className="expand-btn"
                  onClick={() => toggleExpand(exp.id)}
                  aria-label={expandedId === exp.id ? "Hide details" : "Show details"}
                >
                  <i className={`bi bi-${expandedId === exp.id ? 'dash' : 'plus'}`}></i>
                </button>
              </div>
              {expandedId === exp.id && (
                <div className="experience-details">
                  {exp.isGrouped ? (
                    <div className="grouped-positions">
                      {exp.positions.map((position) => (
                        <div key={position.id} className="position-item">
                          <div className="position-header">
                            <strong>{position.subtitle}</strong>
                            <span className="position-period">{position.period}</span>
                          </div>
                          <ul>
                            {position.details.map((detail, index) => (
                              <li key={index}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul>
                      {exp.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
