import React, { useState, useEffect } from 'react';
import DrinkMenu from './DrinkMenu';
import LoginJoin from '../Common/LoginAndJoin/LoginJoin/LoginJoin';
import './Nav.scss';
import LoginJoin from './LoginAndJoin/LoginJoin/LoginJoin';

const Nav = () => {
<<<<<<< HEAD
  const [visible, setVisible] = useState(false);
  const [login, setLogin] = useState(false);

  const openModal = () => {
    localStorage.getItem('JWT_TOKEN') ? logOut() : setLogin(true);
  };

  const logOut = () => {
=======
  const [drinkMenuVisible, setDrinkMenuVisible] = useState(false);
  const [login, setLogin] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const loginAndLogout = () => {
    localStorage.getItem('JWT_TOKEN') ? clickLogout() : setLogin(true);
  };

  const clickLogout = () => {
>>>>>>> main
    const isLogOut = window.confirm('로그아웃 하시겠습니까?');
    if (isLogOut) {
      localStorage.removeItem('JWT_TOKEN');
    }
  };
<<<<<<< HEAD
=======

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

>>>>>>> main
  return (
    <nav className="nav">
      <div className="upperNav">
        <div className="layout">
          <img src="/images/HangOver_Logo.png" alt="Logopng" className="logo" />
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
          <i class="fa-solid fa-angle-down" />
          <span>Langauage</span>
          <i class="fa-solid fa-angle-down" />
<<<<<<< HEAD
          <i
            className={
              localStorage.getItem('JWT_TOKEN')
                ? 'fa-solid fa-user'
                : 'fa-regular fa-user'
            }
            onClick={openModal}
          />
=======
          <span className="" onClick={loginAndLogout}>
            {localStorage.getItem('JWT_TOKEN') ? 'Log Out' : 'Log In'}
          </span>
>>>>>>> main
        </div>
      </div>
      <div className="downNav">
        <div
          className="dropDownContainer"
          onMouseOver={() => setDrinkMenuVisible(true)}
          onMouseLeave={() => setDrinkMenuVisible(false)}
        >
          <i class="fa-solid fa-wine-glass" />
          <span className="navDrinkMenu">Drink Menu</span>
          <DrinkMenu drinkMenuVisible={drinkMenuVisible} />
        </div>
      </div>
      <hr className="bottomNavLine" />
      {login && <LoginJoin setLogin={setLogin} login={login} />}
    </nav>
  );
};

export default Nav;
