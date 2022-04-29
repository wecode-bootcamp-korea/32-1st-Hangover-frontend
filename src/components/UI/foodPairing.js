import React from 'react';
import './foodPairing.scss';

function FoodPairing(pairValue) {
  return <button className="filterSpan">{pairValue.pairList}</button>;
}

export default FoodPairing;
