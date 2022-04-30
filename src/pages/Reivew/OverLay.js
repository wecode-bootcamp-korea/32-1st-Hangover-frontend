import './Overlay.scss';

const OverLay = ({ props }) => {
  return <div className="overlay">{props.children}</div>;
};
export default OverLay;
