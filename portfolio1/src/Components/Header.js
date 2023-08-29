import React, {useEffect} from 'react'
import './Header.css'
import Typewriter from 'typewriter-effect'
import projectImg from '../assets/Project.webp'
import Aos from 'aos'
import 'aos/dist/aos.css';


const Header = () => {
    useEffect(() => {
        Aos.init({ duration: 3000});
    }, []);
    return (
        <>
            <div className="context">
                <div className="h-left">
                    <img data-aos="fade-right" className="project-img" src={projectImg} alt="Project" />
                </div>
                <div className="h-right">
                    <span>
                        <Typewriter
                           options={{
                            autoStart:true,
                            loop:true,
                            delay:40,
                            strings:[
                                "This Section is all about my projects.I have done around 5 to 6 projects majorly. These projects are very detailed. Explore my projects and in case of any suggestion visit my contact page to contact me."
                            ]
                        }}/>
                    </span>
                </div>
            </div>
            <div class="area" >
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
        </>
    )
}
export default Header