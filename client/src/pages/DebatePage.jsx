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
import NotFound from '../LodingPlaceHolder/404NotFound';
import Nav from '../components/Nav/Nav';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const DebateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  position: relative;
  background: #dbdbdb;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
  }
`;

const ProfileIcon = styled(Man)`
  width: 4.5em;
  transform: translate(-0.8em, 0.7em);
  @media only screen and (max-width: 768px) {
  }
`;

const MessageIcon = styled(Messages)`
  transform: translate(0, 0.1em);
  width: 1.2em;
  fill: black;
  float: right;
  @media only screen and (max-width: 768px) {
    width: 1em;
  }
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
      @media only screen and (max-width: 768px) {
        font-size: 18px;
      }
    }
  }

  > .negative {
    .representative {
      color: #810f0f;
      @media only screen and (max-width: 768px) {
        font-size: 18px;
      }
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

const DebatePage = ({ handleModalOpen, ...props }) => {
  const location = useLocation();
  const data = location.state;
  const [postData, setPostData] = useState([]);
  const [pros, setPros] = useState([]);
  const [cons, setCons] = useState([]);
  const [userId, setUserId] = useState();
  const [postUserId, setPostUserId] = useState();

  useEffect(async () => {
    const postdata = await axios.get(
      `https://localhost:4000/posts/${data[0].id}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
    );
    setPostData(postdata.data);
    setPros(
      postdata.data.data.comments.filter((item) => item.opinion === 'pros'),
    );
    setCons(
      postdata.data.data.comments.filter((item) => item.opinion === 'cons'),
    );
    setUserId(postdata.data.data.posts.user_id);
    setPostUserId(postdata.data.data.users.id);
  }, []);

  const handleSubmit = async (e) => {
    const content = e.target.previousSibling.value;
    const opinion =
      e.target.parentNode.previousSibling.children[1].firstChild.value;
    const postId = data[0].id;

    const contentData = await axios.post(
      'https://localhost:4000/posts/comments',
      {
        postId: postId,
        content: content,
        opinion: opinion === '긍정' ? 'pros' : 'cons',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
    );
    const postdata = await axios.get(
      `https://localhost:4000/posts/${data[0].id}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
    );
    setPostData(postdata.data);
    setPros(
      postdata.data.data.comments.filter((item) => item.opinion === 'pros'),
    );
    setCons(
      postdata.data.data.comments.filter((item) => item.opinion === 'cons'),
    );
    e.target.previousSibling.value = '';
  };

  const renderHandler = async (item) => {
    const data = await axios.get(
      `https://localhost:4000/posts/${item}?notview=1`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
    );
    setPostData(data.data);
  };

  return (
    <>
      <Nav handleModalOpen={handleModalOpen} />
      <DebateContainer>
        {postData.length === 0 ? (
          <PlaceHolderForDebatePage />
        ) : (
          <Post
            data={postData}
            renderHandler={renderHandler}
            userId={userId}
            postUserId={postUserId}
          />
        )}
        <ReactionContainer>
          <div className="reaction positive">
            <div className="representative">
              긍정적 의견
              <Link to={{ pathname: '/positive', state: { pros: pros } }}>
                <MessageIcon />
              </Link>
            </div>
            <CommentContainer>
              {/* <PlaceHolderComment />
              <PlaceHolderComment />
              <PlaceHolderComment /> */}
              <div className="NoComment">
                {pros.length !== 0 ? (
                  pros.slice(0, 3).map((item) => {
                    return (
                      <Comment
                        key={item.id}
                        data={item}
                        renderHandler={renderHandler}
                      />
                    );
                  })
                ) : (
                  <NotFound height="15em" padding="0" margin="0" content=" " />
                )}
              </div>
            </CommentContainer>
          </div>
          <div className="reaction negative">
            <div className="representative">
              부정적 의견
              <Link to={{ pathname: '/negative', state: { cons: cons } }}>
                <MessageIcon />
              </Link>
            </div>
            <CommentContainer>
              <div className="NoComment">
                {cons.length !== 0 ? (
                  cons.slice(0, 3).map((item) => {
                    return (
                      <Comment
                        key={item.id}
                        data={item}
                        renderHandler={renderHandler}
                      />
                    );
                  })
                ) : (
                  <NotFound height="15em" padding="0" margin="0" content=" " />
                )}
              </div>
            </CommentContainer>
          </div>
        </ReactionContainer>
        {/* <PlaceHolderInput /> */}
        <InputComment handleSubmit={handleSubmit} />
      </DebateContainer>
    </>
  );
};

export default DebatePage;
