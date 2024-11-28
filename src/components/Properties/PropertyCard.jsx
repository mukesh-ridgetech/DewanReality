import React, { useState } from "react";
// import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";
import "../../style/Buy/Search.css";

import SimpleImageSlider from "react-simple-image-slider";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../helper/Helper";

const PropertyCard = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate()

  console.log(property)

  const {images} = property;
  // console.log(images);
  const fullUrls = images?.map(path => `${baseUrl}${path}`);


  const handle = ()=>{
    navigate(`/properties/${property?._id}`);
  }

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? property?.images?.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === property?.images?.length - 1 ? 0 : prevIndex + 1
    );
  };

  console.log(property?.builderLogo)

  return (
    <div className="property-card1" >
      <div className="image-container" style={{ position: "relative" }}>
        <span style={{ position: "absolute", zIndex: "20", right: 5, top: 5 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <g filter="url(#filter0_d_1_2044)">
              <rect x="4" width="24" height="24" rx="4" fill="white" />
              <path
                d="M21 22C20.1667 22 19.4583 21.7083 18.875 21.125C18.2917 20.5417 18 19.8333 18 19C18 18.9 18.025 18.6667 18.075 18.3L11.05 14.2C10.7833 14.45 10.475 14.6458 10.125 14.7875C9.775 14.9292 9.4 15 9 15C8.16667 15 7.45833 14.7083 6.875 14.125C6.29167 13.5417 6 12.8333 6 12C6 11.1667 6.29167 10.4583 6.875 9.875C7.45833 9.29167 8.16667 9 9 9C9.4 9 9.775 9.07083 10.125 9.2125C10.475 9.35417 10.7833 9.55 11.05 9.8L18.075 5.7C18.0417 5.58333 18.0208 5.47083 18.0125 5.3625C18.0042 5.25417 18 5.13333 18 5C18 4.16667 18.2917 3.45833 18.875 2.875C19.4583 2.29167 20.1667 2 21 2C21.8333 2 22.5417 2.29167 23.125 2.875C23.7083 3.45833 24 4.16667 24 5C24 5.83333 23.7083 6.54167 23.125 7.125C22.5417 7.70833 21.8333 8 21 8C20.6 8 20.225 7.92917 19.875 7.7875C19.525 7.64583 19.2167 7.45 18.95 7.2L11.925 11.3C11.9583 11.4167 11.9792 11.5292 11.9875 11.6375C11.9958 11.7458 12 11.8667 12 12C12 12.1333 11.9958 12.2542 11.9875 12.3625C11.9792 12.4708 11.9583 12.5833 11.925 12.7L18.95 16.8C19.2167 16.55 19.525 16.3542 19.875 16.2125C20.225 16.0708 20.6 16 21 16C21.8333 16 22.5417 16.2917 23.125 16.875C23.7083 17.4583 24 18.1667 24 19C24 19.8333 23.7083 20.5417 23.125 21.125C22.5417 21.7083 21.8333 22 21 22ZM21 20C21.2833 20 21.5208 19.9042 21.7125 19.7125C21.9042 19.5208 22 19.2833 22 19C22 18.7167 21.9042 18.4792 21.7125 18.2875C21.5208 18.0958 21.2833 18 21 18C20.7167 18 20.4792 18.0958 20.2875 18.2875C20.0958 18.4792 20 18.7167 20 19C20 19.2833 20.0958 19.5208 20.2875 19.7125C20.4792 19.9042 20.7167 20 21 20ZM9 13C9.28333 13 9.52083 12.9042 9.7125 12.7125C9.90417 12.5208 10 12.2833 10 12C10 11.7167 9.90417 11.4792 9.7125 11.2875C9.52083 11.0958 9.28333 11 9 11C8.71667 11 8.47917 11.0958 8.2875 11.2875C8.09583 11.4792 8 11.7167 8 12C8 12.2833 8.09583 12.5208 8.2875 12.7125C8.47917 12.9042 8.71667 13 9 13ZM21 6C21.2833 6 21.5208 5.90417 21.7125 5.7125C21.9042 5.52083 22 5.28333 22 5C22 4.71667 21.9042 4.47917 21.7125 4.2875C21.5208 4.09583 21.2833 4 21 4C20.7167 4 20.4792 4.09583 20.2875 4.2875C20.0958 4.47917 20 4.71667 20 5C20 5.28333 20.0958 5.52083 20.2875 5.7125C20.4792 5.90417 20.7167 6 21 6Z"
                fill="#717171"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1_2044"
                x="0"
                y="0"
                width="32"
                height="32"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_2044"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_2044"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </span>



        <span style={{ position: "absolute", zIndex: "20", right: 5, bottom: 5 }}>
           <img src={`${baseUrl}${property?.builder?.logo}`} alt="" style={{height:"30px",zIndex:"20"}}/>
        </span>
        <SimpleImageSlider
          width={"100%"}
          height={"100%"}
          images={fullUrls}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
        />
        {/* <ImageGallery items={property.images} infinite={true} autoPlay={true} showThumbnails={false}/> */}
        {/* <button className="arrow left-arrow" onClick={handlePrevClick}>&lt;</button>
        <button className="arrow right-arrow" onClick={handleNextClick}>&gt;</button> */}
      </div>

      
      <div className="property-details" onClick={handle}>
        <h3 id="heading">₹{property.price}</h3>
        <p id="para1">
          {property?.floortypes[0]?.bhk} | {property?.bhkType} ba | {property?.floortypes[0]?.Area}{" "} | Appartment For 
          {" "}{property?.propertiesType}
        </p>
        <p id="para2">{property?.builder?.name}, {property?.location?.sector},{property?.location?.city}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
