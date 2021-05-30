import React from 'react';
import styled from 'styled-components';

function Title({ title }) {
  return <StyledTitle>{title}</StyledTitle>;
}

const StyledTitle = styled.h1`
  margin: 0px 0px 32px;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.025em;
  text-align: left;
`;

export default Title;
