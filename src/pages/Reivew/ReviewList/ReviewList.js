import { useState } from 'react';
import { useParams } from 'react-router-dom';

import './ReviewList.scss';

const ReviewList = ({
  commentList,
  setCommentList,
  setUserModify,
  userModify,
  isitFiltered,
  userId,
}) => {
  const [isitLiked, setIsItLiked] = useState(false);
  const params = useParams();
  const handleLiked = () => {
    if (!isitLiked) {
      setIsItLiked(true);
    } else setIsItLiked(false);
  };

  //여기서 api 받아오면 될 것같음
  const showEditModal = userId => {
    if (userId === userId) {
      setUserModify(!userModify);
    } else {
      setUserModify(userModify);
    }
  };

  const handleDelete = e => {
    console.log(e.target.id);
    console.log(params.id);
    if (window.confirm('리뷰를 삭제하실건가요?')) {
      fetch(
        `http://10.58.5.238:8000/reviews?review_id=${e.target.id}&product_id=${params.id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: localStorage.getItem('JWT_TOKEN'),
          },
          body: JSON.stringify({
            review_id: e.target.id,
            product_id: params.id,
          }),
        }
      )
        .then(response => {
          if (response.status === 204) {
            setCommentList(
              commentList.filter(item => item.review_id !== e.target.id)
            );
            fetch(`http://10.58.5.238:8000/reviews?product_id=${params.id}`, {
              headers: {
                Authorization: localStorage.getItem('JWT_TOKEN'),
              },
            })
              .then(res => res.json())
              .then(data => {
                setCommentList(data.Reviews);
              })
              .catch(error => {
                console.log(error);
              });
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      return;
    }
  };

  if (commentList.length === 0) {
    return (
      <section className="reviewList">
        <div>리뷰를 입력해주세요 😀</div>
      </section>
    );
  }

  return commentList.map(item => {
    const {
      firstname,
      lastname,
      user_id,
      content,
      rating,
      review_id,
      created_at,
    } = item;
    return (
      <section className="reviewList">
        <div className="newCommnetSingle">
          <span className="newCommentSpan">
            <span className="newCommentIcon">
              <img src="/images/beer_100.png" className="fulllBeer" />
              <span>{rating}</span>
            </span>
            <span className="newCommentReview" key={user_id} id={review_id}>
              {content}
            </span>
          </span>
        </div>
        <div className="newCommentUserInfo">
          <div className="newCommentUserDate">
            <div>{firstname + ' ' + lastname}</div>
            <div>{created_at}</div>
          </div>
          <div className="newCommentBtnBox">
            <div>
              <button className="newCommentLikeBtn" onClick={handleLiked}>
                좋아요
              </button>
            </div>
            {isitFiltered && (
              <div>
                <button
                  id={review_id}
                  className="newCommentLikeBtn"
                  onClick={() => {
                    showEditModal(review_id);
                  }}
                >
                  수정
                </button>
                <button
                  id={review_id}
                  onClick={e => {
                    handleDelete(e);
                  }}
                  className="newCommentLikeBtn"
                >
                  삭제
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  });
};

export default ReviewList;
