import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Maintopic from '../components/Maintopic/Maintopic';
import Nav from '../components/Nav/Nav';
import PlaceHolder from '../LodingPlaceHolder/PlaceHolderForMainPage';
import NoDataHopTopic from '../LodingPlaceHolder/NoDataHotTopic';

const MypageContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  background-color: #dbdbdb;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    overflow: auto;
    padding-bottom: 5em;
  }
  .tooltip-right {
    right: -15em;
  }
  .tooltip-left {
    right: 1.5em;
  }
`;

const LeftContainer = styled.div`
  flex: 4.5;
  background-color: #ffffff;
  margin: 1.5em;
  margin-right: 0;
  padding: 2em;
  height: 50em;
  box-shadow: 0 0px 3px 5px rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
  position: relative;
  @media only screen and (max-width: 768px) {
    margin: 0.5em;
    padding: 1em;
    margin-bottom: 0.2em;
    box-shadow: 0 0px;
  }
`;

const HotTopic = styled.h1`
  transform: translateX(0.5em);
  color: #b10606;
  font-size: 3em;
  @media only screen and (max-width: 768px) {
    font-size: 1.8em;
  }
`;

const RightContainer = styled.div`
  flex: 1.5;
  background-color: #ffffff;
  margin: 1.5em;
  box-shadow: 0 0px;
  position: relative;
  height: 50em;
  box-shadow: 0 0px 3px 5px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    box-shadow: 0 0px;
    margin: 0.5em;
    margin-top: 0em;
    /* overflow: scroll; */
  }
`;

const RightTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.1em;
  padding-top: 1.5em;
  position: relative;
  ::before {
    content: '';
    width: 92%;
    height: 1px;
    top: 3.5em;
    background-color: #000000;
    position: absolute;
  }
  @media only screen and (max-width: 768px) {
    padding: 0.7em;
    ::before {
      display: none;
    }
  }
`;

const RightBoxLeft = styled.span`
  font-size: 0.9em;
  color: #af1f1f;
  font-weight: 700;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const RightBoxRight = styled.span`
  font-size: 0.9em;
  color: #af1f1f;
  font-weight: 700;
  @media only screen and (max-width: 768px) {
    position: relative;
    left: 0.5em;
  }
`;

const RightTextContainer = styled.div`
  padding: 1em;
  @media only screen and (max-width: 768px) {
    height: 13em;
  }
`;

const RightHeadTextBox = styled.input.attrs({
  type: 'text',
  placeholder: '제목을 입력하세요',
})`
  width: 100%;
  padding-left: 0.2em;
  outline: none;
  border: none;
  font-size: 2em;
  @media only screen and (max-width: 768px) {
    font-size: 1em;
  }
`;

const RightMainTextBox = styled.textarea.attrs({
  type: 'text',
  placeholder: '본문 내용을 입력하세요',
})`
  margin-top: 2em;
  outline: none;
  border: none;
  width: 100%;
  height: 45em;
  word-break: break-all;
  resize: none;
  overflow: auto;
  @media only screen and (max-width: 768px) {
    margin-left: 0.3em;
    height: 10em;
  }
`;

const RightBottomButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 1em 2em;
  border: none;
  outline: none;
  background: #4f75e4;
  color: white;
  z-index: 1;
  &:hover {
    background: #6363a7;
    transition: 0.3s;
  }

  &:active {
    background: #4f75e4;
  }
  @media only screen and (max-width: 768px) {
    padding: 0.7em 1.4em;
  }
`;

const ToopTip = styled.div`
  position: absolute;
  width: 15em;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0e77d3;
  color: #ffffff;
  border-radius: 2px;
  right: 0;
  top: 1.8em;
  z-index: 10;
  transition: 1s;
  @media only screen and (max-width: 768px) {
    top: 6em;
  }
`;

const Mainpage = ({ handleModalOpen }) => {
  const titleRef = useRef();
  const textRef = useRef();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [condition, setCondition] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  function TitleEdit() {
    if (condition) {
      setTitle(titleRef.current.value);
    } else {
      let userTitle = titleRef.current.value;
    }
  }

  function TextEdit() {
    if (condition) {
      setText(textRef.current.value);
    } else {
      let userText = textRef.current.value;
    }
  }

  function PostHandler() {
    setCondition(true);
  }

  function EditHandler() {
    if (textRef.current.value === '' || titleRef.current.value === '') {
      if (condition) {
        setTooltip(true);
        setTimeout(() => {
          setTooltip(false);
        }, 3000);
        setCondition(false);
        titleRef.current.value = '';
        textRef.current.value = '';
      }
    } else {
      TitleEdit();
      TextEdit();
      setCondition(false);
    }
  }

  useEffect(() => {
    EditHandler();
  }, [condition]);

  useEffect(() => {
    const postInfo = { title: title, text: text };
    titleRef.current.value = '';
    textRef.current.value = '';
  }, [text]);

  const ColorMaker = () => {
    const arr = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
    ];
    const result = ['#'];
    for (let i = 0; i < 6; i++) {
      let ranNum = parseInt(Math.random() * 15);
      result.push(arr[ranNum]);
    }
    return result.join('');
  };
  return (
    <>
      <Nav handleModalOpen={handleModalOpen} />
      <MypageContainer>
        <ToopTip className={!tooltip ? `tooltip-right` : `tooltip-left`}>
          글과 제목을 입력해주세요!
        </ToopTip>
        <LeftContainer>
          <HotTopic>Hot Topic</HotTopic>
          <Maintopic bgColor={ColorMaker()} />
          <Maintopic bgColor={ColorMaker()} />
          <Maintopic bgColor={ColorMaker()} />
          <Maintopic bgColor={ColorMaker()} />
          {/* <PlaceHolder />
          <PlaceHolder />
          <PlaceHolder /> */}
          {/* <NoDataHopTopic /> */}
        </LeftContainer>
        <RightContainer>
          <RightTopBox>
            <RightBoxLeft>아이디어가 떠오를 때!</RightBoxLeft>
            <RightBoxRight>WADIF</RightBoxRight>
          </RightTopBox>
          <RightTextContainer>
            <RightHeadTextBox
              ref={titleRef}
              onChange={TitleEdit}
            ></RightHeadTextBox>
            <RightMainTextBox
              ref={textRef}
              onChange={TextEdit}
            ></RightMainTextBox>
          </RightTextContainer>
          <RightBottomButton onClick={PostHandler}>POST</RightBottomButton>
        </RightContainer>
      </MypageContainer>
    </>
  );
};

export default Mainpage;
