import React from 'react';
import './countries.scss';

function Countries({ countryFilter, filter, handleFilter }) {
  const isSelected = filter.some(opt => opt.value === countryFilter);

  return (
    <button
      className={`filterSpan ${isSelected && 'Active'}`}
      type="button"
      onClick={() => handleFilter(countryFilter)}
    >
      {countryFilter}
    </button>
  );
}

export default Countries;
