import React from 'react';
import { DownloadButton } from '../../components';
import '../Footer/Footer.css';
import './Info.css';

const Info = () => (
  <div className='info' id='info'>
     <h1 className='h1'>Ultimate Histamine Intolerance App</h1>
     <div className='glass-container'> 
          <div className='info-contact'>
                    <h2 className='info-h2'>Food in Histamine Intolerance?</h2>
                    <h2 className='info-h2'>with the Histamine Application it could be easier</h2>  
                    <h2 className='info-h2'>don't worry anymore, just save it in the App</h2> 
                    <h2 className='info-h2'>comfortable and easy to use</h2>
                    <h2 className='info-h2'>cn Android & IOS</h2>         
          </div>   
      </div>
    <DownloadButton/>   
  </div>
);

export default Info;

