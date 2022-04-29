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
  setLogin,
}) {
  const [exit, setExit] = useState(false);
  const modalRef = useRef();

  const exitModal = e => {
    if (modalRef.current === e.target) {
      setLogin(false);
      setExit(true);
    }
  };

  const [closed, setClosed] = useState(false);
  const closeRef = useRef();
  const closedModal = e => {
    if (closeRef.current === e.target) {
      setLogin(false);
      setClosed(true);
    }
  };

  return (
    <div>
      {
        (!exit,
        !closed && (
          <div className="modalBox" ref={modalRef} onClick={exitModal}>
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
                    <button
                      type="button"
                      className="buttons"
                      onClick={handleBtn}
                      onClick={() => {
                        setIsLoginOpen(false);
                      }}
                    >
                      <span>회원가입</span>
                    </button>
                    <div className="closedBtnWrap">
                      <button
                        className="closeBtn"
                        ref={closeRef}
                        onClick={closedModal}
                      >
                        닫기
                      </button>
                    </div>
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
                    <div className="backAndClosedBtnWrap">
                      <button
                        className="backBtn"
                        onClick={() => {
                          setIsLoginOpen(true);
                        }}
                      >
                        <span>뒤로가기</span>
                      </button>
                      <button
                        type="button"
                        className="closeBtn"
                        ref={closeRef}
                        onClick={closedModal}
                      >
                        닫기
                      </button>
                    </div>
                  </div>
                )}
              </article>
            </section>
          </div>
        ))
      }
    </div>
  );
}
