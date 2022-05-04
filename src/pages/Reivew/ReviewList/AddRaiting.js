const AddRaiting = ({ rating, setRaiting, setIsIsFull }) => {
  const fillBeer = <img src="/images/beer_100.png" className="fulllBeer" />;
  const array = [...Array(parseInt(rating))].map(icon => fillBeer);

  const handleClick = e => {
    setRaiting(e.target.id);
    setIsIsFull(true);
  };

  return rating === 0 ? (
    <div className="beerImoji">
      {[...Array(5)].map((icon, index) => {
        index += 1;
        return (
          <img
            id={index}
            key={index}
            src="/images/beer.png"
            className="fulllBeer emptyBeer"
            onClick={handleClick}
          />
        );
      })}
    </div>
  ) : (
    <div className="imojiContainer">
      {array.concat(
        [...Array(5 - array.length)].map(item => (
          <img src="/images/beer.png" className="fulllBeer" />
        ))
      )}
    </div>
  );
};

export default AddRaiting;
