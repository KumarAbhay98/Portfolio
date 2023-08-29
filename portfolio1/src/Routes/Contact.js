import React from 'react'
import Navbar from '../Components/Navbar'
import ScrollToTop from '../Components/GoUpBtn'
import ContactContent from '../Components/ContactContent'
import Music from '../assets/headlights.mp3'
import MusicPlayer from '../Components/MusicPlayer'
import Footer2 from '../Components/Footer2'
import ContactMiddle from '../Components/contactMiddle'
const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactContent/>
      <ContactMiddle/>
      <MusicPlayer audioUrl={Music}/>
      <ScrollToTop/>
      <Footer2 message="Thanks for Contacting Us, Made with ❤️"/>
    </>
  )
}

export default Contact