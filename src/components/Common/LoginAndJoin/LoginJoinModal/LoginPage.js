import React, { useState } from 'react';
import LoginJoinForm from '../Form/LoginJoinForm';

export default function LoginPage() {
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

  const handleLogin = () => {
    fetch('받을 주소', {
      method: 'POST',
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          localStorage.setItem('token', result.access_token);
          alert('로그인 성공!');
          // navigate('/main');
        } else {
          alert('아이디 혹은 비밀번호가 다릅니다.');
        }
      });
  };

  const handleSignup = () => {
    fetch();
  };

  return (
    <div>
      {isLoginOpen ? (
        <LoginJoinForm
          type="login"
          title="로그인"
          inputData={LOGIN_DATA}
          setIsLoginOpen={setIsLoginOpen}
          handleBtn={handleLogin}
          isInputsValid={isLoginValid}
          getValue={getLoginValue}
        />
      ) : (
        <LoginJoinForm
          type="signUp"
          title="회원가입"
          inputData={SIGNUP_DATA}
          setIsLoginOpen={setIsLoginOpen}
          handleBtn={handleSignup}
          isInputsValid={isSignupValid}
          getValue={getSignupValue}
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
