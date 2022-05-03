import TasteRaitBar from './TasteRaitBar';
import './DetailSummary.scss';
const DetailSummary = ({ productInfo }) => {
  console.log(productInfo);
  return (
    <div className="detailSummary">
      <TasteRaitBar productInfo={productInfo} />
    </div>
  );
};

export default DetailSummary;
