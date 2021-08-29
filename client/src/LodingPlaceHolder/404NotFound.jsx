import React from 'react';
import styled from 'styled-components';
import NFIMG from './404.jpg';

const TotalContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5em 2em;
  margin: 1em;
  margin-top: 5em;
  width: 100%;
  left: -4em;
  height: 30em;
  img {
    width: 35em;
  }
  div {
  }
`;

const NotFound = () => {
  return (
    <>
      <TotalContainer>
        <img src={NFIMG} />
        <div>서버가 요청한 페이지(Resource)를 찾을 수 없습니다.</div>
      </TotalContainer>
    </>
  );
};

export default NotFound;
