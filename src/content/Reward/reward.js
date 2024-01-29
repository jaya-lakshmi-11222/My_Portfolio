// ImageGallery.js

import React from 'react';
import './reward.css'; // Make sure to import your CSS file

const images = [
  { id: 1, src: 'url_to_image_1.jpg', alt: 'Image 1' },
  { id: 2, src: 'url_to_image_2.jpg', alt: 'Image 2' },
  { id: 3, src: 'url_to_image_3.jpg', alt: 'Image 3' },
  // Add more image objects as needed
];

const Reward = () => {
  return (
    <div className="fullcontainer">
      <div className="projectgrid">
        {images.map((image) => (
          <div key={image.id} className="cardpadding">
            <div className="card">
              <img
                src={image.src}
                alt={image.alt}
                className="card-image"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reward;
