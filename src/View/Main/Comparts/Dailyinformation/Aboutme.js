import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const Aboutme = () => {
  return (
    <div className="flex items-center ml-4">
      <div className="w-[60px] h-[60px] rounded-[5px] overflow-hidden">
        <img
          src="https://avatars.githubusercontent.com/u/76244674?v=4"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col ml-4">
        <span className="text-3xl font-extrabold">Afraem Ahsan</span>
        <span className="flex items-center ">
          <IoLocationOutline /> Khulna,Bangladesh
        </span>
      </div>
    </div>
  );
};

export default Aboutme;
