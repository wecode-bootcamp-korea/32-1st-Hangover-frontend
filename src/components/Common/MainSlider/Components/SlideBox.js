import React, { useEffect, useRef, useState } from 'react';
import '../Components/SlideBox.scss';
// import SlideCard from './SlideCard';
export default function SlideBox() {
  const [slideid, setSlideid] = useState(0);
  // const [slideid2, setSlideid2] = useState(0);
  const carousel = useRef();

  const prevBtnClick = () => {
    setSlideid(slideid >= 1 ? slideid - 1 : slideid); // -1000, 0
  };
  const nextBtnClick = () => {
    setSlideid(slideid < 2 ? slideid + 1 : slideid); // -1000, -2000
  };

  useEffect(() => {
    carousel.current.style.transform = `translate(${-1000 * slideid}px)`;
  }, [slideid]);

  return (
    <div className="slideWrap">
      <h2>title</h2>

      <div className="carousel">
        <ul ref={carousel}>
          <li>
            <img src="../images/dummy.png"></img>
            <div className="text">1</div>
          </li>
          <li>
            <img src="../images/dummy.png"></img>
            <div className="text">2</div>
          </li>
          <li>
            <img src="../images/dummy.png"></img>
            <div className="text">3</div>
          </li>
          <li>
            <img src="../images/dummy.png"></img>
            <div className="text">4</div>
          </li>
          <li>
            <img src="../images/dummy.png"></img>
            <div className="text">5</div>
          </li>
          <li>
            <img src="../images/dummy.png"></img>
            <div className="text">6</div>
          </li>
          <li>
            <img src="../images/dummy.png"></img>
            <div className="text">7</div>
          </li>
          <li>
            <img src="../images/dummy.png"></img>
            <div className="text">7</div>
          </li>
          <li>
            <img src="../images/dummy.png"></img>
            <div className="text">7</div>
          </li>
          <li>
            <img src="../images/dummy.png"></img>
            <div className="text">7</div>
          </li>
          <li>
            <img src="../images/dummy.png"></img>
            <div className="text">7</div>
          </li>
          <li>
            <img src="../images/dummy.png"></img>
            <div className="text">12</div>
          </li>
        </ul>
      </div>
      <button slideid={slideid} onClick={prevBtnClick}>
        1
      </button>
      <button slideid={slideid} onClick={nextBtnClick}>
        2
      </button>
    </div>
  );
}
