import React from 'react';
import { FiFacebook,FiTwitter, FiInstagram} from 'react-icons/fi';

import { images } from '../../constants';
import Scroll from '../../components/Scroll';
import { DownloadButton } from '../../components';
import './Footer.css';

const Footer = () => (
<div className='footer' id='footer'>
   <DownloadButton/>
  <div className='footer-glass-container'>
  <div className='footer-links' >
      <div className='footer-links-contact'>
          <h1 className='footer-headtext'>Services</h1> 
          <a href="#recipes"><p className='p'>Recipes</p></a>
          <a href="#histamineinfo"><p className='p'>Histamine Info</p></a>
          <a href="#brochures"><p className='p'>Brochures</p></a>
          
          
      </div>
      <div className='footer-links-logo'>      
        <a href='/mainContainer'><p className='p'>Privacy Policy </p></a> 
        <a href='/termsandCondition'><p className='p'>Terms and Conditions</p></a> 
        <a href='/pageNotFound'><p className='p'>About Us </p></a> 
        <img src={images.h2} alt="..." style={{ margin: '2rem  0'}} />
        <div className='footer-links-icons'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
        </div>
      </div>
      <div className='footer-links-work'>
          <h1 className='footer-headtext'>services</h1>
          <a href="#foodlist"><p className='p'>Food Lists</p></a>
          <a href="#grocerylist"><p className='p'>Grocery List</p></a>
          <a href="/bloghome"><p className='p'>Blog</p></a>
      </div>
    </div> 
  </div>
  <div className='footer-copyright'>
      <a href='http://blibb.net'><p className='p'>2022 by Me, All rights reserved</p></a>
  </div> 
  <Scroll showBelow={250} />
</div>
);

export default Footer;
