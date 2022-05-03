import React, { useEffect, useRef, useState } from 'react';

export default function Carousel({ hangOverLists }) {
  const [topSlideid, topSetSlideid] = useState(0);
  const carouselTop = useRef();

  useEffect(() => {
    carouselTop.current.style.transform = `translate(${-1000 * topSlideid}px)`;
  }, [topSlideid]);

  const topPrevBtnClick = () => {
    topSetSlideid(
      topSlideid >= 1 || topSlideid === 3 ? topSlideid - 1 : topSlideid
    );
  };

  const topNextBtnClick = () => {
    topSetSlideid(topSlideid < 2 ? topSlideid + 1 : topSlideid);
  };

  return (
    <div className="hangOverLank">
      <div className="slideWrap">
        <div className="carousel">
          <div className="btnWrapper">
            <button
              className="slideLeftBtn"
              slideid={topSlideid}
              onClick={topPrevBtnClick}
              id="hangOverLank"
            >
              {`<`}
            </button>
            <button
              className="slideRigthBtn"
              slideid={topSlideid}
              onClick={topNextBtnClick}
              id="hangOverLank"
            >
              {`>`}
            </button>
          </div>
          <ul ref={carouselTop}>
            {hangOverLists.map(cardList => {
              return (
                <li key={cardList.id}>
                  <img src={cardList.profile_img} alt="cardImg" />
                  <div className="cardTextWrap">
                    <h2>취하노 지수</h2>
                    <div className="cardBottomText">
                      <p>{cardList.name}</p>
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
