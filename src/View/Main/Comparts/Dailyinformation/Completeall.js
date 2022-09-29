import React from "react";
import toast from "react-hot-toast";

const Completeall = () => {
  const handleButtonClick = () => {
    toast.success("Successfully completed activity");
  };
  return (
    <button
      onClick={handleButtonClick}
      className="w-full p-3.5 rounded-[10px] text-white text-2xl bg-sky-700"
    >
      Activity Completed
    </button>
  );
};

export default Completeall;
