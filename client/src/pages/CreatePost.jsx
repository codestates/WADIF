import { useState } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav/Nav';
import '../App.css';
import axios from 'axios';

const Container = styled.div`
  font-family: 'IBM Plex Sans KR', sans-serif;
  position: relative;
  height: 65em;
  background: #dbdbdb;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;

  > div {
    position: relative;
    top: -12em;
    width: 90%;
    height: 39em;
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
  .tooltip-right {
    right: -16em;
  }
  .tooltip-left {
    right: 0em;
  }
`;

const CreatePost = ({ handleModalOpen, accessToken }) => {
  const [inputs, setInputs] = useState({
    title: '',
    contents: '',
  });

  const [tooltip, setTooltip] = useState(false);

  const Submit = async () => {
    if (title === '' || contents === '') {
      setTooltip(true);
      setTimeout(() => {
        setTooltip(false);
      }, 2000);
      return;
    }
    try {
      const data = await axios.post(
        'https://localhost:4000/posts',
        {
          title: inputs.title,
          content: inputs.contents,
        },
        {
          headers: {
            authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        },
      );
      console.log(data);
    } catch (err) {
      console.log(err);
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
      <TooltipContainer>
        <ToolTip className={!tooltip ? `tooltip-right` : `tooltip-left`}>
          글과 제목을 입력해주세요!
        </ToolTip>
      </TooltipContainer>
      <Container>
        <div>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={onChange}
            name="title"
          />
          <hr />
          <div className="textAndButton">
            <textarea
              placeholder="내용을 입력하세요"
              value={contents}
              onChange={onChange}
              name="contents"
            />
            <button onClick={Submit}>Post</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CreatePost;
