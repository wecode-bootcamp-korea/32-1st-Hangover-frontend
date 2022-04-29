import React, { useState, useEffect } from 'react';
import NewCommentList from './NewCommentList';
import RaitingSummary from './RaitingSummary';
import Modal from './Modal';
import AddRaiting from './AddRaiting';
import './CommentList.scss';

const CommentList = () => {
  const rait = 4.3;

  useEffect(() => {
    fetch('/data/dummyData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setCommentList(
          data.sort(function (a, b) {
            return b.score - a.score;
          })
        );
      });
  }, []);

  const [rating, setRaiting] = useState(0);
  const [commentList, setCommentList] = useState([]);
  const [isitfull, setIsIsFull] = useState(false);
  const [name, setName] = useState('');
  // state하나를 계속 쓰니까 그런거지ㅇㅇ
  const handleReivew = e => {
    setName(e.target.id);
    if (e.target.id === 'review') {
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
      const newList = [...commentList];
      setCommentList(
        newList.sort(function (a, b) {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        })
      );
    }
  };

  const handleUser = e => {
    setName(e.target.id);
    if (e.target.id === 'user') {
      const newList = [...commentList];
      setCommentList(
        newList.sort(function (a, b) {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        })
      );
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
            onClick={handleUser}
          >
            사용자
          </div>
        </div>
        <article className="commentAll">
          <div className="commentDiv">
            <NewCommentList
              commentList={commentList}
              setCommentList={setCommentList}
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
              <Modal
                rating={rating}
                commentList={commentList}
                setCommentList={setCommentList}
                setIsIsFull={setIsIsFull}
              />
            )}
          </div>
        </article>
      </div>
    </section>
  );
};

export default CommentList;
