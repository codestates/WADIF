import React from 'react';
import styled from 'styled-components';
import NoDataIMG from './NoData.jpg';

const BoardContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5em 2em;
  margin: 1em;
  width: 100%;
  left: -4em;
  height: 30em;
  transform: translateX(-4em);
  img {
    width: 25em;
    position: relative;
    right: -3em;
  }
  div {
    transform: translateX(3em);
  }
`;

const NoDataBoard = () => {
  return (
    <BoardContainer>
      <img src={NoDataIMG} />
      <div>조회된 게시글이 없습니다</div>
    </BoardContainer>
  );
};

export default NoDataBoard;
