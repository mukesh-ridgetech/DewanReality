import React from 'react';
import '../style/DontMiss.css';
import buildingImage from '../../public/images/Dont-bg.png'; // Add the correct path to the image file

const DontMiss = () => {
  return (

    <div className='container'>
    <div className="newsletter-container">
      {/* Left Div */}
      <div className="newsletter-left">

        <div className='newsletter-left-text'>
        <h2>Don't Miss Out !!</h2>
        <p>New Homes Are Getting Added All The Time.<br/>Be The First To Know.</p>
        <input type="email" className='newsletter-left-input' placeholder="Enter your e-mail address" />
        <button>SUBMIT </button>
        </div>

        
      </div>

      {/* Right Div */}
      <div className="newsletter-right">
        <img src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg" alt="Building" />
      </div>
    </div>

    </div>
  );
};

export default DontMiss;
