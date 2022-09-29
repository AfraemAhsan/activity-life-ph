import React, { useState } from "react";
import Completeall from "./Completeall";
import Aboutbreak from "./Aboutbreak";
import Excercise from "./Excercise";
import Aboutme from "./Aboutme";
import Myinfo from "./Myinfo";

const Allinfo = ({ exerciseTime }) => {
  const [breakTime, setBreakTime] = useState(0);

  return (
    <div className="flex flex-col w-[600px] min-h-full p-5 bg-white">
      <Aboutme />

      <Myinfo />
      {/* break */}
      <Aboutbreak setBreakTime={setBreakTime} />
      {/* details */}
      <Excercise breakTime={breakTime} exerciseTime={exerciseTime} />
      {/* button */}
      <Completeall />
    </div>
  );
};

export default Allinfo;
