import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ArrowSyncOff } from 'styled-icons/fluentui-system-regular';
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

const Allboardpage = (props) => {
  const [all, setAll] = useState([]);

  useEffect(async () => {
    const data = await axios.get('https://localhost:4000/main?sort=views', {
      headers: {
        authorization: `Bearer ${props.accessToken}`,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    setAll(data.data.data);
  }, []);

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
          {all.length > 0 ? (
            all.map((item) => {
              return (
                <BoardComponent
                  key={item.id}
                  data={item}
                  token={props.accessToken}
                />
              );
            })
          ) : (
            <NoDataBoard />
          )}
          {/* <Spinner /> */}
        </BoardSession>
      </TotalContainer>
    </>
  );
};

export default Allboardpage;
