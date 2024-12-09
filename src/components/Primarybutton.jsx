import React from "react";

const Primarybutton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`focus:ring-1 focus:outline-none focus:ring-violet-300 font-medium rounded-full text-sm px-4 py-2 text-center bg-slate-700 text-white  hover:bg-violet-700  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Primarybutton;
