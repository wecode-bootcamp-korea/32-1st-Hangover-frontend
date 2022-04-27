import React from 'react';
import './BeerImoji.scss';

const BeerImogji = ({ rate }) => {
  const fillBeer = <img src="/images/beer_100.png" className="fulllBeer" />;

  const halfBeer = (
    <img src="/images/beer_50.png" className="fulllBeer halfBeer" />
  );

  const empty = <img src="/images/beer.png" className="fulllBeer emptyBeer" />;

  {
    return (
      rate !== 0 && (
        <div className="imojiContainer">
          {rate % 1 === 0
            ? [...Array(parseInt(rate))].map(icon => fillBeer)
            : [...Array(parseInt(rate))].map(icon => fillBeer).concat(halfBeer)}
          {5 - rate !== 0 &&
            [...Array(parseInt(rate))].map(icon => fillBeer).length !== 4 &&
            [...Array(5 - parseInt(rate) - 1)].map(icon => empty)}
        </div>
      )
    );
  }
};

export default BeerImogji;
