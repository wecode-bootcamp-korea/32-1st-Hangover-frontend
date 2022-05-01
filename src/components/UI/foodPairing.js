import React, { useState } from 'react';
import './foodPairing.scss';

function FoodPairing({ pairValue }) {
  const [pairButton, setPairButton] = useState(false);

  const handlePairButton = e => {
    e.preventDefault();
    setPairButton(pairButton => !pairButton);
  };

  return (
    <button
      className={`filterSpan ${pairButton && 'Active'}`}
      onClick={handlePairButton}
    >
      {pairValue}
    </button>
  );
}

export default FoodPairing;
