// import React, { useRef, useState } from "react";
// import { Card, Button } from "antd";
// import { LeftOutlined, RightOutlined, CloseOutlined } from "@ant-design/icons";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import '../style/B.css' // CSS file for custom styling

// const propertiesData = [
//   {
//     images: [
//       "https://via.placeholder.com/300x200",
//       "https://via.placeholder.com/300x201",
//       "https://via.placeholder.com/300x202",
//     ],
//     beds: 4,
//     baths: 3,
//     sqft: 1878,
//     address: "1783 Drew Ave, Mountain View, CA, 94043",
//     status: "Active",
//   },
//   {
//     images: [
//       "https://via.placeholder.com/300x200",
//       "https://via.placeholder.com/300x201",
//       "https://via.placeholder.com/300x202",
//     ],
//     beds: 4,
//     baths: 3,
//     sqft: 1878,
//     address: "1783 Drew Ave, Mountain View, CA, 94043",
//     status: "Active",
//   },
//   {
//     images: [
//       "https://via.placeholder.com/300x200",
//       "https://via.placeholder.com/300x201",
//       "https://via.placeholder.com/300x202",
//     ],
//     beds: 4,
//     baths: 3,
//     sqft: 1878,
//     address: "1783 Drew Ave, Mountain View, CA, 94043",
//     status: "Active",
//   },
// ];

// const PropertyCarousel = () => {
//   const sliderRef = useRef(null);
//   const [visibleProperties, setVisibleProperties] = useState(propertiesData);

//   const sliderSettings = {
//     infinite: true,
//     slidesToShow: 2.5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1.5,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1.1,
//         },
//       },
//     ],
//   };

//   const nextSlide = () => {
//     sliderRef.current.slickNext();
//   };

//   const prevSlide = () => {
//     sliderRef.current.slickPrev();
//   };

//   const closePropertyCard = (index) => {
//     const newProperties = visibleProperties.filter((_, i) => i !== index);
//     setVisibleProperties(newProperties);
//   };

//   return (
//     <div style={{ padding: "50px", textAlign: "left" }}>
//       {/* Top Section Text */}
//       <h2>Trending Properties in Gurugram</h2>
//       <p>Viewed and saved the most in the area over the past 24 hours</p>

//       {/* Carousel Section */}
//       <Slider ref={sliderRef} {...sliderSettings}>
//         {visibleProperties.map((property, index) => (
//           <div key={index} style={{ padding: "0 10px" }}>
//             <Card
//               hoverable
//               style={{
//                 borderRadius: "15px",
//                 overflow: "hidden",
//                 position: "relative",
//               }}
//             >
//               {/* Image slider inside the card */}
//               <div className="image-container">
//                 <Slider
//                   arrows={false}
//                   dots={true}
//                   infinite={true}
//                   slidesToShow={1}
//                   slidesToScroll={1}
//                 >
//                   {property.images.map((image, imgIndex) => (
//                     <img
//                       key={imgIndex}
//                       src={image}
//                       alt={`property-${index}-${imgIndex}`}
//                       style={{
//                         width: "100%",
//                         height: "200px",
//                         objectFit: "cover",
//                         borderRadius: "15px 15px 0 0",
//                       }}
//                     />
//                   ))}
//                 </Slider>

//                 {/* Custom Arrow Buttons for inner image carousel */}
//                 <div className="arrow-buttons">
//                   <Button
//                     shape="circle"
//                     icon={<LeftOutlined />}
//                     onClick={prevSlide}
//                   />
//                   <Button
//                     shape="circle"
//                     icon={<RightOutlined />}
//                     onClick={nextSlide}
//                   />
//                 </div>

//                 {/* Custom Close Button */}
//                 <Button
//                   className="close-button"
//                   shape="circle"
//                   icon={<CloseOutlined />}
//                   onClick={() => closePropertyCard(index)}
//                 />
//               </div>

//               {/* Property Information */}
//               <div style={{ padding: "10px" }}>
//                 <p>
//                   {property.beds} bds | {property.baths} ba | {property.sqft}{" "}
//                   sqft | {property.status}
//                 </p>
//                 <p>{property.address}</p>
//               </div>
//             </Card>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default PropertyCarousel;
