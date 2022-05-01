import { useEffect, useState } from 'react';

import ArticleWarp from './ArticleWrap';
import DetailTop from './DetailTop';
import DetailSummary from './DetailSummary';
import FoodPairing from './FoodPairing';
import ReviewSection from '../Reivew/ReviewList/ReviewSection';
import Origin from './Origin';
import './Detail.scss';

const Detail = () => {
  const [productInfo, setProductInfo] = useState(
    localStorage.getItem('product')
  );

  const [isloading, setIsLoading] = useState(true);
  /// 새로고침 하면서 리렌더링되니까 날라감
  useEffect(() => {
    fetch('http://10.58.6.41:8000/products/1', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('product', JSON.stringify(data.product_detail));
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <article className="detailAllArticle">
      <DetailTop productInfo={productInfo} />
      <ArticleWarp title={'술의 맛이 어떠셨나요?'}>
        <DetailSummary productInfo={JSON.parse(productInfo)} />
      </ArticleWarp>
      <ArticleWarp title={'술의 맛이 어떠셨나요?'}>
        <FoodPairing productInfo={JSON.parse(productInfo)} />
      </ArticleWarp>
      <ArticleWarp title={'숙취후기'}>
        <ReviewSection />
      </ArticleWarp>
      <section className="origin">
        <h2 className="originH2">Facts about the wine</h2>
        <Origin />
      </section>
    </article>
  );
};

export default Detail;

/*
  {name: 'Sonny', price: '161000.000', country: 'Korea', alcohol_percentage: '2.0', food_category: Array(2), …}
alcohol_percentage: "2.0"
country: "Korea"
food_category: (2) ['chinese', 'japanese']
name: "Sonny"
price: "161000.000"
property:
bitterness: "90"
sparkling: "10"
sweetness: "40"
[[Prototype]]: Object
reviews: 8 */
