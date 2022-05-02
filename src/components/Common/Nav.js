import React, { useState, useEffect } from 'react';
import './Nav.scss';
// import LoginJoin from './LoginAndJoin/LoginJoin/LoginJoin';
const Nav = () => {
  const [login, setLogin] = useState(false);
  const [searchInputList, setSearchInputList] = useState([]);
  const [userInput, setUserInput] = useState('');
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
                    />
                    <span>{list.name}</span>
                    <span>{list.name}</span>
                  </li>
                );
              })}
            </ul>
            <div>
              <style jsx="true">{`
                body {
                  overflow: hidden;
                }
              `}</style>
            </div>
          </div>
        </div>
        <div className="upperRightNav">
          <span>ship to</span>
          <i className="fa-solid fa-angle-down" />
          <span>Langauage</span>
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

      {/* {login && <LoginJoin setLogin={setLogin} login={login} />} */}
    </nav>
  );
};

export default Nav;
