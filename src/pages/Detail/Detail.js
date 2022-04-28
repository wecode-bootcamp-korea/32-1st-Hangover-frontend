import './Detail.scss';
import ArticleWarp from './ArticleWrap';
import DetailTop from './DetailTop';
import DetailSummary from './DetailSummary';
import FoodPairing from './FoodPairing';
import CommentList from '../Comment/CommentList';
import Origin from './Origin';

const Detail = () => (
  <article className="detailAllArticle">
    <DetailTop />
    <ArticleWarp title={'술의 맛이 어떠셨나요?'}>
      <DetailSummary />
    </ArticleWarp>
    <ArticleWarp title={'술의 맛이 어떠셨나요?'}>
      <FoodPairing />
    </ArticleWarp>
    <ArticleWarp title={'숙취후기'}>
      <CommentList />
    </ArticleWarp>
    <section className="origin">
      <h2 className="originH2">Facts about the wine</h2>
      <Origin />
    </section>
  </article>
);

export default Detail;
