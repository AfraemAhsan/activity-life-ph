import React from "react";

// internal import
import Header from "../../../components/Header";
import data from "../../../utilize/data.json";
import MainCart from "../Additional/MainCart";

const Container = ({ setExerciseTime }) => {
  return (
    <div className="flex flex-col w-full h-full p-10">
      <Header />

      <div className="grid w-full gap-5 lg:grid-cols-3">
        {data?.map((data, i) => (
          <MainCart key={i + 1} data={data} setExerciseTime={setExerciseTime} />
        ))}
      </div>
    </div>
  );
};

export default Container;
