import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import ScrollToTop from '../Components/GoUpBtn'
import ProjectSection from '../Components/ProjectSection'
import GOTFlute from '../assets/GOTFlute.mp3'
import MusicPlayer from '../Components/MusicPlayer'
import Footer2 from '../Components/Footer2'
const Projects = () => {
  return (
    <>
    <Navbar/>
    <Header/><br/><br/>
    <MusicPlayer audioUrl={GOTFlute}/>
    <ScrollToTop/>
    <ProjectSection/><br/>
    <Footer2 message="Thanks for exploring Projects, Made with ❤️"/>
    </>
  )
}
export default Projects