import React from 'react';
import l1 from '../../../public/images/l1.png'
import l2 from '../../../public/images/l2.png'
import l3 from '../../../public/images/l3.png'
import l4 from '../../../public/images/l4.png'
import { baseUrl } from '../helper/Helper';

const amenitiesData = [
  { icon: {l1}, title: 'Lift' },
  { icon:{l2}, title: 'Gym' },
  { icon: {l3}, title: 'Internet Provider' },
  { icon: {l4}, title: 'Children\'s Play Area' },
  { icon: {l1}, title: 'Security' },
  { icon: {l1}, title: 'Shopping Center' },
  { icon: {l1}, title: 'Visitor\'s Parking' }
];

const Amenties = ({amenities}) => {
  return (
    <div className="amenities-container" id='amenties'>
      <h1 >Amenities</h1>
      <div className="amenities-grid">
        {amenities?.map((amenity, index) => (
          <div className="amenity-item" key={index}>
            <img src={`${baseUrl}${amenity?.logo}`} alt="" className="amenity-icon" />
            <p className="amenity-title1">{amenity?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenties;
