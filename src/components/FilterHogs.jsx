import React from "react";

const FilterHogs = ({ filter, onChangeFilter }) => {
  function handleChange(event) {
    onChangeFilter(event.target.value);
  }
  return (
    <div className="filterWrapper">
      Filter Hogs:{"   "}
      <select name="filter" id="filter" value={filter} onChange={handleChange}>
        <option value="All">All</option>
        <option value="greased">Greased Only</option>
      </select>
    </div>
  );
};

export default FilterHogs;