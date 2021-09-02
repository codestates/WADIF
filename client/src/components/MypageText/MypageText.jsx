import React from 'react';
import styled from 'styled-components';
import { Like } from '@styled-icons/boxicons-regular';
import { Close } from 'styled-icons/remix-fill';
import { useHistory } from 'react-router-dom';

const TextContainer = styled.div`
  width: 12em;
  min-height: 14.5em;
  margin: 2em 0.5em;
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  cursor: pointer;
  z-index: 10;
  .sudo {
    width: 85%;
    z-index: -5;
    opacity: 0;
    height: 100%;
    position: absolute;
    background-color: aqua;
  }
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

const TextContent = styled.p`
  overflow: hidden;
  display: -webkit-box;
  word-wrap: break-word;
  line-height: 20px;
  max-height: 13em;
  font-size: 14px;
  width: 11em;
  background-color: #ffffff;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

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
  margin-right: 1em;
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
  const history = useHistory();

  const CheckHandler = (e) => {
    props.deleteHandler(props.id);
  };

  const clickHandler = (e) => {
    history.push({
      pathname: '/debate',
      state: [{ id: props.id }],
    });
  };
  return (
    <TextContainer>
      {props.fix || props.likefix ? <CloseIcon onClick={CheckHandler} /> : null}
      <TextTitle>{props.title}</TextTitle>
      <div onClick={clickHandler} className="sudo"></div>
      <TextContent>{props.text}</TextContent>
      <TextEtc>
        <span>{props.date.slice(0, 10)}</span>
        <div>
          {props.like}
          <TextLike />
        </div>
      </TextEtc>
    </TextContainer>
  );
};

export default MypageText;
