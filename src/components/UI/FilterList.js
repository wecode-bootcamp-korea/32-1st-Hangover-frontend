import React, { useState } from 'react';
import './FilterList.scss';

function FilterList({
  Filter,
  filterButtonClick,
  setfilterButtonClick,
  setSelectedTypes,
}) {
  const [clickButton, setClickButton] = useState(false);

  const setbuttonClick = e => {
    e.preventDefault();
    setSelectedTypes(curr => ({ ...curr, [Filter]: !clickButton }));
    setClickButton(!clickButton);
    const clickFilter = [...filterButtonClick];
    const clickValue = {
      id: Filter,
    };
    clickFilter.push(clickValue);
    setfilterButtonClick(clickFilter);
  };

  return (
    <button
      className={`filterSpan ${clickButton && 'Active'}`}
      onClick={setbuttonClick}
    >
      {Filter}
    </button>
  );
}
export default FilterList;

// const Card = ({ product }) => {
//   const { name, value, price } = product;

//   return (
//     <div>
//       <span>{name}</span>
//       <span>{value}</span>
//       <span>{price}</span>
//     </div>
//   );
// };
