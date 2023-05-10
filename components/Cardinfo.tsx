import React from "react";

const Cardinfo = ({ value, text, icon }) => {
  return (
    <div className="container text-gray-50 flex justify-around mt-10">
      <div>
        <h1 className=" text-3xl font-bold">{value}</h1>
        <h1 className=" text-2xl font-semibold">{text}</h1>
      </div>
      <div className="text-6xl">{icon}</div>
    </div>
  );
};

export default Cardinfo;
