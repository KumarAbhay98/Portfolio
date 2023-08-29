import React from 'react'
import './GoogleLocation.css'
const Geolocation = () => {
  return (
    <>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.054784158833!2d80.29213667384244!3d26.486180878293396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c38143519cf93%3A0x2e4510c0ce0ddbf8!2sPunjab%20National%20Bank!5e0!3m2!1sen!2sin!4v1682948620638!5m2!1sen!2sin" width="100%" height="300" allowFullScreen="" title="location" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{border:"10px solid purple",padding:"1.5rem"}}></iframe>

    </>
  )
}

export default Geolocation