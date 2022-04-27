import { useState } from 'react';
import BeerImogji from '../Detail/BeerImoji';

const EditComment = ({ rating, commentList, setCommentList }) => {
  const [inputComment, setInputComment] = useState('');

  const handleEdit = e => {
    setInputComment(e.target.value);
  };
  const data = {
    score: rating,
    userName: 'wecode',
    content: inputComment,
  };
  const handleSubmit = () => {
    setCommentList([...commentList, data]);
  };

  return (
    <article>
      <section>
        <BeerImogji rate={rating} />
      </section>
      <div>
        <textarea
          placeholder="Say a few words"
          maxlength="512"
          value={inputComment}
          onChange={handleEdit}
        ></textarea>
      </div>
      <div>
        <button onClick={handleSubmit}>제출</button>
      </div>
    </article>
  );
};
export default EditComment;
