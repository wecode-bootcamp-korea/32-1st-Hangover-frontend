import './TasteRaitBar.scss';

const TasteRaitBar = ({ items }) => {
  let key = 0;
  return (
    <div key={key++} className="tasteRaitBar">
      <div className="tableName">{items[0]}</div>
      <div className="tableRow">
        <div className="tableBar"></div>
        <span className="tableRange" style={{ left: `${items[1]}%` }}></span>
      </div>
    </div>
  );
};

export default TasteRaitBar;
