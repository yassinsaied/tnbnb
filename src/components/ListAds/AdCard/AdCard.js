import React from "react";
import "./AdCard.css"

const AdCard = ({ad}) => {
  
let  d = new Date(ad.createAt);
let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);;
  console.log()
  
  return (

    
    <div className="col-lg-4 col-md-6 mb-2-6 mb-3 card-ad">
      <div className="card">
          <div className="card-img">
        <img className="card-img-top" src="http://127.0.0.1:8000/uploads/adimagefixture.jpeg" alt="Card cap" />
        <p className="price"><span>${ad.price} / Night</span></p>
        <p className="date-ad"><span className="btn-primary">{`${da}-${mo}-${ye}`}</span></p>
        </div>
        <div className="card-body text-start">
          <h5 className="card-title">R{ad.title}</h5>
          <p className="card-text">
            {ad.introduction}
          </p>
          <li className="list-group-item">Vestibulum at eros</li>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
