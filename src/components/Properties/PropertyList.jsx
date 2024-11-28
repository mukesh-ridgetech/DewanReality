import React from 'react';
import PropertyCard from './PropertyCard';
import '../../style/Buy/Search.css';
import img from '../../../public/images/bg.png'
import Link from '../../../public/images/Link.png'
import b1 from  '../../../public/images/b1-1.png'
import b2 from  '../../../public/images/b2-2.png'
import b3 from  '../../../public/images/b3-3.png'

const properties = [
  
  {
    price: 'Price On Request',
    beds: 3,
    baths: 3,
    sqft: '1,890 sqft',
    type: 'House for sale',
    status: 'Apartment',
    address: 'DLF The Camellias, Sector 42, Gurugram',
    images: [{url:b3}, {url:b2}, {url:b3}] // Replace with actual image URLs
  },

  
  {
    price: 'Price On Request',
    beds: 3,
    baths: 3,
    sqft: '1,890 sqft',
    type: 'House for sale',
    status: 'Apartment',
    address: 'DLF The Camellias, Sector 42, Gurugram',
  images: [{url:b3}, {url:b2}, {url:b3}] // Replace with actual image URLs
  },

  
  {
    price: 'Price On Request',
    beds: 3,
    baths: 3,
    sqft: '1,890 sqft',
    type: 'House for sale',
    status: 'Apartment',
    address: 'DLF The Camellias, Sector 42, Gurugram',
    images: [{url:b1}, {url:b2}, {url:b3}] // Replace with actual image URLs
  },

  
  {
    price: 'Price On Request',
    beds: 3,
    baths: 3,
    sqft: '1,890 sqft',
    type: 'House for sale',
    status: 'Apartment',
    address: 'DLF The Camellias, Sector 42, Gurugram',
    images: [{url:b1}, {url:b2}, {url:b3}] // Replace with actual image URLs
  },

  
  {
    price: 'Price On Request',
    beds: 3,
    baths: 3,
    sqft: '1,890 sqft',
    type: 'House for sale',
    status: 'Apartment',
    address: 'DLF The Camellias, Sector 42, Gurugram',
    images: [{url:b1}, {url:b2}, {url:b3}]// Replace with actual image URLs
  },


 
  {
    price: 'Price On Request',
    beds: 3,
    baths: 3,
    sqft: '1,890 sqft',
    type: 'House for sale',
    status: 'Apartment',
    address: 'DLF The Camellias, Sector 42, Gurugram',
    images: [{url:b1}, {url:b2}, {url:b3}]// Replace with actual image URLs
  },

 
  {
    price: 'Price On Request',
    beds: 3,
    baths: 3,
    sqft: '1,890 sqft',
    type: 'House for sale',
    status: 'Apartment',
    address: 'DLF The Camellias, Sector 42, Gurugram',
    images: [{url:b1}, {url:b2}, {url:b3}] // Replace with actual image URLs
  },


  
  {
    price: 'Price On Request',
    beds: 3,
    baths: 3,
    sqft: '1,890 sqft',
    type: 'House for sale',
    status: 'Apartment',
    address: 'DLF The Camellias, Sector 42, Gurugram',
    images: [{url:b1}, {url:b2}, {url:img}] // Replace with actual image URLs
  },


  {
    price: 'Price On Request',
    beds: 3,
    baths: 3,
    sqft: '1,890 sqft',
    type: 'House for sale',
    status: 'Apartment',
    address: 'DLF The Camellias, Sector 42, Gurugram',
    images: [{url:b1}, {url:b2}, {url:img}] // Replace with actual image URLs
  },
  // Add more property objects here for each card...
];

const PropertyList = ({properties}) => {
  return (

    <>
 
 {/* <h1>sldjfksdhfkj</h1> */}
<div className="property-list-container1">
  
      {properties?.map((property, index) => (
        <PropertyCard key={index} property={property} />
      ))}
    </div>
    </>
    
  );
};

export default PropertyList;
