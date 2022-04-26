import NewComment from './NewComment';
import RaitingSummary from './RaitingSummary';
import './CommentList.scss';

let num = 0;

const CommentList = () => {
  const rait = 4.3;
  const full = <img src="/images/beer.png" />;
  const reviewTitle = ['리뷰순', '최신순', '사용자명'];
  return (
    <section className="commentListSection">
      <div className="commentH1">
        <h2>숙취 후기</h2>
      </div>
      <div className="commentNavContainer">
        <nav className="commentNav">
          {reviewTitle.map(item => (
            <ul>
              <li>{item}</li>
            </ul>
          ))}
        </nav>
        <article className="commentAll">
          <div className="commentDiv">
            <NewComment />
          </div>
          <div className="raitingBox">
            <div className="detailNum">{rait}</div>
            <div className="detailRaitBox"></div>
            <div className="detaillReviewCount">200rating </div>
            <div className="detaillLine"></div>
            <RaitingSummary />
            <span className="raitingDes">
              Add your own rating and help other Vivino users pick the right
              wine!
            </span>
            <div className="userStar">
              <div className="user"></div>
              <div> {[1, 2, 3, 4, 5].map(item => full)}</div>
            </div>
            <div className="detaillLine"></div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CommentList;
