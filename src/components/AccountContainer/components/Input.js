import React from 'react';
import styled from 'styled-components';

function Input({ ...rest }) {
  return <StyledInput {...rest} />;
}

const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  outline: none;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 4px;
  color: black;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 0.6rem;
`;

export default Input;
