import ReviewComment from './ReviewComment';
import './ReviewCommentList.scss';

const ReviewCommentList = ({ commentList, isitOpen, setreviewCommentList }) => {
  return (
    isitOpen && (
      <article className="reviewCommentListArticle">
        <ReviewComment
          setreviewCommentList={setreviewCommentList}
          reviewCommentList={commentList}
        />
        {commentList.map(comment => (
          <div className="reviewCommentDiv">
            <div className="reviewCommentUserDiv " id={comment.id}>
              <i class="fa-solid fa-user"></i>
            </div>
            <div>
              <div className="reviewCommentBox">
                <p>{comment.contnets}</p>
              </div>
              <div className="reviewCommentBox">
                <div className="reviewCommnetUserInfo">{comment.userName}</div>
                <div className="reviewCommnetUserInfo">{comment.date}</div>
              </div>
            </div>
          </div>
        ))}
      </article>
    )
  );
};

export default ReviewCommentList;
