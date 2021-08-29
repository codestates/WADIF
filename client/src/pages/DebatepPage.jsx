import styled, { css } from 'styled-components';
import { Man } from 'styled-icons/icomoon';
import { Messages } from '@styled-icons/typicons';
import Comment from './Comment';
import { Link } from 'react-router-dom';
import { Bookmark2 } from 'styled-icons/remix-fill';
import { Like, Dislike } from 'styled-icons/boxicons-solid';
import PlaceHolderForDebatePage from '../LodingPlaceHolder/PlaceHolderForDebatePage';
import PlaceHolderComment from '../LodingPlaceHolder/PlaceHolderForDebatePageComment';
import Spinner from '../LodingPlaceHolder/Spinner';
import Post from '../components/DebatePage/Post';
import InputComment from '../components/DebatePage/InputComment';
import PlaceHolderInput from '../LodingPlaceHolder/PlaceHolderForDebateInput';
import Nav from '../components/Nav/Nav';

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
    outline: none;
    overflow: auto;
  }
  input {
    float: right;
    background: #5b78b4;
    color: #fff;
    border-radius: 10%;
    width: 5em;
    height: 2em;
    box-shadow: rgba(255, 255, 255, 0.4) 0 1px 0 0 inset;
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

const DebatePage = () => {
  return (
    <>
      <Nav />
      <DebateContainer>
        <Post />
        <PlaceHolderForDebatePage />
        <Spinner />
        <ReactionContainer>
          <div className="reaction positive">
            <div className="representative">
              긍정적 의견
              <Link to={{ pathname: '/positive' }}>
                <MessageIcon />
              </Link>
            </div>
            <CommentContainer>
              <PlaceHolderComment />
              <PlaceHolderComment />
              <PlaceHolderComment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </CommentContainer>
          </div>
          <div className="reaction negative">
            <div className="representative">
              부정적 의견
              <Link to={{ pathname: '/negative' }}>
                <MessageIcon />
              </Link>
            </div>
            <CommentContainer>
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </CommentContainer>
          </div>
        </ReactionContainer>
        <PlaceHolderInput />
        <InputComment />
      </DebateContainer>
    </>
  );
};

export default DebatePage;
