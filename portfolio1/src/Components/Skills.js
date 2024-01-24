// Skills.js
import React, { useEffect, useState } from 'react';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaReact,
  FaWordpress,
  FaPython,
  FaDatabase,
  FaChartBar,
  FaFileExcel,
} from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiMongodb, SiExpress } from 'react-icons/si';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Skills.css';

const Skills = () => {
  const [selectedFilter, setSelectedFilter] = useState('webDevelopment');

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const webDevelopmentSkills = [
    { icon: <FaHtml5 className="skill-icon" />, label: 'HTML' },
    { icon: <FaCss3 className="skill-icon" />, label: 'CSS' },
    { icon: <FaJs className="skill-icon" />, label: 'JavaScript' },
    { icon: <FaBootstrap className="skill-icon" />, label: 'Bootstrap' },
    { icon: <SiTailwindcss className="skill-icon" />, label: 'Tailwind CSS' },
    { icon: <SiExpress className="skill-icon" />, label: 'Express' },
    { icon: <SiMongodb className="skill-icon" />, label: 'MongoDB' },
    { icon: <FaReact className="skill-icon" />, label: 'React' },
    { icon: <SiDjango className="skill-icon" />, label: 'Django' },
    { icon: <FaWordpress className="skill-icon" />, label: 'WordPress' },
  ];

  const dataAnalyticsSkills = [
    { icon: <FaPython className="skill-icon" />, label: 'Python' },
    { icon: <FaDatabase className="skill-icon" />, label: 'SQL' },
    { icon: <FaChartBar className="skill-icon" />, label: 'Power BI' },
    { icon: <FaFileExcel className="skill-icon" />, label: 'Excel' },
  ];

  const skillsToShow = selectedFilter === 'webDevelopment' ? webDevelopmentSkills : dataAnalyticsSkills;

  return (
    <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="skills">
      <h1 style={{ color: 'rgb(27, 201, 201)' }}>My Skills</h1>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button
          className={`filter-button ${selectedFilter === 'webDevelopment' ? 'active' : ''}`}
          onClick={() => setSelectedFilter('webDevelopment')}
        >
          Web Development
        </button>
        <button
          className={`filter-button ${selectedFilter === 'dataAnalytics' ? 'active' : ''}`}
          onClick={() => setSelectedFilter('dataAnalytics')}
        >
          Data Analytics
        </button>
      </div>

      <div className="skills-list">
        {skillsToShow.map((skill, index) => (
          <div className="skill" key={index}>
            {skill.icon}
            <p>{skill.label}</p>
          </div>
        ))}
      </div>
   
      {/* New Soft Skills Section */}
      <h1 style={{ color: 'rgb(27, 201, 201)', marginTop: '50px' }}>Soft Skills</h1>
      <div className="skills-list">
        <div className="skill">
          <p>Leadership</p>
        </div>
        <div className="skill">
          <p>Effective Communication</p>
        </div>
        <div className="skill">
          <p>Team Player</p>
        </div>
        <div className="skill">
          <p>Active Listener</p>
        </div>
        <div className="skill">
          <p>Problem Solver</p>
        </div>
        <div className="skill">
          <p>Critical Thinking</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
