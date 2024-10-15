import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Product(props) {
  // bds = {item.bds}
  // bs={item.bs}

  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("length is ", props.url.length);
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === props.url.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? props.url.length - 1 : prevIndex - 1
    );
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // srrt = {item.srrt}
  // title = {item.title}

  return (
    <div className="card" >
      <div
        className="left-arrow"
        onClick={handlePrev}
        style={{
        padding:"10px", display:"flex",justifyContent:"center",alignContent:"center", position: "absolute", top: "30%", left: "10%", zIndex: "20", width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"#FFF",cursor:"pointer"}}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
        >
          <path
            d="M12.205 14.705C12.298 14.6121 12.3717 14.5018 12.4221 14.3804C12.4724 14.259 12.4983 14.1289 12.4983 13.9975C12.4983 13.8661 12.4724 13.736 12.4221 13.6146C12.3717 13.4932 12.298 13.3829 12.205 13.29L6.915 8L12.205 2.705C12.3926 2.51736 12.4981 2.26287 12.4981 1.9975C12.4981 1.73214 12.3926 1.47764 12.205 1.29C12.0174 1.10236 11.7629 0.996948 11.4975 0.996948C11.2321 0.996948 10.9776 1.10236 10.79 1.29L4.79 7.29C4.60375 7.47737 4.49921 7.73082 4.49921 7.995C4.49921 8.25919 4.60375 8.51264 4.79 8.7L10.79 14.7C10.8825 14.7933 10.9926 14.8675 11.1138 14.9182C11.235 14.969 11.3651 14.9953 11.4965 14.9958C11.6279 14.9963 11.7581 14.9708 11.8797 14.9209C12.0013 14.871 12.1118 14.7977 12.205 14.705Z"
            fill="#2A2A33"
          />
        </svg>
      </div>
      <div
        className="right-arrow"
        onClick={handleNext}
        style={{padding:"10px", position: "absolute", top: "30%", right: "17%", zIndex: "20" ,width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"#FFF",cursor:"pointer"}}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
        >
          <path
            d="M4.795 1.295C4.70202 1.38787 4.62826 1.49816 4.57794 1.61955C4.52761 1.74095 4.50171 1.87108 4.50171 2.00249C4.50171 2.13391 4.52761 2.26404 4.57794 2.38544C4.62826 2.50683 4.70202 2.61712 4.795 2.71L10.085 8L4.795 13.295C4.60736 13.4826 4.50194 13.7371 4.50194 14.0025C4.50194 14.2679 4.60736 14.5224 4.795 14.71C4.98264 14.8976 5.23713 15.0031 5.5025 15.0031C5.76786 15.0031 6.02236 14.8976 6.21 14.71L12.21 8.71C12.3962 8.52263 12.5008 8.26918 12.5008 8.005C12.5008 7.74081 12.3962 7.48736 12.21 7.3L6.21 1.3C6.11745 1.20669 6.00742 1.13254 5.8862 1.08179C5.76498 1.03103 5.63495 1.00467 5.50353 1.00421C5.37212 1.00374 5.2419 1.02918 5.12032 1.07908C4.99875 1.12898 4.8882 1.20235 4.795 1.295Z"
            fill="#2A2A33"
          />
        </svg>
      </div>

      <img
        className="product--image"
        src={props.url[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={{ borderRadius: "10px" }}
      />
      {/* <img className="product--image" src={props.url[0]} alt="product image" style={{borderRadius:"10px"}}/> */}
      <pre>
        <span style={{ fontWeight: "700" }}>{props.bds}</span> bhk |{" "}
        <span style={{ fontWeight: "700" }}>{props.bs}</span> ba |{" "}
        <span style={{ fontWeight: "700" }}>{props.srrt}</span> sqrt | Active
      </pre>
      <h4>{props.description}</h4>
      <p>{props.title}</p>
    </div>
  );
}
