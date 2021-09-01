import React from 'react';
import styled from 'styled-components';
import { Like } from '@styled-icons/boxicons-regular';
import { Close } from 'styled-icons/remix-fill';

const TextContainer = styled.div`
  width: 12em;
  min-height: 14.5em;
  margin: 2em 0.5em;
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  cursor: pointer;
`;

const TextTitle = styled.div`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  height: 10%;
  font-size: 20px;
  -webkit-line-clamp: 1; /* 표시하고자 하는 라인 수 */
  -webkit-box-orient: vertical;
  margin-bottom: 5px;
  color: #920b0b;
  font-weight: 700;
  @media only screen and (max-width: 768px) {
    height: 9%;
    font-size: 16px;
  }
`;

const TextContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 20px;
  max-height: 13em;
  font-size: 14px;
  background-color: #ffffff;
  -webkit-line-clamp: 9; /* 표시하고자 하는 라인 수 */
  -webkit-box-orient: vertical;
  @media only screen and (max-width: 768px) {
    max-height: 15em;
    font-size: 12px;
  }
`;

const TextEtc = styled.div`
  font-size: 12px;
  width: 85%;
  background-color: aliceblue;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: gray;
  }
  div {
    display: flex;
    align-items: center;
  }

  ::before {
    width: 100%;
    height: 2px;
    content: '';
    position: absolute;
    background-color: grey;
    bottom: -1em;
  }
`;

const TextLike = styled(Like)`
  width: 1.3em;
  margin-left: 3px;
`;

const CloseIcon = styled(Close)`
  width: 1.5em;
  position: absolute;
  top: -1em;
  right: 0;
  color: red;
  &:hover {
    color: black;
  }
`;

const MypageText = (props) => {
  const CheckHandler = (e) => {
    props.deleteHandler(props.id);
  };
  console.log(props.id);
  return (
    <TextContainer>
      {props.fix || props.likefix ? <CloseIcon onClick={CheckHandler} /> : null}
      <TextTitle>{props.title}</TextTitle>
      <TextContent>{props.text}</TextContent>
      {/* <TextEtc>
        <span>{props.date}</span>
        <div>
          {props.like}
          <TextLike />
        </div>
      </TextEtc> */}
    </TextContainer>
  );
};

export default MypageText;
