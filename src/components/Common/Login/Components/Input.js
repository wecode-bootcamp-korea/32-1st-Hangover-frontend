import React from 'react';
import '../Components/Input.scss';
export default function Input({ type, placeholder }) {
  return (
    <div>
      <input className="input" type={type} placeholder={placeholder} />
    </div>
  );
}
