import React, { useEffect, useState } from 'react';
import './ProductList.scss';
import FilterTitle from '../../components/UI/filterTitle';
import FilterList from '../../components/UI/FilterList';
import Countries from '../../components/UI/countries';
import FoodPairing from '../../components/UI/foodPairing';

const ProductList = () => {
  const [filterButtons, setFilterButtons] = useState([]);
  // const [handleFilterButton, sethandleFilterButton] = useState('none');
  const [products, setProducts] = useState([]);
  const [countries, setCountries] = useState([]);
  const [foodPairings, setfoodPairings] = useState([]);

  // // const handleFilterClick = e => {
  // //   sethandleFilterButton(e.targer.value);
  // //   console.log(e);
  // // };
  // const onClick = e => {
  //   e.preventDefault(e);
  //   handleFilterButton === 'none'
  //     ? sethandleFilterButton('none')
  //     : sethandleFilterButton('color');
  // };

  //  주종 필터링
  useEffect(() => {
    fetch('/data/FilterList.json')
      .then(res => res.json())
      .then(data => setFilterButtons(data));
  }, []);

  // 국가 필터링
  useEffect(() => {
    fetch('./data/countries.json')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);
  // 푸드 페어링 필터링
  useEffect(() => {
    fetch('./data/foodPairing.json')
      .then(res => res.json())
      .then(data => setfoodPairings(data));
  }, []);

  // 최초 데이터 요청
  useEffect(() => {
    fetch('/data/FilterList.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // 필터링 버튼 눌렀을 때 필터링 요청
  const aaa = e => {
    e.preventDefault();

    fetch('API 주소', {
      method: 'POST',
      body: JSON.stringify({
        type: e.target.textContent.toLowerCase(),
      }),
    })
      .then(res => res.json())
      .then(res => setProducts(res));

    console.log(e.target.textContent.toLowerCase());
  };

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
            <span className="title">Types(주종)</span>
            <span>select mutiple</span>
          </div>
          <form className="filterList">
            {filterButtons &&
              filterButtons.map(filterButton => (
                <FilterList
                  key={filterButton.id}
                  Filter={filterButton.Filter}
                  type="button"
                  // disabled={!setbutton}
                />
              ))}
          </form>

          <div className="price">
            <FilterTitle />
          </div>
          <div className="grapes">
            <span className="grapesTitle">Rating(취하노)</span>
            <span>search grapes</span>
          </div>

          <div className="country">
            <span className="countryTitle">Country(국가)</span>
          </div>
          <div className="countrySearch">
            <input
              className="countrySearchInput"
              type="text"
              placeholder="💡search"
            />
          </div>
          <form className="filterList">
            {countries.map(name => (
              <Countries key={name.id} countryFilter={name.countryFilter} />
            ))}
          </form>

          {/* <div className="foodPairing">
            <span className="foodPairingTitle">foodPairing</span>
          </div> */}
          <div className="countrySearch">
            <input
              className="foodPairingSearchInput"
              type="text"
              placeholder="💡search"
            />
          </div>
          <div className="foodPairing">
            <div className="foodPairingTitle">foodPairing</div>
          </div>
          <form className="filterList">
            {foodPairings.map(pairValue => (
              <FoodPairing key={pairValue.id} pairList={pairValue.pairing} />
            ))}
          </form>

          {/* {products.map(product => {
          return <Card product={product} />;
        })} */}

          <div className="bigCardLayout">
            <div className="bigCard">
              <img src="/images/won.png" alt="alcohol" />
              <span className="cardLayout">WonSoju</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductList;
