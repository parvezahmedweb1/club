import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./Timer.css";
const Timer = ({ time }) => {
  const [breakTime, setBreakTime] = useState(0);
  useEffect(() => {
    const getValue = localStorage.getItem("time");
    setBreakTime(getValue);
  }, []);
  const setLocalStorage = (timeBreak) => {
    localStorage.setItem("time", timeBreak);
  };
  const breakTime10 = (time) => {
    setLocalStorage(time);
    setBreakTime(time);
  };
  const breakTime20 = (time) => {
    setLocalStorage(time);
    setBreakTime(time);
  };
  const breakTime30 = (time) => {
    setLocalStorage(time);
    setBreakTime(time);
  };
  const breakTime40 = (time) => {
    setLocalStorage(time);
    setBreakTime(time);
  };
  const breakTime50 = (time) => {
    setLocalStorage(time);
    setBreakTime(time);
  };
  const handleAlert = () => {
    Swal.fire("Good job!", "You clicked the button!", "success");
  };
  return (
    <div className="card">
      <div>
        <h3>Add a break</h3>
        <div className="d-flex justify-content-around">
          <p
            onClick={() => breakTime10(10)}
            className="bg-dark text-white p-2 rounded-5 pointer"
          >
            10s
          </p>
          <p
            onClick={() => breakTime20(20)}
            className="bg-dark text-white p-2 rounded-5 pointer"
          >
            20s
          </p>
          <p
            onClick={() => breakTime30(30)}
            className="bg-dark text-white p-2 rounded-5 pointer"
          >
            30s
          </p>
          <p
            onClick={() => breakTime40(40)}
            className="bg-dark text-white p-2 rounded-5 pointer"
          >
            40s
          </p>
          <p
            onClick={() => breakTime50(50)}
            className="bg-dark text-white p-2 rounded-5 pointer"
          >
            50s
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-around align-items-center">
        <p>Sports Time</p>
        <p>{time} min</p>
      </div>
      <div className="d-flex justify-content-around align-items-center">
        <p>Break Time</p>
        <p>{breakTime} second</p>
      </div>
      <button onClick={handleAlert} className="btn btn-success">
        Activity Completed
      </button>
    </div>
  );
};

export default Timer;
