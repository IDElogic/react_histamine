import React from 'react';
import { Brochure2 } from '../../components';
import './Brochure.css';

const Brochure = () => {
return (
<>
  <header className='header-header' id="brochures">
    <div className='header-glass'>
      <h1 className='header-h-glass'>Brochure</h1>
      <div>
          <h2></h2>       
      </div>
    </div>

    <h1 className='header-h-regular'>pdf</h1>
  </header>
 <Brochure2/>
</>
 ) 
};
export default Brochure;
