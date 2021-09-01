import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Man } from 'styled-icons/icomoon';
import { Like } from '@styled-icons/boxicons-regular';
import { Bookmark2 } from 'styled-icons/remix-fill';
import { Sun } from 'styled-icons/bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Dislike } from 'styled-icons/boxicons-regular';

const TopicContainer = styled.div`
  width: 100%;
  height: 20em;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    height: 17em;
    padding: 0.5em 1em 0em;
  }
`;

const BodyContainer = styled.div`
  border-top: 1px solid black;
  padding-top: 1.5em;
  height: 80%;
  display: flex;
  position: relative;
`;

const LeftContainer = styled.div`
  flex: 2;
  background-color: ${(props) => props.bgColor || 'royalblue'};
  border-radius: 10px;
  margin: 0 0em 1em 0;
  position: relative;
  min-width: 10em;
  @media only screen and (max-width: 768px) {
    min-width: 8em;
  }
`;

const LeftSun = styled(Sun)`
  position: absolute;
  width: 2.5em;
  right: 0.5em;
  top: 0.5em;
  color: #000000;
`;

const RightContainer = styled.div`
  flex: 9;
  margin: 0 0em 1em 0;
  /* padding-right: 2em; */
  overflow: auto;
  height: 12em;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const RightTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4em;
  padding-bottom: 0.5em;
  min-width: 5em;
  height: 3em;
  @media only screen and (max-width: 768px) {
    padding: 0.1em 1.4em 0.1em;
    height: 2.5em;
  }
`;

const HeadTitle = styled.h1`
  font-size: 1.7em;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const BookMark = styled(Bookmark2)`
  width: 1em;
  font-size: 1.5em;
  cursor: pointer;
  color: ${(props) => {
    if (props.button) {
      return 'red';
    } else {
      return 'black';
    }
  }};
  &:hover {
    color: #ff0000;
    transition: 0.4s;
  }
`;

const RightBottomContainer = styled.div`
  padding: 1.5em;
  padding-top: 0;
  line-height: 1.5em;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    font-size: 0.9em;
  }
  a {
    color: black;
    text-decoration: none;
  }
`;

const BottomContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 3em;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 768px) {
    height: 2em;
    position: relative;
    top: 1em;
  }
`;

const BottomLeftContainer = styled.div`
  /* background-color: black; */
  display: flex;
  align-items: center;
`;

const BottomLeftCircle = styled.div`
  width: 35px;
  height: 35px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border: 1px solid black;
  /* border-color: #cf8f18; */
  @media only screen and (max-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

const BottomLeftIcon = styled(Man)`
  position: absolute;
  top: 0.5em;
  left: -6px;
  width: 3em;
  color: #7a602f;
  @media only screen and (max-width: 768px) {
    top: 0.5em;
    left: -7px;
    width: 2.7em;
  }
`;

const BottomLeftName = styled.span`
  margin-left: 1em;
  font-size: 1.2em;
  color: #2952ca;
  @media only screen and (max-width: 768px) {
    font-size: 1em;
  }
`;

const BottomRightContainer = styled.div``;

const BottomRightLike = styled(Like)`
  width: 1.5em;
  margin-right: 1em;
  @media only screen and (max-width: 768px) {
    width: 1.2em;
  }
`;

const BottomRightNum = styled.span`
  margin-right: 1em;
  color: red;
  font-weight: 700;
  @media only screen and (max-width: 768px) {
    font-weight: 500;
    font-size: 1em;
  }
`;

const BottomDislike = styled(Dislike)`
  width: 1.5em;
  margin-right: 1em;
  @media only screen and (max-width: 768px) {
    width: 1.2em;
  }
`;

const BottomDislikeNum = styled.span`
  margin-right: 1em;
  color: #1041ca;
  font-weight: 700;
  @media only screen and (max-width: 768px) {
    font-weight: 500;
    font-size: 1em;
  }
`;

const Maintopic = ({ bgColor, postInfo, history }) => {
  const [on, setOn] = useState(false);
  const { title, content, views, username } = postInfo;

  const handleConnect = () => {
    history.push({
      pathname: `/debate`,
      state: [postInfo],
    });
  };

  const handleBookmark = async () => {
    if (on) {
      setOn(false);
      const data = await axios.delete(
        `https://localhost:4000/users/bookmarks/${postInfo.id}`,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    } else {
      setOn(true);
      const data = await axios.post(
        'https://localhost:4000/users/bookmarks',
        {
          postId: postInfo.id,
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }
  };

  useEffect(async () => {
    const data = await axios.get('https://localhost:4000/users/userInfo', {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const likePost = data.data.data.comment;
    const newArr = likePost.filter((item) => item.id === postInfo.id);
    if (newArr.length > 0) {
      setOn(true);
    }
  }, []);

  return (
    <TopicContainer>
      <BodyContainer>
        <LeftContainer bgColor={bgColor}>
          <LeftSun />
        </LeftContainer>
        <RightContainer>
          <RightTopContainer>
            <HeadTitle onClick={handleConnect}>{title}</HeadTitle>
            <BookMark button={on} onClick={handleBookmark} />
          </RightTopContainer>
          <RightBottomContainer onClick={handleConnect}>
            {content}
          </RightBottomContainer>
        </RightContainer>
      </BodyContainer>
      <BottomContainer>
        <BottomLeftContainer>
          <BottomLeftCircle>
            <BottomLeftIcon />
          </BottomLeftCircle>
          <BottomLeftName>{username}</BottomLeftName>
        </BottomLeftContainer>
        <BottomRightContainer>
          <BottomRightLike />
          <BottomRightNum>{postInfo.postLikeCount}</BottomRightNum>
          <BottomDislike />
          <BottomDislikeNum>{postInfo.postHateCount}</BottomDislikeNum>
        </BottomRightContainer>
      </BottomContainer>
    </TopicContainer>
  );
};

export default Maintopic;
