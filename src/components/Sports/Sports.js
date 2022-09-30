import React, { useEffect, useState } from "react";
import Sport from "../Sport/Sport";
import Timer from "../Timer/Timer";

const Sports = () => {
  const [sportsData, setSportsData] = useState([]);
  const [time, setTime] = useState(0);
  useEffect(() => {
    fetch("sportsDb.json")
      .then((res) => res.json())
      .then((data) => setSportsData(data));
  }, []);
  const handleAddToList = (min) => {
    const newTime = time + min;
    setTime(newTime);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {sportsData.map((sport) => (
              <Sport
                key={sport.id}
                sport={sport}
                handleAddToList={handleAddToList}
              ></Sport>
            ))}
          </div>
        </div>
        <div className="col-4">
          <Timer time={time}></Timer>
        </div>
      </div>
    </div>
  );
};

export default Sports;
