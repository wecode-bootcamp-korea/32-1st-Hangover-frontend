import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList';
import UsersReviewList from './UsersReviewList';
import RaitingSummary from './RaitingSummary';
import UpdateReivew from '../ReiviewComponents/UpdateReivew';
import CreateReivew from '../ReiviewComponents/CreateReivew';
import AddRaiting from '../AddRaiting';
import './ReviewSection.scss';

const ReviewSection = () => {
  const rait = 4.3;

  const [rating, setRaiting] = useState(0);
  const [commentList, setCommentList] = useState([]);
  const [modifyText, setModifyText] = useState('');
  const [userModify, setUserModify] = useState(false);
  const [name, setName] = useState('');
  const [isitfull, setIsIsFull] = useState(false);
  const [isitFiltered, setIsItFiltered] = useState(false);
  const [individualReview, setIndividualReview] = useState([]);
  // const individualReview = commentList.filter(user => user.id === 5);

  useEffect(() => {
    fetch('/data/dummyData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setIndividualReview(commentList.filter(user => user.id === 5));
  }, [commentList]);

  const handleReivew = e => {
    setName(e.target.id);
    if (e.target.id === 'review') {
      setIsItFiltered(false);
      const newList = [...commentList];
      // e.target.style.borderBottomColor = 'red';
      setCommentList(
        newList.sort(function (a, b) {
          return b.score - a.score;
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
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        })
      );
    }
  };

  const getUserReview = e => {
    setName(e.target.id);
    if (e.target.id === 'user' && individualReview) {
      console.log('Wlr');
      setIsItFiltered(true);
    } else {
      setIsItFiltered(false);
    }
  };

  return (
    <section className="commentListSection">
      <div className="commentNavContainer">
        <div className="commentNav">
          <div
            id="review"
            className={name === 'review' ? 'active' : undefined}
            onClick={handleReivew}
          >
            리뷰순
          </div>
          <div
            id="recent"
            className={name === 'recent' ? 'active' : undefined}
            onClick={handleRecent}
          >
            최신순
          </div>
          <div
            id="user"
            className={name === 'user' ? 'active' : undefined}
            onClick={e => {
              getUserReview(e);
            }}
          >
            사용자
          </div>
        </div>
        <article className="commentAll">
          <div className="commentDiv">
            {!isitFiltered ? (
              <ReviewList
                setModifyText={setModifyText}
                commentList={commentList}
              />
            ) : (
              <UsersReviewList
                isitFiltered={isitFiltered}
                individualReview={individualReview}
                setUserModify={setUserModify}
                userModify={userModify}
              />
            )}
          </div>

          <div className="raitingBox">
            <div className="detailNum">{rait}</div>
            <div className="detailRaitBox"></div>
            <div className="detaillReviewCount">200rating </div>
            <div className="detaillLine"></div>
            <RaitingSummary />
            <span className="raitingDes">
              Add your own rating and help other Vivino users pick the right
              wine!
            </span>
            <div className="userStar">
              <div className="user"></div>
              <AddRaiting
                rating={rating}
                setRaiting={setRaiting}
                setIsIsFull={setIsIsFull}
              />
            </div>
            <div className="detaillLine"></div>
            {isitfull && (
              <CreateReivew
                rating={rating}
                commentList={commentList}
                setCommentList={setCommentList}
                setIsIsFull={setIsIsFull}
                setModifyText={setModifyText}
                modifyText={modifyText}
                isitfull={isitfull}
              />
            )}
            {userModify && (
              <UpdateReivew rating={rating} commentList={commentList} />
            )}
          </div>
        </article>
      </div>
    </section>
  );
};

export default ReviewSection;
