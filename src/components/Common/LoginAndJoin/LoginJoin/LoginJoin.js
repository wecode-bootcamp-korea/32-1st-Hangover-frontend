import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginJoinForm from '../Form/LoginJoinModal';

export default function LoginJoin({ setLogin }) {
  const navigate = useNavigate();

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
    fetch('http://10.58.1.45:8000/users/signin', {
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
          alert('로그인 성공!');
          navigate('/detail');
          exitModal();
        } else {
          alert('아이디 혹은 비밀번호가 다릅니다.');
        }
      });
  };

  const handleSignup = e => {
    e.preventDefault();
    fetch('http://10.58.1.45:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: signUpEmail,
        firstname: firstName,
        lastname: lastName,
        password: signUpPassword,
        repassword: signUpRePassword,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          localStorage.setItem('JWT_TOKEN', result.JWT_TOKEN);
          alert('회원가입 성공!');
          setIsModalOpen(true);
        } else if (result.message === 'EMAIL_EXISTS') {
          alert('중복된 이메일입니다.');
        } else if (result.message === 'INVALID_EMAIL' || 'INVALID_PASSWORD') {
          alert('이메일 혹은 비밀번호가 형식에 맞지 않습니다.');
        }
      });
  };

  return (
    <div>
      {isModalOpen ? (
        <LoginJoinForm
          setLogin={setLogin}
          type="login"
          title="로그인"
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
          title="회원가입"
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
    placeholder: '이메일 양식에 맞춰 입력해주세요.',
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
    placeholder: '영어 , 숫자 , 특수문자 를 포함한 10자리를 입력해주세요.',
  },
  {
    id: 7,
    type: 'password',
    name: 'signUpRePassword',
    placeholder: '동일한 비밀번호를 입력해주세요.',
  },
];
