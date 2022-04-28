import React from 'react';
import './FilterList.scss';

function FilterList(props) {
  return (
    <button className="filterSpan" onClick={props.onFilterBtnClick}>
      {props.Filter}
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
