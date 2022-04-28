import React from 'react';
import './filterTitle.scss';

function FilterTitle() {
  return (
    <div className="price">
      <span className="priceTitle">Price(가격)</span>
      {/* <span>KRW</span> */}
      <input type="range" min="0" max="1000" className="ex-in" />
    </div>
  );
}

{
  /* 
//           <div className="price">
//             {filterTitle.map((list, idx) => (
//               <list key={idx} list={list} />
//             ))}
//           </div>e

// map() -> array 
// filterTitle x -> error
// [1,2,3,4].map()


//           <div className="price">
//             {[1, 2, 3, 4].map((x, i) => (
//               <FilterTitle key={x} />
//             ))}
//           </div>

// */
}

export default FilterTitle;
