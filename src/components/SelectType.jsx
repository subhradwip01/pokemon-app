import React from "react";

const SelectType = ({ selectedType, onSelect }) => {
  return (
    <select
      className="px-3 w-[300px] py-2 border-2 border-sky-500 rounded-sm"
      value={selectedType}
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value={""}>Select type</option>
      <option value={1}>Normal</option>
      <option value={2}>Fighting</option>
      <option value={3}>Flying</option>
    </select>
  );
};

export default SelectType;
