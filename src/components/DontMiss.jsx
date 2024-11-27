import React, { useState } from 'react';
import '../style/DontMiss.css';
import buildingImage from '../../public/images/Dont-bg.png'; // Add the correct path to the image file
import axios from 'axios';
import { baseUrl } from './helper/Helper';
import {message} from "antd"

const DontMiss = () => {

  const [email,setEmail] = useState();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {

      if(!email){
       message.error("Please Fill Email")
        return
      }

      const postData = {
        email:email
      }
        const response = await axios.post(baseUrl+'/api/massage/createMessage',postData)
        console.log(response.data);

        if(response.data){
          setEmail("");
          message.success("Email Send Successfully");
        }
      } catch (error) {
       console.log(error)
    }
  }
  return (

    <div className='container'>
    <div className="newsletter-container">
      {/* Left Div */}
      <div className="newsletter-left">

        <div className='newsletter-left-text'>
        <h2>Don't Miss Out !!</h2>
        <p>New Homes Are Getting Added All The Time.<br/>Be The First To Know.</p>
        <input type="email" className='newsletter-left-input' placeholder="Enter your e-mail address" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <button onClick={handleSubmit}>SUBMIT </button>
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
