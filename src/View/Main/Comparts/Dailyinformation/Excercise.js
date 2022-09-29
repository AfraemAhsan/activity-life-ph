import React, { useEffect, useState } from "react";

const Excercise = ({ exerciseTime, breakTime }) => {
  const [getBreakTime, setGetBreakTime] = useState(0);
  useEffect(() => {
    const breakTime = localStorage.getItem("breakTime");
    setGetBreakTime(breakTime);
  }, []);
  return (
    <div className="flex flex-col w-full ">
      <h3 className="my-5">Add a break</h3>
      <div className="flex items-center justify-between bg-blue-50 rounded-[10px] p-3">
        <span>Exercise time</span>
        <span>{exerciseTime} seconds</span>
      </div>
      <div className="flex my-5 items-center justify-between bg-blue-50 rounded-[10px] p-3">
        <span>Break time</span>
        <span>{breakTime || getBreakTime || 0} seconds</span>
      </div>
    </div>
  );
};

export default Excercise;
