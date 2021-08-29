import styled, { keyframes, css } from 'styled-components';

const keyframesFullView = keyframes`
  100% {
    width: 100%;
  }
`;

const keyframesShimmer = keyframes`
  0% {
    background-position: -80vw 0;
  }
  100% {
    background-position: 80vw 0;
  }
`;

const PostContainer = styled.div`
  width: 97%;
  height: 30em;
  background-color: #ffffff;
  margin: 1.5em;
  padding: 1em;
  position: relative;
  margin: 0 auto;
  display: flex;
  text-align: center;
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
  padding-top: 0.3em;
  margin-bottom: 0;
  padding-bottom: 0;
`;

const shimmerAnimation = css`
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 80vw 100%;
  animation: ${keyframesShimmer} 2s infinite linear;
`;

const CommentAvatar = styled.div`
  height: 12em;
  width: 50em;
  ${shimmerAnimation}
`;

const CommentShimmerWrapper = styled.div`
  display: flex;
  justify-content: left;
  height: 14em;
  width: 0px;
  margin-bottom: 1em;
  margin-top: 2em;
  margin-left: 1em;
  color: #eff1f3;
  animation: ${keyframesFullView} 0.5s forwards
    cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const Comment = styled.div`
  height: 10px;
  background: #777;
  margin-top: 6px;
  margin-bottom: 6px;
  margin-left: 15px;
  ${({ w80 }) => w80 && 'width: 60%;'}
  ${shimmerAnimation}
`;

const Title = styled(Comment)`
  height: 30px;
  width: 40%;
`;

const PlaceHolder = () => {
  return (
    <PostContainer>
      <UserInfo>
        <CommentShimmerWrapper>
          <CommentAvatar />
        </CommentShimmerWrapper>
        <Comment w80 />
        <Comment />
        <Comment />
        <Comment w80 />
        <Comment />
        <Comment />
        <Comment />
        <Comment w80 />
        <Comment />
      </UserInfo>
    </PostContainer>
  );
};

export default PlaceHolder;
