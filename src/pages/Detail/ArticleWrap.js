import './ArticleWrap.scss';

const ArticleWarp = props => {
  return (
    <section className="articleWarp">
      <div className="detailtitle">
        <h2>{props.title}</h2>
      </div>
      {props.children}
    </section>
  );
};

export default ArticleWarp;
