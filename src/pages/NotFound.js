import './NotFound.scss';
import NotFounds from './404.svg';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="notFound">
      <img
        src={NotFounds}
        onClick={() => {
          navigate('/');
        }}
      />
    </section>
  );
};

export default NotFound;
