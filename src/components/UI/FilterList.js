import React, { useState } from 'react';
import './FilterList.scss';

function FilterList({ Filter }) {
  const [clickButton, setClickButton] = useState(false);

  const setbuttonClick = e => {
    e.preventDefault();
    setClickButton(clickButton => !clickButton);
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
