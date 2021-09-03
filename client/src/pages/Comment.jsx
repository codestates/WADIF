import styled from 'styled-components';
import { Man } from 'styled-icons/icomoon';
import { Like } from 'styled-icons/boxicons-solid';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LikeContainer = styled.div`
  margin-left: auto;
`;
const ProfileIcon = styled(Man)`
  width: 4em;
  transform: translate(-0.9em, 0.5em);
`;

const LikeIcon = styled(Like)`
  width: 1em;
  transform: translate(-0.2em, -0.1em);
  fill: #3774e7;
  cursor: pointer;
  &:hover {
    position: relative;
    bottom: 1px;
  }
`;

const LikeCount = styled.span`
  font-size: 14px;
`;

const basicDiv = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0.5em auto;
  padding: 2em;
  position: relative;
`;

const UserInfo = styled(basicDiv)`
  padding-top: 0.2em;
  margin-bottom: 0;
  padding-bottom: 0;
  .profileIcon {
    width: 2em;
    height: 2em;
    background-color: #c7c7c7;
    border-radius: 50%;
    position: absolute;
    top: -0.2em;
    left: 0em;
    overflow: hidden;
    margin: auto;
  }
  .profilText {
    position: relative;
    top: -1em;
    left: 2.5em;
    font-size: 5px;
  }
`;
const CommentText = styled.div`
  width: 100%;
  font-size: 12px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Comment = (props) => {
  const [isOn, setIsOn] = useState(false);
  const likeHandler = async () => {
    if (!isOn) {
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/posts/comments/reaction?id=${localStorage.id}`,
        {
          commentId: props.data.id,
          reaction: '1',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        },
      );
      props.data.commentLikeCount++;
      setIsOn(true);
    } else {
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/posts/comments/reaction?id=${localStorage.id}`,
        {
          commentId: props.data.id,
          reaction: '0',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        },
      );

      props.data.commentLikeCount--;
      setIsOn(false);
    }
  };
  return (
    <CommentContainer>
      <UserInfo>
        <div className="profileIcon">
          <ProfileIcon />
        </div>
        <div className="profilText">
          <span className="name">{props.data.username}</span>
          <br />
          <span>
            {props.data.createdAt ? props.data.createdAt : `2020년 1월 1일`}
          </span>
        </div>
      </UserInfo>
      <CommentText>
        <span>{props.data.content}</span>
      </CommentText>
      <LikeContainer>
        <LikeIcon onClick={likeHandler} />
        <LikeCount>{props.data.commentLikeCount}</LikeCount>
      </LikeContainer>
    </CommentContainer>
  );
};

export default Comment;
