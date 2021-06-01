import React from 'react';
import styled from 'styled-components';

function Container({ children }) {
  return <StyledAccountContainer>{children}</StyledAccountContainer>;
}

const StyledAccountContainer = styled.main`
  text-align: center;
  padding: 32px 16px 0px 16px;
  margin: 0px 0px 34px;

  ${({ theme }) => theme.tablet` 
    width: 400px;
    padding: 2rem;
    margin: 130px auto 12px;
    border-radius: 5px;
    border: 1px solid rgb(228, 228, 228);
  `};

  a {
    color: rgb(39, 163, 255);
    text-decoration: underline;
  }
`;

export default Container;
