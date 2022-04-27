import React, { useState } from 'react';
import './BeerImoji.scss';

const fillBeer = <img src="/images/beer_100.png" className="fulllBeer" />;
const halfBeer = (
  <img src="/images/beer_50.png" className="fulllBeer halfBeer" />
);
const empty = <img src="/images/beer.png" className="fulllBeer emptyBeer" />;

//: rate 만큼 넣어주는것

const BeerImogji = ({ rate }) => {
  {
    return rate !== 0 ? (
      <div className="imojiContainer">
        {[...Array(parseInt(rate))].map(icon => fillBeer)}
        {rate % 1 !== 0 && halfBeer}
        {5 - rate !== 0 &&
          [...Array(5 - parseInt(rate) - 1)].map(icon => empty)}
      </div>
    ) : (
      <div className="imojiContainer">
        {[...Array(parseInt(5))].map(icon => empty)}
      </div>
    );
  }
};

export default BeerImogji;
