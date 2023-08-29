import React from 'react';
import Typewriter from 'typewriter-effect'; 
import './Footer2.css'; 

const Footer2 = ({ message }) => {
    return (
        <footer className="footerr">
            <div className="message-container">
                <Typewriter
                    options={{
                        strings: [message],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </footer>
    );
};

export default Footer2;
