import React, { useState } from 'react';

const ResearchPapers = () => {
  const [authorshipFilter, setAuthorshipFilter] = useState('all');
  const [yearFilter, setYearFilter] = useState('all');
  const [topicFilter, setTopicFilter] = useState('all');
  const [venueTypeFilter, setVenueTypeFilter] = useState('all');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const [authorshipOpen, setAuthorshipOpen] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);
  const [topicOpen, setTopicOpen] = useState(false);
  const [venueTypeOpen, setVenueTypeOpen] = useState(false);

  const [selectedPaper, setSelectedPaper] = useState(null);
  const [showAbstract, setShowAbstract] = useState(false);
  const [showCitation, setShowCitation] = useState(false);
  const [showAllPapers, setShowAllPapers] = useState(false);
  const [citationFormat, setCitationFormat] = useState('bibtex');

  const papers = [
    {
      id: 1,
      title: "ML Model to Better Identify Instances of Bullying Faced by Members Of the LGBTQ+ Community",
      authors: "Muhammad Arslan",
      venue: "Loyola University Chicago (Master's Thesis)",
      year: 2025,
      isFirstAuthor: true,
      tags: ["Machine Learning", "Cyberbullying", "LGBTQ+", "Transformer Models"],
      topic: "ai",
      venueType: "thesis",
      citations: 0,
      abstract: "Cyberbullying poses a significant threat to online communities, with the LGBTQ+ community facing disproportionately higher rates of harassment. While existing cyberbullying detection systems have made progress in identifying general instances of online harassment, they often fail to capture the nuanced and context-dependent nature of LGBTQ+-targeted bullying. This thesis presents a novel approach to this challenge by developing SpectrumNet, an LGBTQ+-centric transformer-based model for cyberbullying detection. Our research was conducted in two phases. In Phase 1, we evaluated the effectiveness of pre-trained transformer models (RoBERTa, BERT, and GPT-2) in identifying LGBTQ+-related cyberbullying. Building on these findings, Phase 2 introduced SpectrumNet which integrates dynamic attention mechanisms with hierarchical attention networks to understand the contextual nuances of LGBTQ+ targeted harassment.",
      citation: `@mastersthesis{arslan2025ml,
  title={ML Model to Better Identify Instances of Bullying Faced by Members Of the LGBTQ+ Community},
  author={Arslan, Muhammad},
  year={2025},
  school={Loyola University Chicago}
}`,
      pdfLink: "https://ecommons.luc.edu/",
      scholarLink: "https://scholar.google.com/"
    },
    {
      id: 2,
      title: "SpecturmNET: An LGBTQ+ Centric Cyberbullying Detection ML Model",
      authors: "Muhammad Arslan, Mohammed Abuhamad, Deborah Hall, Yasin Silva",
      venue: "Poster Presentation",
      year: 2025,
      isFirstAuthor: true,
      tags: ["Transformer Models", "Cyberbullying", "LGBTQ+", "Deep Learning"],
      topic: "ai",
      venueType: "poster",
      citations: 0,
      abstract: "This research introduces SpectrumNET-Full, an advanced transformer-based model specifically designed to detect cyberbullying targeting the LGBTQ+ community in social media texts. Building upon the SpectrumNET-Base model, SpectrumNET-Full incorporates hierarchical attention mechanisms and dynamic contextual fusion to capture both immediate and historical context for more accurate detection of subtle, nuanced forms of online harassment.",
      citation: `@misc{arslan2025spectrum,
  title={SpecturmNET: An LGBTQ+ Centric Cyberbullying Detection ML Model},
  author={Arslan, Muhammad and Abuhamad, Mohammed and Hall, Deborah and Silva, Yasin},
  year={2025},
  note={Poster Presentation}
}`,
      pdfLink: "https://ysilva.cs.luc.edu/",
      scholarLink: "https://scholar.google.com/"
    },
    {
      id: 3,
      title: "Detecting LGBTQ+ Instances of Cyberbullying",
      authors: "Muhammad Arslan, Manuel Sandoval Madrigal, Mohammed Abuhamad, Deborah Hall, Yasin Silva",
      venue: "17th International Conference on Social Computing, Behavioral-Cultural Modeling, & Prediction and Behavior Representation in Modeling and Simulation",
      year: 2024,
      isFirstAuthor: true,
      tags: ["Cyberbullying", "Social Media", "LGBTQ+", "Machine Learning"],
      topic: "ai",
      venueType: "conference",
      citations: 1,
      abstract: "Social media continues to have an impact on the trajectory of humanity. However, its introduction has also weaponized keyboards, allowing the abusive language normally reserved for in-person bullying to jump onto the screen, i.e., cyberbullying. Cyberbullying poses a significant threat to adolescents globally, affecting the mental health and well-being of many. A group that is particularly at risk is the LGBTQ+ community, as researchers have uncovered a strong correlation between identifying as LGBTQ+ and suffering from greater online harassment. Therefore, it is critical to develop machine learning models that can accurately discern cyberbullying incidents as they happen to LGBTQ+ members. The aim of this study is to compare the efficacy of several transformer models in identifying cyberbullying targeting LGBTQ+ individuals. We seek to determine the relative merits and demerits of these existing methods in addressing complex and subtle kinds of cyberbullying by assessing their effectiveness with real social media data.",
      citation: `@inproceedings{arslan2024detecting,
  title={Detecting LGBTQ+ Instances of Cyberbullying},
  author={Arslan, Muhammad and Madrigal, Manuel Sandoval and Abuhamad, Mohammed and Hall, Deborah L and Silva, Yasin},
  booktitle={17th International Conference on Social Computing, Behavioral-Cultural Modeling, & Prediction and Behavior Representation in Modeling and Simulation},
  year={2024}
}`,
      pdfLink: "https://arxiv.org/abs/2409.12263",
      scholarLink: "https://scholar.google.com/"
    },
    {
      id: 4,
      title: "1D-CNN-IDS: 1D CNN-based Intrusion Detection System for IIoT",
      authors: "Muhammad Arslan, Muhammad Mubeen, Muhammad Bilal, Saadullah Farooq Abbasi",
      venue: "29th International Conference on Automation and Computing",
      year: 2024,
      isFirstAuthor: true,
      tags: ["Deep Learning", "IoT", "Cybersecurity", "CNN"],
      topic: "cybersecurity",
      venueType: "conference",
      citations: 42,
      abstract: "The demand for Internet of Things (IoT) has seen a rapid increase. These advances have been made possible by technological advances in artificial intelligence, cloud computing, and edge computing. However, these developments present a number of challenges, including cyber threats, security and privacy concerns, and the risk of potential financial losses. For this reason, this study developed a computationally inexpensive one-dimensional convolutional neural network (1DCNN) algorithm for cyber-attack classification. The proposed study achieved an accuracy of 99.90% to classify nine cyber-attacks. Several other performance metrics are evaluated to validate the effectiveness of the proposed scheme. In addition, a comparison has been made with the existing state-of-the-art schemes. The findings of the proposed study can significantly contribute to the development of secure intrusion detection for IIoT systems.",
      citation: `@inproceedings{arsalan2024cnn,
  title={1D-CNN-IDS: 1D CNN-based intrusion detection system for IIoT},
  author={Arsalan, Muhammad and Mubeen, Muhammad and Bilal, Muhammad and Abbasi, Saadullah Farooq},
  booktitle={2024 29th International Conference on Automation and Computing},
  year={2024}
}`,
      pdfLink: "https://arxiv.org/",
      scholarLink: "https://scholar.google.com/"
    },
    {
      id: 5,
      title: "A Deep Features Based Approach Using Modified ResNet50 and Gradient Boosting for Visual Sentiments Classification",
      authors: "Muhammad Arslan, Muhammad Mubeen, Arslan Akram, Saadullah Farooq Abbasi, Muhammad Salman Ali, Muhammad Usman Tariq",
      venue: "IEEE 7th International Conference on Multimedia Information Processing and Retrieval",
      year: 2024,
      isFirstAuthor: true,
      tags: ["Computer Vision", "Deep Learning", "Sentiment Analysis", "ResNet"],
      topic: "ai",
      venueType: "conference",
      citations: 35,
      abstract: "The versatile nature of Visual Sentiment Analysis (VSA) is one reason for its rising profile. It isn't easy to efficiently manage social media data with visual information since previous research has concentrated on Sentiment Analysis (SA) of single modalities, like textual. In addition, most visual sentiment studies need to adequately classify sentiment because they are mainly focused on simply merging modal attributes without investigating their intricate relationships. This prompted the suggestion of developing a fusion of deep learning and machine learning algorithms. In this research, a deep feature-based method for multiclass classification has been used to extract deep features from modified ResNet50. Furthermore, gradient boosting algorithm has been used to classify photos containing emotional content. The approach is thoroughly evaluated on two benchmarked datasets, CrowdFlower and GAPED.",
      citation: `@inproceedings{arslan2024deep,
  title={A deep features based approach using modified ResNet50 and gradient boosting for visual sentiments classification},
  author={Arslan, Muhammad and Mubeen, Muhammad and Akram, Arslan and Abbasi, Saadullah Farooq and Ali, Muhammad Salman and Tariq, Muhammad Usman},
  booktitle={2024 IEEE 7th International Conference on Multimedia Information Processing and Retrieval},
  pages={239--242},
  year={2024}
}`,
      pdfLink: "https://arxiv.org/",
      scholarLink: "https://scholar.google.com/"
    },
    {
      id: 6,
      title: "A Single Channel-Based Neonatal Sleep-Wake Classification using Hjorth Parameters and Improved Gradient Boosting",
      authors: "Muhammad Arslan, Muhammad Mubeen, Saadullah Farooq Abbasi, Muhammad Shahbaz Khan, Wadii Boulila, Jawad Ahmad",
      venue: "International Polydisciplinary Conference on Artificial Intelligence and New Technologies (IPCAINT-2024)",
      year: 2024,
      isFirstAuthor: true,
      tags: ["Biomedical AI", "Machine Learning", "Sleep Analysis", "Healthcare"],
      topic: "biomedical",
      venueType: "conference",
      citations: 27,
      abstract: "Sleep plays a crucial role in neonatal development. Monitoring the sleep patterns in neonates in a Neonatal Intensive Care Unit (NICU) is imperative for understanding the maturation process. While polysomnography (PSG) is considered the best practice for sleep classification, its expense and reliance on human annotation pose challenges. Existing research often relies on multichannel EEG signals; however, concerns arise regarding the vulnerability of neonates and the potential impact on their sleep quality. This paper introduces a novel approach to neonatal sleep stage classification using a single-channel gradient boosting algorithm with Hjorth features. The gradient boosting parameters are fine-tuned using random search cross-validation (randomsearchCV), achieving an accuracy of 82.35% for neonatal sleep-wake classification. Validation is conducted through 5-fold cross-validation. The proposed algorithm not only enhances existing neonatal sleep algorithms but also opens avenues for broader applications.",
      citation: `@inproceedings{arslan2024single,
  title={A Single Channel-Based Neonatal Sleep-Wake Classification using Hjorth Parameters and Improved Gradient Boosting},
  author={Arslan, Muhammad and Mubeen, Muhammad and Abbasi, Saadullah Farooq and Khan, Muhammad Shahbaz and Boulila, Wadii and Ahmad, Jawad},
  booktitle={International Polydisciplinary Conference on Artificial Intelligence and New Technologies},
  year={2024}
}`,
      pdfLink: "https://arxiv.org/abs/2408.07925",
      scholarLink: "https://scholar.google.com/"
    },
    {
      id: 7,
      title: "Object Detection for Autonomous Vehicles in Urban Areas using Deep Learning",
      authors: "Muhammad Arslan, Muhammad Mubeen, Syed Muhammad Usman",
      venue: "Future Technologies Conference (FTC) 2024",
      year: 2024,
      isFirstAuthor: true,
      tags: ["Computer Vision", "Deep Learning", "Autonomous Vehicles", "YOLO"],
      topic: "ai",
      venueType: "conference",
      citations: 1,
      abstract: "This study details the development of a reliable automated system for detecting urban traffic using a custom dataset, designed specifically for this research. We developed a novel architecture based on the YOLOv8 framework, featuring a vehicle-mounted camera on a rotatable platform to continuously stream video data via a 4G network to a control center. The system processes this data using advanced deep learning techniques, achieving an impressive 85.5% accuracy rate in real-time identification of pedestrians, vehicles, and bicycles. This accuracy surpasses current state-of-the-art methods and demonstrates exceptional speed and reliability, crucial for the safety and efficiency of autonomous vehicles. By significantly reducing misclassification, our method not only enhances the safety of urban navigation but also sets a new benchmark in the application of deep learning technologies.",
      citation: `@inproceedings{arslan2024object,
  title={Object Detection for Autonomous Vehicles in Urban Areas Using Deep Learning},
  author={Arslan, Muhammad and Mubeen, Muhammad and Usman, Syed Muhammad},
  booktitle={Proceedings of the Future Technologies Conference},
  year={2024}
}`,
      pdfLink: "#",
      scholarLink: "https://scholar.google.com/"
    },
    {
      id: 8,
      title: "Comparing Algorithm Performance in Machine Learning for Landslide Susceptibility Studies: An Overview",
      authors: "Muhammad Arslan, Muhammad Mubeen, G Anandhi",
      venue: "Journal of Artificial Intelligence Research & Advances",
      year: 2023,
      isFirstAuthor: true,
      tags: ["Machine Learning", "Environmental Science", "Comparative Study"],
      topic: "ai",
      venueType: "journal",
      citations: 27,
      abstract: "Machine learning algorithms have gained popularity over the past years, and with this comes the rise in their efficiencies; this study demonstrated that machine learning algorithms could successfully be used to identify landslide susceptibility areas. Machine learning algorithms like decision trees, support vector machines, K-Means, Hierarchical Clustering, Self-Organizing Maps (SOMs), artificial neural networks, and Bayesian networks have been used in recent studies. This study thus reviews several studies and results from several datasets and the advantages and disadvantages of these machine learning algorithms comprehensively; it is clear that the decision tree algorithm was the most accurate and interpretable algorithm tested and should be considered for further investigations into landslide susceptibility.",
      citation: `@article{arslan2023comparing,
  title={Comparing Algorithm Performance in Machine Learning for Landslide Susceptibility Studies: An Overview},
  author={Arslan, Muhammad and Mubeen, Muhammad and Anandhi, G},
  journal={Journal of Artificial Intelligence Research & Advances},
  volume={10},
  number={1},
  pages={71--89},
  year={2023}
}`,
      pdfLink: "https://www.academia.edu/",
      scholarLink: "https://scholar.google.com/"
    },
    {
      id: 9,
      title: "Achieving Multi-Objectives Using a Single Neural Network",
      authors: "Muhammad Arslan, Muhammad Mubeen, Giri Anandhi",
      venue: "Research & Reviews: Discrete Mathematical Structures",
      year: 2022,
      isFirstAuthor: true,
      tags: ["Neural Networks", "Multi-Objective Optimization", "Deep Learning"],
      topic: "ai",
      venueType: "journal",
      citations: 24,
      abstract: "This paper explores the development and application of a single neural network architecture capable of simultaneously optimizing multiple objectives. Traditional approaches to multi-objective optimization often require separate models for each objective, leading to increased computational complexity and resource requirements. Our proposed method demonstrates that a unified neural network can effectively balance multiple competing objectives while maintaining performance comparable to specialized single-objective models.",
      citation: `@article{arslan2022achieving,
  title={Achieving Multi-Objectives Using a Single Neural Network},
  author={Arslan, Muhammad and Mubeen, Muhammad and Anandhi, Giri},
  journal={Research & Reviews: Discrete Mathematical Structures},
  volume={9},
  number={3},
  pages={1--16},
  year={2022}
}`,
      pdfLink: "#",
      scholarLink: "https://scholar.google.com/"
    },
    {
      id: 10,
      title: "Strategies to Avoid Illegal Data Access",
      authors: "Muhammad Mubeen, Muhammad Arslan, Giri Anandhi",
      venue: "Journal of Communication Engineering & Systems",
      year: 2022,
      isFirstAuthor: false,
      tags: ["Cybersecurity", "Data Security", "Privacy"],
      topic: "cybersecurity",
      venueType: "journal",
      citations: 30,
      abstract: "For companies of all sizes, data security is a top priority. The chance of unauthorized data access increases as technology develops. To prevent unwanted access to their data, businesses must be proactive. This study examines technology solutions, personnel training, and policy enforcement as methods to prevent unauthorized data access. Data may be protected from illegal access using technological solutions like firewalls, intrusion detection systems, and encryption. Intrusion detection systems notify the administrator when suspicious behavior is found, while firewalls serve as a protective border between the internal network and the internet. Employee education and policy enforcement are examined as effective methods of avoiding unauthorized data access.",
      citation: `@article{mubeen2022strategies,
  title={Strategies to Avoid Illegal Data Access},
  author={Mubeen, Muhammad and Arslan, Muhammad and Anandhi, Giri},
  journal={Journal of Communication Engineering & Systems},
  volume={12},
  number={3},
  pages={29--40},
  year={2022}
}`,
      pdfLink: "https://www.academia.edu/",
      scholarLink: "https://scholar.google.com/"
    },
  ];

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Citation copied to clipboard!');
  };

  const generateMLACitation = (paper) => {
    const authorList = paper.authors.split(',').map(a => a.trim());
    const firstAuthor = authorList[0].split(' ');
    const lastName = firstAuthor[firstAuthor.length - 1];
    const firstName = firstAuthor.slice(0, -1).join(' ');

    let citation = `${lastName}, ${firstName}`;

    if (authorList.length === 2) {
      const secondAuthor = authorList[1].split(' ');
      citation += `, and ${secondAuthor.join(' ')}`;
    } else if (authorList.length > 2) {
      citation += `, et al`;
    }

    citation += `. "${paper.title}."`;

    if (paper.venueType === 'journal') {
      citation += ` ${paper.venue.replace(/Journal of |IEEE |Proceedings of the /, '')}`;
      citation += `, ${paper.year}.`;
    } else if (paper.venueType === 'conference') {
      citation += ` ${paper.venue}, ${paper.year}.`;
    } else if (paper.venueType === 'thesis') {
      citation += ` Master's thesis, ${paper.venue.replace(' (Master\'s Thesis)', '')}, ${paper.year}.`;
    } else {
      citation += ` ${paper.year}.`;
    }

    return citation;
  };

  const generateAPACitation = (paper) => {
    const authorList = paper.authors.split(',').map(a => a.trim());

    let citation = '';
    authorList.forEach((author, index) => {
      const parts = author.split(' ');
      const lastName = parts[parts.length - 1];
      const initials = parts.slice(0, -1).map(p => p[0] + '.').join(' ');

      if (index === 0) {
        citation += `${lastName}, ${initials}`;
      } else if (index === authorList.length - 1) {
        citation += `, & ${initials} ${lastName}`;
      } else {
        citation += `, ${initials} ${lastName}`;
      }
    });

    citation += ` (${paper.year}).`;
    citation += ` ${paper.title}.`;

    if (paper.venueType === 'journal') {
      citation += ` ${paper.venue}.`;
    } else if (paper.venueType === 'conference') {
      citation += ` In ${paper.venue}.`;
    } else if (paper.venueType === 'thesis') {
      citation += ` [Master's thesis, ${paper.venue.replace(' (Master\'s Thesis)', '')}].`;
    } else {
      citation += ` ${paper.venue}.`;
    }

    return citation;
  };

  const getCitationText = (paper, format) => {
    switch(format) {
      case 'mla':
        return generateMLACitation(paper);
      case 'apa':
        return generateAPACitation(paper);
      case 'bibtex':
      default:
        return paper.citation;
    }
  };

  const availableYears = [...new Set(papers.map(p => p.year))].sort((a, b) => b - a);

  const filteredPapers = papers.filter(paper => {
    const authorshipMatch = authorshipFilter === 'all' ||
      (authorshipFilter === 'first' && paper.isFirstAuthor) ||
      (authorshipFilter === 'collaborator' && !paper.isFirstAuthor);

    const yearMatch = yearFilter === 'all' || paper.year === parseInt(yearFilter);
    const topicMatch = topicFilter === 'all' || paper.topic === topicFilter;
    const venueTypeMatch = venueTypeFilter === 'all' || paper.venueType === venueTypeFilter;

    return authorshipMatch && yearMatch && topicMatch && venueTypeMatch;
  });

  return (
    <section id="research" className="section research-section">
      <h2 className="section-title">Research Publications</h2>

      <div className="research-container">
        <button className="mobile-filter-toggle" onClick={() => setFiltersOpen(!filtersOpen)}>
          <span><i className="bi bi-funnel-fill"></i> Filters</span>
          <span>{filtersOpen ? <i className="bi bi-chevron-up"></i> : <i className="bi bi-chevron-down"></i>}</span>
        </button>

        <aside className={`filters-sidebar ${filtersOpen ? 'open' : ''}`}>
          <div className="filters-header">
            <h3>Filters</h3>
            <button
              className="clear-filters"
              onClick={() => {
                setAuthorshipFilter('all');
                setYearFilter('all');
                setTopicFilter('all');
                setVenueTypeFilter('all');
              }}
            >
              Clear All
            </button>
          </div>

          <div className="filter-group">
            <button
              className="filter-dropdown-btn"
              onClick={() => setAuthorshipOpen(!authorshipOpen)}
            >
              <span>Authorship</span>
              <span className={`dropdown-arrow ${authorshipOpen ? 'open' : ''}`}>▼</span>
            </button>
            {authorshipOpen && (
              <div className="filter-options">
                <label className="filter-option">
                  <input
                    type="radio"
                    name="authorship"
                    checked={authorshipFilter === 'all'}
                    onChange={() => setAuthorshipFilter('all')}
                  />
                  <span>All Papers</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="authorship"
                    checked={authorshipFilter === 'first'}
                    onChange={() => setAuthorshipFilter('first')}
                  />
                  <span>First Author</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="authorship"
                    checked={authorshipFilter === 'collaborator'}
                    onChange={() => setAuthorshipFilter('collaborator')}
                  />
                  <span>Collaborator</span>
                </label>
              </div>
            )}
          </div>

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

          <div className="filter-group">
            <button
              className="filter-dropdown-btn"
              onClick={() => setTopicOpen(!topicOpen)}
            >
              <span>Research Area</span>
              <span className={`dropdown-arrow ${topicOpen ? 'open' : ''}`}>▼</span>
            </button>
            {topicOpen && (
              <div className="filter-options">
                <label className="filter-option">
                  <input
                    type="radio"
                    name="topic"
                    checked={topicFilter === 'all'}
                    onChange={() => setTopicFilter('all')}
                  />
                  <span>All Areas</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="topic"
                    checked={topicFilter === 'ai'}
                    onChange={() => setTopicFilter('ai')}
                  />
                  <span>AI & Machine Learning</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="topic"
                    checked={topicFilter === 'cybersecurity'}
                    onChange={() => setTopicFilter('cybersecurity')}
                  />
                  <span>Cybersecurity</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="topic"
                    checked={topicFilter === 'biomedical'}
                    onChange={() => setTopicFilter('biomedical')}
                  />
                  <span>Biomedical Science</span>
                </label>
              </div>
            )}
          </div>

          <div className="filter-group">
            <button
              className="filter-dropdown-btn"
              onClick={() => setVenueTypeOpen(!venueTypeOpen)}
            >
              <span>Publication Type</span>
              <span className={`dropdown-arrow ${venueTypeOpen ? 'open' : ''}`}>▼</span>
            </button>
            {venueTypeOpen && (
              <div className="filter-options">
                <label className="filter-option">
                  <input
                    type="radio"
                    name="venueType"
                    checked={venueTypeFilter === 'all'}
                    onChange={() => setVenueTypeFilter('all')}
                  />
                  <span>All Types</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="venueType"
                    checked={venueTypeFilter === 'conference'}
                    onChange={() => setVenueTypeFilter('conference')}
                  />
                  <span>Conference</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="venueType"
                    checked={venueTypeFilter === 'journal'}
                    onChange={() => setVenueTypeFilter('journal')}
                  />
                  <span>Journal</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="venueType"
                    checked={venueTypeFilter === 'thesis'}
                    onChange={() => setVenueTypeFilter('thesis')}
                  />
                  <span>Thesis</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="venueType"
                    checked={venueTypeFilter === 'preprint'}
                    onChange={() => setVenueTypeFilter('preprint')}
                  />
                  <span>Preprint</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="venueType"
                    checked={venueTypeFilter === 'poster'}
                    onChange={() => setVenueTypeFilter('poster')}
                  />
                  <span>Poster</span>
                </label>
              </div>
            )}
          </div>
        </aside>

        <div className="papers-content">
          <div className="results-count">
            {filteredPapers.length} {filteredPapers.length === 1 ? 'publication' : 'publications'}
          </div>

          <div className="papers-list">
            {(showAllPapers ? filteredPapers : filteredPapers.slice(0, 3)).map(paper => (
              <div key={paper.id} className="paper-card">
                <div className="paper-header">
                  {paper.isFirstAuthor && <span className="first-author-badge">First Author</span>}
                  <span className="venue-type-badge">{paper.venueType}</span>
                </div>
                <h3>{paper.title}</h3>
                <p className="paper-authors">{paper.authors}</p>
                <p className="paper-venue">{paper.venue}</p>
                <div className="paper-meta">
                  <span className="paper-year">{paper.year}</span>
                </div>
                <div className="paper-tags">
                  {paper.tags.map((tag, index) => (
                    <span key={index} className="paper-tag">{tag}</span>
                  ))}
                </div>
                <div className="paper-links">
                  <button
                    className="paper-link"
                    onClick={() => {
                      setSelectedPaper(paper);
                      setShowAbstract(true);
                    }}
                  >
                    Abstract
                  </button>
                  <button
                    className="paper-link secondary"
                    onClick={() => {
                      setSelectedPaper(paper);
                      setShowCitation(true);
                    }}
                  >
                    Cite
                  </button>
                  {paper.pdfLink && paper.pdfLink !== '#' ? (
                    <a href={paper.pdfLink} className="paper-link secondary">PDF</a>
                  ) : (
                    <span className="paper-link disabled" title="PDF not available">PDF</span>
                  )}
                  {paper.codeLink && paper.codeLink !== '#' ? (
                    <a href={paper.codeLink} className="paper-link secondary">Code</a>
                  ) : (
                    <span
                      className="paper-link disabled"
                      title={`Code not public. Contact ${paper.isFirstAuthor ? 'Arslan Bisharat' : paper.authors.split(',')[0].trim()} for more info`}
                    >
                      Code
                    </span>
                  )}
                  {paper.scholarLink && paper.scholarLink !== '#' ? (
                    <a href={paper.scholarLink} className="paper-link secondary">Link</a>
                  ) : (
                    <span className="paper-link disabled" title="Paper link not available. Please check again later.">Link</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredPapers.length > 3 && !showAllPapers && (
            <div className="show-more-container">
              <button
                className="show-more-btn"
                onClick={() => setShowAllPapers(true)}
              >
                Show More ({filteredPapers.length - 3} more {filteredPapers.length - 3 === 1 ? 'publication' : 'publications'})
              </button>
            </div>
          )}

          {showAllPapers && filteredPapers.length > 3 && (
            <div className="show-more-container">
              <button
                className="show-more-btn"
                onClick={() => setShowAllPapers(false)}
              >
                Show Less
              </button>
            </div>
          )}

          {filteredPapers.length === 0 && (
            <div className="no-results">
              <p>No publications match the selected filters.</p>
            </div>
          )}
        </div>
      </div>

      {showAbstract && selectedPaper && (
        <div className="modal-overlay" onClick={() => setShowAbstract(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedPaper.title}</h3>
              <button className="modal-close" onClick={() => setShowAbstract(false)}>×</button>
            </div>
            <div className="modal-body">
              <p className="modal-authors">{selectedPaper.authors}</p>
              <p className="modal-venue">{selectedPaper.venue}, {selectedPaper.year}</p>
              <h4>Abstract</h4>
              <p className="abstract-text">{selectedPaper.abstract}</p>
            </div>
          </div>
        </div>
      )}

      {showCitation && selectedPaper && (
        <div className="modal-overlay" onClick={() => setShowCitation(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Cite this paper</h3>
              <button className="modal-close" onClick={() => setShowCitation(false)}>×</button>
            </div>
            <div className="modal-body">
              <p className="citation-title">{selectedPaper.title}</p>

              <div className="citation-tabs">
                <button
                  className={`citation-tab ${citationFormat === 'mla' ? 'active' : ''}`}
                  onClick={() => setCitationFormat('mla')}
                >
                  MLA
                </button>
                <button
                  className={`citation-tab ${citationFormat === 'apa' ? 'active' : ''}`}
                  onClick={() => setCitationFormat('apa')}
                >
                  APA
                </button>
                <button
                  className={`citation-tab ${citationFormat === 'bibtex' ? 'active' : ''}`}
                  onClick={() => setCitationFormat('bibtex')}
                >
                  BibTeX
                </button>
              </div>

              <div className="citation-format">
                <pre className="citation-code">{getCitationText(selectedPaper, citationFormat)}</pre>
                <button
                  className="copy-citation-btn"
                  onClick={() => handleCopyToClipboard(getCitationText(selectedPaper, citationFormat))}
                >
                  Copy to Clipboard
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResearchPapers;
