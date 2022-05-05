import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DrinkMenu.scss';

const DrinkMenu = ({ drinkMenuVisible }) => {
  const navigate = useNavigate();
  const moveToExplore = () => {
    navigate('/explore');
  };
  return (
    <ul className={`DrinkMenu ${drinkMenuVisible ? 'hoverMenu' : ''}`}>
      <li>
        <a href="/explore">All</a>
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
