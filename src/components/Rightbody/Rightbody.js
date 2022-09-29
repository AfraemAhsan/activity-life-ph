import React from "react";

const Rightbody = () => {
  return (
    <div>
      <div className="flex flex-row profile">
        <img
          src="https://p.kindpng.com/picc/s/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"
          className="w-[70px] h-[70px]"
          alt=""
        />
        <div className="pt-[10px] px-[10px]">
          <h2>Zahid</h2>
          <span>Location : </span>
        </div>
      </div>
      <div className="flex flex-row about-healty py-[20px] px-[10px]">
        <h3 className="flex flex-col text-2xl font-semibold pr-[20px]">
          75 <span className="text-sm font-light"> kg weight</span>
        </h3>
        <h3 className="flex flex-col text-2xl font-semibold pr-[20px]">
          75 <span className="text-sm font-light"> kg weight</span>
        </h3>
        <h3 className="flex flex-col text-2xl font-semibold pr-[20px]">
          75 <span className="text-sm font-light"> kg weight</span>
        </h3>
      </div>
      <h2 className="text-lg font-semibold">Add A Break</h2>
      <div className="flex flex-row space-x-5 py-[15px] second ">
        <h5 className="px-[15px] py-[15px] bg-slate-400 rounded-3xl">10s</h5>
        <h5 className="px-[15px] py-[15px] bg-slate-400 rounded-3xl">10s</h5>
        <h5 className="px-[15px] py-[15px] bg-slate-400 rounded-3xl">10s</h5>
        <h5 className="px-[15px] py-[15px] bg-slate-400 rounded-3xl">10s</h5>
        <h5 className="px-[15px]  py-[15px] bg-slate-400 rounded-3xl">10s</h5>
      </div>
      <div className="details">
        <h3>Excercise Details</h3>
        <div className=" bg-slate-300 px-[30px] py-[15px] rounded mb-[20px]">
          <h4 className="py-[10px] font-bold text-lg">
            Excercise Time <span className="font-light ml-[80px]">200s</span>
          </h4>
        </div>
        <div className=" bg-slate-300 px-[30px] py-[15px] rounded">
          <h4 className="py-[10px] font-bold text-lg">
            Excercise Time <span className="font-light ml-[80px]">200s</span>
          </h4>
        </div>
      </div>
      <button className="bg-cyan-700  px-[80px] py-[10px] rounded-md mt-[30px] ml-[35px]">
        Activity Completed
      </button>
    </div>
  );
};

export default Rightbody;
