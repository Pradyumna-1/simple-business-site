import React from "react";

const SearchResult = (props) => {
  const img = `https://source.unsplash.com/600x400/?${props.name}`;
  return (
    <>
      <div>
        <img src={img} alt="search" />
      </div>
    </>
  );
};
export default SearchResult;
