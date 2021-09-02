import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav/Nav';
import '../App.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  font-family: 'IBM Plex Sans KR', sans-serif;
  position: relative;
  height: 100vh;
  background: #dbdbdb;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  overflow: hidden;

  > div {
    position: relative;

    width: 90%;
    height: 90%;
    box-shadow: 0 3px 8px 5px rgba(0, 0, 0, 0.2);
    background: #fff;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    @media only screen and (max-width: 768px) {
      width: 90%;
      height: 60em;
      top: 0;
    }
  }

  input {
    width: 100%;
    height: 10%;
    font-size: 2em;
    color: #3b3737;
    padding: 1.5em;
    padding-bottom: 0.5em;
    border: 0;
    &:focus {
      outline: none;
    }
  }

  textarea {
    color: #3b3737;
    width: 100%;
    height: 20em;
    margin: 0.1em 0;
    padding: 2.3em;
    padding-left: 2.6em;
    font-size: 1.5em;
    border: none;
    outline: none;
    resize: none;
    overflow: auto;
  }
  button {
    font-size: 17px;
    position: absolute;
    float: right;
    right: 1.5em;
    bottom: 2em;
    background-color: #fff;
    color: #6590a1;
    width: 5em;
    height: 3em;
    border-radius: 0.5em;
    border: none;
    outline: none;
    background: #4f75e4;
    color: white;
    &:hover {
      background: #5970b4;
    }

    &:active {
      background: #4e5f92;
    }
  }
  hr {
    width: 95%;
    justify-content: center;
    align-items: center;
    margin: 1em;
    height: 3px;
    background-color: #ccc;
    z-index: 1;
  }
`;
const ToolTip = styled.div`
  position: absolute;
  width: 15em;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0e77d3;
  color: #ffffff;
  border-radius: 2px;
  top: 7em;
  z-index: 10;
  transition: 1s;
  @media only screen and (max-width: 768px) {
    top: 6em;
  }
`;

const TooltipContainer = styled.div`
  /* overflow-x: hidden; */
  position: absolute;
  right: -5em;
  .tooltip-right {
    right: -16em;
  }
  .tooltip-left {
    right: 0em;
  }
`;

const CreatePost = ({ handleModalOpen }) => {
  const location = useLocation();
  const history = useHistory();
  const [inputs, setInputs] = useState({
    title: '',
    contents: '',
  });
  const [tooltip, setTooltip] = useState(false);
  const titleRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    if (location.state) {
      titleRef.current.value = location.state.postInfo.title;
      contentRef.current.value = location.state.postInfo.content;
      setInputs({
        title: titleRef.current.value,
        contents: contentRef.current.value,
      });
    }
  }, []);

  const Submit = async () => {
    if (location.state === undefined) {
      if (title === '' || contents === '') {
        setTooltip(true);
        setTimeout(() => {
          setTooltip(false);
        }, 2000);
        return;
      }
      try {
        const data = await axios.post(
          `${process.env.REACT_APP_API_URL}/posts`,
          {
            title: inputs.title,
            content: inputs.contents,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          },
        );
        history.push({
          pathname: '/debate',
          state: [data.data.data],
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      const data = await axios.patch(
        `${process.env.REACT_APP_API_URL}/posts`,
        {
          postId: location.state.postInfo.id,
          title: inputs.title,
          content: inputs.contents,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        },
      );
      history.push({
        pathname: '/debate',
        state: [location.state.postInfo],
      });
    }
  };

  const { title, contents } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    const nextInputs = {
      ...inputs,
      [name]: value,
    };
    setInputs(nextInputs);
  };

  return (
    <>
      <Nav handleModalOpen={handleModalOpen} />
      <Container>
        <div>
          <TooltipContainer>
            <ToolTip className={!tooltip ? `tooltip-right` : `tooltip-left`}>
              글과 제목을 입력해주세요!
            </ToolTip>
          </TooltipContainer>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={onChange}
            name="title"
            ref={titleRef}
          />
          <hr />
          <div className="textAndButton">
            <textarea
              placeholder="내용을 입력하세요"
              value={contents}
              onChange={onChange}
              name="contents"
              ref={contentRef}
            />
            <button onClick={Submit}>{location.state ? `수정` : `작성`}</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CreatePost;
