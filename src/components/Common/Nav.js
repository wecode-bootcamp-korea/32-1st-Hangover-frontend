import React, { useState, useEffect } from 'react';
import DrinkMenu from './DrinkMenu';
import LoginJoin from '../Common/LoginAndJoin/LoginJoin/LoginJoin';
import './Nav.scss';

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const [login, setLogin] = useState(false);
  const [searchInputList, setSearchInputList] = useState([]);
  const [userInput, setUserInput] = useState('');

  const logOutLogin = () => {
    localStorage.getItem('JWT_TOKEN') ? logOut() : setLogin(true);
  };
  const logOut = () => {
    const isLogOut = window.confirm('로그아웃 하시겠습니까?');
    if (isLogOut) {
      localStorage.removeItem('JWT_TOKEN');
    }
  };
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json();
      })
      .then(data => {
        return setSearchInputList(data);
      });
  }, []);

  const handleChange = e => {
    return setUserInput(e.target.value);
  };

  const search = userInput.length
    ? searchInputList.filter(list => {
        return list.name.toLowerCase().includes(userInput.toLowerCase());
      })
    : [];

  return (
    <nav className="nav">
      <div className="upperNav">
        <div className="layout">
          <img src="/images/logo.png" alt="Logopng" className="logo" />
          <div className="searchInput">
            <input
              className="inputNav"
              type="text"
              placeholder="🔍   Search any alcohol"
              onChange={handleChange}
            />
            <ul className="inputList">
              {search.map(list => {
                return (
                  <li key={list.id}>
                    <img
                      src={`https://robohash.org/${list.id}?set=set2&size=180x180`}
                      art="img"
                    />
                    <div>
                      <p className="alcoholName">{list.name}</p>
                      <p className="alcoholCategoris">{list.name}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="upperRightNav">
          <span>ship to</span>
          <i class="fa-solid fa-angle-down" />
          <span>Langauage</span>
          <i class="fa-solid fa-angle-down" />
          <span className="" onClick={logOutLogin}>
            {localStorage.getItem('JWT_TOKEN') ? 'Log Out' : 'Log In'}
          </span>
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
        </div>
      </div>
      <hr className="bottomNavLine" />
      {login && <LoginJoin setLogin={setLogin} login={login} />}
    </nav>
  );
};

export default Nav;
