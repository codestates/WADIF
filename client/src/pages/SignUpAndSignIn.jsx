import styled, { keyframes } from 'styled-components';
import { Scales } from '@styled-icons/remix-fill/Scales';
import { useState } from 'react';
import axios from 'axios';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
`;

const slideDown2 = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
`;
//로고
const Scale = styled(Scales)`
  color: 4d5899a9;
  width: 7em;
  object-fit: cover;
`;

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  position: relative;
  min-height: 60em;
  background: #dbdbdb;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8em;
  @media only screen and (max-width: 768px) {
    min-width: 30em;
  }
  section {
    position: relative;
    top: -5em;
    width: 55em;
    height: 35em;
    background: #fff;
    box-shadow: 0 1em 3em rgba(0, 0, 0, 0.1);
    border-radius: 5%;
    overflow: hidden;
    margin-top: 0;
    padding-top: 0em;

    .signInBx {
      form {
        padding-top: 5em;
      }
      .errMessage {
        padding-top: 2em;
      }
    }

    > .user {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;

      > .LogoImg {
        position: relative;
        width: 50%;
        height: 100%;
        transition: 0.5s;
        justify-content: center;
        align-items: center;
        background: #2639a7b2; //4d5899a9
        flex-direction: column;
        display: flex;
        @media only screen and (max-width: 768px) {
          display: none;
        }

        > .LogoText {
          font-family: 'Ubuntu', sans-serif;
          font-size: 2em;
        }
      }
      > .formBx {
        position: relative;
        width: 50%;
        height: 100%;
        background: #fff;
        color: #867a7a;
        justify-content: center;
        align-items: center;
        padding: 2em;
        transition: 0.5s;
        z-index: 1;
        padding: 0 auto;
        @media only screen and (max-width: 768px) {
          width: 100%;
        }
        .errMessage {
          position: relative;
          font-size: 12.8px;
          top: 1.5em;
          left: 1em;
          height: 40em;
          width: 40em;
          justify-content: center;
          color: #ff0032;
          .errMessageSU {
            display: flex;
            flex-direction: column;
            width: 40em;
          }
          .hidden {
            display: none;
          }
        }
        h2 {
          color: #4d5899a9;
          font-size: 1.6em;
          font-weight: 600;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 2px;
          width: 100%;
          margin-bottom: 0.5em;
        }

        input {
          width: 100%;
          height: 100%;
          padding: 0.7em;
          background: #f5f5f5;
          color: #333;
          border: none;
          outline: none;
          box-shadow: none;
          font-size: 1em;
          margin: 0.5em;
          border-radius: 3em;
          justify-content: center;
          align-items: center;
          padding-left: 2em;
          position: relative;
          left: -0.5em;
          z-index: 2;
        }

        button[type='submit'] {
          float: right;
          width: 5em;
          height: 2em;
          background: #3b51cca9;
          color: #fff;
          cursor: pointer;
          font-size: 0.9em;
          font-weight: 500;
          border: none;
          border-radius: 3em;
          position: relative;
          left: -0.5em;
          top: 0.5em;
          z-index: 1;
          &:hover {
            background-color: #07c;
          }
          &:active {
            background-color: #0064bd;
            box-shadow: none;
          }
        }

        .signUp,
        .signIn {
          position: relative;
          top: -29em;
          height: 1em;
          margin-top: 0em;
          font-size: 0.9em;
          display: flex;
          justify-content: center;
          align-items: center;
          float: right;
          a {
            font-weight: 600;
            text-decoration: none;
            &:active {
              text-decoration: none;
              color: #551a8b;
            }
          }
        }
        .signUp {
          top: -25em;
        }
      }
    }
    .signUpBx {
      .LogoImg {
        background: #e26060;
      }
    }

    .signInBx .formBx form {
      margin-top: 1em;
    }
    .notActiveSignUp {
      .LogoImg {
        top: -100%;
      }
      .formBx {
        top: 100%;
      }
    }
    .activeSignIn {
      .LogoImg {
        animation-duration: 0.5s;
        animation-timing-function: ease-out;
        animation-name: ${slideDown2};
        animation-fill-mode: forwards;
      }
      .formBx {
        animation-duration: 0.5s;
        animation-timing-function: ease-out;
        animation-name: ${slideUp};
        animation-fill-mode: forwards;
      }
    }
    .notActiveSignIn {
      .LogoImg {
        top: 200%;
      }
      .formBx {
        top: -200%;
      }
    }
    .activeSignUp {
      .LogoImg {
        animation-duration: 0.5s;
        animation-timing-function: ease-out;
        animation-name: ${slideDown2};
        animation-fill-mode: forwards;

        z-index: 1000;
      }
      .formBx {
        animation-duration: 0.5s;
        animation-timing-function: ease-out;
        animation-name: ${slideUp};
        animation-fill-mode: forwards;
      }
    }
    .initialSI {
      .LogoImg {
        top: 0%;
      }
      .formBx {
        top: 0%;
      }
    }
    .initialSU {
      .LogoImg {
        top: 200%;
      }
      .formBx {
        top: -200%;
      }
    }
  }
  .signUpBx .formBx {
    input {
      padding: 30em;
    }
  }
`;

const SignUpAndSignIn = ({ history }) => {
  //애니메이션 구현을 위한 클래스 상태 변경
  const setActiveFT = (value) => {
    if (value === 'activeSignUpAni') {
      ResetStateSI();
      setSignInState('notActiveSignIn');
      setSignUpState('activeSignUp');
    }
    if (value === 'activeSignIn') {
      ResetStateSU();
      setSignInState('activeSignIn');
      setSignUpState('notActiveSignUp');
    }
  };

  const [inputsSI, setInputsSI] = useState({
    id: '',
    password: '',
  });
  const [inputsSU, setInputsSU] = useState({
    idSU: '',
    nameSU: '',
    emailSU: '',
    passwordSU: '',
    password2SU: '',
  });
  const [errStateOfSI, setErrStateOfIdSI] = useState('hidden');
  const [errStateOfId, setErrStateOfId] = useState('hidden');
  const [errStateOfEmail, setErrStateOfEmail] = useState('hidden');
  const [errStateOfPassword, setErrStateOfPassword] = useState('hidden');
  const [errStateOfPassword2, setErrStateOfPassword2] = useState('hidden');
  const [signInState, setSignInState] = useState('initialSI');
  const [signUpState, setSignUpState] = useState('initialSU');

  const { id, password } = inputsSI;
  const { idSU, nameSU, emailSU, passwordSU, password2SU } = inputsSU;

  const onChangeSI = (e) => {
    const { name, value } = e.target;
    const nextInputs = {
      ...inputsSI,
      [name]: value,
    };
    setInputsSI(nextInputs);
  };

  const onChangeSU = (e) => {
    const { name, value } = e.target;
    const nextInputs = {
      ...inputsSU,
      [name]: value,
    };
    setInputsSU(nextInputs);
    const isAllValid = CheckInputsSU(nextInputs);
  };

  const ResetStateSI = () => {
    setInputsSI({
      id: '',
      password: '',
    });
    setErrStateOfIdSI('hidden');
  };

  const ResetStateSU = () => {
    setInputsSU({
      idSU: '',
      nameSU: '',
      emailSU: '',
      passwordSU: '',
      password2SU: '',
    });
    setErrStateOfId('hidden');
    setErrStateOfEmail('hidden');
    setErrStateOfPassword('hidden');
    setErrStateOfPassword2('hidden');
  };

  const CheckInputsSU = (inputsSU) => {
    const { idSU, emailSU, passwordSU, password2SU } = inputsSU;
    const isIdValid = checkUserIdSU(idSU);
    const isEmailValid = checkEmailSU(emailSU);
    const isPasswordValid = checkPasswordSU(passwordSU);
    const isPassword2Valid = checkPassword2SU(passwordSU, password2SU);
    return isIdValid && isEmailValid && isPasswordValid && isPassword2Valid
      ? true
      : false;
  };

  const alertErr = () => {
    const { idSU, name, emailSU, passwordSU, password2SU } = inputsSU;
    return checkExistData(idSU, '아이디를') &&
      checkExistData(name, '아름을') &&
      checkExistData(emailSU, '이메일을') &&
      checkExistData(passwordSU, '비밀번호를') &&
      checkExistData(password2SU, '비밀번호 확인을')
      ? true
      : false;
  };
  //입력되지 않은 데이터에 대해서 alert
  const checkExistData = (value, dataName) => {
    if (value === '') {
      alert(dataName + ' 입력해주세요!');
      return false;
    }
    return true;
  };

  const checkUserIdSU = (id) => {
    var idRegExp = /^[a-zA-z0-9]{4,12}$/;
    if (id === '') {
      setErrStateOfId('hidden');
      return false;
    }
    if (!idRegExp.test(id)) {
      setErrStateOfId('');
      return false;
    }
    setErrStateOfId('hidden');
    return true;
  };

  const checkEmailSU = (email) => {
    var emailExp =
      /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (email === '') {
      setErrStateOfEmail('hidden');
      return false;
    }
    if (!emailExp.test(email)) {
      setErrStateOfEmail('');
      return false;
    }
    setErrStateOfEmail('hidden');
    return true;
  };

  const checkPasswordSU = (password) => {
    var passwordExp = /^[a-zA-z0-9]{6,12}$/;
    if (password === '') {
      setErrStateOfPassword('hidden');
      return false;
    }
    if (!passwordExp.test(password)) {
      setErrStateOfPassword('');
      return false;
    }
    setErrStateOfPassword('hidden');
    return true;
  };

  const checkPassword2SU = (password, password2) => {
    if (password2 === '') {
      setErrStateOfPassword2('hidden');
      return false;
    }
    if (password !== password2) {
      setErrStateOfPassword2('');
      return false;
    }
    setErrStateOfPassword2('hidden');
    return true;
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const signInUrl = `${process.env.REACT_APP_API_URL}/users/signin`;
    const config = {
      'Content-Type': 'application/json',
      withCredentials: true,
    };
    try {
      const reponse = await axios.post(
        signInUrl,
        {
          userId: id,
          password,
        },
        config,
      );
      history.push('/mainpage');
    } catch (err) {
      console.log(err);
      setErrStateOfIdSI('');
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const signUpUrl = `${process.env.REACT_APP_API_URL}/users`;
    const config = {
      'Content-Type': 'application/json',
      withCredentials: true,
    };
    if (alertErr() && CheckInputsSU(inputsSU)) {
      try {
        const response = await axios.post(
          signUpUrl,
          {
            userId: idSU,
            username: nameSU,
            email: emailSU,
            password: passwordSU,
          },
          config,
        );
        ResetStateSU();
        setSignInState('activeSignIn');
        setSignUpState('notActiveSignUp');
        alert('회원가입에 성공하였습니다!');
      } catch (err) {
        console.log(err);
        alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
      }
    }
  };

  return (
    <Container>
      <section>
        <div className={`user signInBx ${signInState}`}>
          <div className="LogoImg">
            <Scale />
            <span className="LogoText">WADIF</span>
          </div>
          <div className="formBx">
            <form>
              <h2>LogIn</h2>
              <input
                type="text"
                placeholder="아이디"
                value={id}
                onChange={onChangeSI}
                name="id"
              />
              <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={onChangeSI}
                name="password"
              />
              <button type="submit" onClick={handleSignIn}>
                로그인
              </button>
              <div className="errMessage">
                <div className={`${errStateOfSI}`}>
                  <b>아이디</b> 또는 <b>비밀번호</b>가 잘못 입력 되었습니다.
                </div>
                <div className={`${errStateOfSI}`}>
                  아이디와 비밀번호를 정확히 입력해 주세요.
                </div>
              </div>
              <p className="signIn">
                <div>아직 계정이 없으신가요?</div>
                <div>
                  지금 바로
                  <a href="#" onClick={() => setActiveFT('activeSignUpAni')}>
                    &nbsp;회원가입
                  </a>
                  을 해보세요.
                </div>
              </p>
            </form>
          </div>
        </div>
        <div className={`user signUpBx ${signUpState}`}>
          <div className="formBx">
            <form>
              <h2>회원가입</h2>
              <input
                type="text"
                placeholder="아이디"
                value={idSU}
                onChange={onChangeSU}
                name="idSU"
              />
              <input
                type="text"
                placeholder="이름"
                value={nameSU}
                onChange={onChangeSU}
                name="nameSU"
              />
              <input
                type="text"
                placeholder="이메일 주소"
                value={emailSU}
                onChange={onChangeSU}
                name="emailSU"
              />
              <input
                type="password"
                placeholder="비밀번호"
                value={passwordSU}
                onChange={onChangeSU}
                name="passwordSU"
              />
              <input
                type="password"
                placeholder="비밀번호 확인"
                value={password2SU}
                onChange={onChangeSU}
                name="password2SU"
              />

              <button type="submit" onClick={handleSignUp}>
                가입하기
              </button>
              <div className="errMessage">
                <div className="errMessageSU">
                  <div className={`${errStateOfId}`}>
                    아이디는 영문 대소문자와 숫자 4~12자리로 입력해야합니다.
                  </div>
                  <div className={`${errStateOfEmail}`}>
                    잘못된 이메일 형식 입니다.
                  </div>
                  <div className={`${errStateOfPassword}`}>
                    비밀번호는 영문 대소문자와 숫자 6~12자리로 입력해야합니다.
                  </div>
                  <div className={`${errStateOfPassword2}`}>
                    두 비밀번호가 맞지 않습니다.
                  </div>
                </div>
              </div>
              <p className="signUp">
                {/* Already have an account?  */}
                이미 계정이 있으신가요?
                <a href="#" onClick={() => setActiveFT('activeSignIn')}>
                  &nbsp;로그인
                </a>
              </p>
            </form>
          </div>
          <div className="LogoImg">
            <Scale />
            <span className="LogoText">WADIF</span>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default SignUpAndSignIn;
