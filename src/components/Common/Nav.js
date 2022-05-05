import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
=======
import DrinkMenu from './DrinkMenu';
import LoginJoin from '../Common/LoginAndJoin/LoginJoin/LoginJoin';
>>>>>>> 75bdb4f2e24f7502022c91325d86920a4c34f905
import './Nav.scss';
import LoginJoin from './LoginAndJoin/LoginJoin/LoginJoin';
const Nav = () => {
<<<<<<< HEAD
  const [login, setLogin] = useState(false);
  const [searchInputList, setSearchInputList] = useState([]);
  const [userInput, setUserInput] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
=======
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
    }
  };

  useEffect(() => {
    fetch(`http://10.58.3.174:8000/products/search?search`)
>>>>>>> 75bdb4f2e24f7502022c91325d86920a4c34f905
      .then(res => {
        return res.json();
      })
      .then(data => {
<<<<<<< HEAD
        return setSearchInputList(data);
=======
        setSearchList(data.result);
>>>>>>> 75bdb4f2e24f7502022c91325d86920a4c34f905
      });
  }, []);

  const handleChange = e => {
<<<<<<< HEAD
    return setUserInput(e.target.value);
  };

  const search = userInput.length
    ? searchInputList.filter(list => {
        return list.name.toLowerCase().includes(userInput.toLowerCase());
=======
    return setSearchInput(e.target.value);
  };

  const search = searchInput.length
    ? searchList.filter(list => {
        return list.name.toLowerCase().includes(searchInput.toLowerCase());
>>>>>>> 75bdb4f2e24f7502022c91325d86920a4c34f905
      })
    : [];

  return (
    <nav className="nav">
      <div className="upperNav">
        <div className="layout">
<<<<<<< HEAD
          <a href="/">
            <img src="/images/logo.png" alt="Logopng" className="logo" />
          </a>
=======
          <img src="/images/HangOver_Logo.png" alt="Logopng" className="logo" />
>>>>>>> 75bdb4f2e24f7502022c91325d86920a4c34f905
          <div className="searchInput">
            <input
              className="inputNav"
              type="text"
<<<<<<< HEAD
              placeholder="🔍   Search any alcohol"
=======
              placeholder="🔍   Search any HangOver"
>>>>>>> 75bdb4f2e24f7502022c91325d86920a4c34f905
              onChange={handleChange}
            />
            <ul className="inputList">
              {search.map(list => {
                return (
                  <li key={list.id}>
<<<<<<< HEAD
                    <img
                      src={`https://robohash.org/${list.id}?set=set2&size=180x180`}
                    />
                    <span>{list.name}</span>
                    <span>{list.name}</span>
=======
                    <img src={list.image_url} art="img" />
                    <div>
                      <p className="alcoholName">{list.name}</p>
                      <p className="alcoholCategoris">{list.category}</p>
                    </div>
>>>>>>> 75bdb4f2e24f7502022c91325d86920a4c34f905
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
<<<<<<< HEAD
          <i className="fa-solid fa-angle-down" />
          <i
            className="fa-regular fa-user"
            onClick={() => {
              login === false ? setLogin(true) : setLogin(false);
            }}
          />
        </div>
      </div>
      <div className="downNav">
        <i className="fa-solid fa-wine-glass" />
        <span>주류</span>
        <i className="fa-solid fa-burger" />
        <span>소개</span>
        <i className="fa-solid fa-check" />
        <span>영역1</span>
        <i className="fa-solid fa-check" />
        <span>영역2</span>
      </div>
      <hr className="bottomNavLine" />

=======
          <i class="fa-solid fa-angle-down" />
          <span className="" onClick={loginAndLogout}>
            {localStorage.getItem('JWT_TOKEN') ? 'Log Out' : 'Log In'}
          </span>
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
>>>>>>> 75bdb4f2e24f7502022c91325d86920a4c34f905
      {login && <LoginJoin setLogin={setLogin} login={login} />}
    </nav>
  );
};

export default Nav;
