import React, { useEffect } from 'react';
import './Introduction.css';
import firstImg from '../assets/sittingpose.png';
import secondImg from '../assets/abhaydp.png';
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Introduction = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    // Run the useEffect hook only for this component
    
    return (
        <div id="introduction_page">
        
            {/* Section 1: Introduction */}
            <section id="section1">
                <div className="main-introduction">
                    <div className="detail-introduction">
                        <h1><span>Hi, It's Me</span> <br /> I'm <span style={{ color: 'rgb(27, 201, 201)' }}>Abhay</span></h1>
                        <p>
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: false,
                                    delay: 40,
                                    strings: [
                                        "This section is all about my projects. I have developed two projects, and this portfolio is going to be the third one. All of the projects are frontend-oriented and have very interactive UI components."
                                    ]
                                }}
                            />
                        </p>
                        <div className="social-introduction">
                            <a href="https://github.com/KumarAbhay98" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                            <a href="https://www.instagram.com/abhay.sahil/" taget="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/abhay-kumar-6586b220a/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                            <a href="#" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
                        </div>
                    </div>
                    <div className="images-introduction">
                        <img  src={firstImg} alt="Sitting Pose" />
                    </div>
                </div>
            </section>

            {/* Section 2: About Me */}
            <section id="about">
                <div className="about-me-introduction">
                    <div className="icon">
                        <img  src={secondImg} alt="Abhay DP" />
                    </div>
                    <div>
                        <h2>About <span style={{ color: 'rgb(27, 201, 201)' }}>Me</span></h2>
                        <p data-aos="fade-right">
                            {/* Content about Abhay */}
                            Introducing Abhay Kumar, a dynamic and accomplished 21-year-old web developer and BTech undergraduate student at HBTU Kanpur, Batch 24. Proficient in cutting-edge technologies such as React, Django, and CSS frameworks, he excels in curating aesthetically stunning and user-centric UIs. Driven by an unwavering commitment to excellence, Abhay's portfolio showcases a diverse array of projects that exemplify his prowess in delivering outstanding digital experiences. With an insatiable thirst for innovation and a keen eye for detail, he eagerly anticipates collaborative opportunities that push the boundaries of web development. Embrace the future of digital transformation with Abhay Kumar, where creativity and skill converge to redefine the art of web development.
                        </p>
                        {/* Contact info */}
                        <br/>
                        <h1 className="animate-hobby">My Hobbies are</h1>
                        <span style={{color:"rgb(27, 201, 201)",fontSize:'2rem'}}>
                        <Typewriter 
                        options={{
                            autoStart:true,
                            loop:true,
                            delay:40,
                            strings:[
                                "Singing",
                                "Sketching",
                                "Cooking",
                                "Travelling"
                            ],
                        }}/>
                        </span>
                    </div>
                </div>
            </section>
            <br/><br/>
            

            {/* Section 3: Services */}
            <section id="services" style={{background:'rgba(0, 0, 0, 0.854)'}}>
                <div className="Services">
                    <br/><br/>
                    <h2>Our <span style={{ color: 'rgb(27, 201, 201)' }}>Services</span></h2>
                    <div className="services-box">
                        {/* Service info boxes */}
                        <div   className="info-box">
                            <i className="bi bi-code-slash"></i>
                            <h3>Web Development</h3>
                            <p>I can create different modern and eye catching UIs</p>
                        </div>
                        <div className="info-box">
                            <i className="bi bi-wordpress"></i>
                            <h3>WordPress Development</h3>
                            <p>Can work upon wordpress websites as well.</p>
                        </div>
                        <div  className="info-box">
                            <i className="bi bi-bar-chart-fill"></i>
                            <h3>Content Writer</h3>
                            <p>I can work as a content writer and as a team leader.</p>
                        </div>
                    </div>
                </div><br/><br/><br/><br/><br/>
            </section>
        </div>
    );
};

export default Introduction;

