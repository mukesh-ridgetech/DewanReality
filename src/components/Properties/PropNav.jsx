import React from 'react';
 // Import the CSS for styling
import '../../style/Properties/Prop.css'
import {Link} from 'react-router-dom';
// import logo from '../../public/images/logo.png'
import logo from '../../../public/images/logo.png'

const Navbar = () => {
  return (

    <>

    <div className='container2'>  
    <div className="navbar1">
      <div className="nav-left1">
        <Link to="/buy">Buy</Link>
        <Link to="/properties">Rent</Link>
        <Link to="#upcoming">Upcoming Projects</Link>
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
