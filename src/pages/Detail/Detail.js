import { useEffect, useState } from 'react';
import ArticleWrap from './ArticleWrap';
import DetailTop from './DetailTop';
import DetailSummary from './DetailSummary';
import FoodPairing from './FoodPairing';
import ReviewSection from '../Reivew/ReviewList/ReviewSection';
import Origin from './Origin';
import './Detail.scss';

//객체 초기값이면 값이있다고 판단해서 함수를 실행시키므로,
//null로 설정해주어야함....
//css컨벤션 수정!!!!!111
const Detail = () => {
  const [productInfo, setProductInfo] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`http://10.58.7.97:8000/products/1`)
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

  // if (isloading || !productInfo) return null;

  // if (error) return <>에러가 발생했습니다. code : {error}</>;

  // return (
  //   // <article className="detail">
  //   //   <DetailTop productInfo={productInfo} />
  //   //   <ArticleWrap title={'술의 맛이 어떠셨나요?'}>
  //   //     {Object.entries(productInfo.property).map(items => (
  //   //       <DetailSummary items={items} />
  //   //     ))}
  //   //   </ArticleWrap>
  //   //   <ArticleWrap title={'술의 맛이 어떠셨나요?'}>
  //   //     <FoodPairing productInfo={productInfo.product_detail} />
  //   //   </ArticleWrap>
  //   //   <ArticleWrap title={'숙취후기'}>
  //   //     <ReviewSection />
  //   //   </ArticleWrap>
  //   //   <section className="origin">
  //   //     <h2 className="originH2">Facts about the wine</h2>
  //   //     <Origin />
  //   //   </section>
  //   // </article>

  // );

  return (
    <ArticleWrap title={'숙취후기'}>
      <ReviewSection />
    </ArticleWrap>
  );
};

export default Detail;
