import React, { useEffect, useRef, useState } from 'react';
import '../Components/SlideBox.scss';

export default function SlideBox() {
  const [hangOverLists, sethangOverLists] = useState([]);
  const [recommendedList, setrecommendedList] = useState([]);
  const [topSlideid, topSetSlideid] = useState(0);
  const [buttomSlideid, setButtomSlideid] = useState(0);
  const carouselTop = useRef();
  const carouselBottom = useRef();

  const topPrevBtnClick = () => {
    topSetSlideid(
      topSlideid >= 1 || topSlideid === 3 ? topSlideid - 1 : topSlideid
    );
  };
  const topNextBtnClick = () => {
    topSetSlideid(topSlideid < 2 ? topSlideid + 1 : topSlideid);
  };

  const buttomPrevBtnClick = () => {
    setButtomSlideid(
      buttomSlideid >= 1 || buttomSlideid === 3
        ? buttomSlideid - 1
        : buttomSlideid
    );
  };
  const buttomNextBtnClick = () => {
    setButtomSlideid(buttomSlideid < 2 ? buttomSlideid + 1 : buttomSlideid);
  };

  useEffect(() => {
    carouselTop.current.style.transform = `translate(${-1000 * topSlideid}px)`;
  }, [topSlideid]);

  useEffect(() => {
    carouselBottom.current.style.transform = `translate(${
      -1000 * buttomSlideid
    }px)`;
  }, [buttomSlideid]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json();
      })
      .then(data => {
        return sethangOverLists(data);
      });
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json();
      })
      .then(data => {
        return setrecommendedList(data);
      });
  }, []);
  return (
    <>
      <div className="hangOverLank">
        <button
          className="slideLeftBtn"
          slideid={topSlideid}
          onClick={topPrevBtnClick}
          id="hangOverLank"
        >
          1
        </button>
        <div className="slideWrap">
          <span className="hangOverTopLank">HangOver TopLank 12</span>
          <div className="carousel">
            <ul ref={carouselTop}>
              {hangOverLists.map(cardList => {
                return (
                  <li>
                    <img
                      src={`https://robohash.org/${cardList.id}?set=set2&size=180x180`}
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
          slideid={topSlideid}
          onClick={topNextBtnClick}
          id="hangOverLank"
        >
          2
        </button>
      </div>

      <img src="" />

      <div className="randomLank">
        <button
          className="slideLeftBtn"
          slideid1={buttomSlideid}
          onClick={buttomPrevBtnClick}
          id="recommendList"
        >
          1
        </button>
        <div className="slideWrap">
          <span className="hangOverTopLank">This week's recommended list</span>
          <div className="carousel">
            <ul ref={carouselBottom}>
              {recommendedList.map(cardList => {
                return (
                  <li>
                    <img
                      src={`https://robohash.org/${cardList.id}?set=set2&size=180x180`}
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
          slideid1={buttomSlideid}
          onClick={buttomNextBtnClick}
          id="recommendList"
        >
          2
        </button>
      </div>
    </>
  );
}
