import React from 'react';
import './ProductList.scss';

const ProductList = () => {
  return (
    <>
      <div className="list">
        <h1>리스트 페이지 카피영역</h1>
        <span>From 1 regional wine style</span>
        <button className="sort" type="button">
          리뷰
        </button>
        <i class="fa-solid fa-chevron-down" />
      </div>
      <article>
        <div className="cardLayout">
          <div className="filter"></div>
          <div className="bigCard">
            <img src="/images/won.png" />
            <span className="cardLayout">WonSoju</span>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProductList;
