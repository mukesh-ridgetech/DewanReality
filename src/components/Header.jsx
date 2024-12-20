import React, { useEffect } from 'react';
import '../App.css';  // Import the CSS for styling
import logo from '../../public/images/logo.png'
import { Select, Spin } from "antd";

const { Option } = Select;

const Header = ({locations,selectedLocation,setSelectedLocation}) => {


  console.log("locations",selectedLocation)
  const handleSelectionChange = (e)=>{
    setSelectedLocation(e.target.value); 
    
  }

  useEffect(()=>{

  },[selectedLocation])
  return (


    <>
    

    <div className='container'>
    <div className="header">
      <div className="left">

      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M20.0026 19.722C20.8434 19.722 21.5624 19.4226 22.1597 18.8237C22.7569 18.2251 23.0555 17.5052 23.0555 16.6641C23.0555 15.8233 22.7561 15.1042 22.1572 14.507C21.5586 13.9098 20.8387 13.6112 19.9976 13.6112C19.1567 13.6112 18.4377 13.9106 17.8405 14.5095C17.2433 15.1081 16.9447 15.828 16.9447 16.6691C16.9447 17.5099 17.2441 18.2289 17.843 18.8262C18.4416 19.4234 19.1615 19.722 20.0026 19.722ZM20.0001 32.9999C23.5926 29.7221 26.2499 26.7476 27.9722 24.0762C29.6944 21.4051 30.5555 19.0463 30.5555 16.9999C30.5555 13.8094 29.5366 11.1969 27.4988 9.16242C25.4611 7.12825 22.9615 6.11117 20.0001 6.11117C17.0387 6.11117 14.5391 7.12825 12.5013 9.16242C10.4636 11.1969 9.44466 13.8094 9.44466 16.9999C9.44466 19.0463 10.3197 21.4051 12.0697 24.0762C13.8197 26.7476 16.4631 29.7221 20.0001 32.9999ZM20.0001 36.6666C15.5279 32.861 12.1876 29.3263 9.97925 26.0624C7.77091 22.7985 6.66675 19.7777 6.66675 16.9999C6.66675 12.8333 8.00703 9.51381 10.6876 7.04159C13.3681 4.56936 16.4723 3.33325 20.0001 3.33325C23.5279 3.33325 26.632 4.56936 29.3126 7.04159C31.9931 9.51381 33.3334 12.8333 33.3334 16.9999C33.3334 19.7777 32.2292 22.7985 30.0209 26.0624C27.8126 29.3263 24.4723 32.861 20.0001 36.6666Z" fill="#0041D9"/>
        </svg>
        <span role="img" aria-label="location"></span> 
        {/* <h3 className='heading' >{selectedLocation}</h3> */}

           <select
                // placeholder="Select a location"
                value={selectedLocation}
                onChange={handleSelectionChange}
                style={{ width: "130px" ,border:"none",backgroundColor:"transparent",fontWeight:"bold",fontSize:"1.2rem"}}

           >
                {locations.map((location) => (
                    <option key={location._id} value={location.city}>
                        {location.city}
                    </option>
                ))}
            </select>

      </div>
      <div className="center">
        <img src={logo} alt="Diwan Realty Logo" className="logo"  />
      </div>
      <div className="right">
        <h4 className='heading1'>+91 9811773700</h4>
      </div>
    </div>

    </div>

    </>
  );
};

export default Header;
