import { useEffect, useState } from 'react';
import { useData } from '../../provider/useData';
import ArticleWrap from './ArticleWrap';
import DetailTop from './DetailTop';
import DetailSummary from './DetailSummary';
import FoodPairing from './FoodPairing';
import ReviewSection from '../Reivew/ReviewList/ReviewSection';
import Origin from './Origin';
import './Detail.scss';

//객체 초기값이면 값이있다고 판단해서 함수를 실행시키므로,
//null로 설정해주어야함....
const Detail = () => {
  const data = useData().reviewData;
  const issue = useData().issueData('안녕');
  alert(data);
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

  return (
    // productInfo !== null &&
    // productInfo !== undefined && (
    //   <article className="detailAllArticle">
    //     {/* <DetailTop productInfo={productInfo} />
    //     <ArticleWrap title={'술의 맛이 어떠셨나요?'}>
    //       {Object.entries(productInfo.property).map(items => (
    //         <DetailSummary items={items} />
    //       ))}
    //     </ArticleWrap>
    //     <ArticleWrap title={'술의 맛이 어떠셨나요?'}>
    //       <FoodPairing productInfo={productInfo.product_detail} />
    //     </ArticleWrap> */}

    //     {/* <section className="origin">
    //       <h2 className="originH2">Facts about the wine</h2>
    //       <Origin />
    //     </section> */}
    //   </article>
    // )
    <ArticleWrap title={'숙취후기'}>
      <ReviewSection />
    </ArticleWrap>
  );
};

export default Detail;
