import { useNavigate } from 'react-router-dom';
import './BigCard.scss';

const BigCard = ({
  id,
  price,
  name,
  country,
  image_url,
  rating,
  review_counts,
}) => {
  const navigate = useNavigate();

  const handleMove = productId => {
    navigate(`/detail/${productId}`);
  };

  return (
    <div className="bigCardsContainer" onClick={handleMove(id)}>
      <div className="container">
        <div className="bigCardId">
          <div className="bottleContainer">
            <div className="bottleImgContainer">
              <img src={image_url} className="cardBottleImg" />
            </div>
          </div>

          <div className="wineInfoContainer">
            <div className="wineInfo">
              <span>{name}</span>
              <span className="originCounter">{name}</span>
            </div>
            <div className="drinkOrigin">
              <div>
                <img />
                <span>Terre Siciliane, {country}</span>
              </div>
            </div>
          </div>
          <div className="drinkRatingContainer">
            <div className="drinkRating">
              <div>{rating}</div>
              <div>별점</div>
              <div>{review_counts} ratings</div>
            </div>
            <div>Available online from {price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
