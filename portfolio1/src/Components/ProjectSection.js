import React, { useState } from 'react';
import './ProjectCard.css';
import ProjectCard from './ProjectCard';
import ProjectData from './ProjectCardData';

const ProjectSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterProjects = (category) => {
    setSelectedFilter(category);
  };

  const filteredProjects = selectedFilter === 'all'
    ? ProjectData
    : ProjectData.filter((project) => project.category === selectedFilter);

  return (
    <div className="work-container">
      <div className="filter-buttons">
        <button
          className={`filter-button ${selectedFilter === 'all' ? 'active' : ''}`}
          onClick={() => filterProjects('all')}
        >
          All
        </button>
        <button
          className={`filter-button ${selectedFilter === 'webd' ? 'active' : ''}`}
          onClick={() => filterProjects('webd')}
        >
          Web Development
        </button>
        <button
          className={`filter-button ${selectedFilter === 'data analytics' ? 'active' : ''}`}
          onClick={() => filterProjects('data analytics')}
        >
          Data Analytics
        </button>
      </div>

      <h3 className="gradient-text">Projects</h3>
      <div className="project-container">
        {filteredProjects.map((value, index) => (
          <ProjectCard
            key={index}
            imgad={value.imgUrl}
            title={value.title}
            about={value.about}
            explore={value.explore}
            github={value.github}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
