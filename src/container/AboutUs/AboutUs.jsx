import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans" style={{ textTransform: 'none' }}>Selera Nusantara Restaurant is a culinary haven dedicated to showcasing the rich and diverse flavors of Indonesian cuisine. With a deep appreciation for the cultural heritage and culinary traditions of the Indonesian archipelago, we invite you to embark on a gastronomic journey like no other.
        Our passionate team of skilled chefs carefully curates an extensive menu that represents the best of Indonesian culinary treasures. </p>


        <p className="p__opensans" style={{ textTransform: 'none', margin: '1rem 0' }}>From the vibrant spices of Padang cuisine to the fragrant herbs of Javanese specialties, each dish is thoughtfully prepared to bring out the authentic flavors that make Indonesian cuisine truly exceptional.
        At Selera Nusantara, we strive to create a warm and welcoming ambiance where food enthusiasts can gather, savor, and celebrate the culinary delights of Indonesia.
        Whether you&apos;re a local or a visitor, we invite you to immerse yourself in the enchanting world of Indonesian flavors and experience the true essence of Selera Nusantara.</p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans" style={{ textTransform: 'none' }}>At Selera Nusantara Restaurant, our journey began two decades ago with a vision to showcase the diverse and flavorsome cuisine of Indonesia. Founded in 1998 by Chef Adi and his wife, Sinta, our small eatery quickly gained a reputation for serving delicious, home-style meals that captured the essence of Indonesian cuisine. With a commitment to authenticity, we flourished, attracting a loyal following of locals and visitors who were captivated by the tantalizing aromas and exquisite tastes of our dishes. </p>
        <p className="p__opensans" style={{ textTransform: 'none', margin: '1rem 0' }}>Today, Selera Nusantara stands as a beloved culinary destination, offering an extensive menu that showcases the diverse flavors from across the archipelago. Join us on this gastronomic journey where tradition and innovation combine to create an unforgettable dining experience. </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
