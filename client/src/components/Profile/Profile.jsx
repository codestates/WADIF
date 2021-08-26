import React from "react";
import styled from "styled-components";
import { Like } from "styled-icons/boxicons-regular";
import { Man } from "styled-icons/icomoon";

const Circle = styled.div`
  width: 3em;
  height: 3em;
  background-color: #c7c7c7;
  border-radius: 50%;
  overflow: hidden;
  left: 10px;
`;

const ProfileIcon = styled(Man)`
  width: 6em;
  transform: translate(-1.3em, 0.6em);
`;

const ProfileContainer = styled.div`
  padding: 1em;
  position: relative;

  ::before {
    content: "";
    width: 97.5%;
    height: 2px;
    background-color: black;
    position: absolute;
    z-index: 20;
    bottom: 0em;
  }
`;

const ProfileTop = styled.div`
  display: flex;
  .bodyEtc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .username {
      font-weight: 800;
      margin-left: 1em;
    }
    .time {
      font-size: 14px;
      margin-left: 1em;
      color: gray;
    }
  }
`;

const ProfileText = styled.pre`
  width: 81vw;
  height: 40vh;
  overflow-y: scroll;
  padding: 1em;
  word-break: keep-all;
  white-space: pre-line;
  ::-webkit-scrollbar {
    background-color: #8b4d4d;
    display: none;
  }
`;

const LikeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .likeIcon {
    width: 20px;
  }
  .num {
    color: #9e0505;
  }
  margin-right: 2em;
`;

const Profile = () => {
  let str;

  return (
    <ProfileContainer>
      <ProfileTop>
        <Circle>
          <ProfileIcon />
        </Circle>
        <div className="bodyEtc">
          <span className="username">김우석</span>
          <span className="time">2021-06-30 (토) 15:33</span>
        </div>
      </ProfileTop>
      <ProfileText>{`얼음이 있을 뿐이다 그들에게 생명을 불어 넣는 것은 따뜻한 봄바람이다 풀밭에 속잎나고 가지에 싹이 트고 꽃 피고 새 우는 봄날의 천지는 얼마나 기쁘며 얼마나 아름다우냐? 이것을 얼음 속에서 불러 내는 것이 따뜻한 봄바람이다 인생에 따뜻한 봄바람을 불어 보내는 것은 청춘의 끓는 피다 청춘의 피가 뜨거운지라 인간의 동산에는 사랑의 풀이 돋고 이상의 꽃이 피고 희망의 놀이 뜨고 열락의 새가 운다사랑의 풀이 없으면 인간은 사막이다 오아이스도 없는 사막이다 보이는 끝까지 찾아다녀도 목숨이 있는 때까지 방황하여도 보이는 것은 거친 모래뿐일 것이다 이상의 꽃이 없으면 쓸쓸한 인간에 남는 것은 영락과 부패 뿐이다

싸인 만물은 얼음이 있을 뿐이다 그들에게 생명을 불어 넣는 것은 따뜻한 봄바람이다 풀밭에 속잎나고 가지에 싹이 트고 꽃 피고 새 우는 봄날의 천지는 얼마나 기쁘며 얼마나 아름다우냐? 이것을 얼음 속에서 불러 내는 것이 따뜻한 봄바람이다 인생에 따뜻한 봄바람을 불어 보내는 것은 청춘의 끓는 피다 청춘의 피가 뜨거운지라 인간의 동산에는 사랑의 풀이 돋고 이상의 꽃이 피고 희망의 놀이 뜨고 열락의 새가 운다사랑의 풀이 없으면 인간은 사막이다 오아이스도 없는 사막이다 보이는 끝까지 찾아다녀도 목숨이 있는 때까지 방황하여도 보이는 것은 거친 모래뿐일 것이다 이상의 꽃이 없으면 쓸쓸한 인간에

싸인 만물은 얼음이 있을 뿐이다 그들에게 생명을 불어 넣는 것은 따뜻한 봄바람이다 풀밭에 속잎나고 가지에 싹이 트고 꽃 피고 새 우는 봄날의 천지는 얼마나 기쁘며 얼마나 아름다우냐? 이것을 얼음 속에서 불러 내는 것이 따뜻한 봄바람이다 인생에 따뜻한 봄바람을 불어 보내는 것은 청춘의 끓는 피다 청춘의 피가 뜨거운지라 인간의 동산에는 사랑의 풀이 돋고 이상의 꽃이 피고 희망의 놀이 뜨고 열락의 새가 운다사랑의 풀이 없으면 인간은 사막이다 오아이스도 없는 사막이다 보이는 끝까지 찾아다녀도 목숨이 있는 때까지 방황하여도 보이는 것은 거친 모래뿐일 것이다 이상의 꽃이 없으면 쓸쓸한 인간에 남는 것은 영락과 부패 뿐이다 낙원을 장식하는 천자만홍이 어디 있으며 인생을 풍부하게 하는 온갖 과실이 어디 있으랴? 이상! 우리의 청춘이 가장 많이 품고 있는 이상! 이것이야말로 무한한 가치를 가진 것이다 사람은 크고 작고 간에 이상이 있음으로써 용감하고 굳세게 살 수`}</ProfileText>
      <LikeBox>
        <Like className="likeIcon" />
        <span className="num">1234</span>
      </LikeBox>
    </ProfileContainer>
  );
};

export default Profile;
