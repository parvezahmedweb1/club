import React from "react";
import Swal from "sweetalert2";
const Timer = () => {
  const handleAlert = () => {
    Swal.fire("Good job!", "You clicked the button!", "success");
  };
  return (
    <div className="card">
      <div>
        <h3>Add a break</h3>
        <div className="d-flex justify-content-around">
          <p className="bg-dark text-white p-2 rounded-5">10s</p>
          <p className="bg-dark text-white p-2 rounded-5">20s</p>
          <p className="bg-dark text-white p-2 rounded-5">30s</p>
          <p className="bg-dark text-white p-2 rounded-5">40s</p>
          <p className="bg-dark text-white p-2 rounded-5">50s</p>
        </div>
      </div>
      <div className="d-flex justify-content-around align-items-center">
        <p>Sports Time</p>
        <p>200 min</p>
      </div>
      <div className="d-flex justify-content-around align-items-center">
        <p>Break Time</p>
        <p>0 second</p>
      </div>
      <button onClick={handleAlert} className="btn btn-success">
        Activity Completed
      </button>
    </div>
  );
};

export default Timer;
