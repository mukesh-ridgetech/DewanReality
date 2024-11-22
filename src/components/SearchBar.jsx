import React, { useEffect, useState } from "react";
import "../App.css";
import Tabs1 from "./Tabs1";
import Tab2 from "./Tab2";
const SearchBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Residential Commercial Rental

  const texts = ["Residential", "Commercial", "Rental"]; // Array of texts

  // useEffect to change the text every 1 second
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length); // Loop over texts
  //   }, 1000); // Change every 1 second

  //   return () => clearInterval(interval); // Cleanup interval on unmount
  // }, [texts.length]);

  return (
    <>
      <div className="container">
        <div className="background-image">
          <div className="seach-bar">
            <div className="seach-bar-heading">
              <div>
                <h1>Deals In </h1>
              </div>


             <div style={{width:"200px"}} className="text-crouser-conatainer">
              <div className="text-carousel">

                <h2>
                {texts.map((text, index) => (
                  <p
                    key={index}
                    className={`text-item ${
                      index === currentIndex ? "visible" : "hidden"
                    }`}
                  >
                    {text}
                  </p>
                ))}
                </h2>
               
              </div>
               </div>
              <div> <h1>Properties</h1></div>
            </div>

            <div>
              <Tab2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
