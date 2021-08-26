import styled, { css } from "styled-components";
import { Like } from "styled-icons/boxicons-regular";
import { Man } from "styled-icons/icomoon";
import { Messages } from "@styled-icons/typicons";

const DebatePage = () => {
  const DebateContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    position: relative;
    background: #dbdbdb;
    flex-direction: column;
    
  `;

  const ProfileIcon = styled(Man)`
    width: 4em;
    transform: translate(-0.9em, 0.5em);
  `;

  const MessageIcon = styled(Messages)`
    transform: translate(0, 0.1em);
    width: 1.2em;
    fill: black;
    float: right;
  `;

  const LikeIcon = styled(Like)`
    width: 1.5em;
    transform: translate(-0.2em, -0.2em);
    fill: #3774e7;
  `;

  const PostContainer = styled.div`
    width: 97%;
    background-color: #ffffff;
    margin: 1.5em;
    padding: 1em;
    position: relative;
    margin-bottom: 0;
    padding-bottom: 0;
    margin-top: 2em;
    .row {
      width: 97%;
      justify-content: center;
      align-items: center;
      margin: 1em auto;
      padding: 1px;
      margin-right: 1px;
      position: relative;
      background: #dbdbdb;
    }
  `;
  
  const basicDiv = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0.5em auto;
    padding: 2em;
    position: relative;
  `;

  

  const DebateSubject = styled(basicDiv)`
    padding-top: 0;
    padding-bottom: 1em;
    margin-top: 0;
    margin-bottom: 0;
    overflow: auto;
    max-height: 33em;
    .debateImage {
      width: 100%;
      height: 15em;
      justify-content: center;
      align-items: center;
      position: relative;
      background: #943b3b;
      margin-bottom: 1em;
    }
    .title {
      margin-top: 5em;
      font-weight: 800;
      font-size: 30px;
    }
    
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
      top: 0em;
      left: 2.5em;
      overflow: hidden;
      margin: auto;
    }
    .profile {
      position: relative;
      top: -6em;
      left: 9em;
      font-size: 5px;
      .name {
        color: #0a0d97;
        font-weight: 700;
      }
    }
  `;

  const CommentUserInfo = styled(UserInfo)`
    position: relative;
    left: -2.2em;
  `;

  const DebateInfo = styled(basicDiv)`
    margin-top: 0;
    margin-bottom: 0.8em;
    padding-top: 0;
    padding-bottom: 0;
    color: #3774e7;
    .connectInput {
      margin-left: 0.8em;
    }
    .hits {
      margin-top: 0.5em;
      float: right;
      color: #000000;
      font-size: 0.9em;
    }
  `;
  
  const ReactionContainer = styled(PostContainer)`
    margin-top: 0;
    margin-bottom: 0;
    display: flex;
    flex-direction: row;

    > .reaction {
      width: 50%;
      justify-content: center;
      align-items: center;
      padding: 2em;
      position: relative;
      padding-top: 0;
      
    }

    > .positive {
      border-right: solid #dbdbdb;
      .representative {
        color: #3026b8;
      }
    }

    > .negative {
      .representative {
        color: #810f0f;
      }
    }

    .representative {
      font-size: 30px;
    }
  `;

  const InputReaction = styled(basicDiv)`

  `;

  const InputContiner = styled(PostContainer)`

  `;

  return (
    <>
      <DebateContainer>
        <PostContainer>
          <UserInfo>
            <div className="profileIcon">
              <ProfileIcon />
            </div>
            <div className="profile">
              <span className="name">안치원</span><br />
              <span>2020년 1월 1일</span>
            </div>
          </UserInfo>
          <DebateSubject>
            <div className="debateImage"></div>
            <div className="debateInfo">
              <span className="title">제목이 들어갈 자리</span><br />
              <span className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, hic perferendis! Vero, provident quo quia dignissimos quaerat quidem odio distinctio veritatis saepe, inventore temporibus eaque enim labore magnam, porro voluptate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, hic perferendis! Vero, provident quo quia dignissimos quaerat quidem odio distinctio veritatis saepe, inventore temporibus eaque enim labore magnam, porro voluptate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, hic perferendis! Vero, provident quo quia dignissimos quaerat quidem odio distinctio veritatis saepe, inventore temporibus eaque enim lLorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, hic perferendis! Vero, provident quo quia dignissimos quaerat quidem odio distinctio veritatis saepe, inventore temporibus eaque enim labore magnam, porro voluptate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, hic perferendis! Vero, provident quo quia dignissimos quaerat quidem odio distinctio veritatis saepe, inventore temporibus eaque enim labore magnam, porro voluptate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, hic perferendis! Vero, provident quo quia dignissimos quaerat quidem odio distinctio veritatis saepe, inventore temporibus eaque enim l</span>
            </div>
          </DebateSubject>
          <DebateInfo>
            <LikeIcon />
            <span className="likes"> 3.7K</span>
            <span className="connectInput"> 댓글달기</span>
            <span className="hits"> 조회수 300000</span>
          </DebateInfo>
          <div className="row"></div>
        </PostContainer>
        <ReactionContainer>
          <div className="reaction positive">
            <div className="representative">
              긍정적 의견
              <MessageIcon />
            </div>
            <CommentUserInfo>
            <div className="profileIcon">
              <ProfileIcon />
            </div>
            <div className="profile">
              <span className="name">안치원</span><br />
              <span>2020년 1월 1일</span>
            </div>
          </CommentUserInfo>
          </div>
          <div className="reaction negative">
            <div className="representative">
              부정적 의견
              <MessageIcon />
            </div>
          </div>
        </ReactionContainer>
        <InputContiner>
          <CommentUserInfo>
            <div className="profileIcon">
              <ProfileIcon />
            </div>
            <div className="profile">
              <span className="name">안치원</span><br />
              <span>2020년 1월 1일</span>
            </div>
          </CommentUserInfo>
          <InputReaction>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <input type="submit"></input>
          </InputReaction>
        </InputContiner>
      </DebateContainer>
    </>
  )
}

export default DebatePage;