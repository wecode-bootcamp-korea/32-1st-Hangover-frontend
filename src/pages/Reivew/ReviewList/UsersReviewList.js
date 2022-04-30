import UserReview from './UsersReview';
const UsersReviewList = ({ individualReview, itFiltered }) => {
  return individualReview.map(item => <UserReview item={item} />);
};

export default UsersReviewList;
