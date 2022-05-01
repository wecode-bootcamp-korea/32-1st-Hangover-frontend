import Review from './Review';

const ReviewList = ({ commentList, individualReview, isitFiltered }) => {
  return commentList.map(item => (
    <Review
      item={item}
      individualReview={individualReview}
      isitFiltered={isitFiltered}
    />
  ));
};

export default ReviewList;
