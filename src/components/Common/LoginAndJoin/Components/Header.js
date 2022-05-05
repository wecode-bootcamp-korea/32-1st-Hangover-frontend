import React from 'react';
import './Header.scss';

export default function Header({ title }) {
  return (
    <header className="header">
      <span name="title">{title} 🍻</span>
    </header>
  );
}
