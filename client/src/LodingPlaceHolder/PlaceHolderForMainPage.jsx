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
  height: 12em;
  width: 12em;
  margin-right: 10px;
  ${shimmerAnimation}
`;

const CommentShimmerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 14em;
  width: 0px;
  margin-bottom: 1em;
  margin-top: 2em;
  margin-left: 1em;
  color: #eff1f3;
  animation: ${keyframesFullView} 0.5s forwards
    cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const CommentArea = styled.div`
  display: block;
  width: 100%;
`;

const Comment = styled.div`
  height: 10px;
  background: #777;
  margin-top: 6px;
  margin-bottom: 6px;
  ${({ w80 }) => w80 && 'width: 60%;'}
  ${shimmerAnimation}
`;

const Title = styled(Comment)`
  height: 30px;
  width: 40%;
`;

const PlaceHolder = () => {
  return (
    <CommentShimmerWrapper>
      <CommentAvatar />
      <CommentArea>
        <Title />
        <Comment />
        <Comment w80 />
        <Comment />
        <Comment />
      </CommentArea>
    </CommentShimmerWrapper>
  );
};

export default PlaceHolder;
