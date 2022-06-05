import React from "react";

const SortHogs = ({ sort, onChangeSort }) => {
  function handleChange(event) {
    onChangeSort(event.target.value);
  }
  return (
    <div className="filterWrapper">
      Sort Hogs:{"   "}
      <select name="sort" id="sort" value={sort} onChange={handleChange}>
        <option value="none">Original</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
};

export default SortHogs;