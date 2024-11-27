import React from 'react';
import '../../style/Buy/Search.css';

const Search = ({price,search,setPrice,setSearch,HandleSearch}) => {


  const handlesearch = (e)=>{
    setSearch(e.target.value);
  }

 const handlePrice = (e)=>{
  setPrice(e.target.value);
 }
  return (

    <>

    <div className='search-bar'>
    <div className="search-bar-container">
      <div className="search-input">
        <input 
          type="text" 
          placeholder="City, Neighborhood, PIN, Address" 
          value={search}
          onChange={handlesearch}
        />
        <button className="search-icon-btn">
          <i className="fa fa-search"></i> {/* Using FontAwesome for search icon */}
        </button>
      </div>
      {/* <select className="dropdown">
        <option value="for-sale">For Sale</option>
        <option value="for-rent">For Rent</option>
      </select> */}
      <select className="dropdown" value={price} onChange={handlePrice}>
        {/* <option value="price-any">Price</option> */}
            <option value="" >Select Price</option>
            <option value="10000">₹ 10000</option>
            <option value="200000">₹ 200000</option>
            <option value="30000">₹ 300000</option>
      </select>
      {/* <select className="dropdown">
        <option value="more">More</option>
        <option value="bedrooms">Bedrooms</option>
        <option value="bathrooms">Bathrooms</option>
      </select> */}
      <button className="save-search-btn" onClick={HandleSearch}>Save Search</button>
    </div>
    </div>
    </>
  );
};

export default Search;
