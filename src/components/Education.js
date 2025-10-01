import React from 'react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      year: '2029',
      status: 'Expected Graduation',
      degree: 'Doctor of Philosophy - PhD',
      institution: 'Loyola University Chicago',
      description: 'Computer Science • Conducting advanced research at the intersection of biomedical AI, cybersecurity, and data science. Working in BullyBlocker Lab, AISecure Lab, and Ji Lab.'
    },
    {
      id: 2,
      year: '2025',
      status: 'Expected Graduation',
      degree: 'Master of Science - MS',
      institution: 'Loyola University Chicago',
      description: 'Data Science • Advanced methodologies in machine learning, statistical analysis, and data-driven decision making.'
    },
    {
      id: 3,
      year: '2023',
      status: 'Graduated',
      degree: 'Bachelor of Science - BS',
      institution: 'University of the People',
      description: 'Computer Science • Foundation in algorithms, data structures, software engineering, and system design.'
    },
    {
      id: 4,
      year: '2020',
      status: 'Graduated',
      degree: 'Software Development Program',
      institution: 'Microverse',
      description: 'Full-stack development • Completed intensive training in React, Redux, Ruby on Rails, and JavaScript with 7000+ code reviews.'
    }
  ];

  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="education-timeline-vertical">
        {educationData.map((edu) => (
          <div key={edu.id} className="timeline-item-vertical">
            <div className="timeline-year-side">
              <div className="timeline-year-badge">
                <div className="year">{edu.year}</div>
                <div className="status">{edu.status}</div>
              </div>
              <div className="timeline-dot-vertical"></div>
            </div>
            <div className="timeline-content-vertical">
              <h3>{edu.degree}</h3>
              <div className="timeline-institution">{edu.institution}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
