import React from 'react';
import Header from '../Components/Header';
import HeaderImg from '../Components/HeaderImg';
import OverlayNoneScroll from '../../OverlayNoneScroll/OverlayNoneScroll';
import '../Form/LoginJoinModal.scss';

export default function LoginJoinModal({
  type,
  title,
  inputData,
  setIsLoginOpen,
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
    setIsLoginOpen(false);
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
                    src="/images/gayatri-malhotra-_CqJImMQiVQ-unsplash.jpg"
                    alt=""
                  />
                </div>
              ) : (
                <div className="imgWrap">
                  <img
                    className="img"
                    src="/images/heineken-206147_1920.jpg"
                    alt=""
                  />
                </div>
              )}
              <article className="loginSignUpBox">
                <HeaderImg setIsLoginOpen />
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
                      onClick={signUpBtnClick}
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
            <OverlayNoneScroll />
          </div>
        ))
      }
    </div>
  );
}
