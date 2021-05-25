import React from 'react';
import styled, { css } from 'styled-components';

const StyledInput = styled.input`
  /* 공통 스타일 */
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

function Input({ children, placeholder, type, name, ...rest }) {
  return (
    <StyledInput name={name} placeholder={placeholder} type={type} {...rest}>
      {children}
    </StyledInput>
  );
}

// Button.defaultProps = {};

export default Input;
