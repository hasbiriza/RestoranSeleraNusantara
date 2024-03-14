import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Jl. Cikini Raya No. 7, Menteng, Jakarta Pusat, DKI Jakarta 10330, Indonesia</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Book a Table</p>
        <p className="p__opensans">Contact Us At:+62 812-3456-7890 </p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 08:00 - 00:00 </p>
        <p className="p__opensans">Sat - Sun: 08:00 - 03:00 </p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }} onClick={() => window.location.href = 'https://goo.gl/maps/Ke6Nze3w1ekQwrxv9'}>
  Visit Us
</button>

    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
