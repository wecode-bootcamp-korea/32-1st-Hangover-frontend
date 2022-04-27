import React, { useState } from 'react';
import '../Login/LoginPage.scss';
import '../Login/Components/Form';
import Form from './Components/Form';
export default function LoginPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(true);

  return (
    <div>
      {isLoginOpen ? (
        <Form
          type="login"
          title="로그인"
          inputData={LOGIN_DATA}
          setIsLoginOpen={setIsLoginOpen}
        />
      ) : (
        <Form
          type="signUp"
          title="회원가입"
          inputData={SIGNUP_DATA}
          setIsLoginOpen={setIsLoginOpen}
        />
      )}
    </div>
  );
}
// const Login = () => {
//   const [serverMessage, setServerMessage] = useState('invalid email');
//   const [userInfo, setUserInfo] = useState({
//     email: '',
//     password: null,
//     passwordCheck: null,
//     firstName: null,
//     lastName: null,
//   });

//   const { email, password, passwordCheck, lastName, firstName } = userInfo;

const LOGIN_DATA = [
  {
    type: 'email',
    placeholder: '이메일을 입력해주세요.',
  },
  {
    type: 'password',
    placeholder: '비밀번호를 입력해주세요.',
  },
];

const SIGNUP_DATA = [
  {
    type: 'email',
    placeholder: '이메일을 입력해주세요.',
  },
  {
    type: 'firstName',
    placeholder: '성을 입력해주세요.',
  },
  {
    type: 'lastName',
    placeholder: '이름을 입력해주세요.',
  },
  {
    type: 'password',
    placeholder: '비밀번호를 입력해주세요.',
  },
  {
    type: 'password',
    placeholder: '동일한 비밀번호를 입력해주세요.',
  },
];

// const RESPONSE_OBJECT = {
//   Login: {
//     title: '로그인',
//     input: [
//       {
//         type: 'email',
//         name: 'email',
//         placeholder: '로그인을 위한 이메일 주소를 입력해주세요',
//       },
//       {
//         type: 'password',
//         name: 'password',
//         placeholder: '로그인을 위한 이메일 주소를 입력해주세요',
//       },
//     ],
//     buttons: '로그인',
//     buttons: '회원가입 하기',
//   },

//   'Sign Up': {
//     title: '회원가입',
//     inputs: [
//       {
//         type: 'text',
//         name: 'first Name',
//         placeholder: '성',
//       },
//       {
//         type: 'text',
//         name: 'lastName',
//         placeholder: '이름',
//       },
//       {
//         type: 'email',
//         name: 'email',
//         placeholder: '이메일 주소',
//       },
//       {
//         type: 'password',
//         name: 'password',
//         placeholder: '패스워드',
//       },
//       {
//         type: 'password',
//         name: 'passwordCheck',
//         placeholder: '동일한 패스워드 입력',
//       },
//     ],
//     buttons: '회원가입',
//   },

//   SUCCESS: {
//     title: '취하노에 오신것을 환영합니다',
//     inputs: [
//       {
//         type: 'email',
//         name: 'email',
//         placeholder: '이메일 주소',
//       },
//       {
//         type: 'password',
//         name: 'password',
//         placeholder: '패스워드',
//       },
//     ],
//     buttons: '로그인',
//   },
// };
