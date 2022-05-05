import React from 'react';
import Header from '../Components/Header';
import HeaderImg from '../Components/HeaderImg';
import './LoginJoinModal.scss';

export default function LoginJoinModal({
  type,
  title,
  inputData,
  setIsModalOpen,
  handleBtn,
  isInputsValid,
  getValue,
  isModalOut,
  isModalClosed,
  exitModal,
  closedModal,
  modalRef,
  closeRef,
}) {
  const signUpBtnClick = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="loginJoinModal">
      {
        (!isModalOut,
        !isModalClosed && (
          <div className="modalBox" ref={modalRef} onClick={exitModal}>
            <section>
              {type === 'login' ? (
                <div className="imgWrap">
                  <img
                    className="img"
                    src="/images/alcohol-4049656_1920.jpg"
                    alt=""
                  />
                </div>
              ) : (
                <div className="imgWrap">
                  <img
                    className="img"
                    src="/images/rose-4593831_1920.jpg"
                    alt=""
                  />
                </div>
              )}
              <article className="loginSignUpBox">
                <HeaderImg setIsLoginOpen />
                <Header title={title} />
                <form className="loginSignUpForm" onSubmit={handleBtn}>
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
                    <>
                      <button
                        className="buttons"
                        onClick={handleBtn}
                        disabled={!isInputsValid}
                      >
                        로그인
                      </button>
                      <button
                        type="button"
                        className="buttons"
                        onClick={signUpBtnClick}
                      >
                        <span>회원가입 </span>
                      </button>
                      <div className="closedBtnWrap">
                        <button
                          type="button"
                          className="closeBtn"
                          ref={closeRef}
                          onClick={closedModal}
                        >
                          닫기
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <button className="buttons" disabled={!isInputsValid}>
                        <span>회원가입 완료 </span>
                      </button>
                      <div className="backAndClosedBtnWrap">
                        <button
                          type="button"
                          className="backBtn"
                          onClick={() => {
                            setIsModalOpen(true);
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
                    </>
                  )}
                </form>
              </article>
            </section>
          </div>
        ))
      }
      <div>
        <style jsx="true">{`
          body {
            overflow: hidden;
          }
        `}</style>
      </div>
    </div>
  );
}
