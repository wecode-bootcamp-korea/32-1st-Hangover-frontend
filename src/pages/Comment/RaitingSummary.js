import './RaitingSummary.scss';
import BeerImogji from '../Detail/BeerImoji';

const RaitingSummary = () => {
  const full = <img src="/images/beer_100.png" />;
  return (
    <div className="ratingSummary">
      <div className="ratingIcon">
        {[5, 4, 3, 2, 1].map(item => (
          <BeerImogji rate={item} />
        ))}
      </div>
      <div className="ratingBarBig">
        {[1, 2, 3, 4, 5].map(item => (
          <div className="ratingBarCon">
            <div className="ratingBar"></div>
            <span className="ratingBarColored"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RaitingSummary;
