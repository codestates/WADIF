import React from 'react';
import styled from 'styled-components';
import NFIMG from './404.jpg';

const TotalContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => {
    if (props.padding) {
      return props.padding;
    } else {
      return '1.5em 2em';
    }
  }};
  margin-top: 5em;
  margin: ${(props) => {
    if (props.margin) {
      return props.margin;
    } else {
      return '1em';
    }
  }};
  width: 100%;
  left: -4em;
  height: ${(props) => {
    if (props.height) {
      return props.height;
    } else {
      return '30em';
    }
  }}; // 20em;
  img {
    width: 20em;
  }
  div {
  }
`;

const NotFound = (props) => {
  return (
    <>
      <TotalContainer
        height={props.height}
        padding={props.padding}
        margin={props.margin}
      >
        <img src={NFIMG} />
        <div>
          {props.content
            ? props.content
            : `서버가 요청한 페이지(Resource)를 찾을 수 없습니다.`}
        </div>
      </TotalContainer>
    </>
  );
};

export default NotFound;
