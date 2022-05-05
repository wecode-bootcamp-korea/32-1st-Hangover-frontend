import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginJoinForm from '../Form/LoginJoinModal';

export default function LoginJoin({ setLogin }) {
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(true);

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

  const isLoginValid = loginEmail.includes('@') && loginPassword.length > 10;

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
  const handleLogin = () => {
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
          alert('로그인 성공!');
          navigate('/detail');
          exitModal();
        } else {
          alert('아이디 혹은 비밀번호가 다릅니다.');
        }
      })
      .catch(e => console.log(e));
  };

  const handleSignup = () => {
    fetch('http://10.58.5.238:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: loginEmail,
        firstname: firstName,
        lastname: lastName,
        password: signUpPassword,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          localStorage.setItem('JWT_TOKEN', result.JWT_TOKEN);
          alert('회원가입 성공!');
        } else {
          alert('아이디 혹은 비밀번호가 형식에 맞지 않습니다.');
        }
      })
      .catch(e => console.log(e));
  };

  return (
    <div>
      {isLoginOpen ? (
        <LoginJoinForm
          setLogin={setLogin}
          type="login"
          title="로그인"
          inputData={LOGIN_DATA}
          setIsLoginOpen={setIsLoginOpen}
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
          title="회원가입"
          inputData={SIGNUP_DATA}
          setIsLoginOpen={setIsLoginOpen}
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
    placeholder: '이메일을 입력해주세요.',
  },
  {
    id: 2,
    type: 'password',
    name: 'loginPassword',
    placeholder: '비밀번호를 입력해주세요.',
  },
];

const SIGNUP_DATA = [
  {
    id: 3,
    type: 'email',
    name: 'signUpEmail',
    placeholder: '이메일을 입력해주세요.',
  },
  {
    id: 4,
    type: 'text',
    name: 'firstName',
    placeholder: '성을 입력해주세요.',
  },
  {
    id: 5,
    type: 'text',
    name: 'lastName',
    placeholder: '이름을 입력해주세요.',
  },
  {
    id: 6,
    type: 'password',
    name: 'signUpPassword',
    placeholder: '비밀번호를 입력해주세요.',
  },
  {
    id: 7,
    type: 'password',
    name: 'signUpRePassword',
    placeholder: '동일한 비밀번호를 입력해주세요.',
  },
];
