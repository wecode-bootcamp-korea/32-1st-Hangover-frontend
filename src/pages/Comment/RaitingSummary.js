import './RaitingSummary.scss';

const RaitingSummary = () => {
  const full = <img src="/images/beer_100.png" />;
  return (
    <div className="ratingSummary">
      <div className="ratingIcon">
        <div> {[1, 2, 3, 4, 5].map(item => full)}</div>
        <div> {[1, 2, 3, 4].map(item => full)}</div>
        <div> {[1, 2, 3].map(item => full)}</div>
        <div> {[1, 2].map(item => full)}</div>
        <div> {[1].map(item => full)}</div>
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
