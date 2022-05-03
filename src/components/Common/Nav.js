import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="upperNav">
        <div className="layout">
          <img src="/images/logo.png" alt="Logopng" className="logo" />
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
          <i class="fa-regular fa-user" />
        </div>
      </div>
      <div className="downNav">
        <i class="fa-solid fa-wine-glass" />
        <span>주류</span>
        <i class="fa-solid fa-burger" />
        <span>소개</span>
        <i class="fa-solid fa-check" />
        <span>영역1</span>
        <i class="fa-solid fa-check" />
        <span>영역2</span>
      </div>
      <hr className="bottomNavLine" />
    </nav>
  );
};

export default Nav;
