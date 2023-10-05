import React,{useEffect} from 'react';
import { FaHtml5, FaCss3, FaJs, FaBootstrap, FaReact, FaPython, FaWordpress, FaFigma } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { SiTailwindcss, SiJquery, SiDjango, SiMongodb, SiJsonwebtokens, SiExpress } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  useEffect(()=>{
    Aos.init({ duration: 3000 });
  },[])
  return (
    <div data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" className="skills">
      <h1 style={{color:'rgb(27, 201, 201)'}}>My Skills</h1>
      <div className="skills-list">
        <div className="skill">
          <FaHtml5 className="skill-icon" />
          <p>HTML</p>
        </div>
        <div className="skill">
          <FaCss3 className="skill-icon" />
          <p>CSS</p>
        </div>
        <div className="skill">
          <FaJs className="skill-icon" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <FaBootstrap className="skill-icon" />
          <p>Bootstrap</p>
        </div>
        <div className="skill">
          <SiTailwindcss className="skill-icon" />
          <p>Tailwind CSS</p>
        </div>
        <div className="skill">
          <SiExpress className="skill-icon" />
          <p>Express</p>
        </div>
        <div className="skill">
          <SiMongodb className="skill-icon" />
          <p>MongoDB</p>
        </div>
        <div className="skill">
          <SiJsonwebtokens className="skill-icon" />
          <p>JWT</p>
        </div>
        <div className="skill">
          <FaReact className="skill-icon" />
          <p>React</p>
        </div>
        <div className="skill">
          <SiDjango className="skill-icon" />
          <p>Django</p>
        </div>
        <div className="skill">
          <FaPython className="skill-icon" />
          <p>Python</p>
        </div>
        <div className="skill">
          <FaWordpress className="skill-icon" />
          <p>WordPress</p>
        </div>
        <div className="skill">
          <FaFigma className="skill-icon" />
          <p>Figma</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

