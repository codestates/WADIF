import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { LeftArrow, RightArrow } from 'styled-icons/boxicons-regular';
import { Man } from 'styled-icons/icomoon';
import MypageText from '../components/MypageText/MypageText';
import Nav from '../components/Nav/Nav';
import dummydata from '../dummydata/dummydata';
import likepostdata from '../dummydata/likepostdata';
import SecurityPage from '../components/security/SecurityPage';
import PlaceHolder from '../LodingPlaceHolder/PlaceHolderForMyPageText';
import MyPageProfile from '../components/MypageText/LeftContainer';
import PlaceHolderLeftProfile from '../LodingPlaceHolder/PlaceHolderForMyPageProfile';
import { Close } from 'styled-icons/remix-fill';

const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 215vh;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: 220vh;
    /* overflow: hidden; */
  }

  .fixModal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 100;
    background-color: #80808071;
    top: 0;
    .fixModalContainer {
      width: 50%;
      height: 50%;
      background-color: white;
    }
  }
`;

const TopContainer = styled.div`
  flex: 2;
  background-color: #20a658;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
  }
`;

const TopFollowButton = styled.button`
  position: absolute;
  bottom: 1em;
  right: 5em;
  width: 13em;
  height: 2.5em;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  font-weight: 700;
  color: white;
  background-color: #02a3ee;
  display: none;
`;

const BodyContainer = styled.div`
  flex: 9;
  background-color: #ffffff;
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const RightContainer = styled.div`
  flex: 9;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  height: 190vh;
  @media only screen and (max-width: 768px) {
    flex: 16;
  }
`;

const RightMyTextContainer = styled.div`
  min-height: 25em;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1em;
  margin-top: 4em;
  margin-left: 3em;
  width: 90%;
  overflow: hidden;
  ::before {
    content: '';
    width: 100%;
    height: 2px;
    background-color: black;
    position: absolute;
    bottom: 4em;
  }
  @media only screen and (max-width: 768px) {
    margin: 2em;
    margin-top: 0;
    margin-bottom: 1em;
    width: 90%;
  }
`;

const MyTextHeader = styled.div`
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 95%;
  top: 1px;
  z-index: 50;
  .fix {
    cursor: pointer;
    color: #4b4bdf;
    font-weight: 600;
    &:hover {
      color: red;
    }
  }
  @media only screen and (max-width: 768px) {
    top: 1em;
    h1 {
      font-size: 24px;
    }
  }
`;

const MyTextContent = styled.div`
  flex: 7;
  display: flex;
  position: absolute;
  transition: 2s;
`;

const MoveContainer = styled.div`
  width: 100%;
  top: 12%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 20;
  padding: 10px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    top: 10em;
  }
`;

const LeftMove = styled(LeftArrow)`
  width: 30px;
  &:hover {
    color: blue;
  }
  @media only screen and (max-width: 768px) {
    width: 20px;
  }
`;
const RightMove = styled(RightArrow)`
  width: 30px;
  &:hover {
    color: blue;
  }
  @media only screen and (max-width: 768px) {
    width: 20px;
  }
`;

const LikeMoveContainer = styled.div`
  width: 100%;
  top: 35%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 20;
  padding: 10px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    bottom: none;
    top: 42%;
  }
`;

const RightLikeContianer = styled.div`
  min-height: 25em;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1em;
  margin-left: 3em;
  width: 90%;
  overflow: hidden;
  ::before {
    content: '';
    width: 100%;
    height: 2px;
    background-color: black;
    position: absolute;
    bottom: 4em;
  }
  @media only screen and (max-width: 768px) {
    margin: 2em;
    margin-top: 0;
    margin-bottom: 0;
    width: 90%;
  }
`;

const LikeHeader = styled.div`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 95%;
  top: 1px;
  z-index: 50;
  .fix {
    cursor: pointer;
    color: #4b4bdf;
    font-weight: 600;
    &:hover {
      color: red;
    }
  }
  @media only screen and (max-width: 768px) {
    h1 {
      top: 1em;
      font-size: 24px;
    }
  }
`;

const LikeContent = styled.div`
  flex: 7;
  display: flex;
  position: absolute;
  transition: 2s;
`;

const Security = styled.div`
  transform: translateY(-2em);
  @media only screen and (max-width: 768px) {
    transform: translate(-2em, 0);
    overflow: visible;
    width: 100%;
  }
`;

const FixModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 70;
  background-color: #80808071;
  top: 0;
`;

const FixBack = styled.div`
  width: 100%;
  height: 100%;
  background-color: #cacaca88;
  position: absolute;
`;

const FixModalContainer = styled.div`
  width: 23em;
  height: 60%;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.5);
  position: relative;
  .fail {
    transition: 0.5s;
    position: absolute;
    bottom: 7em;
    left: 6.5em;
    color: #d30101;
    opacity: 0;
  }
  .on {
    opacity: 1;
  }
  form {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .idContainer {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 2em;
      margin-top: 2.5em;
      span {
        margin-bottom: 0.5em;
        font-weight: 700;
        font-size: 1.2em;
      }
    }
    .passwordContainer {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 5em;
      margin-top: 1em;
      span {
        margin-bottom: 0.5em;
        font-weight: 700;
        font-size: 1.2em;
      }
    }
    input {
      padding: 0.5em 1.5em;
      outline: none;
    }
  }
`;

const CloseIcon = styled(Close)`
  width: 25px;
  position: absolute;
  top: 1em;
  right: 1em;
  color: #d30101;
`;

const SubmitButton = styled.button`
  padding: 0.5em 1em;
  position: absolute;
  bottom: 1em;
  right: 1em;
  border: none;
  outline: none;
  background-color: #2aa33e;
  color: #ffffff;
  border-radius: 5px;
`;

const Mypage = ({ handleModalOpen }) => {
  const textRef = useRef();
  const likeRef = useRef();
  const [fix, setFix] = useState(false);
  const [likeFix, setLikeFix] = useState(false);
  const [dummy, setDummy] = useState(dummydata.data);
  const [likeDummy, setLikeDummy] = useState(likepostdata.data);
  const [showModal, setShowModal] = useState(false);
  const [authData, setAuthData] = useState({
    id: '',
    password: '',
  });

  let move = 0;
  let likemove = 0;

  const handleAuthor = (key) => (e) => {
    setAuthData({
      ...authData,
      [key]: e.target.value,
    });
  };

  function MoveRight() {
    move = move + 30;
    textRef.current.style.transform = `translateX(-${move}em)`;
  }

  function MoveLeft() {
    move = move - 30;
    textRef.current.style.transform = `translateX(-${move}em)`;
  }

  function MoveLikeRight() {
    likemove = likemove + 30;
    likeRef.current.style.transform = `translateX(${likemove}em)`;
  }

  function MoveLikeLeft() {
    likemove = likemove - 30;
    likeRef.current.style.transform = `translateX(${likemove}em)`;
  }

  function AuthorHandler() {
    setShowModal(true);
  }

  function FixHandler() {
    if (fix) {
      setFix(false);
    } else {
      setFix(true);
    }
  }

  function DeleteHandler(id) {
    let arr = dummy.slice();
    arr = arr.filter((item) => item.id !== id);
    setDummy(arr);
  }

  function LikeFixHandler() {
    if (likeFix) {
      setLikeFix(false);
    } else {
      setLikeFix(true);
    }
  }

  function likeDeleteHandler(id) {
    let arr = likeDummy.slice();
    arr = arr.filter((item) => item.id !== id);
    setLikeDummy(arr);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  function submitDataHandler(e) {
    e.preventDefault();
    let fail = true;
    const target = e.target.parentNode.parentNode.lastChild;
    if (fail) {
      target.classList.add('on');
      setTimeout(() => {
        target.classList.remove('on');
      }, 2000);
      // axios post authData.
      // if true?? closeModalHandler && 컴포넌트 펼치기.
      // if false?? 입력 정보가 맞지 않습니다!
    }
  }

  return (
    <>
      <Nav handleModalOpen={handleModalOpen} />
      <TotalContainer>
        {showModal ? (
          <FixModal>
            <FixBack onClick={closeModalHandler} />
            <FixModalContainer>
              <form>
                <div className="idContainer">
                  <span>아이디를 입력하세요</span>
                  <input onChange={handleAuthor('id')} type="text" />
                </div>
                <div className="passwordContainer">
                  <span>비밀번호를 입력하세요</span>
                  <input onChange={handleAuthor('password')} type="password" />
                </div>
                <SubmitButton onClick={submitDataHandler}>보내기</SubmitButton>
              </form>
              <CloseIcon onClick={closeModalHandler} />
              <span className="fail">입력 정보가 맞지 않습니다!</span>
            </FixModalContainer>
          </FixModal>
        ) : null}
        <TopContainer>
          {/* <TopFollowButton>Follow</TopFollowButton> */}
        </TopContainer>
        <BodyContainer>
          <MyPageProfile />
          {/* <PlaceHolderLeftProfile /> */}
          <RightContainer>
            <MoveContainer>
              <LeftMove onClick={MoveLeft} />
              <RightMove onClick={MoveRight} />
            </MoveContainer>
            <RightMyTextContainer>
              <MyTextHeader>
                <h1>내 글 목록</h1>
                <span className="fix" onClick={FixHandler}>
                  수정
                </span>
              </MyTextHeader>
              <MyTextContent ref={textRef}>
                {dummy.map((item) => {
                  return (
                    <MypageText
                      fix={fix}
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      text={item.text}
                      date={item.date}
                      like={item.like}
                      deleteHandler={DeleteHandler}
                    />
                  );
                })}
                {/* <PlaceHolder /> */}
              </MyTextContent>
            </RightMyTextContainer>
            <LikeMoveContainer>
              <LeftMove onClick={MoveLikeRight} />
              <RightMove onClick={MoveLikeLeft} />
            </LikeMoveContainer>
            <RightLikeContianer>
              <LikeHeader>
                <h1>관심 글 목록</h1>
                <span className="fix" onClick={LikeFixHandler}>
                  수정
                </span>
              </LikeHeader>
              <LikeContent ref={likeRef}>
                {likeDummy.map((item) => {
                  return (
                    <MypageText
                      likefix={likeFix}
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      text={item.text}
                      date={item.date}
                      like={item.like}
                      deleteHandler={likeDeleteHandler}
                    />
                  );
                })}
                {/* <PlaceHolder /> */}
              </LikeContent>
            </RightLikeContianer>
            <Security>
              <SecurityPage authorHandler={AuthorHandler} />
            </Security>
          </RightContainer>
        </BodyContainer>
      </TotalContainer>
    </>
  );
};

export default Mypage;
