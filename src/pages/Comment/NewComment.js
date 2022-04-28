import { useEffect } from 'react';
import './NewComment.scss';

const NewComment = ({ commentList, setCommentList }) => {
  useEffect(() => {
    fetch('/data/dummyData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

  return commentList.map(item => (
    <section className="newComment">
      <div className="newCommnetSingle">
        <span className="newCommentSpan">
          <span className="newCommentIcon">
            <img src="images/beer_100.png" />
            <span> {item.score}</span>
          </span>
          <span className="newCommentReview">{item.content}</span>
        </span>
      </div>
      <div>유저명</div>
    </section>
  ));
};

export default NewComment;
