import React , {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import './ProjectCard.css'
import Aos from 'aos';
import 'aos/dist/aos.css';


// So we used props to fetch the data we entered in projectdata as an API
const ProjectCard = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1000});
    }, []);
  return (
    
    <>
    <div data-aos = "fade-right" className="project-card">
        <img  className="card-image" src={props.imgad} alt="img"/>
        <div ClassName="pro-details">
            <span className="project-about">{props.about}</span>
            <div className="pro-btns">
                <NavLink target="_blank" to={props.explore} className="buttons">
                    Explore
                </NavLink>
                <NavLink target="_blank" to={props.github} className="buttons">
                    Github
                </NavLink>
            </div>
        </div>
        <br/>
    </div>
    </>
  )
}

export default ProjectCard