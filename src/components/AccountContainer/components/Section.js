import React from 'react';
import styled, { css } from 'styled-components/macro';

function Section({ children, title, input, checkbox }) {
  return (
    <StyledSection input={input} checkbox={checkbox}>
      <label>{title}</label>
      {children}
    </StyledSection>
  );
}

const typeStyles = css`
  ${props =>
    (props.input &&
      css`
        ${({ theme }) => theme.flexColumnSet('center', 'flex-start')};
        margin-bottom: 1rem;
        label {
          margin-bottom: 10px;
        }
      `) ||
    (props.checkbox &&
      css`
        color: #3d3d3d;
        ${({ theme }) => theme.flexSet('flex-start', 'center')};
        & > label {
          order: 1;
          margin-left: 1rem;
        }
      `)};
`;

const StyledSection = styled.div`
  ${typeStyles}
`;

export default Section;
