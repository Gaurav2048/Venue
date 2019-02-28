import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <Fade>
            <div className="bck_white">
                <div className="font_righteous footer_logo_venue"><p style={{ textAlign: 'center', color: 'red' }}><h1>The Venue</h1></p></div>
                <div className="footer_copyright">
                    <p style={{ textAlign: 'center', color: 'red' }}>The ven 2019 All right reserved.</p>
                </div>
            </div>
        </Fade>

    );
};

export default Footer;