import React from "react";
import HogCard from "./HogCard";

const HogGrid = ({ hogs = [], filter, sort }) => {
  const displayedHogs = hogs.filter(
    (hog) => !filter || filter === "All" || hog.greased
  );

  if (sort === "weight") {
    displayedHogs.sort((a, b) => a.weight - b.weight);
  } else if (sort === "name") {
    displayedHogs.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="ui links cards">
      {displayedHogs.map((hog) => (
        <HogCard key={hog.name} hog={hog} />
      ))}
    </div>
  );
};

export default HogGrid;