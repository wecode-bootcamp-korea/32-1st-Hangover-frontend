import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './CarouselList.scss';

export default function CarouselList({ hangOverLists }) {
  const [carouselListId, setCarouselListId] = useState(0);

  const carouselTop = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    carouselTop.current.style.transform = `translate(${
      -1000 * carouselListId
    }px)`;
  }, [carouselListId]);

  const productBtnClick = e => {
    const { id } = e.target;
    setCarouselListId(Number(id));
  };

  const goDetail = id => {
    navigate(`detail/${id}`);
  };

  return (
    <div className="carouselList">
      <div className="carouseWrap">
        <div className="carousel">
          <ul className="cardWrap" ref={carouselTop}>
            {hangOverLists.map(list => {
              return (
                <li
                  className="cardList"
                  key={list.id}
                  onClick={() => {
                    goDetail(list.id);
                  }}
                >
                  <img
                    className="carouseCardImg"
                    src={list.image_url}
                    alt="cardImg"
                  />
                  <div className="cardTextWrap">
                    <div className="cardBottomText">
                      <p className="alcohoName">{list.name}</p>
                      <p className="alcoholCategory">{list.category}</p>
                      <p className="alcoholCountry">{list.country}</p>
                      <p className="alcoholPrice">
                        ₩ {parseInt(list.price).toLocaleString()}원
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="btnWrapper">
          <button
            className="leftBtn"
            carouselListid={carouselListId}
            onClick={productBtnClick}
            id={0}
          >
            취
          </button>
          <button
            className="centerBtn"
            carouselListId={carouselListId}
            onClick={productBtnClick}
            id={1}
          >
            하
          </button>
          <button
            className="rightBtn"
            carouselListId={carouselListId}
            onClick={productBtnClick}
            id={2}
          >
            노
          </button>
        </div>
      </div>
    </div>
  );
}
