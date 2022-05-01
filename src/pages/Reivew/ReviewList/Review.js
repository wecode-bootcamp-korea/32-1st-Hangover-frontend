import { useState } from 'react';
import ReviewCommentList from '../Comment/ReviewCommentList';
import './Review.scss';

const Review = ({ item }) => {
  const [isitOpen, setIsItOpen] = useState(false);
  const [isitLiked, setIsItLiked] = useState(false);
  const [reviewCommentList, setreviewCommentList] = useState(
    item.reviewComment
  );

  //시도1-> boolean 이용-> 동시에 열림
  //시도2 => id부여 당연히 동시에 열림
  //state를 여러군데에서 동시에 사용해서 그러나?
  //그런데 이렇게 state를 분리해서 해주는게, 왜 가능하게 된거지?
  // 결국 그러면, 하나의 컴포넌트에, 하나의 리스트니까 결국 하나의 state가 하나씩 적용되는 흐름을 가져서 그런거지?
  //시도3=> 그러면 값을 줘서 파인드 해서 ,class를 바꾼다?: 그런데 그러면 데이터가 문제임
  //사도=> 현수님께 여쭘! 컴포넌트 관리로 시도 해서 성공!

  //그러면 유저당like유무가 있으니까 상관없나??
  //유저 좋아요 분리를 어케 생각할지

  const handleLiked = () => {
    if (!isitLiked && item.likedCount === 0) {
      setIsItLiked(true);
      item.likedCount++;
    } else if (isitLiked && item.likedCount !== 0) {
      setIsItLiked(false);
      item.likedCount--;
    }
  };

  return (
    <section className="newComment">
      <div className="newCommnetSingle">
        <span className="newCommentSpan">
          <span className="newCommentIcon">
            <img src="images/beer_100.png" />
            <span>{item.score}</span>
          </span>
          <span className="newCommentReview" key={item.id} id={item.id}>
            {item.content}
          </span>
        </span>
      </div>
      <div className="newCommentUserInfo">
        <div className="newCommentUserDate">
          <div>유저명</div>
          <div>{item.date}</div>
        </div>
        <div className="newCommentBtnBox">
          <div>
            <button className="newCommentLikeBtn" onClick={handleLiked}>
              좋아요{item.likedCount}
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setIsItOpen(!isitOpen);
              }}
            >
              댓글{reviewCommentList.length}
            </button>
          </div>
        </div>
      </div>
      <ReviewCommentList
        commentList={reviewCommentList}
        setreviewCommentList={setreviewCommentList}
        isitOpen={isitOpen}
      />
    </section>
  );
};

export default Review;
