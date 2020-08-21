import React from "react";

function SearchBox({
  carNameFilter,
  updateModelFilter,
  carYearFilter,
  updateYearFilter,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "2",
      }}
    >
      <label>Choose a car or year: </label>
      <select onChange={updateModelFilter}>
        <option value="all">all</option>
        {carNameFilter.map((model, i) => {
          return (
            <option key={i} value={model}>
              {model}
            </option>
          );
        })}
      </select>

      <select onChange={updateYearFilter}>
        <option value="all">all</option>
        {carYearFilter.map((year, i) => {
          return (
            <option key={i} value={year}>
              {year}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SearchBox;
