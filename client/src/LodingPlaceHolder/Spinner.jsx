import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

const PostContainer = styled.div`
  width: 97%;
  height: 40em;
  background-color: #ffffff;
  margin: 1.5em;
  padding: 1em;
  position: relative;
  margin: 0 auto;
  display: flex;
  text-align: center;
`;

const Spinner2 = styled.div`
  position: relative;
  margin: auto;
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 7px solid #cbd7f3;
  border-top-color: #e77de7; //#4353dd
  border-radius: 50%;
  animation: ${rotation} 1s ease-in-out infinite;
`;

const SpinnerContainer = styled.div`
  height: 100px;
  width: 100px;
  border: 3px solid #f0d1ed; //#2857f1
  border-radius: 50%;
  border-top: none;
  border-right: none;
  animation: ${rotation} 1s linear infinite;
`;
const Spinner = () => {
  return (
    <PostContainer>
      {/* <SpinnerContainer /> */}
      <Spinner2 />
    </PostContainer>
  );
};

export default Spinner;
