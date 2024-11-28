import React, { useState } from 'react';
 // Import the CSS for styling
import '../../style/Properties/Prop.css'
import {Link} from 'react-router-dom';
// import logo from '../../public/images/logo.png'
import logo from '../../../public/images/logo.png'

const Navbar = () => {

  // const [active, setActive] = useState("Buy");
  const [active, setActive] = useState("rent");
  const handleActive = (item) => {
    setActive(item);
  };

  return (

    <>

    <div className='container2'>  
    <div className="navbar1">
      <div className="nav-left1">
        <Link to="/buy/buy" >Buy</Link>
        <Link to="/rent/rent" className={` ${active === "rent" ? "active" : ""}`}>Rent</Link>
        <Link to="/upcomming">Upcoming Projects</Link>
      </div>

      <div className="center1">
        <img src={logo} alt="Diwan Realty Logo" className="logo"  />
      </div>

      <div className="nav-right1">
        <Link href="#sell">Sell</Link>
        <a href="#blog">Blog</a>
        <a href="#about">About Us</a>
      </div>
    </div>
    </div>
    

    </>
  );
};

export default Navbar;
