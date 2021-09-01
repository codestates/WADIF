import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const BoardContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: aliceblue;
  position: relative;
  width: 100%;
  height: 20%;
  padding: 1em;

  &:hover {
    background-color: #f0f0f0;
  }

  .title {
    position: absolute;
    left: 5%;
  }

  .username {
    position: absolute;
    left: 28%;
  }

  .day {
    position: absolute;
    left: 45%;
  }

  .like {
    position: absolute;
    left: 68%;
  }
  .views {
    position: absolute;
    left: 89%;
  }
  .sudo {
    opacity: 0;
  }
  ::before {
    content: '';
    width: 97%;
    height: 1px;
    position: absolute;
    background-color: #575757;
    bottom: 0em;
    /* left: 4.5em; */
  }
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const BoardComponent = (props) => {
  const [data, setData] = useState([]);
  const history = useHistory();
  const getData = async () => {
    const wsdata = await axios.get(
      `https://localhost:4000/posts/${props.data.id}`,
      {
        headers: {
          authorization: `Bearer ${props.token}`,
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
    );
    setData([wsdata.data.data]);
  };
  useEffect(() => {
    if (data.length > 0) {
      history.push({
        pathname: '/debate',
        state: data,
      });
    }
  }, [data]);
  return (
    <BoardContainer onClick={getData}>
      <span className="title">{props.data.title}</span>
      <span className="sudo">0</span>
      <span className="username">{props.data.username}</span>
      <span className="sudo">1</span>
      <span className="day">
        {props.data.createdAt
          ? props.data.createdAt.substring(0, 10)
          : `2021-06-30`}
      </span>
      <span className="sudo">2</span>

      <span className="like">1234</span>
      <span className="sudo">3</span>

      <span className="views">{props.data.views}</span>
      <span className="sudo">4</span>
    </BoardContainer>
  );
};

export default BoardComponent;
