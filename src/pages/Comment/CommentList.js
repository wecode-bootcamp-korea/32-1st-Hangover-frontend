import React, { useRef, useState } from 'react';
import NewComment from './NewComment';
import RaitingSummary from './RaitingSummary';
import Modal from './Modal';
import AddRaiting from './AddRaiting';
import './CommentList.scss';

const CommentList = () => {
  const rait = 4.3;
  const commentNav = useRef();
  const reviewTitle = [
    { name: '리뷰순', id: 'review' },
    { name: '최신순', id: 'recent' },
    { name: '사용자', id: 'user' },
  ];

  const [rating, setRaiting] = useState(0);
  const [commentList, setCommentList] = useState([]);
  const [isitfull, setIsIsFull] = useState(false);

  const handleClick = e => {
    console.log(commentNav.current);
  };

  return (
    <section className="commentListSection">
      <div className="commentNavContainer">
        <div className="commentNav">
          {reviewTitle.map(item => {
            const { id, name } = item;
            return (
              <div key={id} id={id} onClick={handleClick} ref={commentNav}>
                {name}
              </div>
            );
          })}
        </div>
        <article className="commentAll">
          <div className="commentDiv">
            <NewComment
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
