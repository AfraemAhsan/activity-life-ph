import React from "react";
import Leftbody from "../Leftbody/Leftbody";
import Rightbody from "../Rightbody/Rightbody";
import "./Maincart.css";

const Maincart = () => {
  return (
    <div>
      <div className="flex flex-row text-center pl-[150px] pt-[50px] pb-[50px]">
        <img
          src="https://cdn.pixabay.com/photo/2016/12/28/08/15/hummingbird-1935665__340.png"
          alt=""
          className="w-[100px] rounded-lg  "
        />
        <h3 className="pt-[40px]">Activity of Live</h3>
      </div>

      <div className="cart-container">
        {" "}
        <div>
          <Leftbody></Leftbody>
        </div>
        <div>
          <Rightbody></Rightbody>
        </div>
      </div>
    </div>
  );
};

export default Maincart;
