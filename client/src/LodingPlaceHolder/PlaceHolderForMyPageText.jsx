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

const TextContainer = styled.div`
  width: 12em;
  height: 15.5em;
  margin: 2em 0.5em;
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  cursor: pointer;
`;

const shimmerAnimation = css`
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 80vw 100%;
  animation: ${keyframesShimmer} 2s infinite linear;
`;

const CommentShimmerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 1em;
  margin-top: 2em;
  color: #eff1f3;
  animation: ${keyframesFullView} 0.5s forwards
    cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
    <TextContainer>
      <CommentShimmerWrapper>
        <Comment />
        <Comment w80 />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </CommentShimmerWrapper>
    </TextContainer>
  );
};

export default PlaceHolder;
