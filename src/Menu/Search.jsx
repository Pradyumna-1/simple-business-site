import React, { useState } from "react";
// import SearchResult from "./SearchResult";

const Search = () => {
  const [img, setImg] = useState();
  const inputEvent = (event) => {
    const data = event.target.value;

    setImg(data);
  };

  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Enter your questions"
          value={img}
          onChange={inputEvent}
        />
        {img === "" ? null : <Search name={img} />}
      </div>
    </>
  );
};
export default Search;
