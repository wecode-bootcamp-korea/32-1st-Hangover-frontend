import React, { useState } from 'react';
import DrinkMenu from './DrinkMenu';
import './Nav.scss';
import LoginJoin from './LoginAndJoin/LoginJoin/LoginJoin';

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const [login, setLogin] = useState(false);

  const openModal = () => {
    localStorage.getItem('JWT_TOKEN') ? logOut() : setLogin(true);
  };

  const logOut = () => {
    const isLogOut = window.confirm('로그아웃 하시겠습니까?');
    if (isLogOut) {
      localStorage.removeItem('JWT_TOKEN');
    }
  };
  return (
    <nav className="nav">
      <div className="upperNav">
        <div className="layout">
          <a href="/">
            <img src="/images/logo.png" alt="Logopng" className="logo" />
          </a>
          <input
            className="inputNav"
            type="text"
            placeholder="🔍   Search any alcohol"
          />
        </div>
        <div className="upperRightNav">
          <span>ship to</span>
          <i class="fa-solid fa-angle-down" />
          <span>Langauage</span>
          <i class="fa-solid fa-angle-down" />
          <i
            className={
              localStorage.getItem('JWT_TOKEN')
                ? 'fa-solid fa-user'
                : 'fa-regular fa-user'
            }
            onClick={openModal}
          />
        </div>
      </div>
      <div className="downNav">
        <div
          className="dropDownContainer"
          onMouseOver={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          <i class="fa-solid fa-wine-glass" />
          <span className="navDrinkMenu">주류</span>
          <DrinkMenu visible={visible} />

          <div>
            <i class="fa-solid fa-burger" />
            <span>소개</span>
          </div>
          <div>
            <i class="fa-solid fa-check" />
            <span>영역1</span>
          </div>
          <div>
            <i class="fa-solid fa-check" />
            <span>영역2</span>
          </div>
        </div>
      </div>
      <hr className="bottomNavLine" />
      {login && <LoginJoin setLogin={setLogin} login={login} />}
    </nav>
  );
};

export default Nav;
