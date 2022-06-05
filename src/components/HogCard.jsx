import React, { useState } from "react";

const HogCard = ({ hog }) => {
  const [showExtraDetails, setShowExtraDetails] = useState(false);

  const toggleShowExtraDetails = () => setShowExtraDetails(!showExtraDetails);

  return (
    <div class="ui card">
      <div
        class="image"
        style={{ cursor: "pointer" }}
        onClick={toggleShowExtraDetails}
      >
        <img src={hog.image} alt={hog.name} />
      </div>
      <div class="content">
        <a class="header">{hog.name}</a>
      </div>
      {showExtraDetails && (
        <div class="extra content">
          <div className="meta">
            <div>{hog.specialty}</div>
            {hog.greased && <div className="meta">Greased</div>}
            <div>{`Weight: ${hog.weight}`}</div>
            <div>{hog["highest medal achieved"]}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HogCard;