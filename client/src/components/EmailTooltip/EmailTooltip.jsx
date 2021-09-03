import React from 'react';
import styled from 'styled-components';

const TotalContainer = styled.div`
  position: absolute;
  width: 20%;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4967c7;
  color: white;
  font-size: 12px;
  border-radius: 10px;
  z-index: 20;
  right: ${(props) => {
    if (props.toast === 'on') {
      return '3em';
    } else {
      return '-24em';
    }
  }};
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: 1s;
  top: 7em;
`;

const EmailTooltip = (props) => {
  return (
    <TotalContainer toast={props.toast}>
      이메일 형식을 지켜주세요.
    </TotalContainer>
  );
};

export default EmailTooltip;
