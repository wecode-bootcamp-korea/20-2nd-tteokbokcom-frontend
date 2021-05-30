import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

function Button({
  children,
  color = 'white',
  size = 'medium',
  fontWeight = '400',
  fullWidth,
  outline,
  ...rest
}) {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      fontWeight={fontWeight}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.colors[color];
    return css`
      background: ${selected};
      color: ${selected === '#FFF' ? 'black' : 'white'};
      &:hover {
        background: ${darken(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${props =>
        props.outline &&
        css`
          color: ${selected};
          background: white;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
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

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem',
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem',
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem',
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyle = css`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
    `}
`;

const StyledButton = styled.button`
  ${({ theme }) => theme.flexSet()};
  outline: none;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 4px;
  color: black;
  cursor: url('/images/spoon.png') 20 20, auto;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 0.6rem;

  ${fontWeightStyles}

  ${sizeStyles}

  ${colorStyles}

  ${fullWidthStyle}
`;

export default Button;
