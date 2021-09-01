import React from 'react';
import styled from 'styled-components';
import { Man } from 'styled-icons/icomoon';

const LeftContainer = styled.div`
  flex: 4;
  background-color: #ffffff;
  position: relative;
  border-right: 1px solid black;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    flex: 1;
    border: none;
    /* flex-direction: row; */
  }
`;

const LeftCircle = styled.div`
  width: 12em;
  height: 12em;
  background-color: #c7c7c7;
  border-radius: 50%;
  top: -6em;
  position: absolute;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    left: 3em;
    width: 11em;
    height: 11em;
  }
  @media only screen and (max-width: 600px) {
    top: -4.2em;
    width: 6em;
    height: 6em;
  }
`;

const LeftProfile = styled(Man)`
  width: 20em;
  transform: translate(-3.3em, 2em);
  @media only screen and (max-width: 768px) {
    transform: translate(-3.8em, 2em);
  }
  @media only screen and (max-width: 600px) {
    width: 10em;
    transform: translate(-1.6em, 1.3em);
  }
`;

const LeftTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 9em;

  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: flex-start;
    position: absolute;
    top: -50%;
    left: 37%;
    margin-top: 0;
  }
`;

const LeftMyname = styled.span`
  font-size: 1.5em;
  margin-bottom: 5px;
  @media only screen and (max-width: 768px) {
    font-weight: 700;
    font-size: 2em;
    margin: 0;
  }
`;

const LeftMyEmail = styled.span`
  margin-bottom: 5px;
`;

const LeftMyJob = styled.span`
  color: #242424;
  display: none;
`;

const LeftEtcBox = styled.div``;

const EtcFollowSession = styled.div`
  display: none;
  position: relative;
  ::before {
    content: '';
    width: 90%;
    height: 2px;
    background-color: #757575;
    position: absolute;
    right: 1.4em;
    bottom: 0;
  }
`;

const EtcLeft = styled.div`
  flex: 1;
  padding: 2em;
  display: flex;
  justify-content: space-between;
  position: relative;
  ::before {
    content: '';
    width: 2px;
    height: 2em;
    background-color: #757575;
    position: absolute;
    right: 0;
    top: 1.5em;
  }
`;

const EtcRight = styled.div`
  flex: 1;
  padding: 2em;
  display: flex;
  justify-content: space-between;
`;

const EtcIntroduceSession = styled.div`
  padding: 2em;
  padding-top: 1em;
  font-size: 1.1em;
  word-break: break-all;
  @media only screen and (max-width: 768px) {
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    width: 28em;
    margin-left: 10em;
    margin-bottom: 5em;
    height: 6em;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    /* line-height: line; */
  }
  @media only screen and (max-width: 600px) {
    margin-left: 7em;
    width: 20em;
  }
`;

const MyPageProfile = ({ userInfo }) => {
  const { username, email, profile } = userInfo;
  return (
    <LeftContainer>
      <LeftCircle>
        <LeftProfile />
      </LeftCircle>
      <LeftTextBox>
        <LeftMyname>{username}</LeftMyname>
        <LeftMyEmail>{email}</LeftMyEmail>
        {/* <LeftMyJob>Frontend Developer</LeftMyJob> */}
      </LeftTextBox>
      <LeftEtcBox>
        <EtcFollowSession>
          <EtcLeft>
            {/* <span>Follow</span>
            <span>1234</span> */}
          </EtcLeft>
          <EtcRight>
            {/* <span>Follower</span>
            <span>1234</span> */}
          </EtcRight>
        </EtcFollowSession>
        <EtcIntroduceSession>{profile}</EtcIntroduceSession>
      </LeftEtcBox>
    </LeftContainer>
  );
};

export default MyPageProfile;
