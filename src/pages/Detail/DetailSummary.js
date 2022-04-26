import Table from './Table';
import './DetailSummary.scss';
const DetailSummary = () => {
  return (
    <section className="detailSummarySection">
      <div className="detailtitle">
        <h2>What does this wine taste like?</h2>
      </div>
      <div className="detailSummaryTable">
        <Table />
      </div>
    </section>
  );
};

export default DetailSummary;
