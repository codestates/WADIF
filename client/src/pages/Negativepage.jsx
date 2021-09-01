import React from 'react';
import styled from 'styled-components';
import Profile from '../components/Profile/Profile';
import { useLocation } from 'react-router-dom';
import Nav from '../components/Nav/Nav';

const TotalContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1em 10em;
  display: flex;
  flex-direction: column;
  background-color: #e4e4e4;

  @media only screen and (max-width: 768px) {
    padding: 2em;
  }
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
  width: 100%;
`;

const Negativepage = ({ handleModalOpen, ...props }) => {
  console.log(props.dummy);
  const location = useLocation();
  const data = location.state.cons;
  return (
    <>
      <Nav handleModalOpen={handleModalOpen} />
      <TotalContainer>
        <HeadSession>
          <h1>
            이 글에 대한 <span>부정</span>적인 의견
          </h1>
        </HeadSession>
        <BodySession>
          {data.map((item) => {
            return (
              <Profile
                key={item.id}
                username={item.username}
                date={item.createdAt}
                content={item.content}
              />
            );
          })}
        </BodySession>
      </TotalContainer>
    </>
  );
};

export default Negativepage;
