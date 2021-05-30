import React from 'react';
import styled from 'styled-components';

function Divider() {
  return (
    <StyledDivider>
      <span>또는</span>
    </StyledDivider>
  );
}

const StyledDivider = styled.div`
  padding: 10px 0px;
  overflow: hidden;
  text-align: center;

  span {
    position: relative;
    padding: 16px;
    color: rgb(158, 158, 158);
    font-size: 13px;

    &::before {
      content: '';
      position: absolute;
      border-bottom: 1px solid rgb(228, 228, 228);
      top: 50%;
      right: 100%;
      width: 5000px;
    }

    &::after {
      content: '';
      position: absolute;
      border-bottom: 1px solid rgb(228, 228, 228);
      top: 50%;
      left: 100%;
      width: 5000px;
    }
  }
`;

export default Divider;
