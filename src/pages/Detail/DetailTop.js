import './DetailTop.scss';
import BeerImoji from './BeerImoji';
import KeyWord from './KeyWord';
const DetailTop = () => {
  const rait = 3.5;

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
              <span>위치</span>
              <span className="detailProductName">주종명</span>
            </h1>
          </div>
          <div className="detailProcuctRati">
            <KeyWord />
            <div className="detailRaitContainer">
              <div className="detailRaitSummary">
                <div className="detailNum">{rait}</div>
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
