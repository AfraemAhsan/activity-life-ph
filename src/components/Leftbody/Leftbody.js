import React, { useEffect, useState } from "react";
import Cartdetail from "../Cartdetail/Cartdetail";

const Leftbody = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {carts.map((cart) => (
        <Cartdetail key={cart.id} cart={cart}></Cartdetail>
      ))}
    </div>
  );
};

export default Leftbody;
