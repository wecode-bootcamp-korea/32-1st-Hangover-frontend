import { useState } from 'react';
import BeerImogji from '../Detail/BeerImoji';
import './Modal.scss';

const Modal = ({ rating, commentList, setCommentList, setIsIsFull }) => {
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
    setIsIsFull(false);
    setCommentList([...commentList, data]);
  };
  const cancleSubmit = () => {
    setIsIsFull(false);
  };

  return (
    <section className="modalSection">
      <article className="modalArticle">
        <div className="modalTitle">
          <div>
            <h1>Your review</h1>
          </div>
          <div>
            <h1>You're rating the Saltram Pepperjack Shiraz 2019</h1>
          </div>
        </div>
        <div className="modalRatiBox">
          <div className="modaluserRait">
            <div className="user"></div>
            <BeerImogji rate={rating} />
          </div>
          <div>
            <textarea
              placeholder="Say a few words"
              maxlength="512"
              value={inputComment}
              onChange={handleEdit}
            ></textarea>
          </div>
        </div>
        <div className="modalSubmitBtn">
          <button onClick={handleSubmit}>제출</button>
        </div>
        <div className="modalSubmitBtn">
          <button onClick={cancleSubmit}>취소</button>
        </div>
      </article>
    </section>
  );
};
export default Modal;
