import React, { useEffect, useState } from 'react';
import './ProductList.scss';
import FilterTitle from '../../components/UI/filterTitle';
import FilterList from '../../components/UI/FilterList';
import Countries from '../../components/UI/countries';
import FoodPairing from '../../components/UI/foodPairing';
import BigCard from '../../components/UI/BigCard';

const ProductList = () => {
  // 필터 데이터 받아오는 것
  const [filterButtons, setFilterButtons] = useState([]);
  const [countries, setCountries] = useState([]);
  const [foodPairings, setFoodPairings] = useState([]);

  // const [handleFilterButton, sethandleFilterButton] = useState('none');
  const [products, setProducts] = useState([]);

  // 필터 값 넣어두는 바구니
  const [selectedTypes, setSelectedTypes] = useState({
    whisky: false,
    vodka: false,
    cognac: false,
    beer: false,
    wine: false,
    champagne: false,
  });

  //selectedCountry

  const [filterButtonClick, setfilterButtonClick] = useState([]);

  // const onClick = e => {
  //   e.preventDefault(e);
  //   handleFilterButton === 'none'
  //     ? sethandleFilterButton('none')
  //     : sethandleFilterButton('color');
  // };

  const postFilter = () => {
    // selectedTypes에서 value가 true인 키를 다 꺼내, 그 키들을 패치에 넘겨
    fetch(``)
      .then(res => res.json())
      .then(data => setProducts(data));
    // 필터 되서 온 데이터를 products에 다시 담아서
  };

  /*
  //주종 필터링
  useEffect(() => {
    fetch('http://10.58.6.41:8000/products')
      .then(res => res.json())
      .then(data => setProducts(data));
    // .catch(e => console.log('error', e));
  }, []);
  */

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
      .then(data => setFoodPairings(data));
  }, []);

  // 최초 데이터 요청
  useEffect(() => {
    fetch('/data/FilterList.json')
      .then(res => res.json())
      .then(data => setFilterButtons(data));
  }, []);

  // 필터링 버튼 눌렀을 때 필터링 요청
  // const aaa = e => {
  //   e.preventDefault();

  //   fetch('http://10.58.6.41:8000/products', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       type: e.target.textContent.toLowerCase(),
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(res => setProducts(res));

  //   console.log(e.target.textContent.toLowerCase());
  // };

  return (
    <article className="productList">
      <div className="wrapper">
        <div className="list">
          <h1 className="listCopy">
            Showing 280 wines between ₩10,000 - ₩40,000 rated above 3.8 stars
          </h1>
          <span className="listSubCopy">From 1 regional wine style</span>
          <button className="sort" type="button">
            리뷰
          </button>
          <div className="buttonResultLayout">
            {filterButtonClick.map(e => {
              return;
              <div key={e.id}>{e.id}</div>;
            })}
          </div>
        </div>
        <div className="allLayout">
          <div className="cardLayout">
            <div className="filter">
              <div className="filterTitle">
                <span className="title">Types</span>
                <span>select mutiple</span>
              </div>
              <form className="filterList">
                {filterButtons &&
                  filterButtons.map(filterButton => (
                    <FilterList
                      key={filterButton.id}
                      Filter={filterButton.Filter}
                      type="button"
                      filterButtonClick={filterButtonClick}
                      setfilterButtonClick={setfilterButtonClick}
                      setSelectedTypes={setSelectedTypes}
                      // disabled={!setbutton}
                    />
                  ))}
              </form>

              <div className="price">
                <FilterTitle />
              </div>
              <div className="grapes">
                <span className="grapesTitle">Rating</span>
                <span>select mutiple</span>
              </div>

              <div className="country">
                <span className="countryTitle">Country</span>
              </div>
              <div className="countrySearch">
                <input
                  className="countrySearchInput"
                  type="text"
                  placeholder="💡search"
                />
              </div>
              <form className="filterList">
                {countries &&
                  countries.map(name => (
                    <Countries
                      key={name.id}
                      countryFilter={name.countryFilter}
                    />
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
                  <FoodPairing
                    key={pairValue.id}
                    pairList={pairValue.pairing}
                  />
                ))}
              </form>
              {/* {products.map(product => {
          return <Card product={product} />;
        })} */}

              {/* <div className="bigCard">
              <img src="/images/won.png" alt="alcohol" />
              <span className="cardLayout">WonSoju</span>
            </div>
          </div> */}
            </div>
          </div>
          <div className="bigCardLayout">
            {/* {products.map(it => (
              <BigCard />

            ))} */}
            <BigCard />
            <BigCard />
            <BigCard />
            <BigCard />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductList;
