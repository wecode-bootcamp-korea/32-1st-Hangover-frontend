import React from 'react';
import '../Components/Header.scss';
export default function Header({ title }) {
  return (
    <div>
      <header className="header">
        <span name="title">{title}</span>
      </header>
    </div>
  );
}
