import React from "react";

import { GrCloudComputer } from "react-icons/gr";

const MainHeader = () => {
  return (
    <div className="flex flex-col w-full">
      <h3 className="pt-[40px] pl-[10px] text-2xl text-emerald-500 font-extrabold">
        <GrCloudComputer />
        Activity of <span className="text-sky-700">Life</span>
      </h3>
      {/* <div className="flex flex-row text-center pl-[150px] pt-[50px] pb-[50px]">
        <img
          src="https://template.canva.com/EAEFH9WI4ac/1/0/400w-F4QBmAsbiR4.jpg"
          alt=""
          className="w-[100px] rounded-lg  "
        />
        <h3 className="pt-[40px] pl-[10px] text-2xl text-emerald-500 font-extrabold">
          Activity of <span className="text-sky-700">Life</span>
        </h3>
      </div> */}
    </div>
  );
};

export default MainHeader;
