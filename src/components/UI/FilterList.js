import React from 'react';
import './FilterList.scss';

function FilterList({
  Filter,
  filterButtonClick,
  setfilterButtonClick,
  filter,
  handleFilter,
}) {
  const setbuttonClick = e => {
    e.preventDefault();
    // setSelectedTypes(curr => ({ ...curr, [Filter]: !clickButton }));
    const clickFilter = [...filterButtonClick];
    const clickValue = {
      id: Filter,
    };
    clickFilter.push(clickValue);
    setfilterButtonClick(clickFilter);
  };

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
