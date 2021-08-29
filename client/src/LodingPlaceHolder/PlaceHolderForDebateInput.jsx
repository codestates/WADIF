import styled, { css, keyframes } from 'styled-components';

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

const CommentAvatar = styled.div`
  height: 17em;
  width: 17em;
  margin-right: 10px;
  ${shimmerAnimation}
`;

const Comment = styled.div`
  height: 10px;
  background: #777;
  margin-top: 6px;
  margin-bottom: 6px;
  width: 7em;
  border-radius: 2em;
  ${shimmerAnimation}
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
`;

const BasicDiv = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0.5em auto;
  padding: 2em;
  position: relative;
`;

const UserInfo = styled(BasicDiv)`
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

const InputReaction = styled(BasicDiv)`
  margin-top: 3em;
  margin-bottom: 0;
  padding-top: 0;
  position: relative;
  top: -1.5em;
  textarea {
    padding: 1em;
    width: 100%;
    height: 5em;
    outline: none;
    overflow: auto;
  }
  input {
    float: right;
    background: #5b78b4;
    color: #fff;
    border-radius: 10%;
    width: 5em;
    height: 2em;
    box-shadow: rgba(255, 255, 255, 0.4) 0 1px 0 0 inset;
    &:hover {
      background-color: #07c;
    }
    &:active {
      background-color: #0064bd;
      box-shadow: none;
    }
  }
`;

const InputContainer = styled(PostContainer)`
  margin: 0;
  padding: 0;
  position: relative;
`;

const SelfUserInfo = styled(UserInfo)`
  .selectContainer {
    position: relative;
    top: -2.5em;
  }
  .profile {
    .name {
      color: #000000;
      font-weight: 600;
      font-size: 18px;
    }
  }
  select {
    position: relative;
    float: right;
    width: 5em;
    height: 2em;
    font-size: 14px;
    z-index: 1;
  }
`;

const PlaceHolderInput = () => {
  return (
    <>
      <InputContainer>
        <div className="row"></div>
        <SelfUserInfo>
          <div className="profileContainer">
            <div className="profileIcon">
              <CommentAvatar />
            </div>
            <div className="profile">
              <Comment />
              <Comment />
            </div>
          </div>
          <div className="selectContainer"></div>
        </SelfUserInfo>
        <InputReaction>
          <textarea></textarea>
          <input type="submit" value="Submit"></input>
        </InputReaction>
      </InputContainer>
    </>
  );
};

export default PlaceHolderInput;
