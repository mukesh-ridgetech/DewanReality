import React from "react";
import "../../style/Properties/Prop.css";
import { Link } from "react-scroll";
// overview
// amenties
const ProHeader = () => {
  return (
    <div>
      <div className="proHeader-container">
        <div className="proHeader-container-item">
          <Link
            to="overview"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Overview
          </Link>
          <Link
            to="description"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Description
          </Link>
          <Link
            to="amenties"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Amenties
          </Link>
          <Link to="FloorPlan" spy={true}
            smooth={true}
            offset={-70}
            duration={500}>Location</Link>
          <Link to="Map"  smooth={true}
            offset={-70}
            duration={500}>Neighbourhood</Link>
          <Link to="#">Similar Properties</Link>
        </div>
      </div>
    </div>
  );
};

export default ProHeader;
