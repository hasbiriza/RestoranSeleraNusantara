import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans" style={{ textTransform: 'none' }}>At Selera Nusantara, our esteemed chef believes in the power of authentic flavors and culinary heritage.</p>
        </div>
        <p className="p__opensans" style={{ textTransform: 'none' }}> With a deep passion for Indonesian cuisine, our chef upholds the belief that food is not just nourishment but also a reflection of culture and tradition. We strive to preserve the essence of Indonesian flavors by using carefully selected ingredients and traditional cooking techniques. Our chef believes in creating unforgettable dining experiences that transport our guests to the diverse and vibrant culinary landscape of Indonesia. With every dish we serve, we aim to evoke a sense of nostalgia, celebration, and the joy of sharing a meal with loved ones. </p>
      </div>

      <div className="app__chef-sign">
        <p>Adi Santoso</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
