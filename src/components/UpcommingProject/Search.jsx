import React from 'react';
import '../../style/Buy/Search.css';

const Search = () => {
  return (

    <>

    <div className='search-bar'>
    <div className="search-bar-container">
      <div className="search-input">
        <input 
          type="text" 
          placeholder="City, Neighborhood, PIN, Address" 
        />
        <button className="search-icon-btn">
          <i className="fa fa-search"></i> {/* Using FontAwesome for search icon */}
        </button>
      </div>
      <select className="dropdown">
        <option value="for-sale">For Sale</option>
        <option value="for-rent">For Rent</option>
      </select>
      <select className="dropdown">
        <option value="price-any">Price</option>
        <option value="0-100k">$0 - $100k</option>
        <option value="100k-200k">$100k - $200k</option>
        <option value="200k+">$200k+</option>
      </select>
      <select className="dropdown">
        <option value="more">More</option>
        <option value="bedrooms">Bedrooms</option>
        <option value="bathrooms">Bathrooms</option>
      </select>
      <button className="save-search-btn">Save Search</button>
    </div>
    </div>
    </>
  );
};

export default Search;
