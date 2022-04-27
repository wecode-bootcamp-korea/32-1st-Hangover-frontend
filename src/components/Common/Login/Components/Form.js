import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import Header from './Header';
import LeftImg from './LeftImg';
import HeaderImg from './HeaderImg';
import '../Components/Form.scss';

export default function Form({ title, type, inputData, setIsLoginOpen }) {
  const [email, setEamli] = useState('');
  const [password, setPassWord] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const hendleEmailCheck = e => {
    setEamli(e.target.value);
  };

  const hendlePasswordCheck = e => {
    setPassWord(e.target.value);
  };

  const isPassedLogin = () => {
    email.includes('@') && password.length > 10
      ? setIsActive(true)
      : setIsActive(false);
    email.includes('@') && password.length > 10
      ? setDisabled(false)
      : setDisabled(true);
  };

  return (
    <div className="modalBox">
      <section>
        <LeftImg />
        <article className="loginSignUpBox">
          <HeaderImg />
          <Header title={title} />
          <form className="loginForm">
            {inputData.map(({ type, placeholder }, idx) => (
              <Input
                hendleEmailCheck={hendleEmailCheck}
                hendlePasswordCheck={hendlePasswordCheck}
                key={idx}
                type={type}
                placeholder={placeholder}
              />
            ))}
            <Button />
            {type === 'login' ? (
              <button type="button" className="buttons">
                <span
                  onClick={() => {
                    setIsLoginOpen(false);
                  }}
                >
                  회원가입
                </span>
              </button>
            ) : (
              <button type="button" className="buttons">
                <span
                  onClick={() => {
                    setIsLoginOpen(true);
                  }}
                >
                  로그인
                </span>
              </button> //타입이 signin 일때 아닐때 보여주는 페이지 관리
            )}
          </form>
        </article>
      </section>
    </div>
  );
}
