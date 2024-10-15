import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../public/images/Builder4.png'
import img2 from '../../public/images/Builder2.png'
import img3 from '../../public/images/Builder3.png'
import img4 from '../../public/images/Builder4.png'
// import img5 from '../../public/images/Builder2.png'

import '../style/Marque.css'

function Marque() {
  return (
    <div className="Marque">
      <div className="title">
        <h1>Trusted Builders We Proudly Collaborate With</h1>
      </div>

      <div className='Marque-Image-container'>
        <Marquee pauseOnHover direction="left" speed={100} delay={5} style={{height:"150px",padding:"20px",overflowY:"hidden",width:"90%",margin:"auto"}}>
          <div className="image_wrapper">
            <img src={img1} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="" />
          </div>
          {/* <div>
            <img src={img5} alt="" />
          </div> */}
          
        </Marquee>
      </div>
    </div>
  );
}

export default Marque;