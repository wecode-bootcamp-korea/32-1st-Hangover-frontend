import React, { useState, useEffect } from 'react';
import './Nav.scss';
// import LoginJoin from './LoginAndJoin/LoginJoin/LoginJoin';
const Nav = () => {
  const [login, setLogin] = useState(false);
  const [searchInputList, setSearchInputList] = useState([]);
  const [userInput, setUserInput] = useState('');
  useEffect(() => {
    fetch('http://10.58.0.74:8000/products/search?search=whisky')
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
    ? searchInputList.result.filter(list => {
        return list[0].name.toLowerCase().includes(userInput.toLowerCase());
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
              {search.map((list, idx) => {
                if (list) {
                  return (
                    <li key={list.result.id}>
                      <img src={list.result[0].image_url} art="img" />
                      <span>{list.result[0].name}</span>
                    </li>
                  );
                } else {
                  return (
                    <li key={idx}>
                      <span>{list.result[1].Category}</span>
                    </li>
                  );
                }
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
