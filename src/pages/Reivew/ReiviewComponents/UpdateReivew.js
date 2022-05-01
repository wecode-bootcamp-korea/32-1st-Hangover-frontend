import { useState } from 'react';
import BeerImogji from '../../Detail/BeerImoji';
import './ModalCard.scss';

const UpdateReivew = ({ commentList, rating }) => {

  const [updateReview, setupdateReview] = useState([...commentList]);
  const [prveInput, setPrveInput] = useState(updateReview[0].content);
  const [inputComment, setInputComment] = useState('');
  console.log(...commentList);
  console.log(prveInput);
  const handleEdit = e => {
    setInputComment(e.target.value);
  };
  const handleUpdate = e => {
    setupdateReview({
      [e.target.content]: e.target.value,
    });
  };

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
            <div className="user">
              {updateReview.map(item => item.userName)}
            </div>
          </div>
          <div>
            <textarea
              placeholder="Say a few words"
              maxLength="512"
              value={updateReview[0].content}
              onChange={e => {
                handleEdit(e);
              }}
            >
              {updateReview.map(item => item.content)}
            </textarea>
          </div>
        </div>
        <div className="modalSubmitBtn">
          <button
            onClick={() => {
              handleUpdate();
            }}
          >
            제출
          </button>
        </div>
        <div className="modalSubmitBtn">
          <button>취소</button>
        </div>
      </article>
    </section>
  );
};

export default UpdateReivew;
