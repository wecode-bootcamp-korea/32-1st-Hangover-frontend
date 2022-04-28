import React from 'react';
import './FilterList.scss';

function FilterList(props) {
  return (
    <div className="filterList">
      <button className="filterSpan">{props.Filter}</button>
    </div>
  );
}
export default FilterList;
