import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Man } from 'styled-icons/icomoon';

const keyframesShimmer = keyframes`
  0% {
    background-position: -80vw 0;
  }
  100% {
    background-position: 80vw 0;
  }
`;

const shimmerAnimation = css`
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 80vw 100%;
  animation: ${keyframesShimmer} 2s infinite linear;
`;

const Comment = styled.div`
  height: 10px;
  width: 98%;
  background: #777;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  border-radius: 0.8em;
  ${({ w80 }) => w80 && 'width: 80%;'}
  ${shimmerAnimation}
`;

const FollowPH = styled(Comment)`
  width: 9em;
`;

const NamePH = styled(Comment)`
  width: 6em;
  height: 13px;
`;

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

const PlaceHolderLeftProfile = () => {
  return (
    <LeftContainer>
      <LeftCircle>
        <LeftProfile />
      </LeftCircle>
      <LeftTextBox>
        <NamePH />
        <FollowPH />
        <FollowPH />
      </LeftTextBox>
      <LeftEtcBox>
        <EtcFollowSession>
          <EtcLeft>
            <FollowPH />
          </EtcLeft>
          <EtcRight>
            <span>
              <FollowPH />
            </span>
          </EtcRight>
        </EtcFollowSession>
        <EtcIntroduceSession>
          <Comment />
          <Comment w80 />
          <Comment />
          <Comment />
        </EtcIntroduceSession>
      </LeftEtcBox>
    </LeftContainer>
  );
};

export default PlaceHolderLeftProfile;
