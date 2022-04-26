import './Detail.scss';
import DetailTop from './DetailTop';
import DetailSummary from './DetailSummary';
import FoodPairing from './FoodPairing';
import CommentList from '../Comment/CommentList';
import Origin from './Origin';

const Detail = () => (
  <article className="detailAllArticle">
    <DetailTop />
    <DetailSummary />
    <FoodPairing />
    <CommentList />
    <section className="origin">
      <h2 className="originH2">Facts about the wine</h2>
      <Origin />
    </section>
  </article>
);

export default Detail;
