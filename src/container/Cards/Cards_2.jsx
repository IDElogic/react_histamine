import React from 'react'
import { images } from '../../constants';
import './Cards.css';
import VanillaTilt from 'vanilla-tilt';

const Cards_2 = () => {
    VanillaTilt.init(
        document.querySelectorAll(".js-tilt"),{
            max:25,
            speed:150,
        });

        const sizes = document.querySelectorAll(".size");
        for(let i= 0; i< sizes.length; i++) {
            sizes[i].addEventListener("click", () => {
                for(let i=0; i < sizes.length; i++) {
                    sizes[i].classList.remove("active");
                } sizes[i].classList.remove("active"); 
            })
        }
        
  return (
    <div className='cards-container' id='cards'>
    <section className='cards'>
    <div className='card3 js-tilt' data-tilt>
        <div className='banner'>
        <h2>
            Grocery List
        </h2>
        </div>
        <img src={images.cart} alt="blueberries" className='pop' />
        <div className='content'>
            <button className='cart pop'>
                <span></span>
                <span>Shopping List</span>
            </button>
        </div>
    </div>
    <div className='card js-tilt' data-tilt>
        <div className='banner'>
        <h2>
            About Histamine
        </h2>
        </div>
        <img src={images.green} alt="blueberries" className='pop' />
        <div className='content'>
            <button className='cart pop'>
                <span></span>
                <span>Histamine Info</span>
            </button>
        </div>
    </div>
  </section>
</div>
)
}

export default Cards_2
