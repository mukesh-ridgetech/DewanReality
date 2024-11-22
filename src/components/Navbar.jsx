import React from 'react';
import '../App.css';  // Import the CSS for styling
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (

    <>

    <div className='container'>
          
    <div className="navbar">
      <div className="nav-left">
        <Link to="/buy/buy">Buy</Link>
        <Link to="/rent/rent">Rent</Link>
        <Link to="/upcomming">Upcoming Projects</Link>
      </div>
      <div className="nav-right">
        <Link href="/properties">Sell</Link>
        <a href="#blog">Blog</a>
        <a href="#about">About Us</a>
      </div>
    </div>
    </div>
    

    </>
  );
};

export default Navbar;
