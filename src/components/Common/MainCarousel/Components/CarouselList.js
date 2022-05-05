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

  const prevBtnClick = () => {
    setCarouselListId(
      carouselListId >= 1 || carouselListId === 3
        ? carouselListId - 1
        : carouselListId
    );
  };

  const nextBtnClick = () => {
    setCarouselListId(carouselListId < 2 ? carouselListId + 1 : carouselListId);
  };

  const goDetail = id => {
    navigate(`detail/${id}`);
  };

  return (
    <div className="carouselList">
      <div className="carouseWrap">
        <div className="carousel">
          <div className="btnWrapper">
            <button
              className="leftBtn"
              carouselListid={carouselListId}
              onClick={prevBtnClick}
              id="hangOverRank"
            >
              {`<`}
            </button>
            <button
              className="rigthBtn"
              carouselListId={carouselListId}
              onClick={nextBtnClick}
              id="hangOverLank"
            >
              {`>`}
            </button>
          </div>
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
                        ₩{parseInt(list.price).toLocaleString()}원
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
