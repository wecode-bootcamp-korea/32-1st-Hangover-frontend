import BeerImogji from '../../Detail/BeerImoji';
import './RaitingSummary.scss';

const RaitingSummary = ({ count }) => {
  const check = count.map(item => parseInt(item.rating));
  const counter = check.reduce((accu, curr) => {
    accu[curr] = (accu[curr] || 0) + 1;
    return accu;
  }, {});

  return (
    <div className="ratingSummary">
      <div className="ratingIcon">
        {[5, 4, 3, 2, 1].map(item => (
          <BeerImogji rate={item} />
        ))}
      </div>
      <div className="ratingBarBig">
        {[counter[5], counter[4], counter[3], counter[2], counter[1]].map(
          item => (
            <div className="ratingBarBigCon">
              <div className="ratingBarCon">
                <div className="ratingBar"></div>
                <span
                  className="ratingBarColored"
                  style={{ width: `${item === undefined ? 0 : item * 3}%` }}
                ></span>
              </div>
              <div className="counter">
                <span> {item === undefined ? 0 : item}</span>
                <span>개</span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RaitingSummary;
