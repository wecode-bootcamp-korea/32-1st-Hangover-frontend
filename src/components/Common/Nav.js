import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DrinkMenu from './DrinkMenu';
import LoginJoin from '../Common/LoginAndJoin/LoginJoin/LoginJoin';
import './Nav.scss';

const Nav = () => {
  const navigate = useNavigate();
  const [drinkMenuVisible, setDrinkMenuVisible] = useState(false);
  const [login, setLogin] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const loginAndLogout = () => {
    localStorage.getItem('JWT_TOKEN') ? clickLogout() : setLogin(true);
  };

  const clickLogout = () => {
    const isLogOut = window.confirm('로그아웃 하시겠습니까?');
    if (isLogOut) {
      localStorage.removeItem('JWT_TOKEN');
      localStorage.removeItem('user_id');
      navigate('/');
    }
  };

  useEffect(() => {
    fetch(`http://10.58.3.174:8000/products/search?search`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setSearchList(data.result);
      });
  }, []);

  const handleChange = e => {
    return setSearchInput(e.target.value);
  };

  const search = searchInput.length
    ? searchList.filter(list => {
        return list.name.toLowerCase().includes(searchInput.toLowerCase());
      })
    : [];

  return (
    <nav className="nav">
      <div className="upperNav">
        <div className="layout">
          <a href="/">
            <img
              src="/images/HangOver_Logo.png"
              alt="Logopng"
              className="logo"
            />
          </a>
          <div className="searchInput">
            <input
              className="inputNav"
              type="text"
              placeholder="🔍   Search any HangOver"
              onChange={handleChange}
            />
            <ul className="inputList">
              {search.map(list => {
                return (
                  <li key={list.id}>
                    <img src={list.image_url} art="img" />
                    <div>
                      <p className="alcoholName">{list.name}</p>
                      <p className="alcoholCategoris">{list.category}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="upperRightNav">
          <span>ship to</span>
          <i className="fa-solid fa-angle-down" />
          <span>Langauage</span>
          <i class="fa-solid fa-angle-down" />
          <span className="" onClick={loginAndLogout}>
            {localStorage.getItem('JWT_TOKEN') ? 'Log Out' : 'Log In'}
          </span>
        </div>
      </div>
      <div className="downNav">
        <div className="menuWrap">
          <div
            className="dropDownContainer"
            onClick={() => setDrinkMenuVisible(!drinkMenuVisible)}
          >
            <i class="fa-solid fa-wine-glass" />
            <span className="navDrinkMenu">Drink Menu</span>
            <DrinkMenu drinkMenuVisible={drinkMenuVisible} />
          </div>
        </div>
      </div>
      <hr className="bottomNavLine" />
      {login && <LoginJoin setLogin={setLogin} login={login} />}
    </nav>
  );
};

export default Nav;
