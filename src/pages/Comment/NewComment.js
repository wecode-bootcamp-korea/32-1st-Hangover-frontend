import './NewComment.scss';

const NewComment = () => {
  const score = 4.5;
  return [1, 2, 3, 4, 5].map(item => (
    <section className="newComment">
      <div className="newCommnetSingle">
        <span className="newCommentSpan">
          <span className="newCommentIcon">
            <img src="images/beer_100.png" />
            <span> {score}</span>
          </span>
          <span className="newCommentReview">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            suscipit tortor et nisl volutpat,
          </span>
        </span>
      </div>
      <div>유저명</div>
    </section>
  ));
};

export default NewComment;
