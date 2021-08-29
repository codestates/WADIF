import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import EmailTooltip from '../EmailTooltip/EmailTooltip';

const TotalContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  padding: 1em;
  width: 100%;
  height: 100%;
`;

const RightSession = styled.div`
  flex: 8;
  padding: 3em;

  .reviseContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    ::before {
      content: '';
      width: 101%;
      height: 2px;
      bottom: -1em;
      background-color: black;
      position: absolute;
    }
    span {
      color: #2d6bdf;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

const Security = styled.div`
  width: 40em;
  height: 25em;
  display: flex;
  flex-direction: column;
  transform: translateY(2em);
`;

const TotalForm = styled.form`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2em;

  button {
    width: 5em;
    border: none;
    outline: none;
    background-color: #ffffff;
    color: #2d6bdf;
    cursor: pointer;
  }

  div {
    width: 50%;
    font-size: 12px;
  }

  .container {
    position: relative;
    display: flex;
    justify-content: center;
    .input {
      position: absolute;
      display: none;
    }
    .textarea {
      width: 20em;
      height: 10em;
      resize: none;
      display: none;
    }
  }
`;

const SecurityPage = () => {
  const [on, setOn] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [toast, setToast] = useState(false);

  const FixHandler = () => {
    if (!on) {
      setOn(true);
    } else {
      setOn(false);
    }
  };

  const EmailIsVaild = (e) => {
    var emailExp =
      /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (!emailExp.test(e)) {
      return false;
    } else {
      return true;
    }
  };

  const PasswordHandler = (e) => {
    e.preventDefault();
    const inputContainer = e.target.previousElementSibling.childNodes[1];
    if (
      inputContainer.style.display === 'none' ||
      inputContainer.style.display === ''
    ) {
      inputContainer.style.display = 'block';
      e.target.textContent = '저장';
      inputContainer.value = '';
    } else {
      setPassword(inputContainer.value);
      inputContainer.style.display = 'none';
      e.target.textContent = '수정';
    }
  };

  const EmailHandler = (e) => {
    e.preventDefault();
    const nowEmail = e.target.previousElementSibling.childNodes[0];
    const inputContainer = e.target.previousElementSibling.childNodes[1];
    if (
      inputContainer.style.display === 'none' ||
      inputContainer.style.display === ''
    ) {
      inputContainer.style.display = 'block';
      e.target.textContent = '저장';
      inputContainer.value = '';
    } else {
      if (EmailIsVaild(inputContainer.value)) {
        setEmail(inputContainer.value);
        nowEmail.textContent = inputContainer.value;
        inputContainer.style.display = 'none';
        e.target.textContent = '수정';
      } else {
        setToast(true);
        setTimeout(() => {
          setToast(false);
        }, 3000);
        return;
      }
    }
  };

  const IntroduceHandler = (e) => {
    e.preventDefault();
    const inputContainer = e.target.previousElementSibling.childNodes[1];
    const exIntroduce = e.target.previousElementSibling.childNodes[0];
    if (
      inputContainer.style.display === 'none' ||
      inputContainer.style.display === ''
    ) {
      inputContainer.style.display = 'block';
      e.target.textContent = '저장';
      inputContainer.value = exIntroduce.textContent;
    } else {
      setIntroduce(inputContainer.value);
      exIntroduce.innerText = inputContainer.value;
      inputContainer.style.display = 'none';
      e.target.textContent = '수정';
    }
  };

  return (
    <>
      <TotalContainer>
        <EmailTooltip toast={toast ? 'on' : 'off'} />
        <RightSession>
          <div className="reviseContainer">
            <h1>개인정보 수정</h1>
            <span onClick={FixHandler}>{on ? `수정 완료` : `수정`}</span>
          </div>
          {on ? (
            <Security>
              <TotalForm>
                <span>비밀번호</span>
                <div className="container">
                  <span>**********</span>
                  <input className="input" type="text" />
                </div>
                <button onClick={PasswordHandler}>수정</button>
              </TotalForm>
              <TotalForm>
                <span>이메일</span>
                <div className="container">
                  <span>vvsogi@gmail.com</span>
                  <input className="input" type="text" />
                </div>
                <button onClick={EmailHandler}>수정</button>
              </TotalForm>
              <TotalForm>
                <span>소개글</span>
                <div className="container">
                  <div>{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquid explicabo doloribus vel sapiente dolore laborum tempora, suscipit harum provident tempore quos recusandae ut sit architecto quas omnis ipsa! Placeat.`}</div>
                  <textarea className="input textarea" type="text" />
                </div>
                <button onClick={IntroduceHandler}>수정</button>
              </TotalForm>
            </Security>
          ) : null}
        </RightSession>
      </TotalContainer>
    </>
  );
};

export default SecurityPage;
