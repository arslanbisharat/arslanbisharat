import React, { useState } from 'react';

const Awards = () => {
  const [yearFilter, setYearFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [organizationFilter, setOrganizationFilter] = useState('all');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const [yearOpen, setYearOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [organizationOpen, setOrganizationOpen] = useState(false);

  const awards = [
    {
      id: 1,
      title: 'Best Paper Award',
      organization: 'ICML',
      year: 2024,
      type: 'research',
      description: 'Received the Best Paper Award for outstanding research contribution in machine learning for cyberbullying detection.'
    },
    {
      id: 2,
      title: 'Graduate Research Fellowship',
      organization: 'Loyola University Chicago',
      year: 2024,
      type: 'fellowship',
      description: 'Awarded a competitive fellowship for exceptional research potential in computer science and AI.'
    },
    {
      id: 3,
      title: 'Outstanding Reviewer Award',
      organization: 'NeurIPS',
      year: 2024,
      type: 'academic',
      description: 'Recognized for exceptional quality and timeliness in peer review contributions to the AI research community.'
    },
    {
      id: 4,
      title: 'First Place - Hackathon',
      organization: 'AI for Good',
      year: 2023,
      type: 'competition',
      description: 'Led a team to develop an AI-powered solution for detecting online harassment, winning first place among 50 teams.'
    },
    {
      id: 5,
      title: "Dean's List",
      organization: 'Loyola University Chicago',
      year: 2023,
      type: 'academic',
      description: "Recognized for academic excellence with consistent placement on the Dean's List throughout graduate studies."
    },
    {
      id: 6,
      title: 'Research Excellence Award',
      organization: 'Computer Science Department',
      year: 2023,
      type: 'research',
      description: 'Honored for outstanding research contributions and publications in the field of AI and data science.'
    }
  ];

  const availableYears = [...new Set(awards.map(a => a.year))].sort((a, b) => b - a);
  const availableOrganizations = [...new Set(awards.map(a => a.organization))].sort();

  const filteredAwards = awards.filter(award => {
    const yearMatch = yearFilter === 'all' || award.year === parseInt(yearFilter);
    const typeMatch = typeFilter === 'all' || award.type === typeFilter;
    const orgMatch = organizationFilter === 'all' || award.organization === organizationFilter;
    return yearMatch && typeMatch && orgMatch;
  });

  return (
    <section id="awards" className="section awards-section">
      <h2 className="section-title">Awards & Honors</h2>

      <div className="research-container">
        {/* Mobile Filter Toggle */}
        <button className="mobile-filter-toggle" onClick={() => setFiltersOpen(!filtersOpen)}>
          <span><i className="bi bi-funnel-fill"></i> Filters</span>
          <span>{filtersOpen ? <i className="bi bi-chevron-up"></i> : <i className="bi bi-chevron-down"></i>}</span>
        </button>

        {/* Filters Sidebar */}
        <aside className={`filters-sidebar ${filtersOpen ? 'open' : ''}`}>
          <div className="filters-header">
            <h3>Filters</h3>
            <button
              className="clear-filters"
              onClick={() => {
                setYearFilter('all');
                setTypeFilter('all');
                setOrganizationFilter('all');
              }}
            >
              Clear All
            </button>
          </div>

          {/* Year Filter */}
          <div className="filter-group">
            <button
              className="filter-dropdown-btn"
              onClick={() => setYearOpen(!yearOpen)}
            >
              <span>Year</span>
              <span className={`dropdown-arrow ${yearOpen ? 'open' : ''}`}>▼</span>
            </button>
            {yearOpen && (
              <div className="filter-options">
                <label className="filter-option">
                  <input
                    type="radio"
                    name="year"
                    checked={yearFilter === 'all'}
                    onChange={() => setYearFilter('all')}
                  />
                  <span>All Years</span>
                </label>
                {availableYears.map(year => (
                  <label key={year} className="filter-option">
                    <input
                      type="radio"
                      name="year"
                      checked={yearFilter === year.toString()}
                      onChange={() => setYearFilter(year.toString())}
                    />
                    <span>{year}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Type Filter */}
          <div className="filter-group">
            <button
              className="filter-dropdown-btn"
              onClick={() => setTypeOpen(!typeOpen)}
            >
              <span>Award Type</span>
              <span className={`dropdown-arrow ${typeOpen ? 'open' : ''}`}>▼</span>
            </button>
            {typeOpen && (
              <div className="filter-options">
                <label className="filter-option">
                  <input
                    type="radio"
                    name="type"
                    checked={typeFilter === 'all'}
                    onChange={() => setTypeFilter('all')}
                  />
                  <span>All Types</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="type"
                    checked={typeFilter === 'research'}
                    onChange={() => setTypeFilter('research')}
                  />
                  <span>Research</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="type"
                    checked={typeFilter === 'academic'}
                    onChange={() => setTypeFilter('academic')}
                  />
                  <span>Academic</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="type"
                    checked={typeFilter === 'fellowship'}
                    onChange={() => setTypeFilter('fellowship')}
                  />
                  <span>Fellowship</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="type"
                    checked={typeFilter === 'competition'}
                    onChange={() => setTypeFilter('competition')}
                  />
                  <span>Competition</span>
                </label>
              </div>
            )}
          </div>

          {/* Organization Filter */}
          <div className="filter-group">
            <button
              className="filter-dropdown-btn"
              onClick={() => setOrganizationOpen(!organizationOpen)}
            >
              <span>Organization</span>
              <span className={`dropdown-arrow ${organizationOpen ? 'open' : ''}`}>▼</span>
            </button>
            {organizationOpen && (
              <div className="filter-options">
                <label className="filter-option">
                  <input
                    type="radio"
                    name="organization"
                    checked={organizationFilter === 'all'}
                    onChange={() => setOrganizationFilter('all')}
                  />
                  <span>All Organizations</span>
                </label>
                {availableOrganizations.map(org => (
                  <label key={org} className="filter-option">
                    <input
                      type="radio"
                      name="organization"
                      checked={organizationFilter === org}
                      onChange={() => setOrganizationFilter(org)}
                    />
                    <span>{org}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* Awards Content */}
        <div className="papers-content">
          <div className="results-count">
            {filteredAwards.length} {filteredAwards.length === 1 ? 'award' : 'awards'}
          </div>

          <div className="awards-scroll-container">
            <div className="awards-list">
              {filteredAwards.map((award) => (
                <div key={award.id} className="award-item">
                  <div className="award-icon">
                    <i className="bi bi-trophy-fill"></i>
                  </div>
                  <div className="award-details">
                    <h3>{award.title}</h3>
                    <p className="award-org">
                      <i className="bi bi-building"></i> {award.organization} • {award.year}
                    </p>
                    <p className="award-desc">{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {filteredAwards.length === 0 && (
            <div className="no-results">
              <p>No awards match the selected filters.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Awards;
