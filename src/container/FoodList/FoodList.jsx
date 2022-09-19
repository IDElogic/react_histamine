import React from 'react';
import { FoodList2 } from '../../components';

import './FoodList.css';

const FoodList= () => {
return (  
  <>
  <header className='foodlist' id="foodlist">
      <div className='foodlist-glass'>
          <h1 className='foodlist-h1-glass'>Food</h1>
            <div className='foodlist-content'>
              <div> 
                    <h2></h2> 
              </div>
            </div>
      </div>
    <h1 className='foodlist-h1-regular'>List</h1> 
  </header> 
  <FoodList2/>
  </>
 ) 
};

export default FoodList;
