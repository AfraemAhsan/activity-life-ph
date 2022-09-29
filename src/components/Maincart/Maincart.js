import React from "react";
import Leftbody from "../Leftbody/Leftbody";
import Rightbody from "../Rightbody/Rightbody";
import "./Maincart.css";

const Maincart = () => {
  return (
    <div>
      <img
        src="https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg"
        alt=""
      />
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
