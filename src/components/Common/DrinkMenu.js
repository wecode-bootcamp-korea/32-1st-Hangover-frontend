import React from 'react';
import './DrinkMenu.scss';

const DrinkMenu = ({ drinkMenuVisible }) => {
  return (
    <ul className={`DrinkMenu ${drinkMenuVisible ? 'hoverMenu' : ''}`}>
      <li>
        <a href="#">All</a>
      </li>
      <li>Vodca</li>
      <li>Beer</li>
      <li>Cognac</li>
      <li>Wihsky</li>
      <li>Wine</li>
    </ul>
  );
};

export default DrinkMenu;
