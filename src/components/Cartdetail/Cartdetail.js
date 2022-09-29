import React from "react";
import "./Cartdetail.css";
const Cartdetail = ({ cart }) => {
  return (
    <div className="container flex flex-col ">
      <div className="w-[286px] h-[300px] pl-[15px] main-container">
        <img src={cart.picture} alt="" className="w-full" />
        <h4>{cart.name}</h4>
        <h4 className="py-[10px]">{cart.time}</h4>
        <button className="bg-emerald-600  px-[80px] py-[10px] rounded-md">
          Add to list
        </button>
      </div>
    </div>
  );
};

export default Cartdetail;
