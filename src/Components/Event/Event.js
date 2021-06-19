import React from 'react';
import { useHistory } from 'react-router';
import './Event.css'

const Event = ({event}) => {
  // console.log(event);
  let history = useHistory();

  const handleClick = (id)=>{
    history.push(`/checkout/${id}`);
  }

// Card Information
  return (
    <div className="col-md-6 col-lg-4 g-3">
      <div className="card card-custom">
        <div className="img-div">
          <img className="img-fluid" src={event.imageURL} alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{event.name}</h5>
          <div className="d-flex justify-content-between">
            <h2>${event.price}</h2>
            <button
              onClick={() => handleClick(event._id)}
              class="btn btn-primary"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;



