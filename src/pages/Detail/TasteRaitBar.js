import './TasteRaitBar.scss';

let key = 0;
const TasteRaitBar = ({ productInfo }) => {
  console.log();
  const item = Object.entries(productInfo.property);

  return item.map(items => (
    <div key={key++} className="tableContainer">
      <div className="tableName">{items[0]}</div>
      <div className="tableRow">
        <div className="tableBar"></div>
        <span className="tableRange" style={{ left: `${items[1]}%` }}></span>
      </div>
    </div>
  ));
};

export default TasteRaitBar;
