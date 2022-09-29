import React, { useEffect, useState } from "react";
import Cartdetail from "../Cartdetail/Cartdetail";
import "./Leftbody.css";

const Leftbody = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  return (
    <div className="container">
      {carts.map((cart) => (
        <Cartdetail key={cart.id} cart={cart}></Cartdetail>
      ))}
    </div>
  );
};

export default Leftbody;
