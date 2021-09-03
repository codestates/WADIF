import React from 'react';
import styled from 'styled-components';
import { Like } from 'styled-icons/boxicons-regular';
import { Man } from 'styled-icons/icomoon';

const Circle = styled.div`
  width: 3em;
  height: 3em;
  background-color: #e2e2e2;
  border-radius: 50%;
  overflow: hidden;
  left: 10px;
  @media only screen and (max-width: 768px) {
    width: 2.2em;
    height: 2.2em;
  }
`;

const ProfileIcon = styled(Man)`
  width: 6em;
  transform: translate(-1.3em, 0.6em);
  color: white;
  @media only screen and (max-width: 768px) {
    width: 3em;
    transform: translate(-0.3em, 0.7em);
  }
`;

const ProfileContainer = styled.div`
  padding: 1em;
  position: relative;

  ::before {
    content: '';
    width: 95.5%;
    height: 2px;
    background-color: black;
    position: absolute;
    z-index: 20;
    bottom: 0em;
  }
`;

const ProfileTop = styled.div`
  display: flex;
  .bodyEtc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .username {
      font-weight: 800;
      margin-left: 1em;
      @media only screen and (max-width: 768px) {
        font-size: 15px;
        margin-left: 0.8em;
      }
    }
    .time {
      font-size: 14px;
      margin-left: 1em;
      color: gray;
      @media only screen and (max-width: 768px) {
        font-size: 12px;
      }
    }
  }
`;

const ProfileText = styled.pre`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 1em;
  word-break: keep-all;
  white-space: pre-line;
  ::-webkit-scrollbar {
    /* background-color: #8b4d4d; */
    display: none;
  }
`;

const LikeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .likeIcon {
    width: 20px;
  }
  .num {
    color: #9e0505;
  }
  margin-right: 2em;
`;

const Profile = (props) => {
  let str;

  return (
    <ProfileContainer>
      <ProfileTop>
        <Circle>
          <ProfileIcon />
        </Circle>
        <div className="bodyEtc">
          <span className="username">{props.username}</span>
          <span className="time">{props.date}</span>
        </div>
      </ProfileTop>
      <ProfileText>{props.content}</ProfileText>
      <LikeBox>
        <Like className="likeIcon" />
        <span className="num">{props.likeCount}</span>
      </LikeBox>
    </ProfileContainer>
  );
};

export default Profile;
