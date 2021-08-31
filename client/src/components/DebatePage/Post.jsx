import styled, { css } from 'styled-components';
import { Man } from 'styled-icons/icomoon';
import { Bookmark2 } from 'styled-icons/remix-fill';
import { Like, Dislike } from 'styled-icons/boxicons-solid';
import { useState } from 'react';

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
  @media only screen and (max-width: 768px) {
    width: 1em;
  }
`;

const DislikeIcon = styled(Dislike)`
  width: 1.5em;
  transform: translate(-0.2em, -0.2em);
  fill: #3774e7;
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
  max-height: 33em;
  .debateImage {
    width: 100%;
    height: 15em;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #943b3b;
    margin-bottom: 1em;
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
  }
  .hits {
    margin-top: 0.5em;
    float: right;
    color: #000000;
    font-size: 0.9em;
  }
`;

const DebatePage = (props) => {
  const data = props.data;
  console.log(data);
  const [mark, setMark] = useState(false);
  const MarkHandler = (e) => {
    if (!mark) {
      setMark(true);
    } else {
      setMark(false);
    }
  };
  return (
    <>
      <PostContainer>
        <UserInfo>
          <div className="profileIcon">
            <ProfileIcon />
          </div>
          <div className="profile">
            <span className="name">{data.username}</span>
            <br />
            <span>{data.createdAt ? data.createdAt : `2020년 1월 1일`}</span>
            <BookMark mark={mark} onClick={MarkHandler} />
          </div>
        </UserInfo>
        <DebateSubject>
          <div className="debateImage"></div>
          <div className="debateInfo">
            <span className="title">{data.title}</span>
            <br />
            <span className="content">{data.content}</span>
          </div>
        </DebateSubject>
        <DebateInfo>
          <LikeIcon />
          <span className="likes"> 3.7K&nbsp;&nbsp;&nbsp;</span>
          <DislikeIcon />
          <span className="likes"> 2.1K</span>
          <span className="connectInput"> 댓글달기</span>
          <span className="hits"> 조회수 {data.views}</span>
        </DebateInfo>
        <div className="row"></div>
      </PostContainer>
    </>
  );
};

export default DebatePage;
