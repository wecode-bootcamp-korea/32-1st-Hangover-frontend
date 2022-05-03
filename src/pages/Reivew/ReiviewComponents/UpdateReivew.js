import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import BeerImogji from '../../Detail/BeerImoji';
import './ModalCard.scss';

const UpdateReivew = ({ commentList, rating, writerId }) => {
  const [updateReview, setupdateReview] = useState([...commentList]);
  const [prveInput, setPrveInput] = useState(null);
  const [inputComment, setInputComment] = useState('');

  const params = useParams();
  //동일 프러덕트 아이디로 되어있는 api를 일단 수정할때 전체를 받아오고
  //http://10.58.7.97:8000/reviews?product_id=${params.id}?user_id=?${params.id}
  useEffect(() => {
    fetch(`/data/dummyData.json`)
      .then(res => res.json())
      .then(data => {
        setPrveInput(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleUpdate = e => {};

  return (
    <section className="modal">
      <article className="modalArticle">
        <div className="modalTitle">
          <div>
            <h1>숙취 후기</h1>
          </div>
          <div>
            <h1>술이름에 대한 후기를 남겨주세요!</h1>
          </div>
        </div>
        <form
          onSubmit={e => {
            handleSubmit(e);
          }}
        >
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
              >
                {updateReview.map(item => item.content)}
              </textarea>
            </div>
          </div>
          <div className="modalSubmitBtn">
            <button
              id={writerId}
              onClick={e => {
                handleUpdate(e);
              }}
            >
              제출
            </button>
          </div>
          <div className="modalSubmitBtn">
            <button>취소</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default UpdateReivew;
