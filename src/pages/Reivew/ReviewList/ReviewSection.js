import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewList from './ReviewList';
import RaitingSummary from './RaitingSummary';
import UpdateReivew from '../ReiviewComponents/UpdateReivew';
import CreateReivew from '../ReiviewComponents/CreateReivew';
import AddRaiting from './AddRaiting';
import './ReviewSection.scss';

const userId = localStorage.getItem('user_id');

const ReviewSection = ({ average, productName }) => {
  const params = useParams();
  const [name, setName] = useState('');
  const [rating, setRaiting] = useState(0);
  const [commentList, setCommentList] = useState(null);
  const [userModify, setUserModify] = useState(false);
  const [isitfull, setIsItFull] = useState(false);
  const [isitFiltered, setIsItFiltered] = useState(false);
  const [individualReview, setIndividualReview] = useState([]);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    commentList &&
      setIndividualReview(
        commentList.filter(item => item.user_id === Number(userId))
      );
  }, [commentList]);

  const handleReivew = e => {
    setName(e.target.id);
    if (e.target.id === 'review') {
      setIsItFiltered(false);
      const newList = [...commentList];
      setCommentList(
        newList.sort(function (a, b) {
          return b.rating - a.rating;
        })
      );
    }
  };

  const handleRecent = e => {
    setName(e.target.id);
    if (e.target.id === 'recent') {
      setIsItFiltered(false);
      const newList = [...commentList];
      setCommentList(
        newList.sort(function (a, b) {
          return (
            new Date(a.created_ate).getTime() - new Date(b.created_at).getTime()
          );
        })
      );
    }
  };

  const getUserReview = e => {
    setName(e.target.id);
    if (e.target.id === 'user' && individualReview) {
      setIsItFiltered(true);
    } else {
      setIsItFiltered(false);
    }
  };

  return (
    commentList && (
      <section className="reivewSection">
        <div className="commentNavContainer">
          <div className="commentNav">
            <div
              id="review"
              className={name === 'review' ? 'active' : ''}
              onClick={handleReivew}
            >
              리뷰순
            </div>
            <div
              id="recent"
              className={name === 'recent' ? 'active' : ''}
              onClick={handleRecent}
            >
              최신순
            </div>
            <div
              id="user"
              className={name === 'user' ? 'active' : ''}
              onClick={e => {
                getUserReview(e);
              }}
            >
              사용자
            </div>
          </div>
          <article className="commentAll">
            <div className="commentDiv">
              <ReviewList
                userId={userId}
                isitFiltered={isitFiltered}
                commentList={isitFiltered ? individualReview : commentList}
                setUserModify={setUserModify}
                userModify={userModify}
              />
            </div>
            <div className="raitingBox">
              <div className="detailNum">{average}</div>
              <div className="detailRaitBox"></div>
              <div className="detaillReviewCount">
                {isitFiltered
                  ? `내가 적은 ${individualReview.length}`
                  : commentList.length}
                개의 리뷰가 있어요!
              </div>
              <div className="detaillLine"></div>
              <RaitingSummary />
              <span className="raitingDes">숙취 고통을 공유해주세요!</span>
              <div className="userStar">
                <div className="user"></div>
                <AddRaiting
                  rating={rating}
                  setRaiting={setRaiting}
                  setIsIsFull={setIsItFull}
                />
              </div>
              <div className="detaillLine"></div>
              {isitfull && (
                <CreateReivew
                  productName={productName}
                  rating={rating}
                  setRaiting={setRaiting}
                  commentList={commentList}
                  setCommentList={setCommentList}
                  setIsItFull={setIsItFull}
                  isitfull={isitfull}
                />
              )}
              {userModify && (
                <UpdateReivew
                  rating={rating}
                  commentList={commentList}
                  userId={userId}
                  isitfull={isitfull}
                />
              )}
            </div>
          </article>
        </div>
      </section>
    )
  );
};

export default ReviewSection;
