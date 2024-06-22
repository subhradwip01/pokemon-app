import React from "react";
import Button from "./Button";

const SearchBox = ({ onChange, onSearch, queryValue }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    onSearch();
  };
  return (
    <form className="flex gap-2 flex-wrap" onSubmit={submitHandler}>
      <input
        className="px-3 py-2 border border-sky-500 rounded-sm"
        onChange={(e) => onChange(e.target.value)}
        value={queryValue}
      />
      <Button label={"Search"} onClick={submitHandler} />
    </form>
  );
};

export default SearchBox;
