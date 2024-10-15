import React, { useState } from 'react';
import { Slider } from 'antd';
// import 'antd/dist/antd.css';
import '../style/Price.css'; // Optional: Custom styling

const PriceSlider = () => {
  const [range, setRange] = useState([0, 500000]); // Default range

  const onChange = (value) => {
    setRange(value);
  };

  return (
    <div className="price-slider-container">
      <h4>Select Price Range</h4>
      <Slider
        range
        min={0}
        max={500000}
        step={1000}
        // defaultValue={range}
        onChange={onChange}
       
      />
      <div className="price-values">
        <span>Min: ₹{range[0]}</span>
        <span>Max: ₹{range[1]}</span>
      </div>
    </div>
  );
};

export default PriceSlider;
