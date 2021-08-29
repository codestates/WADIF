import React from 'react';
import styled from 'styled-components';
import { Man } from 'styled-icons/icomoon';

const LeftContainer = styled.div`
  flex: 4;
  background-color: #ffffff;
  position: relative;
  border-right: 1px solid black;
`;

const LeftCircle = styled.div`
  width: 12em;
  height: 12em;
  background-color: #c7c7c7;
  border-radius: 50%;
  position: absolute;
  top: -6em;
  left: 7.5em;
  overflow: hidden;
`;

const LeftProfile = styled(Man)`
  width: 20em;
  transform: translate(-3.3em, 2em);
`;

const LeftTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 7em;
  align-items: center;
`;

const LeftMyname = styled.span`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const LeftMyEmail = styled.span`
  margin-bottom: 5px;
`;

const LeftMyJob = styled.span`
  color: gray;
`;

const LeftEtcBox = styled.div``;

const EtcFollowSession = styled.div`
  display: flex;
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
`;

const MyPageProfile = () => {
  return (
    <LeftContainer>
      <LeftCircle>
        <LeftProfile />
      </LeftCircle>
      <LeftTextBox>
        <LeftMyname>김우석</LeftMyname>
        <LeftMyEmail>vvsogi@gmail.com</LeftMyEmail>
        <LeftMyJob>Frontend Developer</LeftMyJob>
      </LeftTextBox>
      <LeftEtcBox>
        <EtcFollowSession>
          <EtcLeft>
            <span>Follow</span>
            <span>1234</span>
          </EtcLeft>
          <EtcRight>
            <span>Follower</span>
            <span>1234</span>
          </EtcRight>
        </EtcFollowSession>
        <EtcIntroduceSession>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          animi sint corporis temporibus obcaecati! Voluptas, voluptates maxime!
          Minima, quibusdam. Deserunt suscipit aspernatur dicta eius
          accusantium. Doloremque adipisci nisi animi ad. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Delectus animi sint corporis
          temporibus obcaecati! Voluptas, voluptates maxime! Minima, quibusdam.
          Deserunt suscipit aspernatur dicta eius accusantium. Doloremque
          adipisci nisi animi ad.
        </EtcIntroduceSession>
      </LeftEtcBox>
    </LeftContainer>
  );
};

export default MyPageProfile;
