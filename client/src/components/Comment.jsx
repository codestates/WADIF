import styled from "styled-components";
import { Man } from "styled-icons/icomoon";

const Comment = () => {

  const CommentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `;

  const ProfileIcon = styled(Man)`
    width: 4em;
    transform: translate(-0.9em, 0.5em);
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
    padding-top: 0.2em;
    margin-bottom: 0;
    padding-bottom: 0;
    .profileIcon {
      width: 2em;
      height: 2em;
      background-color: #c7c7c7;
      border-radius: 50%;
      position: absolute;
      top: -0.2em;
      left: 0em;
      overflow: hidden;
      margin: auto;
    }
    .profilText {
      position: relative;
      top: -1em;
      left: 2.5em;
      font-size: 5px;
    }
  `;
  const CommentText = styled.div`
    width: 100%;
    font-size: 12px;
  `;

  return (
    <CommentContainer>
      <UserInfo>
        <div className="profileIcon">
          <ProfileIcon />
        </div>
        <div className="profilText">
          <span className="name">안치원</span><br />
          <span>2020년 1월 1일</span>
        </div>
      </UserInfo>
      <CommentText>
        <span>영국 배긴턴에 사는 앨리슨 웹은 최근 한 통의 연락을 받았다. 이름을 밝힐 수 없는 VIP(Very Important Person)가 탄 헬기가 그의 정원 뒷마당에 착륙해도 괜찮으냐는 요청이었다. 인근의 공항이 폐쇄돼 착륙할 곳이 없다는 이유에서다.</span>
      </CommentText>
    </CommentContainer>
  )
};

export default Comment;