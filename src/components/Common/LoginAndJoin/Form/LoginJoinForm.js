import React, { useRef, useState } from 'react';
import Header from '../Components/Header';
import LeftImg from '../Components/LeftImg';
import HeaderImg from '../Components/HeaderImg';
import '../Form/LoginJoinForm.scss';

export default function LoginJoinForm({
  type,
  title,
  inputData,
  setIsLoginOpen,
  handleBtn,
  isInputsValid,
  getValue,
}) {
  const [exit, setExit] = useState(false);
  const closeModal = useRef();
  const outMadal = e => {
    if (closeModal.current === e.target) {
      setExit(true);
    }
  };
  return (
    <div>
      {!exit && (
        <div className="modalBox" ref={closeModal} onClick={outMadal}>
          <section>
            <LeftImg />
            <article className="loginSignUpBox">
              <HeaderImg />
              <Header title={title} />

              {inputData.map(({ id, type, name, placeholder }) => (
                <input
                  className="input"
                  key={id}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  onChange={getValue}
                />
              ))}
              {type === 'login' ? (
                <div className="buttonWrap">
                  <button
                    type="button"
                    className="buttons"
                    onClick={handleBtn}
                    disabled={!isInputsValid}
                  >
                    로그인
                  </button>
                  <button type="button" className="buttons" onClick={handleBtn}>
                    <span
                      onClick={() => {
                        setIsLoginOpen(false);
                      }}
                    >
                      회원가입
                    </span>
                  </button>
                </div>
              ) : (
                <div className="buttonWrap">
                  <button
                    type="button"
                    className="buttons"
                    onClick={handleBtn}
                    disabled={!isInputsValid}
                  >
                    <span>회원가입 완료</span>
                  </button>
                </div>
              )}
            </article>
          </section>
        </div>
      )}
    </div>
  );
}
