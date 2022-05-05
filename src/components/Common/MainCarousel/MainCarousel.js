import React, { useEffect, useState } from 'react';
import CarouselList from '../MainCarousel/Components/CarouselList';
import './MainCarousel.scss';
export default function MainCarousel() {
  const [hangOverLists, sethangOverLists] = useState([]);
  const [ramdomList, setRamdomList] = useState([]);

  useEffect(() => {
    fetch(' http://10.58.3.174:8000/products?sorting=high_rating&limit=12')
      .then(res => {
        return res.json();
      })
      .then(data => {
        return sethangOverLists(data.result);
      });
  }, []);

  useEffect(() => {
    fetch('http://10.58.3.174:8000/products?sorting=random&limit=12')
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
      <CarouselList hangOverLists={hangOverLists} />

      <video autoPlay muted loop>
        <source src="/images/Wine - 56914.mp4" />
      </video>
      <span className="recommendList">Recommendation of the week 12</span>
      <CarouselList hangOverLists={ramdomList} />
    </div>
  );
}
