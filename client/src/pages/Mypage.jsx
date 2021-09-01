import React, { useRef, useState } from 'react';
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

const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 215vh;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: 220vh;
    /* overflow: hidden; */
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
  width: 55.5em;
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
  top: 14%;
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
  top: 42%;
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
  width: 55.5em;
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

const Mypage = ({ handleModalOpen }) => {
  const textRef = useRef();
  const likeRef = useRef();
  const [fix, setFix] = useState(false);
  const [likeFix, setLikeFix] = useState(false);
  const [dummy, setDummy] = useState(dummydata.data);
  const [likeDummy, setLikeDummy] = useState(likepostdata.data);

  let move = 0;
  let likemove = 0;

  function MoveRight() {
    move = move + 30;
    textRef.current.style.transform = `translateX(-${move}em)`;
    console.log(move);
  }

  function MoveLeft() {
    move = move - 30;
    textRef.current.style.transform = `translateX(-${move}em)`;
    console.log(move);
  }

  function MoveLikeRight() {
    likemove = likemove + 30;
    likeRef.current.style.transform = `translateX(${likemove}em)`;
  }

  function MoveLikeLeft() {
    likemove = likemove - 30;
    likeRef.current.style.transform = `translateX(${likemove}em)`;
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

  function movePageHandler() {}

  return (
    <>
      <Nav handleModalOpen={handleModalOpen} />
      <TotalContainer>
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
              <SecurityPage />
            </Security>
          </RightContainer>
        </BodyContainer>
      </TotalContainer>
    </>
  );
};

export default Mypage;
