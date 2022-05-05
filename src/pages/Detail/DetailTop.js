import './DetailTop.scss';
import BeerImoji from './BeerImoji';
import KeyWord from './KeyWord';

const DetailTop = ({ productInfo }) => {
  const rate = productInfo['ave_rating'];
  const imgSrc = productInfo.image_url;

  return (
    <article className="detailTop">
      <section className="detailTopSection">
        <div className="detailTopImg">
          <img
            alt={productInfo.name}
            src={imgSrc}
            className="detailProductImg"
          />
        </div>
        <div className="detailTopLeft">
          <div className="detailProductInfo">
            <h1 className="detailH1">
              <span>{productInfo.country}</span>
              <span className="detailProductName">{productInfo.name}</span>
            </h1>
          </div>
          <div className="detailProcuctRati">
            <KeyWord />
            <div className="detailRaitContainer">
              <div className="detailRaitSummary">
                <div className="detailNum">{parseFloat(rate).toFixed(2)}</div>
                <div className="raitingBox">
                  <div className="detailRaitBox">
                    <BeerImoji rate={rate} />
                  </div>
                  <div className="detaillReviewCount">
                    <a>{productInfo.reviews}개의 리뷰가있어요</a>
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
