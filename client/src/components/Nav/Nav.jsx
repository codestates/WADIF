import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Scales } from '@styled-icons/remix-fill/Scales';
import { Search } from '@styled-icons/boxicons-regular/Search';
import { Clipboard, PlusCircle } from 'styled-icons/bootstrap';
import {
  ExitToApp,
  ManageAccounts,
  Menu,
} from 'styled-icons/material-outlined';
import { Close } from 'styled-icons/remix-fill';
import LogOutModal from './LogOutModal';

const NavContainer = styled.div`
  width: 100%;
  height: ${(props) => props.height || '5em'};
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 3em;
  margin-left: 2em;
  &:before {
    content: '';
    width: 0.1em;
    height: 3em;
    background-color: black;
    position: absolute;
    left: 7em;
  }
`;

const LogoIcon = styled(Scales)`
  /* background-color: blue; */
  width: 100%;
  color: black;
`;

const SearchContainer = styled.div`
  width: 30em;
  height: 5em;
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 20em;
  display: none;
`;

const SearchIcon = styled(Search)`
  width: 1em;
  position: absolute;
  left: 0.7em;
`;

const SearchInput = styled.input.attrs({
  type: 'text',
})`
  border-radius: 0.2em;
  border: none;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
  width: calc(100% - 5em);
  height: 1em;
  padding: 1.3em 3em;
  outline: none;
`;

const IconContainer = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  transition: 1s;
  .menu {
    display: none;
    @media only screen and (max-width: 768px) {
      display: block;
    }
  }
`;

const IconList = styled.li`
  font-size: 2em;
  margin-right: 1.5em;
  width: 0.5em;
`;

const PlusIcon = styled(PlusCircle)`
  width: 1em;
  color: black;
  cursor: pointer;
  &:hover {
    color: royalblue;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
  &:hover {
    & + span {
      visibility: visible;
      opacity: 0.8;
    }
  }
`;
const ClipboardIcon = styled(Clipboard)`
  width: 1em;
  cursor: pointer;
  color: black;
  &:hover {
    color: royalblue;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
  &:hover {
    & + span {
      visibility: visible;
      opacity: 0.8;
    }
  }
`;
const ManageAccountsIcon = styled(ManageAccounts)`
  width: 1em;
  cursor: pointer;
  color: black;
  &:hover {
    color: royalblue;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
  &:hover {
    & + span {
      visibility: visible;
      opacity: 0.8;
    }
  }
`;
const ExitToAppIcon = styled(ExitToApp)`
  width: 1em;
  cursor: pointer;
  color: black;
  &:hover {
    color: royalblue;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
  &:hover {
    & + span {
      visibility: visible;
      opacity: 0.8;
    }
  }
`;

const MenuBar = styled(Menu)`
  width: 1em;
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    &:hover {
      color: #a51d1d;
    }
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 100;
  .backgroundModal {
    background-color: #cacaca8b;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

const Modal = styled.div`
  position: relative;
  width: 60%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 5px 500px rgba(0, 0, 0, 0.5);

  a {
    transition: 0.3s;
    text-decoration: none;
    color: #000000;
    font-weight: 800;
    font-size: 32px;
    margin: 0.8em;
    &:hover {
      color: royalblue;
    }
  }
`;

const CloseButton = styled(Close)`
  position: absolute;
  width: 2.5em;
  top: 5px;
  right: 5px;
  color: #c22d2d;
  cursor: pointer;
  &:hover {
    color: #242323;
  }
`;
const LogOutToolTip = styled.span`
  position: absolute;
  width: 4em;
  height: 1.5em;
  top: 5em;
  right: 1.3em;
  visibility: hidden;
  background-color: #474040;
  padding: 1em 0;
  margin: 0;
  opacity: 0;
  line-height: 0.4em;
  transition: all 0.3s;
  z-index: 2;
  font-size: 15px;
  color: #fff;
  justify-content: center;
  text-align: center;
  border-radius: 3px;
  &:after {
    content: ' ';
    position: absolute;
    top: -1.5em;
    left: 1.4em;
    border-style: solid;
    border-width: 10px;
    height: 2px;
    border-color: transparent transparent #474040 transparent;
  }
`;

const PlusToolTip = styled(LogOutToolTip)`
  width: 6em;
  right: 13.1em;
  &:after {
    left: 2.4em;
  }
`;

const ClipboardToolTip = styled(LogOutToolTip)`
  width: 7em;
  right: 8.4em;
  &:after {
    left: 3em;
  }
`;

const ManageAccountsToolTip = styled(LogOutToolTip)`
  width: 6em;
  right: 4.6em;
  &:after {
    left: 2.4em;
  }
`;

const Nav = ({ handleModalOpen }) => {
  const [modal, setModal] = useState(false);
  const OpenModal = () => {
    setModal(true);
  };
  const CloseModal = () => {
    setModal(false);
  };
  return (
    <NavContainer>
      {modal ? (
        <ModalContainer>
          <div className="backgroundModal" onClick={CloseModal}></div>
          <Modal>
            <Link to="/createPost">
              <span>게시물 작성</span>
            </Link>
            <Link to="/Allboard">
              <span>모든 게시물 보기</span>
            </Link>
            <Link to="/mypage">
              <span>마이 페이지</span>
            </Link>
            <Link to="/login">
              <span>로그아웃</span>
            </Link>
            <CloseButton onClick={CloseModal} />
          </Modal>
        </ModalContainer>
      ) : null}
      <LogoContainer>
        <Link to={{ pathname: '/main' }}>
          <LogoIcon />
        </Link>
      </LogoContainer>
      <SearchContainer>
        <SearchIcon />
        <SearchInput />
      </SearchContainer>
      <IconContainer>
        <IconList>
          <Link to="/createPost">
            <PlusIcon />
            <PlusToolTip>게시물 작성</PlusToolTip>
          </Link>
        </IconList>
        <IconList>
          <Link to="/Allboard">
            <ClipboardIcon />
            <ClipboardToolTip>게시물 목록 조회</ClipboardToolTip>
          </Link>
        </IconList>
        <IconList>
          <Link to="/mypage">
            <ManageAccountsIcon />
            <ManageAccountsToolTip>개인정보 수정</ManageAccountsToolTip>
          </Link>
        </IconList>
        <IconList>
          <ExitToAppIcon onClick={handleModalOpen}></ExitToAppIcon>
          <LogOutToolTip>로그아웃</LogOutToolTip>
          {/* </Link> */}
        </IconList>
        <IconList className="menu">
          <MenuBar onClick={OpenModal} />
        </IconList>
      </IconContainer>
    </NavContainer>
  );
};

export default Nav;
