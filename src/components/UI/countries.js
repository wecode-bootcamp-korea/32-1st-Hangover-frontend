import React, { useState } from 'react';
import './countries.scss';

function Countries({ countryFilter }) {
  // console.log(countryFilter.countryFilter);
  const [filterButton, setfilterButton] = useState(false);

  const handleFilterButton = e => {
    e.preventDefault();
    setfilterButton(filterButton => !filterButton);
  };

  return (
    <button
      className={`filterSpan ${filterButton && 'Active'}`}
      onClick={handleFilterButton}
    >
      {countryFilter}
    </button>
  );
}

export default Countries;
