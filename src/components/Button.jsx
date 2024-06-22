import React from "react";

const Button = ({ onClick, label }) => {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-3 rounded-sm"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
