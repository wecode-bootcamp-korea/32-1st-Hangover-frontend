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

  const handleMove = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="bigCardsContainer">
      <div className="container">
        <div
          className="bigCardId"
          onClick={() => {
            handleMove();
          }}
        >
          <div className="cardTop">
            {/* // {`p ${text ? "isBox" : ""}`}> */}
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
                  <span> {country}</span>
                </div>
              </div>
            </div>
            <div className="drinkRatingContainer">
              <div className="drinkRating">
                <div>{parseFloat('5.0000').toFixed(1)}</div>
                <div>별점</div>
                <div>
                  {'★'.repeat(parseInt(rating)) +
                    '☆'.repeat(5 - parseInt(rating))}
                </div>
                <div> ratings</div>
              </div>
              <div>{Number(price).toLocaleString()}won</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
