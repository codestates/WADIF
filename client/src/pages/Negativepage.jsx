import React from 'react';
import styled from 'styled-components';
import Profile from '../components/Profile/Profile';

const TotalContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1em 6em;
  display: flex;
  flex-direction: column;
  background-color: #c4c4c4;
`;

const HeadSession = styled.div`
  flex: 1;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  border-radius: 5px;
  h1 {
    margin-left: 1em;
    span {
      color: #2020b6;
    }
  }
`;

const BodySession = styled.div`
  flex: 8;
  background-color: #ffffff;
  border-radius: 5px;
  overflow: scroll;
`;

const Negativepage = () => {
  return (
    <TotalContainer>
      <HeadSession>
        <h1>
          이 글에 대한 <span>부정</span>적인 의견
        </h1>
      </HeadSession>
      <BodySession>
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </BodySession>
    </TotalContainer>
  );
};

export default Negativepage;
