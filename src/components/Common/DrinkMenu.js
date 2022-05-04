import React from 'react';
import './DrinkMenu.scss';

const DrinkMenu = ({ visible }) => {
  return (
    <ul className={`DrinkMenu ${visible ? 'hoverMenu' : ''}`}>
      <li>
        <a href="#">소주</a>
      </li>
      <li>
        <a href="#">맥주</a>
      </li>
      <li>
        <a href="#">꼬냑</a>
      </li>
      <li>
        <a href="#">막걸리</a>
      </li>
      <li>
        <a href="#">와인</a>
      </li>
    </ul>
  );
};

export default DrinkMenu;
