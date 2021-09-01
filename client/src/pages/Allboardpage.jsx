import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ArrowSyncOff } from 'styled-icons/fluentui-system-regular';
import BoardComponent from '../components/BoardComponent/BoardComponent';
import Nav from '../components/Nav/Nav';
import NoDataBoard from '../LodingPlaceHolder/NoDataBoard';
import Spinner from '../LodingPlaceHolder/Spinner';
import NotFound from '../LodingPlaceHolder/404NotFound';

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
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const BoardSession = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    /* display: none; */
  }
`;

const Allboardpage = ({ history, handleModalOpen, accessToken }) => {
  const [all, setAll] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    try {
      const data = await axios.get('https://localhost:4000/main?sort=views', {
        headers: {
          authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      setAll(data.data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      history.push('/notfound');
    }
  }, []);

  return (
    <>
      <Nav handleModalOpen={handleModalOpen} />
      <TotalContainer>
        <HeaderSession>
          <span>제목</span>
          <span>작성자</span>
          <span>날짜</span>
          <span>추천</span>
          <span>조회수</span>
        </HeaderSession>
        <BoardSession>
          {isLoading ? (
            <>
              <Spinner />
            </>
          ) : all.length === 0 ? (
            <NoDataBoard />
          ) : (
            all.map((item) => (
              <BoardComponent key={item.id} data={item} token={accessToken} />
            ))
          )}
        </BoardSession>
      </TotalContainer>
    </>
  );
};

export default Allboardpage;
