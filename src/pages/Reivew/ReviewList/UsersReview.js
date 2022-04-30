import './NewComment.scss';
import ReviewCommentList from './ReviewCommentList';
import { useState } from 'react';

const UserReview = ({ item, commentList }) => {
  const [isitOpen, setIsItOpen] = useState(false);
  const [isitLiked, setIsItLiked] = useState(false);
  const [reviewCommentList, setreviewCommentList] = useState(
    item.reviewComment
  );

  const handleLiked = () => {
    if (!isitLiked && item.likedCount === 0) {
      setIsItLiked(true);
      item.likedCount++;
    } else if (isitLiked && item.likedCount !== 0) {
      setIsItLiked(false);
      item.likedCount--;
    }
  };

  return (
    <section className="newComment">
      <div className="newCommnetSingle">
        <span className="newCommentSpan">
          <span className="newCommentIcon">
            <img src="images/beer_100.png" />
            <span>{item.score}</span>
          </span>
          <span className="newCommentReview" key={item.id} id={item.id}>
            {item.content}
          </span>
        </span>
      </div>
      <div className="newCommentUserInfo">
        <div className="newCommentUserDate">
          <div>유저명</div>
          <div>{item.date}</div>
        </div>
        <div className="newCommentBtnBox">
          <div>
            <button className="newCommentLikeBtn" onClick={handleLiked}>
              좋아요{item.likedCount}
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setIsItOpen(!isitOpen);
              }}
            >
              댓글{reviewCommentList.length}
            </button>
          </div>
        </div>
      </div>
      <ReviewCommentList
        commentList={reviewCommentList}
        setreviewCommentList={setreviewCommentList}
        isitOpen={isitOpen}
      />
    </section>
  );
};

export default UserReview;
