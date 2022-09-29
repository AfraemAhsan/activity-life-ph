import React from "react";
import Leftbody from "../Leftbody/Leftbody";
import Rightbody from "../Rightbody/Rightbody";
import "./Maincart.css";

const Maincart = () => {
  return (
    <div className="cart-container">
      <div className="grid grid-cols-3">
        <Leftbody></Leftbody>
      </div>
      <div>
        <Rightbody></Rightbody>
      </div>
    </div>
  );
};

export default Maincart;
