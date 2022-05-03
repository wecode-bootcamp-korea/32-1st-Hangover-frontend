import './DetailTop.scss';
import BeerImoji from './BeerImoji';
import KeyWord from './KeyWord';
import { useState } from 'react';

const DetailTop = ({ productInfo }) => {
  console.log(productInfo.product_detail);
  const [rait, setRait] = useState(productInfo.product_detail['ave_rating']);
  console.log(rait);

  return (
    <article className="detailArticle">
      <section className="detailTopSection">
        <div className="detailTopImg">
          <img
            alt="소주병"
            src="images/dummy.png"
            className="detailProductImg"
          />
        </div>
        <div className="detailTopLeft">
          <div className="detailProductInfo">
            <h1 className="detailH1">
              <span>{productInfo.product_detail.country}</span>
              <span className="detailProductName">
                {productInfo.product_detail.name}
              </span>
            </h1>
          </div>
          <div className="detailProcuctRati">
            <KeyWord />
            <div className="detailRaitContainer">
              <div className="detailRaitSummary">
                <div className="detailNum">{parseFloat(rait).toFixed(2)}</div>
                <div className="raitingBox">
                  <div className="detailRaitBox">
                    <BeerImoji rate={rait} />
                  </div>
                  <div className="detaillReviewCount">
                    <a>200rating</a>
                  </div>
                </div>
              </div>
              <div className="detailAddtoCart">
                <i class="fa-solid fa-cart-plus"></i>
                <a>
                  <span>장바구니에 추가하기</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="detailTopRight"></div>
      </section>
    </article>
  );
};
export default DetailTop;
