import React from "react";

const Cartdetail = ({ cart }) => {
  return (
    <div>
      <h3>{cart.name}</h3>
      <img src={cart.picture} alt="" />
    </div>
  );
};

export default Cartdetail;
