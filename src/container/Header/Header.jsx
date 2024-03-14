import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Broaden Your Pallete With Authentic Indonesian Cuisines" />
      <h1 className="app__header-h1">Authentic Indonesian Cuisine</h1>
      <p className="p__opensans" style={{ margin: '2rem 0', fontFamily: 'Open Sans', textTransform: 'none' }}>We proudly serve authentic Indonesian dishes that tantalize the taste buds. From the savory nasi goreng to the tender rendang sapi, each of our dishes presents the unforgettable flavors of Indonesia. Indulge in the deliciousness of our sate ayam with its delectable peanut sauce, the tempting spiciness of our grilled fish, or the freshness and appetizing taste of our vegetarian dishes. We are committed to serving food made with fresh ingredients and selected spices, creating a satisfying culinary experience. Join us and savor the true pleasure of Authentic Indonesian Cuisine that we serve with utmost pride. Enjoy a culinary journey that stimulates the senses at our restaurant!</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
