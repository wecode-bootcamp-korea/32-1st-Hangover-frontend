import './Detail.scss';
import DetailTop from './DetailTop';
import DetailSummary from './DetailSummary';
import FoodPairing from './FoodPairing';
import CommentList from '../Comment/CommentList';

const Detail = () => (
  <article className="detailAllArticle">
    <DetailTop />
    <DetailSummary />
    <FoodPairing />
    <CommentList />
  </article>
);

export default Detail;
