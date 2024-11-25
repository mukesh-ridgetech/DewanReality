import React, { useState, useEffect } from "react";
import "../style/SearchBar.css";
import ButtonImage from "../../public/images/Button.png";
import LinkImage from "../../public/images/Link.png";
import {
  Modal,
  Button,
  Form,
  Radio,
  Slider,
  Input,
  Checkbox,
  Row,
  Col,
} from "antd";
import { Select, Spin } from "antd";

const { Option } = Select;
import PriceSlider from "./PriceSlider";
import axios from "axios";
import { baseUrl } from "./helper/Helper";
import { useNavigate } from "react-router-dom";
// import { Slider } from 'antd';

const Tab2 = ({locations,selectedLocation,setSelectedLocation}) => {
  const [selectedTab, setSelectedTab] = useState("All");

  const navigate= useNavigate()


  const handleSelectionChange = (value)=>{
    setSelectedLocation(value); 
  }
  // const [activeTab, setActiveTab] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [checkedValues, setCheckedValues] = useState([]);
  const [storedValue, setStoredValue] = useState(null); // Variable to store selected value
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [areaRange, setAreaRange] = useState([500, 5000]);
  const [selectedTabs, setSelectedTabs] = useState([]);
  const [location, setLocation] = useState();
  const [form] = Form.useForm();

  const [selectedSector, setSelectedSector] = useState("");
  const [selectProperties, setselectProperties] = useState("");
  const [selectPrice,setSelectedPrice] = useState();
  const [searchUrl,setSearchUrl] = useState();
  const [advanceFilter,setAdvanceFilter] = useState(false)
  const[tabchange,setTabchange] = useState();


 

  const handleTabClick1 = (tab) => {
    // console.log("Clicked tab: ", tab);
    setTabchange(tab)
    if (selectedTab !== tab) {
      setSelectedTab(tab);
    }
    // console.log("selectedTab",selectedTab);
  };

 console.log("selectedTab",selectedTab);


  const handleChange = (event) => {
    setSelectedSector(event.target.value); // Store the selected value in state
  };

  const handleProperties = (event) => {
    setselectProperties(event.target.value); // Store the selected value in state
  };


  const handlePrice = (event) => {
    setSelectedPrice(event.target.value); // Store the selected value in state
  };


  // console.log("selectedTab",selectedTab);
  // Function to handle checkbox selection
  const onChange = (value, category) => {
    setCheckedValues((prev) => {
      // Remove existing selections for the same category
      const filtered = prev.filter((item) => item.category !== category);

      // Add the newly selected value
      return [...filtered, { category, value }];
    });
  };

  //   builderName,
  //       locationName,
  //       propertiesName,
  //       minPrice,
  //       maxPrice,
  //       propertiesType,
  //       propertiesCategory,
  //       propertiesStatus,
  //       bhkType,
  //       amenitiesName,
  //       minAge,
  //       maxAge,

  useEffect(() => {
    fetchLocagtion();
  }, []);
  

  const fetchLocagtion = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/locations/getLoacation`);
      console.log(response.data.locations);
      if (response.data) {

        const data = response.data.locations;

        const formattedData = data.map((item) => ({
            // _id: item._id,
            // city: item.city,
            ...item,
            sector: item.sector.replace(/[\s-]/g, "_"), // Replace spaces and hyphens with underscores
          }));

          console.log("formattedData",formattedData);
        setLocation(formattedData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTab = (tab) => {
    setSelectedTabs(
      (prev) =>
        prev.includes(tab)
          ? prev.filter((selectedTab) => selectedTab !== tab) // Remove tab if already selected
          : [...prev, tab] // Add tab if not already selected
    );
  };

  //   console.log("selectedTabs",selectedTabs);

  const resetFilters = () => {
    setCheckedValues([]);
    setPriceRange([]);
    setAreaRange([]);
    setSelectedTabs([]);
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

  const HandleSearch = async()=>{
         try {

            if(advanceFilter){
                // const response = await axios.get(
                //     `${baseUrl}/api/properties/filter?${searchUrl}`
                //   );
                //   console.log(response.data);

                  // if(response.data){
                    setAdvanceFilter(false);
                    setSearchUrl("");
                    setselectProperties("");

                    if(selectedTab ==='For Rent'){
                      navigate(`/buy/${searchUrl}`)
                    }
                    else if(selectedTab ==='For Sale'){
                      navigate(`/rent/${searchUrl}`)
                    }
                  // }
            }else{
                const query = new URLSearchParams();

                if(selectProperties){
                    query.append("propertiesCategory", selectProperties);
                  }
                     
                  if(selectedSector){
                    query.append("locationName", selectedSector);
                  }

                  if(selectPrice){
                    query.append("minPrice", selectPrice);
                  }
                  // const response = await axios.get(
                  //   `${baseUrl}/api/properties/filter?${ query.toString() }`
                  // );
                  // console.log(response.data);

                  // if(response.data){
                    setselectProperties("");
                    setSelectedSector("");
                    if(selectedTab ==='For Rent'){
                      navigate(`/buy/${query.toString()}`)
                    }
                    else if(selectedTab ==='For Sale'){
                      navigate(`/rent/${query.toString()}`)
                    }
                  // }
            }
            
         } catch (error) {
             console.log(error);
         }
  }

  const handleSubmit = async (values) => {
    console.log("Filter Values:", values);
    // builderName,
    // locationName,
    // propertiesName,
    // minPrice,
    // maxPrice,
    // propertiesType,
    // propertiesCategory,
    // propertiesStatus,
    // bhkType,
    // amenitiesName,
    // minAge,
    // maxAge,

    try {
        
      const query = new URLSearchParams();
      

      if(values?.amenities){
         const result = values?.amenities?.map(item => item.replace(/ /g, "-")).join("_");
         query.append("amenitiesName", result);
      }

      if(selectProperties){
        query.append("propertiesCategory", selectProperties);
      }
      else if (values.propertyCategory) {
        query.append("propertiesCategory", values.propertyCategory);
      }
     
      
      if (values.propertyType) {
        query.append("propertiesType", values.propertyType);
      }

      if (values.propertyStatus) {
        query.append("propertiesStatus", values.propertyStatus);
      }

      if (values.bhkType) {
        query.append("bhkType", values.bhkType);
      }

      if (values.builder) {
        query.append("builderName", values.builder);
      }

      if (values.propertyAge) {
        query.append("maxAge", values.propertyAge);
      }

      if (values.priceRange[1]) {
        query.append("maxPrice", values.priceRange[1]);
      }

      if(selectedSector){
        query.append("locationName", selectedSector);
      }
     

      setSearchUrl(query.toString())
      form.resetFields();
      setAdvanceFilter(true)
      setIsModalOpen(false);
    //   const response = await axios.get(
    //     `${baseUrl}/api/properties/filter?${query.toString()}`
    //   );
    //   console.log(response.data);

     
      //    console.log("query.toString()",query.toString())
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div className="search-container">
      {/* Tabs Section */}
      <div className="tabs">
      {["All", "For Rent", "For Sale"].map((tab) => (
        <div
          key={tab}
          className={`tab ${selectedTab === tab ? "active" : ""}`}
          onClick={() => handleTabClick1(tab)}
        >
          {tab}
        </div>
      ))}
      </div>

      {/* Search Inputs Section */}
       <div className="search-bar">
        <div className="input-group">
        <Select
                placeholder="Select a location"
                value={selectedLocation}
                onChange={handleSelectionChange}
                style={{ width: "100%" }}
                
            >
                {locations.map((location) => (
                    <Option key={location._id} value={location.city}>
                        {location.city} {/* Adjust according to the actual API response field */}
                    </Option>
                ))}
            </Select>
        </div>

        <div className="input-group large-input  palceholder-style">
          <input
            type="text"
            placeholder="Enter an address, neighbourhood, city, or PIN code"
          />
        </div>

        <div className="input-group">
          <select className="palceholder-style" onChange={handleProperties}>

          {/* <Radio value="Residential">Residential</Radio>
              <Radio value="Commercial">Commercial</Radio>
              <Radio value="Rental">Rental</Radio> */}
            <option value="" >Select Properties</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Rental">Rental</option>
          </select>
        </div>

        <div className="input-group">
          <select className="palceholder-style"  onChange={handlePrice}>
            <option value="" >Select Price</option>
            <option value="10000">₹ 10000</option>
            <option value="200000">₹ 200000</option>
            <option value="30000">₹ 300000</option>
          </select>
        </div>

        <button className="advanced-filter">
          <img
            src={LinkImage}
            alt=""
            style={{ width: "12px", cursor: "pointer", marginRight: "10px" }}
            onClick={showModal}
          />{" "}
          <h1>Advanced</h1>
        </button>

        <img
          src={ButtonImage}
          alt=""
          style={{ width: "50px", marginLeft: "20px", cursor: "pointer" }}
          onClick={HandleSearch}
        />
      </div>

      <Modal
        title="Filter"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="reset" onClick={() => form.resetFields()}>
            Reset
          </Button>,
          <Button key="submit" type="primary" onClick={() => form.submit()}>
            Apply Filters
          </Button>,
        ]}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{
            priceRange: [0,0],
            areaRange: [0,0],
          }}
        >
          {/* Tabs */}

          <Form.Item label="Property Type" name="propertyType">
            <Radio.Group>
              <Radio.Button value="sell">For Sale</Radio.Button>
              <Radio.Button value="rent">For Rent</Radio.Button>
              <Radio.Button value="upcomingProjects">
                Upcoming Projects
              </Radio.Button>
            </Radio.Group>
          </Form.Item>

          {/* <Form.Item label="Property Type" name="propertyType">
  <Checkbox.Group>
    <Row>
      <Col span={8}>
        <Checkbox value="sell">For Sale</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="rent">For Rent</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="upcomingProjects">Upcoming Projects</Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>
</Form.Item> */}

          <Form.Item name="propertyCategory">
            <Radio.Group>
              <Radio value="Residential">Residential</Radio>
              <Radio value="Commercial">Commercial</Radio>
              <Radio value="Rental">Rental</Radio>
            </Radio.Group>
          </Form.Item>

          {/* Property Type */}

          {/* Price Range */}
          {/* <Form.Item label="Price (₹)" name="priceRange">
            <Slider
              range
              min={0}
              max={5000000}
              step={50000}
              // onChange={(value) => setPriceRange(value)
              // }
            />
            <div style={{ marginTop: "10px" }}>
              <span>
                Selected Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
              </span>
            </div>
          </Form.Item> */}

          <Form.Item label="Price (₹)" name="priceRange">
            <Slider range min={0} max={100000} step={500} />
          </Form.Item>

          {/* Property Status */}
          <Form.Item label="Property Status" name="propertyStatus">
            <Radio.Group>
              <Radio value="Ready_to_Move">Ready to Move</Radio>
              <Radio value="Under_Construction">Under Construction</Radio>
            </Radio.Group>
          </Form.Item>

          {/* BHK Type */}
          <Form.Item label="BHK Type" name="bhkType">
            <Radio.Group>
              <Radio value="1">1BHK</Radio>
              <Radio value="2">2BHK</Radio>
              <Radio value="3">3BHK</Radio>
              <Radio value="4">4BHK</Radio>
              <Radio value="5">5+BHK</Radio>
            </Radio.Group>
          </Form.Item>

          {/* Build-up Area */}
          <Form.Item label="Build-up Area (sq. ft.)" name="areaRange">
            <Slider range min={0} max={100000} step={500} />
          </Form.Item>

          {/* Builder */}
          <Form.Item label="Builder" name="builder">
            <Radio.Group>
              <Radio value="DLF">DLF</Radio>
              <Radio value="M3M">M3M</Radio>
              <Radio value="Godrej">Godrej</Radio>
              <Radio value="Unitech Group">Unitech Group</Radio>
              <Radio value="BPTP Ltd.">BPTP Ltd.</Radio>
            </Radio.Group>
          </Form.Item>

          {/* Property Age */}
          <Form.Item label="Property Age" name="propertyAge">
            <Radio.Group>
              <Radio value="1">&lt;1 Year</Radio>
              <Radio value="3">&lt;3 Years</Radio>
              <Radio value="4">&lt;5 Years</Radio>
              <Radio value="10">&gt;10+ Years</Radio>
            </Radio.Group>
          </Form.Item>

          {/* Floor */}
          <Form.Item label="Floor" name="floor">
            <Radio.Group>
              <Radio value="Ground">Ground</Radio>
              <Radio value="1 to 3">1 to 3</Radio>
              <Radio value="4 to 6">4 to 6</Radio>
              <Radio value="7 to 10">7 to 10</Radio>
              <Radio value="10 & above">10 & above</Radio>
              <Radio value="Custom">Custom</Radio>
            </Radio.Group>
          </Form.Item>

          {/* Other Amenities */}
          <Form.Item label="Other Amenities" name="amenities">
            <Checkbox.Group>
              {[
                "Swimming Pool",
                "Power Backup",
                "Fire Safety",
                "CCTV Camera",
                "Security",
                "Shopping Center",
                "Sewage Treatment Plant",
                "Rain Water Harvesting",
                "Internet Provider",
                "Children’s Play Area",
                "Gym"

              ].map((amenity) => (
                <Checkbox key={amenity} value={amenity}>
                  {amenity}
                </Checkbox>
              ))}
            </Checkbox.Group>
          </Form.Item>
        </Form>
      </Modal>

      {/* <Modal
      title="Filter"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}

      footer={[
        <Button key="reset" onClick={resetFilters}>
          Reset Filters
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Apply Filters
        </Button>,
      ]}
    >
      <div className="filter-container">
        



        <div className="filter-container-tab" style={{ display: "flex", gap: "10px" }}>
          {["For Rent", "For Sell", "Upcoming Projects"].map((tab) => (
            <h1
              key={tab}
              onClick={() => toggleTab(tab)}
              style={{
                padding: "10px 20px",
                cursor: "pointer",
                backgroundColor: selectedTabs.includes(tab) ? "green" : "transparent",
                color: selectedTabs.includes(tab) ? "white" : "black",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              {tab}
            </h1>
          ))}
        </div>


        
        <div>
          <h3>Property Type</h3>
          {["Residential", "Commercial", "Rental"].map((type) => (
            <Checkbox
              key={type}
              checked={checkedValues.some(
                (item) => item.category === "PropertyType" && item.value === type
              )}
              onChange={() => onChange(type, "PropertyType")}
            >
              {type}
            </Checkbox>
          ))}
        </div>

      
        <div>
          <h3>Property Status</h3>
          {["Ready to Move", "Under Construction"].map((status) => (
            <Checkbox
              key={status}
              checked={checkedValues.some(
                (item) =>
                  item.category === "PropertyStatus" && item.value === status
              )}
              onChange={() => onChange(status, "PropertyStatus")}
            >
              {status}
            </Checkbox>
          ))}
        </div>

        
        <div>
          <h3>BHK TYPE</h3>
          {["1BHK", "2BHK", "3BHK", "4BHK", "5 + BHK"].map((bhk) => (
            <Checkbox
              key={bhk}
              checked={checkedValues.some(
                (item) => item.category === "BHKType" && item.value === bhk
              )}
              onChange={() => onChange(bhk, "BHKType")}
            >
              {bhk}
            </Checkbox>
          ))}
        </div>

        
        <div>
          <h3>Floor</h3>
          {[
  { label: "Ground", value: "Ground" },
  { label: "1 to 3", value: [1, 3] },
  { label: "4 to 6", value: [4, 6] },
  { label: "7 to 10", value: [7, 10] },
  { label: "10 & above", value: [10] },
].map(({ label, value }) => (
  <Checkbox
    key={label}
    checked={checkedValues.some(
      (item) => item.category === "Floor" && JSON.stringify(item.value) === JSON.stringify(value)
    )}
    onChange={() => onChange(value, "Floor")}
  >
    {label}
  </Checkbox>
))}

        </div>

        <div>
          <h3>Builder</h3>
          {["DLF", "M3M", "Godrej", "Allen", "BPTP Ltd.", "Unitech Group"].map(
            (builder) => (
              <Checkbox
                key={builder}
                checked={checkedValues.some(
                  (item) => item.category === "Builder" && item.value === builder
                )}
                onChange={() => onChange(builder, "Builder")}
              >
                {builder}
              </Checkbox>
            )
          )}
        </div>



 
 <div>
          <h3>Price Range (₹)</h3>
          <Slider
            range
            min={0}
            max={1000000}
            step={10000}
            value={priceRange}
            onChange={(value) => setPriceRange(value)}
          />
          <p>
            Selected Price: ₹{priceRange[0]} - ₹{priceRange[1]}
          </p>
        </div>

        
        <div>
          <h3>Area (sq. ft.)</h3>
          <Slider
            range
            min={100}
            max={10000}
            step={50}
            value={areaRange}
            onChange={(value) => setAreaRange(value)}
          />
          <p>
            Selected Area: {areaRange[0]} sq. ft. - {areaRange[1]} sq. ft.
          </p>
        </div>





        <div>
          <h3>Property Age</h3>
          {[
  { label: "< 1 Year", value: 1 },
  { label: "< 3 Years", value: 3 },
  { label: "< 5 Years", value: 5 },
  { label: "< 10+ Years", value: 10 },
].map(({ label, value }) => (
  <Checkbox
    key={value}
    checked={checkedValues.some(
      (item) => item.category === "PropertyAge" && item.value === value
    )}
    onChange={() => onChange(value, "PropertyAge")}
  >
    {label}
  </Checkbox>
))}
        </div>

        
        <div>
          <h3>Other Amenities</h3>
          {[
            "Swimming pool",
            "Power Backup",
            "Fire Safety",
            "CCTV Camera",
            "Security",
            "Shopping center",
            "Sewage treatment plant",
            "Rain Water Harvesting",
            "Lift",
          ].map((amenity) => (
            <Checkbox
              key={amenity}
              checked={checkedValues.some(
                (item) =>
                  item.category === "OtherAmenities" && item.value === amenity
              )}
              onChange={() => onChange(amenity, "OtherAmenities")}
            >
              {amenity}
            </Checkbox>
          ))}
        </div>
      </div>
    </Modal> */}
    </div>
  );
};

export default Tab2;
