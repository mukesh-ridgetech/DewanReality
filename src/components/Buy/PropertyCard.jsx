import React, { useState } from 'react';
// import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";
import '../../style/Buy/Search.css';
import SimpleImageSlider from "react-simple-image-slider";

const PropertyCard = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="property-card">
      <div className="image-container">

      <SimpleImageSlider
        width={"100%"}
        height={"100%"}
        images={property.images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        
      />
      {/* <ImageGallery items={property.images} infinite={true} autoPlay={true} showThumbnails={false}/> */}
        {/* <button className="arrow left-arrow" onClick={handlePrevClick}>&lt;</button>
        <button className="arrow right-arrow" onClick={handleNextClick}>&gt;</button> */}
      </div>
      <div className="property-details">
        <h3  id='heading'>{property.price}</h3>
        <p id='para1'>{property.beds} bhk | {property.baths} ba | {property.sqft} sq.ft. {property.type}</p>
        <p id='para2'>{property.address}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
