import React from 'react';
import { Grocery2 } from '../../components';
import './Grocery.css';

const Grocery = () => {
  return (
  <>
    <header className='grocery-header' id="grocerylist">
      <div className='grocery-glass'>
        <h1 className='grocery-h-glass'>Grocery</h1>
        <div>
            <h2></h2>  
        </div>
      </div>
      <h1 className='grocery-h-regular'>List</h1>
    </header>
  <Grocery2/>
  </> 
  ) 
};

export default Grocery;

