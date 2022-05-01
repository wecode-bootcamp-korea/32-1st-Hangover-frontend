import UserReview from './UsersReview';
const UsersReviewList = ({
  individualReview,
  itFiltered,
  setUserModify,
  userModify,
}) => {
  return individualReview.map(item => (
    <UserReview
      item={item}
      setUserModify={setUserModify}
      userModify={userModify}
    />
  ));
};

export default UsersReviewList;
