import React from "react";
import cardData from "../../../utilize/data.json";

const MainCart = ({ data, setExerciseTime }) => {
  const { title, img, description, time, age, id } = data;
  const hadleButtonCLick = (id) => {
    const item = cardData.find((i) => i.id === id);
    localStorage.setItem("cardData", JSON.stringify(item));
    const clickTime = parseInt(item.time);
    setExerciseTime((prev) => parseInt(prev) + clickTime);
    console.log(clickTime);
  };
  return (
    <div className="bg-white flex flex-col p-3.5 rounded-[10px]">
      <div className="w-full rounded-[20px] overflow-hidden h-[150px] mx-auto">
        <img src={img} alt="" className="object-cover w-full -h-full" />
      </div>
      <h3 className="my-4 font-extrabold text-gray-600">{title}</h3>
      <p className="mb-3 font-medium">{description}</p>
      <div className="flex items-center justify-between w-[35%]">
        <span>For age:</span>
        <span className="font-bold">{age}</span>
      </div>
      <div className="flex items-center justify-between w-[45%]">
        <span>Time required:</span>
        <span className="font-bold">{time}s</span>
      </div>
      <button
        onClick={() => hadleButtonCLick(id)}
        className="w-1/2 p-3.5 rounded-[10px] flex items-center justify-center mx-auto mt-5 bg-blue-400"
      >
        Add to list
      </button>
    </div>
  );
};

export default MainCart;
