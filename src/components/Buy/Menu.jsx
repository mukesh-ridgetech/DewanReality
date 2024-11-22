import React from 'react';
import PropertyList from './PropertyList';
import '../../style/Buy/Search.css';


const Menu = ({properties}) => {
  return (
    <div className="app-container">

        
      <div id="map-container" >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.717123089877!2d77.0507519!3d28.4594975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d194bcaa6b3b9%3A0x6a99bfbff8729188!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1635942829969!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          title="Map"
        ></iframe>
      </div>
      <div className="property-list-wrapper">
          <div className='property-list-wrapper-heading'>
            <h1>Homes For Sale</h1>
            <h5>{properties?.length} results</h5>
          </div>
        <PropertyList properties={properties} />
      </div>
    </div>
  );
};

export default Menu;
