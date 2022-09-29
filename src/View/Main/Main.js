import React, { useState } from "react";
import Blogs from "./Comparts/Blogs";
import Container from "./Comparts/Container";
import Allinfo from "./Comparts/Dailyinformation/Allinfo";

const Main = () => {
  const [exerciseTime, setExerciseTime] = useState(0);
  return (
    <div className="w-full min-h-screen bg-slate-100">
      <div className="w-full md:max-w-[1600px] h-full gap-x-5 flex mx-auto">
        <Container setExerciseTime={setExerciseTime} />
        <Allinfo exerciseTime={exerciseTime} />
      </div>
      <div className="max-w-[1600px] mx-auto">
        <Blogs />
      </div>
    </div>
  );
};

export default Main;
