import React from "react";

const Aboutbreak = ({ setBreakTime }) => {
  const handleClick = (data) => {
    setBreakTime(data);
    localStorage.setItem("breakTime", data);
  };

  return (
    <div className="flex flex-col w-full ">
      <h3 className="my-5">Add a break</h3>

      <div className="flex items-center justify-between bg-blue-50 rounded-[10px] p-3">
        {[
          {
            second: "10",
          },
          {
            second: "20",
          },
          {
            second: "30",
          },
          {
            second: "40",
          },
          {
            second: "50",
          },
        ].map((s, i) => (
          <button
            className="bg-white rounded-[50%] p-[10px]"
            key={i}
            onClick={() => handleClick(s.second)}
          >
            {s.second}s
          </button>
        ))}
      </div>
    </div>
  );
};

export default Aboutbreak;
