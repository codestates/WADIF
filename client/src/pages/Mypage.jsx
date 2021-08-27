import React, { useRef, useState } from "react";
import styled from "styled-components";
import { LeftArrow, RightArrow } from "styled-icons/boxicons-regular";
import { Man } from "styled-icons/icomoon";
import MypageText from "../components/MypageText/MypageText";
import Nav from "../components/Nav/Nav";
import dummydata from "../dummydata/dummydata";
import likepostdata from "../dummydata/likepostdata";

const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 120vh;
`;

const TopContainer = styled.div`
  flex: 2;
  background-color: #55ab69;
  position: relative;
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
  background-color: #314ab9;
`;

const BodyContainer = styled.div`
  flex: 9;
  background-color: #ffffff;
  display: flex;
`;

const LeftContainer = styled.div`
  flex: 4;
  background-color: #ffffff;
  position: relative;
  border-right: 1px solid black;
`;

const LeftCircle = styled.div`
  width: 12em;
  height: 12em;
  background-color: #c7c7c7;
  border-radius: 50%;
  position: absolute;
  top: -6em;
  left: 7.5em;
  overflow: hidden;
`;

const LeftProfile = styled(Man)`
  width: 20em;
  transform: translate(-3.3em, 2em);
`;

const LeftTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 7em;
  align-items: center;
`;

const LeftMyname = styled.span`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const LeftMyEmail = styled.span`
  margin-bottom: 5px;
`;

const LeftMyJob = styled.span`
  color: gray;
`;

const LeftEtcBox = styled.div``;

const EtcFollowSession = styled.div`
  display: flex;
  position: relative;
  ::before {
    content: "";
    width: 90%;
    height: 2px;
    background-color: #757575;
    position: absolute;
    right: 1.4em;
    bottom: 0;
  }
`;

const EtcLeft = styled.div`
  flex: 1;
  padding: 2em;
  display: flex;
  justify-content: space-between;
  position: relative;
  ::before {
    content: "";
    width: 2px;
    height: 2em;
    background-color: #757575;
    position: absolute;
    right: 0;
    top: 1.5em;
  }
`;

const EtcRight = styled.div`
  flex: 1;
  padding: 2em;
  display: flex;
  justify-content: space-between;
`;

const EtcIntroduceSession = styled.div`
  padding: 2em;
  padding-top: 1em;
  font-size: 1.1em;
  word-break: break-all;
`;

const RightContainer = styled.div`
  flex: 9;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  height: 100vh;
  ::before {
    width: 90%;
    height: 1px;
    position: absolute;
    content: "";
    background-color: gray;
    bottom: 50%;
    left: 6%;
  }
`;

const RightMyTextContainer = styled.div`
  flex: 1;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1em;
  margin: 2.5em;
  margin-left: 3em;
  width: 55.5em;
  overflow: hidden;
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
`;

const MyTextContent = styled.div`
  flex: 7;
  display: flex;
  position: absolute;
  transition: 2s;
`;

const MoveContainer = styled.div`
  width: 100%;
  top: 25%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 20;
  padding: 10px;
  cursor: pointer;
`;

const LeftMove = styled(LeftArrow)`
  width: 30px;
  &:hover {
    color: blue;
  }
`;
const RightMove = styled(RightArrow)`
  width: 30px;
  &:hover {
    color: blue;
  }
`;

const LikeMoveContainer = styled.div`
  width: 100%;
  bottom: 20%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 20;
  padding: 10px;
  cursor: pointer;
`;

const RightLikeContianer = styled.div`
  flex: 1;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1em;
  margin: 2.5em;
  margin-left: 3em;
  width: 55.5em;
  overflow: hidden;
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
`;

const LikeContent = styled.div`
  flex: 7;
  display: flex;
  position: absolute;
  transition: 2s;
`;

const Mypage = () => {
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
      <Nav />
      <TotalContainer>
        <TopContainer>
          <TopFollowButton>Follow</TopFollowButton>
        </TopContainer>
        <BodyContainer>
          <LeftContainer>
            <LeftCircle>
              <LeftProfile />
            </LeftCircle>
            <LeftTextBox>
              <LeftMyname>김우석</LeftMyname>
              <LeftMyEmail>vvsogi@gmail.com</LeftMyEmail>
              <LeftMyJob>Frontend Developer</LeftMyJob>
            </LeftTextBox>
            <LeftEtcBox>
              <EtcFollowSession>
                <EtcLeft>
                  <span>Follow</span>
                  <span>1234</span>
                </EtcLeft>
                <EtcRight>
                  <span>Follower</span>
                  <span>1234</span>
                </EtcRight>
              </EtcFollowSession>
              <EtcIntroduceSession>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus animi sint corporis temporibus obcaecati! Voluptas,
                voluptates maxime! Minima, quibusdam. Deserunt suscipit
                aspernatur dicta eius accusantium. Doloremque adipisci nisi
                animi ad. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Delectus animi sint corporis temporibus obcaecati!
                Voluptas, voluptates maxime! Minima, quibusdam. Deserunt
                suscipit aspernatur dicta eius accusantium. Doloremque adipisci
                nisi animi ad.
              </EtcIntroduceSession>
            </LeftEtcBox>
          </LeftContainer>
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
              </LikeContent>
            </RightLikeContianer>
          </RightContainer>
        </BodyContainer>
      </TotalContainer>
    </>
  );
};

export default Mypage;
