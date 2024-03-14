import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Jl. Cikini Raya No. 7, Menteng, Jakarta Pusat, DKI Jakarta 10330, Indonesia</p>
        <p className="p__opensans">+62 812-3456-7890</p>
        <p className="p__opensans">+62 813-4567-8901</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&ldquo;Savor the Exquisite Flavors of Indonesia&rsquo;s Culinary Heritage.&rdquo;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 - 00:00 </p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">08:00 - 03:00 </p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Selera Nusantara. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
