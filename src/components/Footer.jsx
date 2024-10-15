import React from 'react';
import '../style/Footer.css';
import fb from '../../public/images/facebook 1.png';
import In from '../../public/images/instagram 1.png';
import Linkedin from '../../public/images/linkedin 1.png';


const Footer = () => {
  return (
    <div className="contact-container">
      {/* Left Div */}
      <div className="contact-left">
        <h3>We would love to hear from you</h3>
        <h1>Contact Us</h1>
        <p>Reach us through</p>
        <address>
          123, 4th Floor, DLF Two Horizon Center, Phase V Golf Course Road, Gurgaon 122002 Haryana
        </address>
        <p>+91 7827308983</p>
        <p>info@diwan-realty.com</p>
        <p>Privacy Policy</p>

        
      </div>
     
     <div className='social-networks-container'>
     <div className="social-networks">
          <p>Social Networks</p>
          <a href="#"> <img src={fb} alt="" style={{width:"20px",height:"20px",marginRight:"10px"}}/>diwan.realty</a>
          <a href="#"> <img src={In} alt="" style={{width:"20px",height:"20px",marginRight:"10px"}}/>diwan.realty</a>
          <a href="#"> <img src={Linkedin} alt="" style={{width:"20px",height:"20px",marginRight:"10px"}}/>diwan.realty</a>
        </div>
     </div>



      {/* Middle Div */}
      <div className="contact-middle"></div>

      {/* Right Div */}
      <div className="contact-right">
        <h2>Request a Callback</h2>
        <form className="callback-form">
          <input class="styled-textarea" type="text" placeholder="Your Name" />
          <input class="styled-textarea" type="text" placeholder="Mobile Number" />
          <input class="styled-textarea" type="email" placeholder="E-mail Address" />
          <textarea class="styled-textarea" placeholder="Message" />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
