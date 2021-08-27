import styled from "styled-components";
import { Man } from "styled-icons/icomoon";

const Comment = () => {

  const CommentContainer = styled.div`
    width: 100%;
    background: #f5f5f5;
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
    margin-bottom: 0;
    padding-bottom: 0;
    .profileIcon {
      width: 2em;
      height: 2em;
      background-color: #c7c7c7;
      border-radius: 50%;
      position: absolute;
      top: 0.5em;
      left: 0.5em;
      overflow: hidden;
      margin: auto;
    }
    .profile {
      position: relative;
      top: -4.5em;
      left: 4em;
      font-size: 5px;
    }
  `;

  return (
    <CommentContainer>
      <UserInfo>
        <div className="profileIcon">
          <ProfileIcon />
        </div>
        <div className="profile">
          <span className="name">안치원</span><br />
          <span>2020년 1월 1일</span>
        </div>
      </UserInfo>
      
    </CommentContainer>
  )
};

export default Comment;