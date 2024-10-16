import React, { useRef } from "react";
import { Carousel, Card, Button } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const carouselData = [
  {
    largeImage:
      "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?cs=srgb&dl=pexels-jvdm-1454806.jpg&fm=jpg",
    smallImage:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    name: "Sarah Nguyen",
    location: "San Francisco",
    text: "Diwan Realty truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.",
    rating: "5.0",
  },
  {
    largeImage:
      "https://media.istockphoto.com/id/1390233984/photo/modern-luxury-bedroom.jpg?s=612x612&w=0&k=20&c=po91poqYoQTbHUpO1LD1HcxCFZVpRG-loAMWZT7YRe4=",
    smallImage: "https://via.placeholder.com/100",
    name: "Michael Rodriguez",
    location: "San Diego",
    text: "Diwan Realty truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.",
    rating: "4.5",
  },
  {
    largeImage:
      "https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/06/10183457/small-bedroom-ideas.jpg",
    smallImage:
      "https://plus.unsplash.com/premium_photo-1664541336692-e931d407ba88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww",
    name: "Emily Johnson",
    location: "Los Angeles",
    text: "Diwan Realty truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.",
    rating: "5.0",
  },

  {
    largeImage:
      "https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/06/10183457/small-bedroom-ideas.jpg",
    smallImage:
      "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Emily Johnson",
    location: "Los Angeles",
    text: "Diwan Realty truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.",
    rating: "5.0",
  },

  {
    largeImage:
      "https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/06/10183457/small-bedroom-ideas.jpg",
    smallImage:
      "https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Emily Johnson",
    location: "Los Angeles",
    text: "Diwan Realty truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.",
    rating: "5.0",
  },

  {
    largeImage:
      "https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/06/10183457/small-bedroom-ideas.jpg",
    smallImage:
      "https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Emily Johnson",
    location: "Los Angeles",
    text: "Diwan Realty truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.",
    rating: "5.0",
  },

  {
    largeImage:
      "https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/06/10183457/small-bedroom-ideas.jpg",
    smallImage:
      "https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Emily Johnson",
    location: "Los Angeles",
    text: "Diwan Realty truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.",
    rating: "5.0",
  },
];

const CarouselComponent = () => {
  const carouselRef = useRef(null);

  const settings = {
    infinite: true,
    dot: false,
    indicators: false,
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
      carouselRef.current.next();
    }
  };

  const prev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  return (
    <div className="conatainer">
      <div
        style={{
          paddingTop: "30px",
          textAlign: "center",
          position: "relative",
        }}
        className="testinomaial-container-main"
      >
        <Slider
          ref={carouselRef}
          {...settings}
          className="Testinomails-container"
        >
          {carouselData.map((item, index) => (
            <div key={index}>
              <Card
                hoverable
                style={{
                  width: 382,
                  height: 430,
                  margin: "0 auto",
                  textAlign: "left",
                  borderTopRightRadius: "18px",
                  borderTopLeftRadius: "18px",
                  borderBottomRightRadius: "18px",
                  borderBottomLeftRadius: "18px",
                  overflow: "hidden",
                  backgroundColor: "#F4F4F4",
                  boxShadow: "none",
                }}
                cover={
                  <img
                    alt="large"
                    src={item.largeImage}
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
                      src={item.smallImage}
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

                  <div
                    style={{ display: "flex", flexDirection: "column-reverse" }}
                  >
                    <div
                      style={{
                        backgroundColor: "white",
                        paddingLeft: "5px",
                        paddingTop: "3px",
                        paddingBottom: "3px",
                        paddingRight: "5px",
                        borderRadius: "4px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.23915 1.34164C7.47864 0.604591 8.52136 0.604592 8.76085 1.34164L10.0655 5.35704C10.1726 5.68666 10.4798 5.90983 10.8264 5.90983H15.0484C15.8234 5.90983 16.1456 6.90152 15.5186 7.35704L12.1029 9.8387C11.8226 10.0424 11.7052 10.4035 11.8123 10.7331L13.117 14.7485C13.3565 15.4856 12.5129 16.0985 11.8859 15.643L8.47023 13.1613C8.18984 12.9576 7.81016 12.9576 7.52977 13.1613L4.11407 15.643C3.48709 16.0985 2.64351 15.4856 2.88299 14.7485L4.18768 10.7331C4.29478 10.4035 4.17745 10.0424 3.89706 9.8387L0.481353 7.35704C-0.145618 6.90152 0.176603 5.90983 0.951581 5.90983H5.17363C5.52021 5.90983 5.82737 5.68666 5.93447 5.35704L7.23915 1.34164Z"
                          fill="#FFC71E"
                        />
                      </svg>

                      <span style={{ marginLeft: "10px" }}>5.0</span>
                    </div>
                  </div>
                </div>

                <p>{item.text}</p>
                {/* <div style={{ fontWeight: "bold" }}>Rating: {item.rating}</div> */}
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
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M33.4854 37.6777L25.0001 29.1924"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
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
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M25 37.6777L33.4853 29.1924"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
