import React, { useState, useRef } from 'react';
import LoginJoinForm from '../Form/LoginJoinModal';

export default function LoginJoin({ setLogin }) {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [loginInputs, setLoginInputs] = useState({
    loginEmail: '',
    loginPassword: '',
  });

  const [signupInputs, setSignupInputs] = useState({
    signUpEmail: '',
    firstName: '',
    lastName: '',
    signUpPassword: '',
    signUpRePassword: '',
  });

  const { loginEmail, loginPassword } = loginInputs;

  const { signUpEmail, firstName, lastName, signUpPassword, signUpRePassword } =
    signupInputs;

  const isLoginValid =
    loginEmail.includes('@') &&
    loginPassword.match(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/
    );

  const isSignupValid =
    signUpEmail.includes('@') &&
    signUpEmail.includes('.') &&
    firstName.length &&
    lastName.length &&
    signUpPassword.length > 10 &&
    signUpRePassword.length > 10 &&
    signUpPassword === signUpRePassword;

  const getLoginValue = e => {
    const { name, value } = e.target;
    setLoginInputs({ ...loginInputs, [name]: value });
  };

  const getSignupValue = e => {
    const { name, value } = e.target;
    setSignupInputs({ ...signupInputs, [name]: value });
  };

  const [isModalOut, setIsModalOut] = useState(false);

  const modalRef = useRef();

  const exitModal = e => {
    setLogin(false);
    setIsModalOut(true);
  };

  const onModalBGClick = e => {
    if (modalRef.current === e.target) {
      exitModal();
    }
  };

  const [isModalClosed, setisModalClosed] = useState(false);

  const closeRef = useRef();

  const closedModal = e => {
    if (closeRef.current === e.target) {
      setLogin(false);
      setisModalClosed(true);
    }
  };

  const handleLogin = e => {
    e.preventDefault();
    fetch('http://10.58.5.238:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          localStorage.setItem('JWT_TOKEN', result.JWT_TOKEN);
          localStorage.setItem('user_id', result.user_id);
          alert('????????? ??????!');
          exitModal();
        } else {
          alert('????????? ?????? ??????????????? ????????????.');
        }
      })
      .catch(e => console.log(e));
  };

  const handleSignup = e => {
    e.preventDefault();
    fetch('http://10.58.5.238:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: signUpEmail,
        firstname: firstName,
        lastname: lastName,
        password: signUpPassword,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          localStorage.setItem('JWT_TOKEN', result.JWT_TOKEN);
          alert('???????????? ??????!');
          setIsModalOpen(true);
        } else if (result.message === 'EMAIL_EXISTS') {
          alert('????????? ??????????????????.');
        } else if (result.message === 'INVALID_EMAIL' || 'INVALID_PASSWORD') {
          alert('????????? ?????? ??????????????? ????????? ?????? ????????????.');
        }
      })
      .catch(e => console.log(e));
  };

  return (
    <div>
      {isModalOpen ? (
        <LoginJoinForm
          setLogin={setLogin}
          type="login"
          title="?????????"
          inputData={LOGIN_DATA}
          setIsModalOpen={setIsModalOpen}
          handleBtn={handleLogin}
          isInputsValid={isLoginValid}
          getValue={getLoginValue}
          isModalOut={isModalOut}
          isModalClosed={isModalClosed}
          exitModal={onModalBGClick}
          closedModal={closedModal}
          modalRef={modalRef}
          closeRef={closeRef}
        />
      ) : (
        <LoginJoinForm
          setLogin={setLogin}
          type="signUp"
          title="????????????"
          inputData={SIGNUP_DATA}
          setIsModalOpen={setIsModalOpen}
          handleBtn={handleSignup}
          isInputsValid={isSignupValid}
          getValue={getSignupValue}
          isModalOut={isModalOut}
          isModalClosed={isModalClosed}
          exitModal={onModalBGClick}
          closedModal={closedModal}
          modalRef={modalRef}
          closeRef={closeRef}
        />
      )}
    </div>
  );
}

const LOGIN_DATA = [
  {
    id: 1,
    type: 'email',
    name: 'loginEmail',
    placeholder: '???????????? ??????????????????.',
  },
  {
    id: 2,
    type: 'password',
    name: 'loginPassword',
    placeholder: '??????????????? ??????????????????.',
  },
];

const SIGNUP_DATA = [
  {
    id: 3,
    type: 'email',
    name: 'signUpEmail',
    placeholder: '????????? ????????? ?????? ??????????????????.',
  },
  {
    id: 4,
    type: 'text',
    name: 'firstName',
    placeholder: '?????? ??????????????????.',
  },
  {
    id: 5,
    type: 'text',
    name: 'lastName',
    placeholder: '????????? ??????????????????.',
  },
  {
    id: 6,
    type: 'password',
    name: 'signUpPassword',
    placeholder: '??????,??????,??????????????? ????????? ???????????? 10????????? ??????????????????.',
  },
  {
    id: 7,
    type: 'password',
    name: 'signUpRePassword',
    placeholder: '????????? ??????????????? ??????????????????.',
  },
];
