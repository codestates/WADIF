import styled, { css } from 'styled-components';
import { Man } from 'styled-icons/icomoon';
import { Bookmark2 } from 'styled-icons/remix-fill';
import { Like, Dislike } from 'styled-icons/boxicons-solid';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrench } from 'styled-icons/bootstrap';
import { Close } from 'styled-icons/material-outlined';

const ProfileIcon = styled(Man)`
  width: 4.5em;
  transform: translate(-0.8em, 0.7em);
`;

const BookMark = styled(Bookmark2)`
  width: 2em;
  font-size: 1.5em;
  cursor: pointer;
  float: right;
  position: relative;
  top: -15px;
  left: 10px;
  color: ${(props) => {
    if (props.mark) {
      return '#eb1414';
    } else {
      return '#000000';
    }
  }};

  @media only screen and (max-width: 768px) {
    width: 1em;
    margin-right: 1em;
  }
`;

const LikeIcon = styled(Like)`
  width: 1.5em;
  transform: translate(-0.2em, -0.2em);
  fill: #3774e7;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    width: 1em;
  }
`;

const DislikeIcon = styled(Dislike)`
  width: 1.5em;
  transform: translate(-0.2em, -0.2em);
  fill: #3774e7;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    width: 1em;
  }
`;

const PostContainer = styled.div`
  width: 97%;
  background-color: #ffffff;
  margin: 1.5em;
  padding: 1em;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 0;
  margin-top: 1em;
  .row {
    width: 97%;
    justify-content: center;
    align-items: center;
    margin: 1em auto;
    padding: 1px;
    margin-right: 1em;
    position: relative;
    background: #dbdbdb;
  }
`;

const basicDiv = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0.5em auto;
  padding: 2em;
  position: relative;
`;

const DebateSubject = styled(basicDiv)`
  padding-top: 0;
  padding-bottom: 1em;
  margin-top: 0;
  margin-bottom: 0;
  overflow: auto;
  max-height: 100%;
  .debateImage {
    width: 100%;
    height: 15em;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #943b3b;
    margin-bottom: 1em;
  }
  .debateInfo {
    width: 100%;
    height: 100%;
    .content {
      /* overflow-x: hidden; */
      text-overflow: ellipsis;
      word-break: break-all;
      white-space: pre-line;
    }
  }
  .title {
    margin-top: 5em;
    font-weight: 800;
    font-size: 30px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const UserInfo = styled(basicDiv)`
  padding-top: 0.3em;
  margin-bottom: 0;
  padding-bottom: 0;
  .profileIcon {
    width: 2.7em;
    height: 2.7em;
    background-color: #c7c7c7;
    border-radius: 50%;
    position: absolute;
    top: 0em;
    left: 2.5em;
    overflow: hidden;
    margin: auto;
  }
  .profile {
    position: relative;
    top: -0.5em;
    left: 4.3em;
    width: 95%;
    .name {
      color: #0a0d97;
      font-weight: 700;
      font-size: 18px;
    }
  }
`;

const DebateInfo = styled(basicDiv)`
  margin-top: 0;
  margin-bottom: 0.8em;
  padding-top: 0;
  padding-bottom: 0;
  color: #3774e7;
  .connectInput {
    margin-left: 0.8em;
    display: none;
  }
  .hits {
    margin-top: 0.5em;
    float: right;
    color: #000000;
    font-size: 0.9em;
  }
`;

const WrenchIcon = styled(Wrench)`
  width: 30px;
  position: absolute;
  right: 8em;
  top: 1.3em;
  cursor: pointer;
  &:hover {
    color: red;
  }
  @media only screen and (max-width: 768px) {
    width: 18px;
    top: 1em;
    right: 5.5em;
  }
`;

const CloseIcon = styled(Close)`
  width: 50px;
  position: absolute;
  right: 3.5em;
  top: 0.7em;
  cursor: pointer;
  &:hover {
    color: red;
  }
  @media only screen and (max-width: 768px) {
    width: 27px;
    right: 3em;
  }
`;

const DebatePage = (props) => {
  const data = props.data;
  const postInfo = props.data.data.posts;
  const [mark, setMark] = useState(false);
  const [likeon, setLikeon] = useState(false);
  const [disLikeon, setDisLikeon] = useState(false);
  const history = useHistory();

  const isValid = (userId, postUserId) => {
    if (userId === postUserId) {
      return true;
    } else {
      return false;
    }
  };

  const MarkHandler = async (e) => {
    if (mark) {
      setMark(false);
      const data = await axios.delete(
        `${process.env.REACT_APP_API_URL}/users/bookmarks/${postInfo.id}`,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    } else {
      setMark(true);
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/bookmarks`,
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

  const likeHandler = async () => {
    if (!likeon) {
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/posts/reaction`,
        {
          postId: postInfo.id,
          reaction: '1',
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      setLikeon(true);
      props.renderHandler(postInfo.id);
    } else {
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/posts/reaction`,
        {
          postId: postInfo.id,
          reaction: '0',
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      setLikeon(false);
      props.renderHandler(postInfo.id);
    }
  };

  const dislikeHandler = async () => {
    if (!disLikeon) {
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/posts/reaction`,
        {
          postId: postInfo.id,
          reaction: '2',
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      setDisLikeon(true);
      props.renderHandler(postInfo.id);
    } else {
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/posts/reaction`,
        {
          postId: postInfo.id,
          reaction: '0',
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      setDisLikeon(false);
      props.renderHandler(postInfo.id);
    }
  };

  const wrenchHandler = () => {
    history.push({
      pathname: '/createPost',
      state: { postInfo: postInfo, fix: true },
    });
  };

  const deleteHandler = async () => {
    const data = await axios.delete(
      `${process.env.REACT_APP_API_URL}/posts/${postInfo.id}`,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    history.push({
      pathname: '/mainpage',
    });
  };

  const api = `${process.env.REACT_APP_API_URL}/users/userInfo`;
  useEffect(async () => {
    const data = await axios.get(api, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const likePost = data.data.data.bookmark;
    const newArr = likePost.filter((item) => item.id === postInfo.id);
    if (newArr.length > 0) {
      setMark(true);
    }
  }, []);
  return (
    <>
      <PostContainer>
        <UserInfo>
          <div className="profileIcon">
            <ProfileIcon />
          </div>
          <div className="profile">
            <span className="name">
              {data.data.posts.username ? data.data.posts.username : null}
            </span>
            <br />
            <span>
              {data.data.posts.createdAt
                ? data.data.posts.createdAt
                : `2020년 1월 1일`}
            </span>
            {isValid(props.userId, props.postUserId) ? (
              <WrenchIcon onClick={wrenchHandler} />
            ) : null}
            {isValid(props.userId, props.postUserId) ? (
              <CloseIcon onClick={deleteHandler} />
            ) : null}
            {isValid(props.userId, props.postUserId) ? null : (
              <BookMark mark={mark} onClick={MarkHandler} />
            )}
          </div>
        </UserInfo>
        <DebateSubject>
          <div className="debateImage"></div>
          <div className="debateInfo">
            <span className="title">
              {data.data.posts.title ? data.data.posts.title : null}
            </span>
            <br />
            <span className="content">
              {data.data.posts.content ? data.data.posts.content : null}
            </span>
          </div>
        </DebateSubject>
        <DebateInfo>
          <LikeIcon onClick={likeHandler} />
          <span className="likes">
            {data.data.posts.postLikeCount}&nbsp;&nbsp;&nbsp;
          </span>
          <DislikeIcon onClick={dislikeHandler} />
          <span className="likes">{data.data.posts.postHateCount}</span>
          <span className="connectInput"> 댓글달기</span>
          <span className="hits">
            {' '}
            조회수 {data.data.posts.views ? data.data.posts.views : null}
          </span>
        </DebateInfo>
        <div className="row"></div>
      </PostContainer>
    </>
  );
};

export default DebatePage;
