import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
const Product = ({ url,bds,ba,srrt ,description,title}) => {
  console.log("url is",url)



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
            images={url}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            
          />
        </div>
         
         <div className="Product-continer-main-text">
            <pre><span style={{fontWeight:"bold"}}>{bds}</span> bhk | {ba} ba| <span style={{fontWeight:"bold"}}>{srrt}</span> sqrt | Active </pre>
            <p>{description}</p>
            <p>{title}</p>
         </div>


        </div>
        

        
      </div>
    </>
  );
};

export default Product;
