import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import EmailTooltip from '../EmailTooltip/EmailTooltip';
import axios from 'axios';

const TotalContainer = styled.div`
  display: flex;
  /* overflow: hidden; */
  position: relative;
  padding: 1em;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 768px) {
    width: 108%;
  }
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
  @media only screen and (max-width: 768px) {
    padding: 3.5em;
    padding-top: 0;
  }
`;

const Security = styled.div`
  width: 40em;
  height: 25em;
  display: flex;
  flex-direction: column;
  transform: translateY(2em);
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
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

const SecurityPage = ({ on, setOn, userInfo, ...props }) => {
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [introduce, setIntroduce] = useState(null);
  const [toast, setToast] = useState(false);

  const FixHandler = async (e) => {
    if (e.target.textContent === '수정 완료') {
      const patchUserInfoUrl = `${process.env.REACT_APP_API_URL}/users/userInfo`;
      const config = {
        'Content-Type': 'application/json',
        withCredentials: true,
      };
      let changedInfo = {};
      if (password) changedInfo.password = password;
      if (email) changedInfo.email = email;
      if (introduce) changedInfo.profile = introduce;
      if (Object.keys(changedInfo) === 0) {
        setOn(false);
        alert('변경된 정보가 없습니다.');
        return;
      }
      try {
        await axios.patch(patchUserInfoUrl, changedInfo, config);
        setOn(false);
        alert('회원정보가 성공적으로 수정되었습니다!');
      } catch (err) {
        console.log(err);
      }
      return;
    }
    props.authorHandler(true);
  };

  const PasswordIsValid = (password) => {
    var passwordExp = /^[a-zA-z0-9]{6,12}$/;
    if (!passwordExp.test(password)) {
      return false;
    }
    return true;
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
    const nowPassword = e.target.previousElementSibling.childNodes[0];
    const inputContainer = e.target.previousElementSibling.childNodes[1];
    if (
      inputContainer.style.display === 'none' ||
      inputContainer.style.display === ''
    ) {
      inputContainer.style.display = 'block';
      e.target.textContent = '저장';
      inputContainer.value = '';
    } else {
      if (PasswordIsValid(inputContainer.value)) {
        setPassword(inputContainer.value);
        nowPassword.textContent = inputContainer.value;
        inputContainer.style.display = 'none';
        e.target.textContent = '수정';
      } else {
        alert('비밀번호는 영문 대소문자와 숫자 6~12자리로 입력해야합니다.');
      }
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
                  <input className="input" type="text" defaultValue="" />
                </div>
                <button onClick={PasswordHandler}>수정</button>
              </TotalForm>
              <TotalForm>
                <span>이메일</span>
                <div className="container">
                  <span>{userInfo.email}</span>
                  <input
                    className="input"
                    type="text"
                    placeholder={userInfo.email}
                    defaultValue=""
                  />
                </div>
                <button onClick={EmailHandler}>수정</button>
              </TotalForm>
              <TotalForm>
                <span>소개글</span>
                <div className="container">
                  <div>{userInfo.profile}</div>
                  <textarea
                    className="input textarea"
                    type="text"
                    placeholder={userInfo.profile}
                    defaultValue=""
                  />
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
