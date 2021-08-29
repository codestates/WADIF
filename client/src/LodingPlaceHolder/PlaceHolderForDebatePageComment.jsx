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

const shimmerAnimation = css`
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 80vw 100%;
  animation: ${keyframesShimmer} 2s infinite linear;
`;

const CommentAvatar = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
  ${shimmerAnimation}
`;

const CommentShimmerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 1.8em;
  width: 0px;
  margin-bottom: 1em;
  margin-top: 2em;
  color: #eff1f3;
  animation: ${keyframesFullView} 0.5s forwards
    cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const CommentArea = styled.div`
  display: block;
  width: 100%;
  height: 2em;
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

const PlaceHolderComment = () => {
  return (
    <div>
      <CommentShimmerWrapper>
        <CommentAvatar />
        <CommentArea>
          <Comment />
          <Comment w80 />
        </CommentArea>
      </CommentShimmerWrapper>
      <Comment />
    </div>
  );
};

export default PlaceHolderComment;
