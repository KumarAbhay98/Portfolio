import React, { useEffect } from 'react';
import './Introduction.css';
import firstImg from '../assets/sittingpose.png';
import secondImg from '../assets/abhaydp (2).png';
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
                        <img src={firstImg} alt="Sitting Pose" />
                    </div>
                </div>
            </section>

            {/* Section 2: About Me */}
            <section id="about">
                <div className="about-me-introduction">
                    <div className="icon">
                        <img src={secondImg} alt="Abhay DP" />
                    </div>
                    <div>
                        <h2>About <span style={{ color: 'rgb(27, 201, 201)' }}>Me</span></h2>
                        <p data-aos="fade-right">
                            {/* Content about Abhay */}
                            Meet Abhay Kumar, a dynamic force at the intersection of technology, business acumen, and visionary leadership. <br/>Currently pursuing a BTech in Information Technology at HBTU Kanpur (Batch 24), Abhay demonstrates his versatility by excelling in various domains.<br/><br/>

                            In the field of web development, utilizing technologies such as React, JavaScript, and CSS frameworks to not only create websites but also deliver captivating digital experiences.

                            Abhay's skills extend beyond web development; he possesses a unique combination of technical proficiency and business intelligence. As a data sorcerer, he deciphers the language of data, transforming raw information into actionable insights that drive strategic decision-making.<br/><br/>

                            Abhay's aspirations go beyond traditional job roles. He aims to secure leadership positions, leveraging his expertise in business analysis, IT business analysis, data analysis, and web development to guide organizations towards unparalleled success. His portfolio not only showcases technical skills but also reflects his visionary leadership, embracing challenges, driving innovation, and delivering tangible results.<br/><br/>

                            This portfolio offers a glimpse into the dynamic realm of a professional who defies conventions and charts his own path towards excellence.
                        </p>
                        {/* Contact info */}
                        <br /><br/>
                        <h1 className="animate-hobby">My Hobbies are</h1>
                        <span style={{ color: "rgb(27, 201, 201)", fontSize: '2rem' }}>
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 40,
                                    strings: [
                                        "Singing",
                                        "Sketching",
                                        "Cooking",
                                        "Travelling"
                                    ],
                                }} />
                        </span>
                    </div>
                </div>
            </section>
            <br /><br />


            {/* Section 3: Services */}
            <section id="services" style={{ background: 'rgba(0, 0, 0, 0.854)' }}>
                <div className="Services">
                    <br /><br />
                    <h2>Our <span style={{ color: 'rgb(27, 201, 201)' }}>Services</span></h2>
                    <div className="services-box">
                        {/* Service info boxes */}
                        <div className="info-box">
                            <i className="bi bi-code-slash"></i>
                            <h3>Business & Data Analysis</h3>
                            <p>Data Analysis in order to find out KPIs. To promote decision making in businesses. Skills: Excel, SQL, PowerBI, Python</p>
                        </div>
                        <div className="info-box">
                            <i className="bi bi-wordpress"></i>
                            <h3>Web Development</h3>
                            <p>Decent Skill set for Webdevelopment like: JavaScript, React, Bootstrap, TailwindCSS, Express, MongoDB, Django.</p>
                        </div>
                        <div className="info-box">
                            <i className="bi bi-bar-chart-fill"></i>
                            <h3>Creative Content Writer and Leader</h3>
                            <p>Creatives services are also provided. Anything that needs leadership and effective communication goes with my personality. </p>
                        </div>
                    </div>
                </div><br /><br /><br /><br /><br />
            </section>
        </div>
    );
};

export default Introduction;

