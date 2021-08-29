import { useRef } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav/Nav';
import '../App.css';

const Container = styled.div`
  font-family: 'IBM Plex Sans KR', sans-serif;
  position: relative;
  min-height: 41.75em;
  background: #557085;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;

  > div {
    width: 50em;
    height: 30em;
    background: #fff;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
  }

  input {
    width: 100%;
    height: 15%;
    font-size: 1em;
    color: #3b3737;
    padding: 1.5em;
    padding-bottom: 0;
    border: 0;
    &:focus {
      outline: none;
    }
  }

  textarea {
    color: #3b3737;
    width: 100%;
    height: 30em;
    margin: 5px 0;
    padding: 1.5em;
    border: none;
    outline: none;
    resize: none;
    overflow: scroll;
  }
  button {
    position: relative;
    float: right;
    right: 1.5em;
    bottom: 4em;
    border: 1px solid #6590a1;
    background-color: #fff;
    color: #6590a1;
    padding: 5px;
    border-radius: 0.7em;
    &:hover {
      box-shadow: 2px 2px #99bdff;
      transition: 0.3s;
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
const CreatePost = () => {
  const titleRef = useRef();
  const contentRef = useRef();

  const Submit = () => {
    titleRef.current.value = '';
    contentRef.current.value = '';
  };

  //usestate 시용
  {
    /*
  const [inputs, setInputs] = useState({
    title: "",
    content: ""
  });
    const { title, content } = inputs;

    const onChange = (e) => {
      const { value, name } = e.target;
      const nextInputs = {
        ...inputs,
        [name]: value
      }
      setInputs(nextInputs)
    }
  */
  }

  return (
    <>
      <Nav />
      <Container>
        <div>
          <input type="text" placeholder="제목을 입력하세요" ref={titleRef} />
          <hr />
          <div className="textAndButton">
            <textarea placeholder="내용을 입력하세요" ref={contentRef} />
            <button type="button" onClick={Submit}>
              Post
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CreatePost;
