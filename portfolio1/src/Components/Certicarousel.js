import React, { useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import Hackerrank from '../assets/hackerrankcertificate.png'
import SuvidhaFoundation from '../assets/finalsuvidhafoundation.jpg'
import PrimaThink from '../assets/PrimaThink.jpg'
import Freecodecamp from '../assets/freecodecamp.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
const certificates = [
  // Array of certificate data
  { id: 1, title: 'Problem Solving Certificte from Hackerrank', imageUrl:Hackerrank, info: 'Problem Solving Certificte from Hackerrank' },
  { id: 2, title: 'Internship Certificate at Suvidha Foundation', imageUrl:SuvidhaFoundation, info: 'Internship Certificate at Suvidha Foundation' },
  { id: 3, title: 'Internship Certificate at PrimaThink', imageUrl:PrimaThink, info: 'Internship Certificate at PrimaThink' },
  { id: 4, title: 'Certificate of Responsive Websites by FreeCodeCamp', imageUrl:Freecodecamp, info: 'Certificate of Responsive Websites by FreeCodeCamp' },
];

const CertificateCarousel = () => {
  const [popupCertificate, setPopupCertificate] = useState(null);

  const handleCertificateClick = (certificate) => {
    setPopupCertificate(certificate);
  };

  const handleClosePopup = () => {
    setPopupCertificate(null);
  };

  return (
    <>
    <h1 className="Certificate-heading">Certificates</h1>
    <div className="carousel-container">
      
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={5000} // Change slide every 5 seconds
      >
        {certificates.map((certificate) => (
          <div key={certificate.id} className="certificate" onClick={() => handleCertificateClick(certificate)}>
            <img src={certificate.imageUrl} alt={certificate.title} />
            <div className="certificate-overlay">
              <h2>{certificate.title}</h2>
            </div>
          </div>
        ))}
      </Carousel>

      {popupCertificate && (
        <div className="popup" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClosePopup}>
              <span>&times;</span>
            </button>
            <img className="popup-img" src={popupCertificate.imageUrl} alt={popupCertificate.title} />
            <h2>{popupCertificate.title}</h2>
            <p>{popupCertificate.info}</p>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default CertificateCarousel;
