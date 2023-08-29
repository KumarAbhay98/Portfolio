import React,{useEffect} from 'react'
import { FaGithub} from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import './ContactContent.css'
import Aos from 'aos' 
import 'aos/dist/aos.css';

const ContactContent = () => {
    useEffect(()=>{
        Aos.init({ duration: 2000});
    },[])
    return (
        <>
            <div className="contact-container">
                <div className="contact-content">
                    <div  className="contact-card">
                        <h3 data-aos="fade-left" className="contact-heading">Contact⬇️me</h3>
                        <a data-aos="fade-left" href="https://www.linkedin.com/in/abhay-kumar-6586b220a/" target="_blank" rel="noreferrer"><BsLinkedin size={30} /></a>
                        <a data-aos="fade-right" href="mailto:Abhaycbr07@gmail.com" target="_blank" rel="noreferrer"><SiGmail size={30} /></a>
                        <a data-aos="fade-left" href="https://github.com/KumarAbhay98" target="_blank" rel="noreferrer"><FaGithub size={30} /></a>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactContent