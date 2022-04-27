import React, { useRef, useState } from 'react';

const AddRaiting = () => {
  const [rating, setRaiting] = useState(0);

  const fillBeer = <img src="/images/beer_100.png" className="fulllBeer" />;
  const array = [...Array(parseInt(rating))].map(icon => fillBeer);
  const handelonClick = e => {
    setRaiting(e.target.id);
  };

  {
    return rating === 0 ? (
      <div className="imojiContainer">
        {[...Array(5)].map((icon, index) => {
          index += 1;
          return (
            <img
              src="/images/beer.png"
              className="fulllBeer emptyBeer"
              onClick={handelonClick}
              id={index}
            />
          );
        })}
      </div>
    ) : (
      <div className="imojiContainer">
        {array.concat(
          [...Array(5 - array.length)].map(item => (
            <img src="/images/beer.png" className="fulllBeer emptyBeer" />
          ))
        )}
      </div>
    );
  }
};

export default AddRaiting;
