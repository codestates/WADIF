import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav/Nav";

const TotalContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const LeftSession = styled.div`
  border-right: 1px solid gray;
  flex: 4;
`;

const LeftEtc = styled.div`
  margin-top: 6em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .circle {
    width: 17em;
    height: 17em;
    background-color: forestgreen;
    border-radius: 50%;
  }
  .imageUpload {
    font-size: 2em;
    font-weight: 800;
    margin-top: 0.5em;
    color: #437eb4;
  }
  .imageDelete {
    font-weight: 500;
    margin-top: 0.5em;
    color: gray;
  }
`;

const RightSession = styled.div`
  flex: 8;
  padding: 3em;
  .reviseContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    ::before {
      content: "";
      width: 101%;
      height: 2px;
      bottom: -1em;
      background-color: gray;
      position: absolute;
    }
    span {
      color: #2d6bdf;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

const SecurityPage = () => {
  return (
    <>
      <Nav />
      <TotalContainer>
        <LeftSession>
          <LeftEtc>
            <div className="circle"></div>
            <span className="imageUpload">이미지 업로드</span>
            <span className="imageDelete">이미지 제거</span>
          </LeftEtc>
        </LeftSession>
        <RightSession>
          <div className="reviseContainer">
            <h1>개인정보 수정</h1>
            <span>수정</span>
          </div>
        </RightSession>
      </TotalContainer>
    </>
  );
};

export default SecurityPage;
