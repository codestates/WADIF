import styled, { keyframes } from "styled-components";
import { Scales } from "@styled-icons/remix-fill/Scales";
import { useState, useRef } from 'react';

const SignUpAndSignIn = () => {
  //slideup animation keyframes
  const slideUp = keyframes`
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  `;
  //slidedown animation keyframes
  const slideDown = keyframes`
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(100%);
    }
  `;
  //container
  const Container = styled.div`
    font-family: 'Poppins', sans-serif;
    position: relative;
    min-height: 35em;
    background: #557085;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8em;
    transition: 0.5s;

    section {
      position: relative;
      width: 32em;
      height: 18em;
      background: #fff;
      box-shadow: 0 1em 3em rgba(0,0,0,0.1);
      overflow: hidden;
      margin-top: 0;
      padding-top: 0em;

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
          background: #4d5899a9;
          flex-direction: column;
          display: flex;

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

          .errMessage {
            font-size: 0.05em;
            height: 40em;
            justify-content: center;
            color: #ff0032;

            .hidden{
              display: none;
            }
          }
          h2 {
            font-size: 0.5em;
            font-weight: 600;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 2px;
            width: 100%;
            margin-bottom: 0.5em;
          }

          input {
            width: 100%;
            padding: 1em;
            background: #f5f5f5;
            color: #333;  
            border: none;
            outline: none;
            box-shadow: none;
            font-size: 0.5em;
            margin: 0.5em 0;
          }

          button[type="submit"] {
            width: 5em;
            height: 2em;
            background #577eff;
            color: #fff;
            cursor: pointer;
            font-size: 0.6em;
            font-weight: 500;
            border: none;
          }

          .signUp, .signIn {
            position: relative;
            margin-top: 15em;
            font-size: 0.05em;
            text-transform: uppercase;
            font-weight: 0.5;
            z-index: 1;
            float: right;
            background-color: powderblue;
            border-radius: 10%;
            &:hover {
              background-color: #a68dc2a9;
            }
            > a {
              font-weight: 600;
              text-decoration: none;  
              color: #577eff;
            }
          }
        }
      }
      .signInBx .formBx form{
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
          top: -100%;
          animation-duration: 0.5s;
          animation-timing-function: ease-out;
          animation-name: ${slideDown};
          animation-fill-mode: forwards;
        }
        .formBx {
          top: 0%;
          animation-duration: 0.5s;
          animation-timing-function: ease-out;
          animation-name: ${slideUp};
          animation-fill-mode: forwards;
        }
      }
      .notActiveSignIn {
        .LogoImg {
          top: 100%;
        }
        .formBx {
          top: -100%;
        }
      }
      .activeSignUp {
        .LogoImg {
          top: -100%;
          animation-duration: 0.5s;
          animation-timing-function: ease-out;
          animation-name: ${slideDown};
          animation-fill-mode: forwards;
        }
        .formBx {
          top: 0%;
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
          top: 100%;
        }
        .formBx {
          top: -100%;
        }
      }
      .stopAniSI {
        .LogoImg {
          top: 100%;
        }
        .formBx {
          top: -100%;
        }
      }
      .stopAniSU {
        .LogoImg {
          top: 0%;
        }
        .formBx {
          top: 0%;
        }
      }
    }
    `;
  //로고
  const Scale = styled(Scales)`
    color: 4d5899a9;
    width: 9em;
    object-fit: cover;
  `;
  //애니메이션 구현을 위한 클래스 상태 변경
  const setActiveFT = (value) => {
    if (value === 'activeSignUpAni') {
      setSignInState('notActiveSignIn');
      setSignUpState('activeSignUp');
      setTimeout(() => {
        setSignInState('stopAniSI');
        setSignUpState('stopAniSU');
      },500)
    }
    if (value === 'activeSignIn') {
      setSignInState('activeSignIn');
      setSignUpState('notActiveSignUp');
      setTimeout(() => {
        setSignInState('initialSI');
        setSignUpState('initialSU');
      },500)
    }
  }

  const idRef = useRef();
  const passwordRef = useRef();
  const idSURef = useRef();
  const EmailSURef = useRef();
  const passwordSURef = useRef();
  const password2SURef = useRef();
  const [errStateOfIdSI, setErrStateOfIdSI] = useState("hidden");
  const [errStateOfPasswordSI, setErrStateOfPasswordSI] = useState("hidden");
  const [errStateOfId, setErrStateOfId] = useState("hidden");
  const [errStateOfEmail, setErrStateOfEmail] = useState("hidden");
  const [errStateOfPassword, setErrStateOfPassword] = useState("hidden");
  const [errStateOfPassword2, setErrStateOfPassword2] = useState("hidden");
  const [signInState, setSignInState] = useState('initialSI');
  const [signUpState, setSignUpState] = useState('initialSU');
  
  const SignInSubmit = (e) => {
    //axios.post 로그인 정보 전송
  }

  const SignUpSubmit = (e) => {
    const id = idSURef.current.value;
    const email = EmailSURef.current.value;
    const password = passwordSURef.current.value;
    const password2 = password2SURef.current.value;

    if (checkUserIdSU(id) && checkEmailSU(email) && checkPasswordSU(password) && checkPassword2SU(password,password2)) {
      console.log("success")//axios.post 회원가입 정보 전송
    } 
  }
  //입력되지 않은 데이터에 대해서 alert 
  const checkExistData = (value, dataName) => {
    if (value === "") {
        alert(dataName + " 입력해주세요!");
        return false;
    }
    return true;
  }
  
  const checkUserIdSU = (id) => {
    if (!checkExistData(id, "아이디를")) return false;
    var idRegExp = /^[a-zA-z0-9]{4,12}$/; 
    if (!idRegExp.test(id)) {
      setErrStateOfId("")
      return false;
    }
    setErrStateOfId("hidden")
    return true; 
  }

  const checkEmailSU = (email) => {
    if (!checkExistData(email, "이메일을")) return false;
    var emailExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (!emailExp.test(email)) {
      setErrStateOfEmail("")
      return false;
    }
    setErrStateOfEmail("hidden")
    return true; 
  }

  const checkPasswordSU = (password) => {
    if (!checkExistData(password, "비밀번호를")) return false;
    var passwordExp = /^[a-zA-z0-9]{6,12}$/;
    if (!passwordExp.test(password)) {
      setErrStateOfPassword("")
      return false;
    }
    setErrStateOfPassword("hidden")
    return true; 
  }

  const checkPassword2SU = (password, password2) => {
    console.log(password,password2)
    if (!checkExistData(password, "비밀번호 확인을")) return false;
    if (password !== password2) {
      setErrStateOfPassword2("")
      return false;
    }
    setErrStateOfPassword2("hidden")
    return true; 
  }

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
            <h2>Sign In</h2>
            <input
              type="text"
              placeholder="Id"
              ref={idRef}
            />
            <input
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
            <button type="submit">Login</button>
              <div className="errMessage">
                <div>
                  <span className={`${errStateOfIdSI}`}>아이디 또는 비밀번호가 잘못 입력 되었습니다.</span><br />
                  <span className={`${errStateOfPasswordSI}`}>아이디와 비밀번호를 정확히 입력해 주세요.</span>
                </div>
            </div>
              <p className="signIn">
                {/* Don't have an account?  */}
                <a href="#" onClick={() => setActiveFT('activeSignUpAni')}> 회원가입</a>
              </p>
          </form>
        </div>
      </div>
      <div className={`user signUpBx ${signUpState}`}>
        <div className="formBx">
          <form>
            <h2>Create an account</h2>  
              <input
                type="text"
                placeholder="Id"
                ref={idSURef}
              />
              <input
                type="text"
                placeholder="Email Address"
                ref={EmailSURef}
              />
              <input
                type="password"
                placeholder="Create Password"
                ref={passwordSURef}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                ref={password2SURef}
              />
              <button type="submit" onClick={SignUpSubmit}>Signup</button>
              <div className="errMessage">
                <div>
                  <span className={`${errStateOfId}`}>아이디는 영문 대소문자와 숫자 4~12자리로 입력해야합니다.</span>
                  <span className={`${errStateOfEmail}`}>잘못된 이메일 형식 입니다.</span>
                  <span className={`${errStateOfPassword}`}>비밀번호는 영문 대소문자와 숫자 6~12자리로 입력해야합니다.</span>
                  <span className={`${errStateOfPassword2}`}>두 비밀번호가 맞지 않습니다.</span>
                </div>
              </div>
              <p className="signUp">
                {/* Already have an account?  */}
                <a href="#" onClick={() => setActiveFT('activeSignIn')}> 로그인</a>
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
  )
};

export default SignUpAndSignIn;