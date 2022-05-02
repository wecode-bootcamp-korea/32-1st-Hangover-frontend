import React, { useState } from 'react';
import './countries.scss';

function Countries({ countryFilter, filter, handleFilter }) {
  // console.log(countryFilter.countryFilter);
  // handleFilter안에는 value만 있음

  const isSelected = filter.some(opt => opt.value === countryFilter);
  // value 값이 같으면 some method 실행

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
