import React from "react";

const Myinfo = () => {
  return (
    <div className="flex items-center justify-between bg-blue-50 rounded-[10px] mt-5 p-3">
      <MyInfocard value="55kg" title="Weight" />
      <MyInfocard value="5.7" title="Height" />
      <MyInfocard value="22yrs" title="Age" />
    </div>
  );
};

const MyInfocard = ({ value, title }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span className="text-2xl font-semibold">{value}</span>
      <span>{title}</span>
    </div>
  );
};

export default Myinfo;
