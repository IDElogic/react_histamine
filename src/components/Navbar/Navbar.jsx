import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import images from '../../constants/images';
import './Navbar.css';



const Navbar = () => {
  const links = document.querySelectorAll("ul, li");
  const text = document.querySelectorAll("text");
  
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
      <a href="#home"><img src={images.h2} alt="..." style={{ margin: '1rem  0'}} /></a>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#foodlist">Food List</a></li>
        <li className="p__opensans"><a href="#recipes">Recipes</a></li>
        <li className="p__opensans"><a href="#histamineinfo">Histamine Info</a></li>
        <li className="p__opensans"><a href="#gallery">Gallery</a></li>
        <li className="p__opensans"><a href="#grocerylist">Grocery List</a></li>
        <li className="p__opensans"><a href="#brochures">Brochures</a></li>
        <li className="p__opensans"><a href="/bloghome">Blog</a></li>
        <li className="p__opensans"><a href="#footer">Contact</a></li>
        <li className="p__opensans"><a href="/pageNotFound">About</a></li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={24} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <GiHamburgerMenu fontSize={24} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#foodlist" onClick={() => setToggleMenu(false)}>Food List</a></li>
              <li><a href="#recipes" onClick={() => setToggleMenu(false)}>Recipes</a></li>
              <li><a href="#histamineinfo" onClick={() => setToggleMenu(false)}>Histamine Info</a></li>
              <li><a href="#gallery" onClick={() => setToggleMenu(false)}>Gallery</a></li>
              <li><a href="#grocerylist" onClick={() => setToggleMenu(false)}>Grocery List</a></li>
              <li><a href="#brochures" onClick={() => setToggleMenu(false)}>Brochures</a></li>
              <li><a href="/bloghome" onClick={() => setToggleMenu(false)}>Blog</a></li>
              <li><a href="#footer" onClick={() => setToggleMenu(false)}>Contact</a></li>
              <li><a href="/pageNotFound" onClick={() => setToggleMenu(false)}>About</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;