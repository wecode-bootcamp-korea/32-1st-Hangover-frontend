import Review from './Review';

const NewReviewList = ({ commentList, individualReview, isitFiltered }) => {
  return commentList.map(item => (
    <Review
      item={item}
      individualReview={individualReview}
      isitFiltered={isitFiltered}
    />
  ));
};

export default NewReviewList;
