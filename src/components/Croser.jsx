import "../App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";
import axios from "axios";
import { baseUrl } from "./helper/Helper";
import { useEffect, useState } from "react";
const Croser = ({selectedLocation}) => {
  // bds:3,
  //   ba:2,
  //   srrt:378,

const[data,setData] = useState([])
const[properties,setProperties] = useState([])

  useEffect(()=>{
    // fetchProperties();
  },[])

  const fetchProperties = async()=>{
         try {
             const response = await axios.get(baseUrl+'/api/trending/getTrending');
             console.log("trending properties",response.data);

             if(response.data){
              setData(response.data);
               const data = response?.data?.map((item)=>{
                   return  item?.properties
               })

              console.log("properties is now",data)
              setProperties(data);
             }
         } catch (error) {
           console.log(error);
         }
  }

  console.log("data is now",data);
  const product =properties.length >0 && properties?.map((item1) => (
 

    console.log("item1",item1),

    item1?.properties?.map((item)=>(
      <Product
      // name={item.name}
      url={item?.images}
      price={item?.price}
      description={item?.description}
      bds={item?.bhkType}
      // bs={item.bs}
      srrt={item?.floortypes[0]?.Area}
      propertiesType={item?.propertiesType}
      location={item?.location}
      builder={item?.builder}
      id={item?._id}
      // title={item.title}
    />   

    ))
   
  ));


  // filterByLocation.

  useEffect(()=>{
    if(selectedLocation){
      filterTrending()
    }
    
  },[selectedLocation])

  const filterTrending = async()=>{
       try {

        const postData = {
          location :selectedLocation
        }
          const responce = await axios.post(baseUrl+'/api/trending/filterByLocation/',postData)
       
         if(responce.data){
          setProperties(responce?.data);
         }
        } catch (error) {
        console.log(error)
       }
  }

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;

    return (
      <div
        className="carousel-button-group"
        // style={{
        //   position: "absolute",
        //   right: "0%",
        //   top: "8%",
        //   transform: "translate(-50%, -50%)",
        // }}
      >
        <button
          className={currentSlide === 0 ? "disable" : ""}
          onClick={previous}
          disabled={currentSlide === 0} // Disable button if on the first slide
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M11.705 14.705C11.798 14.6121 11.8717 14.5018 11.9221 14.3804C11.9724 14.259 11.9983 14.1289 11.9983 13.9975C11.9983 13.8661 11.9724 13.736 11.9221 13.6146C11.8717 13.4932 11.798 13.3829 11.705 13.29L6.415 8L11.705 2.705C11.8926 2.51736 11.9981 2.26287 11.9981 1.9975C11.9981 1.73214 11.8926 1.47764 11.705 1.29C11.5174 1.10236 11.2629 0.996948 10.9975 0.996948C10.7321 0.996948 10.4776 1.10236 10.29 1.29L4.29 7.29C4.10375 7.47737 3.99921 7.73082 3.99921 7.995C3.99921 8.25919 4.10375 8.51264 4.29 8.7L10.29 14.7C10.3825 14.7933 10.4926 14.8675 10.6138 14.9182C10.735 14.969 10.8651 14.9953 10.9965 14.9958C11.1279 14.9963 11.2581 14.9708 11.3797 14.9209C11.5013 14.871 11.6118 14.7977 11.705 14.705Z"
              fill="#2A2A33"
            />
          </svg>
        </button>
        <button onClick={next}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4.295 1.295C4.20202 1.38787 4.12826 1.49816 4.07794 1.61955C4.02761 1.74095 4.00171 1.87108 4.00171 2.00249C4.00171 2.13391 4.02761 2.26404 4.07794 2.38544C4.12826 2.50683 4.20202 2.61712 4.295 2.71L9.585 8L4.295 13.295C4.10736 13.4826 4.00194 13.7371 4.00194 14.0025C4.00194 14.2679 4.10736 14.5224 4.295 14.71C4.48264 14.8976 4.73713 15.0031 5.0025 15.0031C5.26786 15.0031 5.52236 14.8976 5.71 14.71L11.71 8.71C11.8962 8.52263 12.0008 8.26918 12.0008 8.005C12.0008 7.74081 11.8962 7.48736 11.71 7.3L5.71 1.3C5.61745 1.20669 5.50742 1.13254 5.3862 1.08179C5.26498 1.03103 5.13495 1.00467 5.00353 1.00421C4.87212 1.00374 4.7419 1.02918 4.62032 1.07908C4.49875 1.12898 4.3882 1.20235 4.295 1.295Z"
              fill="#2A2A33"
            />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <>
   
      {
        properties.length>0?<div className="container">
        <div className="Crouser" >
          <div className="Crouser-box-text">
            <h1>Trending Properties in <span style={{textTransform:"capitalize"}}>{selectedLocation}</span></h1>
            <h4>
              Viewed and saved the most in the area over the past 24 hours
            </h4>
          </div>

          <div className="Crouser-box">
            <Carousel
              arrows={false}
              responsive={responsive}
              partialVisible={true}
              customButtonGroup={<ButtonGroup />}
              renderButtonGroupOutside
              
            >
              {product}
            </Carousel>
          </div>
        </div>
      </div>:""
      }
    </>
  );
};

export default Croser;
