import React from 'react';
import './FilterList.scss';

function FilterList({ Filter, filter, handleFilter }) {
  const isSelected = filter.some(opt => opt.value === Filter);

  return (
    <button
      className={`filterSpan ${isSelected ? 'Active' : ' '}`}
      type="button"
      onClick={() => handleFilter(Filter)}
    >
      {Filter}
    </button>
  );
}
export default FilterList;
