import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BeerImoji from './BeerImoji';
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
    <div className="hangOverRank">
      <div className="slideWrap">
        <div className="carousel">
          <div className="btnWrapper">
            <button
              className="slideLeftBtn"
              carouselListid={carouselListId}
              onClick={prevBtnClick}
              id="hangOverRank"
            >
              {`<`}
            </button>
            <button
              className="slideRigthBtn"
              carouselListId={carouselListId}
              onClick={nextBtnClick}
              id="hangOverLank"
            >
              {`>`}
            </button>
          </div>
          <ul ref={carouselTop}>
            {hangOverLists.map(cardList => {
              return (
                <li
                  key={cardList.id}
                  onClick={() => {
                    goDetail(cardList.id);
                  }}
                >
                  <img src={cardList.image_url} alt="cardImg" />
                  <div className="cardTextWrap">
                    <div className="cardBottomText">
                      <p className="alcohoName">{cardList.name}</p>
                      <p className="alcoholCategory">{cardList.category}</p>
                      <p className="alcoholCountry">{cardList.country}</p>
                      <p className="alcoholPrice">
                        ₩{Math.floor(cardList.price)}
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
