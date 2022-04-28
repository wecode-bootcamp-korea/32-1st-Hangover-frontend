import React, { useEffect, useState } from 'react';
import './ProductList.scss';
import FilterTitle from '../../components/UI/filterTitle';
import FilterList from '../../components/UI/FilterList';

const ProductList = () => {
  const [filterButtons, setFilterButtons] = useState([]);

  useEffect(() => {
    fetch('/data/FilterList.json')
      .then(res => res.json())
      .then(data => setFilterButtons(data));
  }, []);

  return (
    <article>
      <div className="list">
        <h1 className="listCopy">리스트 페이지 카피영역</h1>
        <span className="listSubCopy">From 1 regional wine style</span>
        <button className="sort" type="button">
          리뷰
        </button>
      </div>
      <div className="cardLayout">
        <div className="filter">
          <div className="filterTitle">
            <span className="title">Wine Types(주종)</span>
            <span>select mutiple</span>
          </div>
          <div className="filterList">
            {filterButtons &&
              filterButtons.map(filterButton => (
                <FilterList
                  key={filterButton.id}
                  Filter={filterButton.Filter}
                />
              ))}
          </div>

          <div className="price">
            <FilterTitle />
          </div>
          <div className="grapes">
            <span className="grapesTitle">Grapes(취하노)</span>
            <span>search grapes</span>
          </div>
          <div className="country">
            <span className="countryTitle">country(국가)</span>
            <span>search grapes</span>
          </div>
          <div className="filterList">
            {[1, 2, 3, 4, 5, 6].map((id, i) => (
              <FilterList key={id} />
            ))}
          </div>

          <div className="foodPairing">
            <span className="foodPairingTitle">foodPairing</span>
            <span>search grapes</span>
          </div>
          <div className="filterList">
            {[1, 2, 3, 4, 5, 6].map((id, i) => (
              <FilterList key={id} />
            ))}
          </div>
        </div>
        <div className="bigCardLayout">
          <div className="bigCard">
            <img src="/images/won.png" alt="alcohol" />
            <span className="cardLayout">WonSoju</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductList;
