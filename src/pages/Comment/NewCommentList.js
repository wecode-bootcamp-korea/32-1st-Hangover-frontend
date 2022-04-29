import NewComment from './NewComment';

const NewCommentList = ({ commentList }) => {
  return commentList.map(item => <NewComment item={item} />);
};

export default NewCommentList;
