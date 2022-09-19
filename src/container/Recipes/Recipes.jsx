import React from 'react';
import { Recipes2 } from '../../components';
import './Recipes.css';

const Recipes = () => {

return (
 <>
  <header className='recipe-header' id="recipes">
    <div className='recipe-glass'>
      <h1 className='recipe-h-glass'>Diet</h1>
      <div></div>
    </div>
    <h1 className='recipe-h-regular-a'>&</h1>
    <h1 className='recipe-h-regular'>recipes</h1>
  </header>
  <Recipes2/>
</> 
 ) 
};

export default Recipes;