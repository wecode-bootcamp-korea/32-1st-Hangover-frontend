import './ArticleWrap.scss';

const ArticleWrap = props => {
  return (
    <section className="articleWarp">
      <h2 className="detailtitle">{props.title}</h2>
      {props.children}
    </section>
  );
};

export default ArticleWrap;
