import React from 'react';
import './countries.scss';

function Countries(countryFilter) {
  // console.log(countryFilter.countryFilter);
  return <button className="filterSpan">{countryFilter.countryFilter}</button>;
}

export default Countries;
