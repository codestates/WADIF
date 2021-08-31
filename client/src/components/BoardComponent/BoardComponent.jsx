import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

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

const BoardComponent = (props) => {
  // console.log(props);
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
    <BoardContainer>
      <Link
        to={{
          pathname: `/debate/${props.data.id}`,
        }}
      >
        <span className="title">{props.data.title}</span>
      </Link>
      <span className="username" onClick={getData}>
        {props.data.username}
      </span>
      <span className="day">{props.data.createdAt}</span>
      <span className="like">1234</span>
      <span className="views">{props.data.views}</span>
    </BoardContainer>
  );
};

export default BoardComponent;
