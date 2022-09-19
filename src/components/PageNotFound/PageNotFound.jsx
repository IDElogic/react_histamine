import React,{ useState, useEffect }  from 'react';
import { images } from '../../constants';
import "./PageNotFound.css";

const PageNotFound = () => {
  const theTime =10;
    const [second, setSecond] = useState(theTime);
    
    useEffect(() => {
        const timer =setTimeout(() => {
            if(second >= 1) {
            setSecond(second-1);
            }
            }, 1000);
            return () => {
                clearInterval(timer);
            }
        });
  return (
    <div className='container' id='pageNotFound'>
      <div className='button-container'>
          <div className="loading-button">
            <div className="loading-bar" 
              style={{width: `${(second *100) / theTime}%` }}/>
              {second !==0 ? `Loading in ${second} s` : `Ooops, this page is not on the Map.`}
          </div>
          <div className="loading-button2">
            <div className="loading-bar2" 
              style={{width: `${(second *100) / theTime}%` }}/>
              {second !==0 ? `404` : `Sorry, in our website, theory and practice are combined: Nothing works and no one knows why.`}
              
          </div>
          </div>
                  
    </div>
  )
}

export default PageNotFound
