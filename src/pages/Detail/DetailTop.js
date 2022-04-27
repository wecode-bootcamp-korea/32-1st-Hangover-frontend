import './DetailTop.scss';
import BeerImoji from './BeerImoji';

let num = 0;
const DetailTop = () => {
  const rait = 4.5;
  const fullIcon = 'images/beer_100.png';

  return (
    <section className="detailSection">
      <div className="detailArticle">
        <div className="detailImg">
          <img src="images/dummy.png"></img>
        </div>
        <div className="detailSecondContainer">
          <div className="detailNameContainer">
            <h1 className="detailH1">
              <span>위치</span>
            </h1>
            <h1 className="detailName">
              <span>주종명</span>
            </h1>
          </div>
          <div className="detailSummary">
            <div className="detailKey">
              <span className="keyContent">
                <a>Moldova</a>
              </span>
              <span className="detailDot">·</span>
              <span className="keyContent">
                <a>Gitana</a>
              </span>
              <span className="detailDot">·</span>
              <span className="keyContent">
                <a>Red wine</a>
              </span>
              <span className="detailDot">·</span>
              <span className="keyContent">
                <a>Blend</a>
              </span>
            </div>
            <div className="detailRaitContainer">
              <div className="detailRaitSummary">
                <div className="detailNum">{rait}</div>
                <div className="raitingBox">
                  <div className="detailRaitBox">
                    <BeerImoji rate={rait} />
                  </div>
                  <div className="detaillReviewCount">200rating </div>
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
        <div className="detailPrice">
          <div className="detailPriceCon">
            <div className="detailPriceSecondCon">
              <div className="detailPriceIcon">
                <i class="fa-solid fa-shop"></i>
              </div>
              <div className="detailPrice">
                <span>₩29,506</span>
              </div>
            </div>
            <div className="detailDes">
              <span>Average online price from external shops</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DetailTop;
