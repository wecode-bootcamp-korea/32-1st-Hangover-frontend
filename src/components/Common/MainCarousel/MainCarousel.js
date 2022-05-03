import React, { useEffect, useState } from 'react';
import Carousel from '../MainCarousel/Components/CarouselList';
import './MainCarousel.scss';
export default function SlideBox() {
  const [hangOverLists, sethangOverLists] = useState([]);
  const [ramdomList, setRamdomList] = useState([]);

  useEffect(() => {
    fetch('https://node-pagnation.herokuapp.com/users?offset=0&limit=12')
      .then(res => {
        return res.json();
      })
      .then(data => {
        return sethangOverLists(data.users);
      });
  }, []);

  useEffect(() => {
    fetch('https://node-pagnation.herokuapp.com/users?offset=12&limit=24')
      .then(res => {
        return res.json();
      })
      .then(data => {
        return setRamdomList(data.users);
      });
  }, []);
  return (
    <div className="mainCarousel">
      <span className="hangOverTopLank">HangOver TopRank 12</span>
      <Carousel hangOverLists={hangOverLists} />

      <video autoPlay muted loop>
        <source src="/images/Wine - 56914.mp4" />
      </video>
      <span className="recommendList">Recommendation of the week 12</span>
      <Carousel hangOverLists={ramdomList} />
    </div>
  );
}
