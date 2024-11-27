import React, { useRef } from "react";
import { Card } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { baseUrl } from "./helper/Helper";

const CarouselComponent = ({ testinomial }) => {

  console.log("testinomial",testinomial)
  const carouselRef = useRef(null); // Create ref for the slider

  const settings = {
    infinite: true,
    dots: false,
    arrows: false, // Disable default arrows since you have custom buttons
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const next = () => {
    if (carouselRef.current) {
      carouselRef.current.slickNext(); // Use slickNext for react-slick
    }
  };

  const prev = () => {
    if (carouselRef.current) {
      carouselRef.current.slickPrev(); // Use slickPrev for react-slick
    }
  };

  return (
    <div className="container">
      <div>
        <div className="testinomial-heading">
          <h1>What People Say About Diwan Realty</h1>
        </div>
        <div
          style={{
            paddingTop: "30px",
            textAlign: "center",
            position: "relative",
          }}
          className="testinomaial-container-main"
        >
          <Slider
            ref={carouselRef} // Bind ref to the slider
            {...settings}
            className="Testinomails-container"
          >
            {testinomial?.map((item, index) => (
              <div key={index}>
                <Card
                  hoverable
                  style={{
                    width: 382,
                    height: 430,
                    margin: "0 auto",
                    textAlign: "left",
                    borderRadius: "18px",
                    overflow: "hidden",
                    backgroundColor: "#F4F4F4",
                    boxShadow: "none",
                  }}
                  cover={
                    <img
                      alt="large"
                      src={`${baseUrl}${item?.images[0]}`}
                      style={{ height: "169px" }}
                    />
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "24px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        alt="small"
                        src={`${baseUrl}${item?.images[0]}`}
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      />
                      <div>
                        <h4>{item.name}</h4>
                        <h5>{item.location}</h5>
                      </div>
                    </div>
                  </div>
                  <p>{item?.description}</p>
                </Card>
              </div>
            ))}
          </Slider>

          {/* Custom Scroll Buttons Positioned at the Bottom Center */}
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ marginRight: "30px", cursor: "pointer" }}>
              <svg
                onClick={prev}
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
              >
                <circle cx="29" cy="29" r="29" fill="#2B1B12" />
                <path
                  d="M25 29.4853L33.4853 21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M33.4854 37.6777L25.0001 29.1924"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div style={{ cursor: "pointer" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={next}
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
              >
                <circle cx="29" cy="29" r="29" fill="#2B1B12" />
                <path
                  d="M33.4854 29.4853L25.0001 21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M25 37.6777L33.4853 29.1924"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
