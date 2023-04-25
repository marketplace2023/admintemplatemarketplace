import React from "react";

const Container = ({ children }) => {
  return (
    <div className="bg-white shadow-md p-3 rounded-lg w-full">{children}</div>
  );
};

export default Container;
