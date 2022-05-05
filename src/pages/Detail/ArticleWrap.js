import './ArticleWrap.scss';

const ArticleWrap = props => {
  return (
    <section className="articleWarp">
      <h2 className="detailtitle">{props.title}</h2>
      <div className="detailContents"> {props.children}</div>
    </section>
  );
};

export default ArticleWrap;
