import React from "react";

const Myinfo = () => {
  return (
    <div className="flex items-center justify-between bg-blue-50 rounded-[10px] mt-5 p-3">
      <UserInfocard value="55kg" title="Weight" />
      <UserInfocard value="5.7" title="Height" />
      <UserInfocard value="22yrs" title="Age" />
    </div>
  );
};

const UserInfocard = ({ value, title }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span className="text-2xl font-semibold">{value}</span>
      <span>{title}</span>
    </div>
  );
};

export default Myinfo;
