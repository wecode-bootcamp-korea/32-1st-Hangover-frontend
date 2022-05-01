import './BigCard.scss';

const BigCard = () => {
  <div>this is BigCard</div>;
  return (
    <div className="bigCardsContainer">
      <div className="container">
        <div className="bigCardId">
          <div className="bottleContainer">
            <div className="bottleImgContainer">
              <img src="images/dummy.png" className="cardBottleImg" />
            </div>
          </div>

          <div className="wineInfoContainer">
            <div className="wineInfo">
              <span>Donnafugata</span>
              <span className="originCounter">Tancredi 2016</span>
            </div>
            <div className="drinkOrigin">
              <div>
                <img />
                <span>Terre Siciliane, Italy</span>
              </div>
            </div>
          </div>
          <div className="drinkRatingContainer">
            <div className="drinkRating">
              <div>4.1</div>
              <div>별점</div>
              <div>1410 ratings</div>
            </div>
            <div>Available online from </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
