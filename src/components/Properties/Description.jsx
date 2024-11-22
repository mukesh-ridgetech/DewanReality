import React, { useState } from 'react';

const Description = ({description}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="description-container" id='description'>
      <h3 className="description-title">Description</h3>
      <p className={isExpanded ? "description-text expanded" : "description-text"}>

        {description}
        {/* DLF The Camellias is an apartment for sale Gurgaon in DLF 5, Golf Course Road, Gurgaon. 
        It represents the epitome of luxury living and offers a prestigious address for discerning homeowners.
        DLF Camellias offers spacious apartments and penthouses designed by Hafeez Contractor.
        Residents can enjoy panoramic views of the green surroundings and the city skyline.
        DLF The Camellias is an apartment for sale Gurgaon in DLF 5, Golf Course Road, Gurgaon. 
        It represents the epitome of luxury living and offers a prestigious address for discerning homeowners.
        DLF Camellias offers spacious apartments and penthouses designed by Hafeez Contractor.
        Residents can enjoy panoramic views of the green surroundings and the city skyline. */}
      </p>

        <hr />
      <button onClick={toggleDescription} className="show-more-button">
        {isExpanded ? "Show Less ▲" : "Show More ▼"}
      </button>
    </div>
  );
};

export default Description;
