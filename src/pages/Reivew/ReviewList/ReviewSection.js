import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewList from './ReviewList';
import RaitingSummary from './RaitingSummary';
import UpdateReivew from '../ReiviewComponents/UpdateReivew';
import CreateReivew from '../ReiviewComponents/CreateReivew';
import AddRaiting from './AddRaiting';
import './ReviewSection.scss';

const ReviewSection = () => {
  const rait = 4.3;
  const [name, setName] = useState('');
  const [writerId, setWriterId] = useState('');
  const [rating, setRaiting] = useState(0);
  const [commentList, setCommentList] = useState(null);
  const [userModify, setUserModify] = useState(false);
  const [isitfull, setIsIsFull] = useState(false);
  const [isitFiltered, setIsItFiltered] = useState(false);
  const [individualReview, setIndividualReview] = useState([]);

  const params = useParams();
  //http://10.58.7.97:8000/reviews?product_id=${params.id}
  useEffect(() => {
    fetch(`/data/dummyData.json`)
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    commentList &&
      setIndividualReview(commentList.filter(item => item.review_id === 5));
  }, [commentList]);
  console.log(individualReview);

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
      setIsItFiltered(true);
    } else {
      setIsItFiltered(false);
    }
  };

  return (
    commentList && (
      <section className="commentListSection">
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
                writerId={writerId}
                setWriterId={setWriterId}
                isitFiltered={isitFiltered}
                commentList={isitFiltered ? individualReview : commentList}
                setUserModify={setUserModify}
                userModify={userModify}
              />
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
                  isitfull={isitfull}
                />
              )}
              {userModify && (
                <UpdateReivew
                  rating={rating}
                  commentList={commentList}
                  writerId={writerId}
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
