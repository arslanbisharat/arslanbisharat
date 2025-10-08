import React, { useState } from 'react';

const News = () => {
  const [yearFilter, setYearFilter] = useState('all');
  const [monthFilter, setMonthFilter] = useState('all');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const [yearOpen, setYearOpen] = useState(false);
  const [monthOpen, setMonthOpen] = useState(false);

  const newsData = [
    {
      id: 1,
      month: 'May',
      year: 2025,
      title: 'Started PhD in Computer Science',
      description: 'Excited to begin my PhD journey in Computer Science at Loyola University Chicago under the guidance of Dr. Mohammed Abuhamad and Dr. Yasin Silva.'
    }
  ];

  const availableYears = [...new Set(newsData.map(n => n.year))].sort((a, b) => b - a);
  const availableMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const filteredNews = newsData.filter(news => {
    const yearMatch = yearFilter === 'all' || news.year === parseInt(yearFilter);
    const monthMatch = monthFilter === 'all' || news.month === monthFilter;
    return yearMatch && monthMatch;
  });

  return (
    <section id="news" className="section">
      <h2 className="section-title">News & Updates</h2>

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
                setMonthFilter('all');
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

          {/* Month Filter */}
          <div className="filter-group">
            <button
              className="filter-dropdown-btn"
              onClick={() => setMonthOpen(!monthOpen)}
            >
              <span>Month</span>
              <span className={`dropdown-arrow ${monthOpen ? 'open' : ''}`}>▼</span>
            </button>
            {monthOpen && (
              <div className="filter-options">
                <label className="filter-option">
                  <input
                    type="radio"
                    name="month"
                    checked={monthFilter === 'all'}
                    onChange={() => setMonthFilter('all')}
                  />
                  <span>All Months</span>
                </label>
                {availableMonths.map(month => (
                  <label key={month} className="filter-option">
                    <input
                      type="radio"
                      name="month"
                      checked={monthFilter === month}
                      onChange={() => setMonthFilter(month)}
                    />
                    <span>{month}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* News Content */}
        <div className="papers-content">
          <div className="results-count">
            {filteredNews.length} {filteredNews.length === 1 ? 'update' : 'updates'}
          </div>

          <div className="awards-scroll-container">
            <div className="awards-list">
              {filteredNews.map((news) => (
                <div key={news.id} className="award-item">
                  <div className="award-icon">
                    <i className="bi bi-newspaper"></i>
                  </div>
                  <div className="award-details">
                    <h3>{news.title}</h3>
                    <p className="award-org">
                      <i className="bi bi-calendar-event"></i> {news.month} {news.year}
                    </p>
                    <p className="award-desc">{news.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {filteredNews.length === 0 && (
            <div className="no-results">
              <p>No news updates match the selected filters.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default News;
