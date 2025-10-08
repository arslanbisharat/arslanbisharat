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
      title: 'Student Travel Award',
      organization: "SBP-BRIMS'24",
      year: 2024,
      type: 'academic',
      description: 'Awarded student travel grant to attend and present research at the 17th International Conference on Social Computing, Behavioral-Cultural Modeling and Prediction and Behavior Representation in Modeling and Simulation.'
    },
    {
      id: 2,
      title: 'Merit Award',
      organization: 'Loyola University Chicago',
      year: 2023,
      type: 'academic',
      description: 'Awarded merit scholarship for academic excellence in the Master of Science in Data Science program (2023-2025).'
    },
    {
      id: 3,
      title: 'Magna Cum Laude',
      organization: 'University Of the People',
      year: 2023,
      type: 'academic',
      description: 'Graduated with Magna Cum Laude honors from the Bachelor of Science in Computer Science program.'
    },
    {
      id: 4,
      title: "Dean's List All Semesters",
      organization: 'University Of the People',
      year: 2023,
      type: 'academic',
      description: "Achieved Dean's List recognition for all semesters throughout the Bachelor of Science in Computer Science program."
    },
    {
      id: 5,
      title: 'Fully-Funded Scholarship',
      organization: 'University Of the People',
      year: 2023,
      type: 'fellowship',
      description: 'Received full scholarship for all semesters during the Bachelor of Science in Computer Science program.'
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
