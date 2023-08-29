import React from 'react'
import Navbar from '../Components/Navbar'
import Cover from '../Components/Cover'
import ScrollToTop from '../Components/GoUpBtn'
import Footer from '../Components/Footer'
import TimelineSection from '../Components/TimelineSection'
import Introduction from '../Components/Introduction'
import Skills from '../Components/Skills'
import Carousel from '../Components/Certicarousel'
import MusicPlayer from '../Components/MusicPlayer'
import Nights from '../assets/Nights.mp3'
const Home = () => {
  return (
    <>
      <Navbar />
      <Cover />
      <Introduction/><br/><br/><br/>
      <Skills/>
      <TimelineSection/>
      <Carousel/>
      <MusicPlayer audioUrl={Nights}/>
      <ScrollToTop/>
      <Footer />
    </>
  )
}

export default Home