import React from 'react';
import './DrinkMenu.scss';

const DRINK_MENU_DATA = [
  {
    id: 1,
    name: '소주',
  },
  {
    id: 2,
    name: '와인',
  },
  {
    id: 3,
    name: '꼬냑',
  },
  {
    id: 4,
    name: '막걸리',
  },
  {
    id: 5,
    name: '와인',
  },
];

const DrinkMenu = ({ visible }) => {
  return (
    <ul className={`navMenu ${visible ? 'hoverMenu' : ''}`}>
      {DRINK_MENU_DATA.map(({ id, name }) => {
        return (
          <li key={id}>
            <a href="#"></a>
            {name}
          </li>
        );
      })}
    </ul>
  );
};

export default DrinkMenu;
