import React from "react";
// import floor from "../../../public/images/floor.png";
import { baseUrl } from "../helper/Helper";
const FloorPlan = ({ floortypes,camelliasImage ,data}) => {
  return (
    <>
      <div className="floor-container" id="FloorPlan">
        <div className="floor-container-left">
          <img src={`${baseUrl}${camelliasImage}`} alt="" />
        </div>
        <div className="floor-container-right">
          <div className="floor-container-right-head">
            <h1 style={{textTransform:"capitalize"}}>{data?.propertiesName}</h1>
          </div>
          <div className="floor-container-right-header">
            <div className="floor-container-right-header-1">
              <div>
                <h1>Floor Type</h1>
              </div>
              <div>
                <h1>Floor Size (sq.ft.)</h1>
              </div>
            </div>

            {floortypes?.map((item) => {
              return (
                <>
                  <div className="floor-container-right-header-2">
                    <div>
                      <h1>{item?.bhk}</h1>
                    </div>
                    <div>
                      <h1>{item?.Area}</h1>
                    </div>
                  </div>
                </>
              );
            })}

            {/* <div className='floor-container-right-header-2'>
                              <div><h1>5BHK</h1></div>
                              <div><h1>9000-13000</h1></div>
                              </div>


                              <div className='floor-container-right-header-2'>
                              <div><h1>6BHK</h1></div>
                              <div><h1>1000-16500</h1></div>
                              </div> */}
          </div>

          <div className="Download-container">
            <div className="Download-container-text">
              <h1>Download Floor Plan</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloorPlan;
