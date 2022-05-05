import { useState } from 'react';
import './ReviewComment.scss';

const ReviewComment = ({ setreviewCommentList, reviewCommentList }) => {
  const [newReviewComment, setnewReviewComment] = useState('');
  const date = new Date();

  const getCommentData = e => {
    setnewReviewComment(e.target.value);
  };

  const data = {
    id: date,
    userName: 'You',
    contnets: newReviewComment,
    date: date.toLocaleString(),
  };

  const handleReviewComment = e => {
    if (e.key === 'Enter') {
      setreviewCommentList([...reviewCommentList, data]);
      setnewReviewComment('');
    }
  };

  return (
    <div className="reviewComment">
      <div className="reviewCommentUserDiv">
        <i class="fa-solid fa-user"></i>
      </div>
      <div className="reviewCommentBox">
        <textarea
          placeholder="Say a few words"
          maxLength="512"
          value={newReviewComment}
          onChange={getCommentData}
          onKeyDown={handleReviewComment}
        />
      </div>
    </div>
  );
};
export default ReviewComment;
