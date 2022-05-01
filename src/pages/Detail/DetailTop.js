import './DetailTop.scss';
import BeerImoji from './BeerImoji';
import KeyWord from './KeyWord';

const DetailTop = ({ productInfo }) => {
  const info = JSON.parse(productInfo);

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
              <span>{info.country}</span>
              <span className="detailProductName">{info.name}</span>
            </h1>
          </div>
          <div className="detailProcuctRati">
            <KeyWord />
            <div className="detailRaitContainer">
              <div className="detailRaitSummary">
                <div className="detailNum">
                  {parseFloat(info.ave_rating).toFixed(2)}
                </div>
                <div className="raitingBox">
                  <div className="detailRaitBox">
                    <BeerImoji rate={parseFloat(info.ave_rating).toFixed(2)} />
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
