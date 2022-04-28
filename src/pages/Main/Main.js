import { useState } from 'react';
import LoginPage from '../../components/Common/LoginAndJoin/LoginPage/LoginPage';
import './Main.scss';

const Main = () => {
  const [login, setLogin] = useState(false);

  return (
    <main>
      <button
        onClick={() => {
          login === false ? setLogin(true) : setLogin(false);
        }}
      >
        Login
      </button>
      {login === true ? <LoginPage /> : null}
    </main>
  );
};

export default Main;
