import React, { useEffect, useState } from 'react';
import Carousel from '../MainCarousel/Components/CarouselList';
import './MainCarousel.scss';
export default function SlideBox() {
  const [hangOverLists, sethangOverLists] = useState([]);
  const [ramdomList, setRamdomList] = useState([]);

  useEffect(() => {
    fetch(' http://10.58.3.174:8000/products?sorting=high_rating')
      .then(res => {
        return res.json();
      })
      .then(data => {
        return sethangOverLists(data.result);
      });
  }, []);

  useEffect(() => {
    fetch('http://10.58.3.174:8000/products?sorting=random')
      .then(res => {
        return res.json();
      })
      .then(data => {
        return setRamdomList(data.result);
      });
  }, []);
  return (
    <div className="mainCarousel">
      <video autoPlay muted loop>
        <source src="/images/Beer - 80133 (online-video-cutter.com).mp4" />
      </video>
      <span className="hangOverTopRank">HangOver TopRank 12</span>
      <Carousel hangOverLists={hangOverLists} />

      <video autoPlay muted loop>
        <source src="/images/Wine - 56914.mp4" />
      </video>
      <span className="recommendList">Recommendation of the week 12</span>
      <Carousel hangOverLists={ramdomList} />
    </div>
  );
}
