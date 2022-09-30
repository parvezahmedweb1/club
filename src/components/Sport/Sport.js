import React from "react";

const Sport = (props) => {
  const { img, name, info, time } = props.sport;

  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{info}</p>
          <p className="card-text">{time}</p>
          <button
            onClick={() => props.handleAddToList(time)}
            className="btn btn-primary"
          >
            Add To List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sport;
