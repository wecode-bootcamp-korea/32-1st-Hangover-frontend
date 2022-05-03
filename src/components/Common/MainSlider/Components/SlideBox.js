import React, { useEffect, useState } from 'react';
import '../Components/SlideBox.scss';
import Carousel from '../Carousel';

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
    <>
      <span className="hangOverTopLank">HangOver TopRank 12</span>
      <Carousel hangOverLists={hangOverLists} />
      <span className="hangOverTopLank">HangOver TopRank 12</span>
      <Carousel hangOverLists={ramdomList} />
    </>
  );
}
