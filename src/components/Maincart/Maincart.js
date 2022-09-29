import React from "react";
import Leftbody from "../Leftbody/Leftbody";
import Rightbody from "../Rightbody/Rightbody";
import "./Maincart.css";

const Maincart = () => {
  return (
    <div>
      <div className="flex flex-row text-center pl-[150px] pt-[50px] pb-[50px]">
        <img
          src="https://template.canva.com/EAEFH9WI4ac/1/0/400w-F4QBmAsbiR4.jpg"
          alt=""
          className="w-[100px] rounded-lg  "
        />
        <h3 className="pt-[40px] pl-[10px] text-2xl text-emerald-500 font-extrabold">
          Activity of <span className="text-sky-700">Life</span>
        </h3>
      </div>

      <div className="cart-container">
        <div>
          <Leftbody handleControl={handleControl}></Leftbody>
        </div>
        <div>
          <Rightbody></Rightbody>
        </div>
      </div>
    </div>
  );
};

export default Maincart;
