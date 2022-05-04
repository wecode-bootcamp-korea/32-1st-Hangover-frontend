import React from 'react';
import './FilterType.scss';

function FilterType(props) {
  const { title, subTitle, children } = props;
  return (
    <div className="price">
      <div className="filterTitle">
        <span className="title">{title}</span>
        {subTitle && <span className="subTitle">{subTitle}</span>}
      </div>
      {children}
    </div>
  );
}

export default FilterType;
