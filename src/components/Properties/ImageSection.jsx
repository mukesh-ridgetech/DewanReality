import React from "react";
import Builder1 from "../../../public/images/b1-1.png";
import Builder2 from "../../../public/images/b2-2.png";
import { baseUrl } from "../helper/Helper";
const ImageSection = ({images}) => {

  const fullUrls = images?.map(path => `${baseUrl}${path}`);
  return (
    <>
      <div className="container1">
        <div className="Image-container">
          <div className="Image-container-left">
            {
              fullUrls?(<><img src={fullUrls[0]} alt="" /></>):(<></>)
            }
            
          </div>

          <div className="Image-container-right-main">
            <div className="Image-container-right">
              
              {
                fullUrls?.map((item)=>{
                       
                  return(
                    <>
                <div className="Image-container-right-item">
                <img src={item} alt="" />
              </div>
                    </>
                  )
                })
              }


              


              
            </div>

            {/* <div className="Image-container-right">
              <div className="Image-container-right-item">
                <img src={Builder1} alt="" />
              </div>
              <div className="Image-container-right-item">
                <img src={Builder1} alt="" />
              </div>
            </div> */}
          </div>
        </div>

         <div className="Image-footer-container">
              <div className="Image-footer-container-text"><h1>3BHK</h1></div>
              <div className="Image-footer-container-text"> <h1>Apartment</h1></div>
              <div className="Image-footer-container-text"> <h1>Fully Furnished</h1></div>
              <div className="Image-footer-container-text"><h1>20+ Amenities</h1></div>
         </div>
      </div>
    </>
  );
};

export default ImageSection;
