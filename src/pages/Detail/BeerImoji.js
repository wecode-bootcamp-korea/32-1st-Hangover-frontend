import React from 'react';
import './BeerImoji.scss';

const BeerImogji = ({ rate }) => {
  const fillBeer = <img src="/images/beer_100.png" className="fulllBeer" />;

  const halfBeer = (
    <img src="/images/beer_50.png" className="fulllBeer halfBeer" />
  );

  const empty = <img src="/images/beer.png" className="fulllBeer emptyBeer" />;

  console.log([...Array(Math.ceil(rate))].map(item => item));

  {
    return (
      rate !== 0 && (
        <div className="imojiContainer">
          {rate % 1 === 0
            ? [...Array(parseInt(rate))].map(icon => fillBeer)
            : [...Array(parseInt(rate))]
                .map(icon => fillBeer)
                .concat(halfBeer)
                .concat(
                  [...Array(5 - Math.floor(rate) - 1)].map(item => empty)
                )}
        </div>
      )
    );
  }
};

export default BeerImogji;
