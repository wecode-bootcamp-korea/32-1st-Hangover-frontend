import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BeerImogji from '../../Detail/BeerImoji';
import './ModalCard.scss';

const CreateReivew = ({
  rating,
  commentList,
  setCommentList,
  setIsItFull,
  productName,
  setRaiting,
}) => {
  const params = useParams();
  const [inputReview, setInputReview] = useState('');
  const [initValue, setInItValue] = useState({
    lastname: null,
    firstname: null,
    product_id: parseInt(params.id),
    content: '',
    rating: rating,
    created_at: null,
    review_id: null,
    user_id: null,
  });

  const handleEdit = e => {
    if (!localStorage.getItem('JWT_TOKEN')) {
      alert('로그인해주세요!');
    } else {
      setInputReview(e.target.value);
      setInItValue(prev => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch(`http://10.58.5.238:8000/reviews`, {
      method: 'post',
      headers: {
        Authorization: localStorage.getItem('JWT_TOKEN'),
      },
      body: JSON.stringify({
        product_id: 1,
        content: initValue.content,
        rating: initValue.rating,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          fetch(`http://10.58.5.238:8000/reviews?product_id=${params.id}`, {
            headers: {
              Authorization: localStorage.getItem('JWT_TOKEN'),
            },
          })
            .then(res => res.json())
            .then(data => {
              setCommentList(data.Reviews);
              setInputReview('');
              setRaiting(0);
            })
            .catch(error => {
              console.log(error);
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
    setIsItFull(false);
  };

  const cancleSubmit = () => {
    setIsItFull(false);
    setInputReview('');
    setRaiting(0);
  };

  return (
    <section className="createReview">
      <article className="modalArticle">
        <div className="modalTitle">
          <div>
            <h1>숙취 후기</h1>
          </div>
          <div>
            <h1>{productName}에 대한 후기를 남겨주세요!</h1>
          </div>
        </div>
        <div className="modalRatiBox">
          <div className="modaluserRait">
            <div className="user"></div>
            <BeerImogji rate={rating} />
          </div>
        </div>
        <form onSubmit={e => handleSubmit(e)} className="modalForm">
          <textarea
            className="modalTextArea"
            value={inputReview}
            name="content"
            placeholder="Say a few words"
            maxLength="512"
            onChange={e => {
              handleEdit(e);
            }}
          />
          <div className="modalBtnBox">
            <div className="modalSubmitBtn">
              <button>제출</button>
            </div>
            <div className="modalSubmitBtn">
              <button onClick={cancleSubmit}>취소</button>
            </div>
          </div>
        </form>
      </article>
    </section>
  );
};
export default CreateReivew;
