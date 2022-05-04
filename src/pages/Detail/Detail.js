import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticleWrap from './ArticleWrap';
import DetailTop from './DetailTop';
import DetailSummary from './DetailSummary';
import FoodPairing from './FoodPairing';
import ReviewSection from '../Reivew/ReviewList/ReviewSection';
import Origin from './Origin';
import './Detail.scss';

const Detail = () => {
  const [productInfo, setProductInfo] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(`http://10.58.1.45:8000/products/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setProductInfo({ ...data });
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isloading || !productInfo) return <div>값이 없어요!</div>;

  if (error) return <>에러가 발생했습니다. code : {error}</>;

  const propertyArray = Object.entries(productInfo.product_detail.property);

  return (
    <article className="detail">
      <DetailTop productInfo={productInfo.product_detail} />
      <ArticleWrap title="술의 맛이 어떠셨나요?">
        {propertyArray.map(item => (
          <DetailSummary productInfo={item} />
        ))}
      </ArticleWrap>
      <ArticleWrap title="술의 맛이 어떠셨나요?">
        <FoodPairing productInfo={productInfo.product_detail} />
      </ArticleWrap>
      <ArticleWrap title="숙취후기">
        <ReviewSection />
      </ArticleWrap>
      <section className="origin">
        <h2 className="originH2">Facts about the wine</h2>
        <Origin productInfo={productInfo.product_detail} />
      </section>
    </article>
  );
};

export default Detail;
