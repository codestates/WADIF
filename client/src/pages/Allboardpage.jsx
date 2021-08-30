import React from 'react';
import styled from 'styled-components';
import BoardComponent from '../components/BoardComponent/BoardComponent';
import Nav from '../components/Nav/Nav';
import NoDataBoard from '../LodingPlaceHolder/NoDataBoard';
import Spinner from '../LodingPlaceHolder/Spinner';

const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 2em;
`;

const HeaderSession = styled.div`
  display: flex;
  background-color: pink;
  height: 4em;
  align-items: center;
  justify-content: space-around;
  font-weight: 700;
`;

const BoardSession = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Allboardpage = () => {
  return (
    <>
      <Nav />
      <TotalContainer>
        <HeaderSession>
          <span>제목</span>
          <span>작성자</span>
          <span>날짜</span>
          <span>추천</span>
          <span>조회수</span>
        </HeaderSession>
        <BoardSession>
          <BoardComponent />
          <BoardComponent />
          <BoardComponent />
          <BoardComponent />
          <BoardComponent />
          <BoardComponent />
          <BoardComponent />
          <BoardComponent />
          <BoardComponent />
          {/* <NoDataBoard />
          <Spinner /> */}
        </BoardSession>
      </TotalContainer>
    </>
  );
};

export default Allboardpage;
