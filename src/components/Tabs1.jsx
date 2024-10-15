import React, { useState } from "react";
import "../style/Tabs1.css";
import LinkImage from "../../public/images/Link.png";
import ButtonImage from "../../public/images/Button.png";
import Icon from "../../public/images/Icon.png";
import { Modal, Button } from "antd";
import { Checkbox } from "antd";
import PriceSlider from "./PriceSlider";

// import { FaSearch, FaFilter } from 'react-icons/fa';

const Tabs1 = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [checkedValues, setCheckedValues] = useState([]);
  const [storedValue, setStoredValue] = useState(null); // Variable to store selected value

  const onChange = (checkedValue) => {
    if (checkedValues.includes(checkedValue)) {
      setCheckedValues([]);
      setStoredValue(null); // Clear stored value
    } else {
      setCheckedValues([checkedValue]);
      setStoredValue(checkedValue); // Store the selected value
    }
  };



  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="tabs-container">
      {/* Tabs */}
      <div className="tabs">
        <div
          className={`tab ${activeTab === "all" ? "active" : ""}`}
          onClick={() => handleTabClick("all")}
        >
          All
        </div>
        <div
          className={`tab ${activeTab === "rent" ? "active" : ""}`}
          onClick={() => handleTabClick("rent")}
        >
          For Rent
        </div>
        <div
          className={`tab ${activeTab === "sale" ? "active" : ""}`}
          onClick={() => handleTabClick("sale")}
        >
          For Sale
        </div>
      </div>

      {/* Input and icons */}
      <div className="input-container">
        <div className="input-field">

          <div className="input-box-text">

            <img src={Icon} alt="" style={{width:"20px",height:"20px"}}/>
          <input

          className="styled-input"
            type="text"
            placeholder="Enter an address, neighbourhood, city, or PIN code"
          />
          </div>
          
          {/* <FaFilter className="filter-icon" /> */}
          <div className="input-field-content">
            <img
              src={LinkImage}
              alt=""
              style={{ width: "15px", cursor: "pointer" }}
              onClick={showModal}
            />
            <h1>Advance</h1>
            <img src={ButtonImage} alt="" style={{ width: "60px",marginLeft:"20px" }} />
          </div>

          <div></div>
          {/* <FaSearch className="search-icon" /> */}
        </div>
      </div>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="filter-container">
          <div className="filter-container-tab">
            <h1>For Rent</h1>
            <h1>For Sell</h1>
            <h1>Upcoming Projects</h1>
          </div>

          <div >
            <h3>Property Type</h3>

            <Checkbox
              checked={checkedValues.includes("Residential")}
              onChange={() => onChange("Residential")}
            >
             <span> Residential</span>
            </Checkbox>
            <Checkbox
              checked={checkedValues.includes("Commercial")}
              onChange={() => onChange("Commercial")}
            >
              <span>Commercial</span>
            </Checkbox>
            <Checkbox
              checked={checkedValues.includes("Rental")}
              onChange={() => onChange("Rental")}
            >
              <span>Rental</span>
            </Checkbox>
            <p>Stored Value: {storedValue}</p> {/* Display stored value */}
          </div>
        
        <PriceSlider/>

          <div>
            <h3>Property Status</h3>
            <Checkbox
              checked={checkedValues.includes("Residential")}
              onChange={() => onChange("Residential")}
            >
              Ready to Move
            </Checkbox>
            <Checkbox
              checked={checkedValues.includes("Commercial")}
              onChange={() => onChange("Commercial")}
            >
            Under Construction
            </Checkbox>
            
            <p>Stored Value: {storedValue}</p> {/* Display stored value */}
          </div>

          <div>
            <h3>BHK TYPE</h3>
            <Checkbox
              checked={checkedValues.includes("Residential")}
              onChange={() => onChange("Residential")}
            >
              1BHK
            </Checkbox>
            <Checkbox
              checked={checkedValues.includes("Commercial")}
              onChange={() => onChange("Commercial")}
            >
              2BHK
            </Checkbox>
            <Checkbox
              checked={checkedValues.includes("Rental")}
              onChange={() => onChange("Rental")}
            >
              3BHK
            </Checkbox>

            <Checkbox
              checked={checkedValues.includes("Rental")}
              onChange={() => onChange("Rental")}
            >
              4BHK
            </Checkbox>
            <p>Stored Value: {storedValue}</p> {/* Display stored value */}
          </div>

          <PriceSlider/>

          <div>
            <h3>Select an option:</h3>
            <Checkbox
              checked={checkedValues.includes("Residential")}
              onChange={() => onChange("Residential")}
            >
              Residential
            </Checkbox>
            <Checkbox
              checked={checkedValues.includes("Commercial")}
              onChange={() => onChange("Commercial")}
            >
              Commercial
            </Checkbox>
            <Checkbox
              checked={checkedValues.includes("Rental")}
              onChange={() => onChange("Rental")}
            >
              Rental
            </Checkbox>


            
            <p>Stored Value: {storedValue}</p> {/* Display stored value */}
          </div>


          <div>
            <h3>Builder</h3>
            <Checkbox
              checked={checkedValues.includes("Residential")}
              onChange={() => onChange("Residential")}
            >
              Residential
            </Checkbox>
            <Checkbox
              checked={checkedValues.includes("Commercial")}
              onChange={() => onChange("Commercial")}
            >
              Commercial
            </Checkbox>
            <Checkbox
              checked={checkedValues.includes("Rental")}
              onChange={() => onChange("Rental")}
            >
              Rental
            </Checkbox>


            
            <p>Stored Value: {storedValue}</p> {/* Display stored value */}
          </div>



          <div>
            <h3>Property Age </h3>
            <Checkbox
              checked={checkedValues.includes("Residential")}
              onChange={() => onChange("Residential")}
            >
              {`< 1 Year`}
            </Checkbox>
            <Checkbox
              checked={checkedValues.includes("Commercial")}
              onChange={() => onChange("Commercial")}
            >
              {`< 3 Years`}
            </Checkbox>
            <Checkbox
              checked={checkedValues.includes("Rental")}
              onChange={() => onChange("Rental")}
            >
                   {`< 5 Years`}
            </Checkbox>

            <Checkbox
              checked={checkedValues.includes("Rental")}
              onChange={() => onChange("Rental")}
            >
                   {`< 10 +Years`}
            </Checkbox>


            
            <p>Stored Value: {storedValue}</p> {/* Display stored value */}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Tabs1;
