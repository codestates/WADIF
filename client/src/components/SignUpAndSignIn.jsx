import styled, { keyframes } from "styled-components";
import { Scales } from "@styled-icons/remix-fill/Scales";
import { useState, useRef } from 'react';

const SignUpAndSignIn = () => {
  const slideUp = keyframes`
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  `;
  const slideDown = keyframes`
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(100%);
    }
  `;

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
      width: 27em;
      height: 18em;
      background: #fff;
      box-shadow: 0 1em 3em rgba(0,0,0,0.1);
      overflow: hidden;
      margin-top: 0;

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
            padding: 0.6em;
            background: #f5f5f5;
            color: #333;  
            border: none;
            outline: none;
            box-shadow: none;
            font-size: 0.5em;
            margin: 0.5em 0;
          }

          input[type="submit"] {
            max-width: 6em;
            background #577eff;
            color: #fff;
            cursor: pointer;
            font-size: 0.6em;
            font-weight: 500;
          }

          .signUp, .signIn {
            position: relative;
            margin-top: 15em;
            font-size: 0.05em;
            text-transform: uppercase;
            font-weight: 0.5;
            z-index: 1;

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
  
  const Scale = styled(Scales)`
    color: 4d5899a9;
    width: 9em;
    object-fit: cover;
  `;
  const idRef = useRef();
  const passwordRef = useRef();
  const [signInState, setSignInState] = useState('initialSI');
  const [signUpState, setSignUpState] = useState('initialSU');
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  
  const checkExistData = (value, dataName) => {
    if (value == "") {
        alert(dataName + " 입력해주세요!");
        return false;
    }
    return true;
  }
  const LoginSubmit = (e) => {
    setId(idRef.current.value);
    setPassword(passwordRef.current.value);
  }
  const checkUserId = (id) => {
    if (!checkExistData(id, "아이디를"))
      return false;
    var idRegExp = /^[a-zA-z0-9]{4,12}$/; 
    if (!idRegExp.test(id)) {
      alert("아이디는 영문 대소문자와 숫자 4~12자리로 입력해야합니다!");
      return false;
    }
    return true; 
  }

  const setActiveFT = (value) => {
    if (value === 'activeSignUpAni') {
      setSignInState('notActiveSignIn');
      setSignUpState('activeSignUp');
      setTimeout(() => {
        setSignInState('stopAniSI');
        setSignUpState('stopAniSU');
      },50)
    }
    if (value === 'activeSignIn') {
      setSignInState('activeSignIn');
      setSignUpState('notActiveSignUp');
      setTimeout(() => {
        setSignInState('initialSI');
        setSignUpState('initialSU');
      },50)
    }
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
            <input type="submit" value="Login" onClick={LoginSubmit} />
              <p className="signIn">Don't have an account? <a href="#" onClick={() => setActiveFT('activeSignUpAni')}>Sign up</a></p>
          </form>
        </div>
      </div>
      <div className={`user signUpBx ${signUpState}`}>
        <div className="formBx">
          <form>
            <h2>Create an account</h2>  
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email Address" />
            <input type="password" placeholder="Create Password" />
            <input type="password" placeholder="Confirm Password" />
            <input type="submit" value="Login" />
            <p className="signUp">Already have an account? <a href="#" onClick={() => setActiveFT('activeSignIn')}>Sign In</a></p>
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