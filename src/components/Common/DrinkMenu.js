import React from 'react';
import './DrinkMenu.scss';

const DrinkMenu = ({ drinkMenuVisible }) => {
  return (
    <ul className={`DrinkMenu ${drinkMenuVisible ? 'hoverMenu' : ''}`}>
      <li>
        <a href="#">Vodca</a>
      </li>
      <li>
        <a href="#">Beer</a>
      </li>
      <li>
        <a href="#">Cognac</a>
      </li>
      <li>
        <a href="#">Wihsky</a>
      </li>
      <li>
        <a href="#">Wine</a>
      </li>
    </ul>
  );
};

export default DrinkMenu;
