import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  .button {
    display: block;
    margin: 0 auto;
    margin-top: 50px;
    border-radius: 6px;
    padding: 20px;
    z-index: 777;
  }

  .modal-background {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.473);
    opacity: 100%;
    height: 60em;
  }

  .modal-card {
    margin: 0 auto;
    display: flex;
    margin-top: 250px;
    width: 300px;
    height: 200px;
    background-color: lightgray;
    border-radius: 5px;
    background: rgba(255, 255, 255, 1);
    flex-direction: column;
    .askLogout {
      height: 50%;
      margin: auto;
      display: table-cell;
      vertical-align: middle;
      padding: 3em 0;
    }
    .choose {
      display: flex;
      flex-direction: row;
      height: 40%;
    }

    .yesBx {
      border-top: 1px solid #dbdbdb;
      border-right: 1px solid #dbdbdb;
      height: 100%;
      width: 50%;
      padding: 2em 2.9em;
      cursor: pointer;
    }
    .noBx {
      border-top: 1px solid #dbdbdb;
      height: 100%;
      width: 50%;
      padding: 2em 3.7em;
      cursor: pointer;
    }
    .yes,
    .no {
      margin: 0em;
      padding: 0;
      width: 100%;
    }
  }
`;

const LogOutModal = ({ show, handleModalClose }) => {
  useEffect(() => {
    document.body.style.cssText = `
      // position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;
      height: 50em;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, [show]);

  return (
    <>
      <ModalContainer>
        <div hidden={!show}>
          <div className="modal-background" onClick={handleModalClose}>
            <div className="modal-card">
              <div className="askLogout">로그아웃 하시겠습니까?</div>
              <div className="choose">
                <div className="yesBx">
                  <div className="yes">로그아웃</div>
                </div>
                <div className="noBx">
                  <div className="no">취소</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};

export default LogOutModal;
