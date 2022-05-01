import { useState } from 'react';
import BeerImogji from '../Detail/BeerImoji';
import './ModalCard.scss';

const DeleteReivew = ({
  rating,
  commentList,
  setCommentList,
  setIsIsFull,
  modifyText,
}) => {
  const [inputComment, setInputComment] = useState('');
  const date = new Date();

  // const handleEdit = e => {
  //   setInputComment(e.target.value);
  // };
  // const data = {
  //   id: 5,
  //   score: rating,
  //   likedCount: 0,
  //   userName: 'wecode',
  //   content: inputComment,
  //   isLiked: false,
  //   reviewComment: [],
  //   date: date.toLocaleString(),
  // };

  // const handleSubmit = () => {
  //   setIsIsFull(false);
  //   setCommentList([...commentList, data]);
  // };

  // const cancleSubmit = () => {
  //   setIsIsFull(false);
  // };

  return (
    <section className="modalSection">
      <article className="modalArticle">
        <div className="modalTitle">
          <div>
            <h1>숙취 후기</h1>
          </div>
          <div>
            <h1>술이름에 대한 후기를 남겨주세요!</h1>
          </div>
        </div>
        <div className="modalRatiBox">
          <div className="modaluserRait">
            <div className="user"></div>
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
export default DeleteReivew;
