import './DetailSummary.scss';
import './TasteRaitBar.scss';
const DetailSummary = ({ productInfo }) => {
  let key = 0;

  return (
    <div className="detailSummary">
      <div key={key++} className="tasteRaitBar">
        <div className="tableName">{productInfo[0]}</div>
        <div className="tableRow">
          <div className="tableBar"></div>
          <span
            className="tableRange"
            style={{ left: `${productInfo[1]}%` }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default DetailSummary;
