import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { baseUrl } from "./helper/Helper";
import { useNavigate } from "react-router-dom";
const Product = ({ url,bds,srrt ,description,propertiesType,price,location,builder,id}) => {
  console.log("url is",url)


 const navigate = useNavigate();
  console.log("url is now ",url)

  const image = url?.map((item)=>{
       return `${baseUrl}${item}`
  })


  const handle = ()=>{
    navigate(`/properties/${id}`);
  }
  // bds={item.bds}
  //     bs={item.bs}
  //     srrt={item.srrt}
  //     title={item.title}
  return (
    <>
      <div className="Product-continer" >
        
        
        <div className="Product-continer-main">
          <div className="Product-continer-main-inage">
          <SimpleImageSlider
            width={"300px"}
            height={"177px"}
            images={image?image:[]}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            
          />
        </div>
         
         <div className="Product-continer-main-text">
             <h2 onClick={handle}>{price}</h2>
            <pre><span style={{fontWeight:"bold"}}>{bds}</span> BHK <span style={{fontWeight:"bold"}}>{srrt}</span>  |  
             Apartment
             
            For {propertiesType}
           
            
            </pre>
            <p>{builder?.name},{location?.sector},{location?.city}</p>
            {/* <p>{title}</p> */}
         </div>


        </div>
        

        
      </div>
    </>
  );
};

export default Product;
