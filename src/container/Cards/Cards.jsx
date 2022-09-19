import React from 'react'
import { images } from '../../constants';
import './Cards.css';
import VanillaTilt from 'vanilla-tilt';

const Cards = () => {
    VanillaTilt.init(
        document.querySelectorAll(".js-tilt"),{
            max:25,
            speed:1000,
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
            Food List
        </h2>
        </div>
        <img src={images.olive_oil} alt="olive_oil" className='pop' />
        <div className='content'>
            <button className='cart pop'>
                <span></span>
                <span>Eat and Avoid</span>
            </button>
        </div>
    </div>
    <div className='card js-tilt' data-tilt>
        <div className='banner'>
        <h2>
            Recipes
        </h2>
        </div>
        <img src={images.recipe} alt="recipe" className='pop' />
        <div className='content'>
            <button className='cart pop'>
                <span></span>
                <span>Recipes and Menus</span>
            </button>
        </div>
    </div>
  </section>
</div>
)
}

export default Cards
