import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useSearch = (data) => {
  const [query, setQuery] = useState();
  const [searchedData,setSearchData] = useState(data);
  useEffect(()=>{
    setSearchData(data);
  },[data])
  const doSearch = () => {
    if (!data) return setSearchData([]);
    if (!query || query === "") return setSearchData(data);
    setSearchData(data.filter((item) => item.name.toLowerCase().includes(query.toLowerCase().trim())));
  };
  const setQueryValue = (value) => {
    if(value===""){
      setSearchData(data);
    }
    setQuery(value);
  };
  return {
    doSearch,
    searchedData,
    query,
    setQueryValue,
    query
  };
};

export default useSearch;
