import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BoardContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.5em 2em;
  margin: 1em;
  width: 100%;
  left: -4em;
  transform: translateX(-4em);
  .like {
    transform: translateX(-1em);
  }
  .views {
    transform: translateX(2em);
  }
  ::before {
    content: '';
    width: 95%;
    height: 1px;
    position: absolute;
    background-color: #575757;
    bottom: 0em;
    left: 4.5em;
  }
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    .like {
      transform: translateX(-0.5em);
    }
    .views {
      transform: translateX(3.1em);
    }
  }
`;

const BoardComponent = () => {
  return (
    <BoardContainer>
      <Link to={{ pathname: '/debatepage' }}>
        <span className="title">격해지는 갈등에 대하여</span>
      </Link>
      <span className="username">김우석</span>
      <span className="day">2021-06-30 (토) 15:33</span>
      <span className="like">1234</span>
      <span className="views">66,321</span>
    </BoardContainer>
  );
};

export default BoardComponent;
