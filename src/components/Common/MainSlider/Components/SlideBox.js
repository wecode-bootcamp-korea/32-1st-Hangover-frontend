import React, { useEffect, useRef, useState } from 'react';
import '../Components/SlideBox.scss';

export default function SlideBox() {
  const [cardLists, setCardList] = useState([]);
  const [slideid, setSlideid] = useState(0);
  const carousel = useRef();

  const prevBtnClick = () => {
    setSlideid(slideid >= 1 || slideid === 3 ? slideid - 1 : slideid);
  };
  const nextBtnClick = () => {
    setSlideid(slideid < 2 ? slideid + 1 : slideid);
  };

  useEffect(() => {
    carousel.current.style.transform = `translate(${-1000 * slideid}px)`;
  }, [slideid]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json();
      })
      .then(data => {
        return setCardList(data);
      });
  }, []);
  return (
    <>
      <div className="wrap">
        <button
          className="slideLeftBtn"
          slideid={slideid}
          onClick={prevBtnClick}
        >
          1
        </button>
        <div className="slideWrap">
          <span className="hangOverTopLank">HangOver TopLank 12</span>
          <div className="carousel">
            <ul ref={carousel}>
              {cardLists.map(cardList => {
                return (
                  <li>
                    <img
                      src="../../../../../public/images/dummy.png"
                      alt="cardImg"
                    />
                    <div className="cardTextWrap">
                      <h2>취하노 지수</h2>
                      <div className="cardBottomText">
                        <p>술 종류</p>
                        <p>술 이름</p>
                        <p>원산지</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <button
          className="slideRigthBtn"
          slideid={slideid}
          onClick={nextBtnClick}
        >
          2
        </button>
      </div>
    </>
  );
}
