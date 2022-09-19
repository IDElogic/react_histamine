import React from 'react';
import './DownloadButton.css';

const DownloadButton = () => (
    <div className='dowloadButton' id='dowloadButton'>
      <div className='dowloadButton-container'>
        <div className='heart-btn'>
            <input type="checkbox"/>
            <button>
              <span>Google Play</span>
            </button> 
        </div>
        <div className='heart-btn'>
          <input type="checkbox"/>
          <button>
            <span>App Store</span>
          </button>
        </div>
     </div>
   </div> 
);

export default DownloadButton;
