import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Maintopic from '../components/Maintopic/Maintopic';
import Nav from '../components/Nav/Nav';

const MypageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #dbdbdb;
`;

const LeftContainer = styled.div`
  flex: 4.5;
  background-color: #ffffff;
  margin: 1.5em;
  margin-right: 0;
  padding: 2em;
  box-shadow: 0 0px 3px 5px rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
  position: relative;
`;

const HotTopic = styled.h1`
  transform: translateX(0.5em);
  color: #b10606;
  font-size: 3em;
`;

const RightContainer = styled.div`
  flex: 2;
  background-color: #ffffff;
  margin: 1.5em;
  box-shadow: 0 0px 3px 5px rgba(0, 0, 0, 0.2);
  position: relative;
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
`;

const RightBoxLeft = styled.span`
  font-size: 0.9em;
  color: #af1f1f;
  font-weight: 700;
`;
const RightBoxRight = styled.span`
  font-size: 0.9em;
  color: #af1f1f;
  font-weight: 700;
`;

const RightTextContainer = styled.div`
  padding: 1em;
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
`;

const RightMainTextBox = styled.textarea.attrs({
  type: 'text',
  placeholder: '본문 내용을 입력하세요',
})`
  margin-top: 2em;
  outline: none;
  border: none;
  width: 100%;
  height: 65vh;
  word-break: break-all;
  resize: none;
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
  &:hover {
    background: #6363a7;
    transition: 0.3s;
  }

  &:active {
    background: #4f75e4;
  }
`;

const Mainpage = () => {
  const titleRef = useRef();
  const textRef = useRef();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [condition, setCondition] = useState(false);

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
    TitleEdit();
    TextEdit();
    setCondition(false);
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
      <Nav />
      <MypageContainer>
        <LeftContainer>
          <HotTopic>Hot Topic</HotTopic>
          <Maintopic bgColor={ColorMaker()} />
          <Maintopic bgColor={ColorMaker()} />
          <Maintopic bgColor={ColorMaker()} />
          <Maintopic bgColor={ColorMaker()} />
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
