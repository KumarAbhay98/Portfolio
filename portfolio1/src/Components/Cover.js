import React from 'react'
import "./Cover.css"
import Typewriter from 'typewriter-effect'
import coverImg from "../assets/cover-img.jpg"
import { Link } from 'react-router-dom'
import 'animate.css';
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
const Cover = () => {
    return (
        <>
            <div className="cover">
                <div className="mask">
                    <img className="cover-img" src={coverImg} alt="coverImage" />
                </div>
                <div className="content animate__animated animate__backInLeft">
                    <h4>Bonjour! Welcome to my portfolio</h4>
                    <p>
                        <Typewriter
                        options={{
                            autoStart:true,
                            loop:true,
                            delay:40,
                            strings:[
                                "Enthusiastic Dev",
                                "Frontend Dev",
                                "React Developer"
                            ],
                        }}/>
                    </p>
                    <div>
                        <button className="btn" onClick={()=>{
                            window.open('https://drive.google.com/file/d/1ZTFgdkg8NOfpfuyhwnS5yaMuTEIlVuYZ/view?usp=sharing')
                        }}>Download Resume</button>
                        <Link to="/Projects" className="btn btn-light">Projects</Link>
                    </div>
                </div>
                <div className="socials animate__animated animate__zoomIn">
                    <a href="https://www.linkedin.com/in/abhay-kumar-6586b220a/" target="_blank" rel="noreferrer"><BsLinkedin size={25} /></a>
                    <a href="https://www.instagram.com/abhay.sahil/" target="_blank" rel="noreferrer"><FaInstagram size={25} /></a>
                    <a href="https://github.com/KumarAbhay98" target="_blank" rel="noreferrer"><FaGithub size={25}
                    /></a>
                    
                </div>
            </div>
        </>
    )
}
export default Cover