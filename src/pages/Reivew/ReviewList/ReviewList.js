import { useState } from 'react';

import './Review.scss';

const ReviewList = ({
  commentList,
  setUserModify,
  userModify,
  isitFiltered,
  setWriterId,
}) => {
  const [isitLiked, setIsItLiked] = useState(false);

  const handleLiked = () => {
    if (!isitLiked) {
      setIsItLiked(true);
    } else setIsItLiked(false);
  };

  //여기서 api 받아오면 될 것같음
  const showEditModal = userId => {
    if (userId === 5) {
      setUserModify(!userModify);
      setWriterId(userId);
    } else {
      setUserModify(userModify);
    }
  };

  return commentList.map(item => {
    const {
      firstname,
      lastname,
      user_id,
      content,
      rating,
      review_id,
      created_at,
    } = item;
    return (
      <section className="newComment">
        <div className="newCommnetSingle">
          <span className="newCommentSpan">
            <span className="newCommentIcon">
              <img src="images/beer_100.png" />
              <span>{rating}</span>
            </span>
            <span className="newCommentReview" key={user_id} id={review_id}>
              {content}
            </span>
          </span>
        </div>
        <div className="newCommentUserInfo">
          <div className="newCommentUserDate">
            <div>{firstname + ' ' + lastname}</div>
            <div>{created_at}</div>
          </div>
          <div className="newCommentBtnBox">
            <div>
              <button className="newCommentLikeBtn" onClick={handleLiked}>
                좋아요
              </button>
            </div>
            {isitFiltered && (
              <div>
                <button
                  key={user_id}
                  id={review_id}
                  className="newCommentLikeBtn"
                  onClick={() => {
                    showEditModal(review_id);
                  }}
                >
                  수정
                </button>
                <button
                  key={user_id}
                  id={review_id}
                  className="newCommentLikeBtn"
                >
                  삭제
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  });
};

export default ReviewList;
