import styled, { keyframes, css } from 'styled-components';
import NoData from './NoData.jpg';

const HotTopicContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5em 2em;
  margin: 1em;
  width: 100%;
  left: -4em;
  height: 30em;
  img {
    width: 25em;
    position: relative;
    right: 1em;
  }
  div {
    transform: translateX(-1em);
  }
`;

const NoDataHopTopic = () => {
  return (
    <>
      <HotTopicContainer>
        <img src={NoData} />
        <div>조회된 게시글이 없습니다</div>
      </HotTopicContainer>
    </>
  );
};

export default NoDataHopTopic;
