import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.colors[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${darken(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
`;

const fontWeightStyles = css`
  ${({ fontWeight }) => {
    const selected = fontWeight;
    return css`
      font-weight: ${selected};
    `;
  }}
`;

const sizeStyles = css`
  ${props =>
    props.size === 'large' &&
    css`
      height: 3rem;
      font-size: 1.25rem;
    `}

  ${props =>
    props.size === 'medium' &&
    css`
      height: 52px;
      font-size: 1rem;
    `}

    ${props =>
    props.size === 'small' &&
    css`
      height: 1.75rem;
      font-size: 0.875rem;
    `}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  ${({ theme }) => theme.flexSet()};
  width: 100%;
  outline: none;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 4px;
  color: black;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 0.6rem;

  /* 굵기 */
  ${fontWeightStyles}

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}
`;

function Button({ children, color, size, fontWeight, ...rest }) {
  return (
    <StyledButton color={color} size={size} fontWeight={fontWeight} {...rest}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'white',
  size: 'medium',
  fontWeight: '400',
};

export default Button;
