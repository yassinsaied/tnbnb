import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome ,faBuilding, faHotel , faBed , faHeart} from "@fortawesome/free-solid-svg-icons";
import { faFortAwesome  } from "@fortawesome/free-brands-svg-icons";


import "./AdsCategory.css";

const AdsCategory = () => {
  return (
    <div className="row overlap-category no-gutters mb-5">
      <div className="cat col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
        <div className="popular-category">
          <FontAwesomeIcon icon={faFortAwesome} />
          <span className="caption mb-2 d-block"> Villa</span>
          <span className="number"> 3712</span>
        </div>
      </div>
      <div className="cat col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
        <div className="popular-category">
          <FontAwesomeIcon icon={faHome} />
          <span className="caption mb-2 d-block"> Villa Floor</span>
          <span className="number"> 225</span>
        </div>
      </div>
      <div className="cat col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
        <div className="popular-category">
          <FontAwesomeIcon icon={faBuilding} />
          <span className="caption mb-2 d-block"> Apartment</span>
          <span className="number"> 3.955</span>
        </div>
      </div>
      <div className="cat col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
        <div className="popular-category">
          <FontAwesomeIcon icon={faHotel} />
          <span className="caption mb-2 d-block"> Guest house</span>
          <span className="number"> 3.955</span>
        </div>
      </div>
      <div className="cat col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
        <div className="popular-category">
          <FontAwesomeIcon icon={faBed} />
          <span className="caption mb-2 d-block"> Motel</span>
          <span className="number"> 3.955</span>
        </div>
      </div>

      <div className="cat col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
        <div className="popular-category">
          <FontAwesomeIcon icon={faHeart} />
          <span className="caption mb-2 d-block"> Trend</span>
          <span className="number"> 3.955</span>
        </div>
      </div>
    </div>
  );
};

export default AdsCategory;
