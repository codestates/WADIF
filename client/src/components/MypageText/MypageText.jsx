import React from "react";
import styled from "styled-components";
import { Like } from "@styled-icons/boxicons-regular";

const TextContainer = styled.div`
  width: 12em;
  height: 13.5em;
  margin: 2em 0.5em;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
`;

const TextContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 20px;
  max-height: 13em;
  font-size: 14px;
  background-color: #ffffff;
  -webkit-line-clamp: 9; /* 표시하고자 하는 라인 수 */
  -webkit-box-orient: vertical;
`;

const TextEtc = styled.div`
  font-size: 12px;
  width: 85%;
  /* padding: 1em; */
  /* margin: 2em; */
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: gray;
  }
  div {
    display: flex;
    align-items: center;
  }

  ::before {
    width: 100%;
    height: 2px;
    content: "";
    position: absolute;
    background-color: grey;
    bottom: -1em;
  }
`;

const TextLike = styled(Like)`
  width: 1.3em;
  margin-left: 3px;
`;

const MypageText = () => {
  return (
    <TextContainer>
      <TextContent>
        하는 온갖 과실이 어디 있으랴? 이상! 우리의 청춘이 가장 많이 품고 있는
        이상! 이것이야말로 무한한 가치를 위하여서 그리하였는가? 아니다 그들은
        커다란 이상 곧 만천하의 대중을 품에 안고 그들에게 밝은 길을 찾아 주며
        그들을 행복스럽고 평화스러운 곳으로 인도하겠다는 커다란 이상을 품었기
        때문이다 그러므로 그들은 길지 아니한 목숨을 사는가 싶이 살았으며 그들의
        그림자는 천고에 사라지지 않는 것이다 이것은 현저하게 일월과 과실이 어디
        있으랴? 이상! 우리의 청춘이 가장 많이 품고 있는 이상! 이것이야말로
        무한한 가치를 가진 것이다 사람은 크고 작고 간에 이상이 있음으로써
        용감하고 굳세게 살 수 있는 것이다
      </TextContent>
      <TextEtc>
        <span>2021-06-30 (수)</span>
        <div>
          1234
          <TextLike />
        </div>
      </TextEtc>
    </TextContainer>
  );
};

export default MypageText;
