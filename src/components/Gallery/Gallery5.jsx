import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { images } from '../../constants';
import './Gallery.css';

const Gallery5 = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="gallery flex__center" id='gallery'>
      <div className="gallery-images">
        <div className="gallery-images_container" ref={scrollRef}>
          {[ 
            images.gr1,
            images.gallery5_2,
            images.gallery5_4,
            images.gallery5_3,
            images.gr2,
            images.gallery5_1,
            ,].map((image, index) => (
            <div className="gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>     
              <img src={image} alt="gallery_image" />
            </div> 
          ))}  
        </div>
        <div className="gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
    
  );
};

export default Gallery5;