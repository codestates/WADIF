import styled, { css } from 'styled-components';
import { Man } from 'styled-icons/icomoon';
import { Messages } from '@styled-icons/typicons';
import { Link } from 'react-router-dom';
import { Bookmark2 } from 'styled-icons/remix-fill';
import { Like, Dislike } from 'styled-icons/boxicons-solid';
import axios from 'axios';

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
  width: 4.5em;
  transform: translate(-0.8em, 0.7em);
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
  margin-top: 1em;
`;

const BasicDiv = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0.5em auto;
  padding: 2em;
  position: relative;
`;

const UserInfo = styled(BasicDiv)`
  padding-top: 0.3em;
  margin-bottom: 0;
  padding-bottom: 0;
  .profileIcon {
    width: 2.7em;
    height: 2.7em;
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
    top: -0.5em;
    left: 4.3em;
    width: 95%;
    .name {
      color: #0a0d97;
      font-weight: 700;
      font-size: 18px;
    }
  }
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const InputReaction = styled(BasicDiv)`
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  position: relative;
  top: -1.5em;
  textarea {
    padding: 1em;
    width: 100%;
    height: 5em;
    resize: none;
    outline: none;
    overflow: auto;
  }
  input {
    float: right;
    background: #3da6ff;
    color: #000000;
    border-radius: 10%;
    width: 5em;
    height: 2em;
    border: none;
    /* box-shadow: rgba(255, 255, 255, 0.4) 0 1px 0 0 inset; */
    &:hover {
      background-color: #07c;
    }
    &:active {
      background-color: #0064bd;
      box-shadow: none;
    }
  }
`;

const InputContainer = styled(PostContainer)`
  margin: 0;
  padding: 0;
  position: relative;
`;

const SelfUserInfo = styled(UserInfo)`
  .selectContainer {
    position: relative;
    top: -2.5em;
  }
  .profile {
    .name {
      color: #000000;
      font-weight: 600;
      font-size: 18px;
    }
  }
  select {
    position: relative;
    float: right;
    width: 5em;
    height: 2em;
    font-size: 14px;
    z-index: 1;
  }
`;

const InputComment = (props) => {
  const year = new Date().getFullYear();
  const month =
    new Date().getMonth() > 10 ? new Date().getMonth() : new Date().getMonth();
  const date = new Date().getDate();
  let fullDate = `${year} ${month + 1 < 10 ? '0' + (month + 1) : month + 1} ${
    date < 10 ? '0' + date : date
  }`;

  return (
    <InputContainer>
      <div className="row"></div>
      <SelfUserInfo>
        <div className="profileContainer">
          <div className="profileIcon">
            <ProfileIcon />
          </div>
          <div className="profile">
            <span className="name">'??? ??????'</span>
            <br />
            <span>{fullDate}</span>
          </div>
        </div>
        <div className="selectContainer">
          <select>
            <option>??????</option>
            <option>??????</option>
          </select>
        </div>
      </SelfUserInfo>
      <InputReaction>
        <textarea></textarea>
        <input
          type="submit"
          value="Submit"
          onClick={props.handleSubmit}
        ></input>
      </InputReaction>
    </InputContainer>
  );
};

export default InputComment;
