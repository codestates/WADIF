import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Scales } from '@styled-icons/remix-fill/Scales';
import { Search } from '@styled-icons/boxicons-regular/Search';
import { Clipboard, GearFill, PlusCircle } from 'styled-icons/bootstrap';
import { ExitToApp, ManageAccounts } from 'styled-icons/material-outlined';

const NavContainer = styled.div`
  width: 100%;
  height: ${(props) => props.height || '6em'};
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
`;
const ClipboardIcon = styled(Clipboard)`
  width: 1em;
  cursor: pointer;
  color: black;
  &:hover {
    color: royalblue;
  }
`;
const GearFillIcon = styled(GearFill)`
  width: 1em;
  cursor: pointer;
  color: black;
  &:hover {
    color: royalblue;
  }
`;
const ManageAccountsIcon = styled(ManageAccounts)`
  width: 1em;
  cursor: pointer;
  color: black;
  &:hover {
    color: royalblue;
  }
`;
const ExitToAppIcon = styled(ExitToApp)`
  width: 1em;
  cursor: pointer;
  color: black;
  &:hover {
    color: royalblue;
  }
`;

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
      border-bottom: 1px solid #6f91f0;
      height: 50%;
    }
    .choose {
      display: flex;
      flex-direction: row;
      height: 50%;
    }

    .yes {
      border-right: 1px solid #6f91f0;
      width: 50%;
      height: 100%;
    }
    .no {
      height: 50%;
    }
  }
`;
const Nav = ({ handleModalOpen }) => {
  return (
    <NavContainer>
      <LogoContainer>
        <Link to={{ pathname: '/' }}>
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
          </Link>
        </IconList>
        <IconList>
          <Link to="/Allboard">
            <ClipboardIcon />
          </Link>
        </IconList>
        <IconList>
          <Link to="/mypage">
            <ManageAccountsIcon />
          </Link>
        </IconList>
        <IconList>
          {/* <Link to="/login"> */}
          <ExitToAppIcon onClick={handleModalOpen}></ExitToAppIcon>
          {/* </Link> */}
        </IconList>
      </IconContainer>
    </NavContainer>
  );
};

export default Nav;
