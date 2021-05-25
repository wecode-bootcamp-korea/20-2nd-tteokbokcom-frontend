import React, { useState } from 'react';
import styled from 'styled-components/macro';
import CardHandleBtn from './CardHandleBtn';

function CardItem({ title, requiredText, description, inputComponent }) {
  const [isOpened, setIsOpened] = useState(false);

  const toggleEditor = () => {
    setIsOpened(!isOpened);
  };

  return (
    <CardItemWrapper isOpened={isOpened}>
      <header>
        <ItemTitle>{title}</ItemTitle>
      </header>
      <Button onClick={toggleEditor}>
        {isOpened || (
          <>
            <span>👉🏻 {requiredText}</span>
            <span>📝 입력하기</span>
          </>
        )}
      </Button>
      {isOpened && (
        <>
          <Description>{description}</Description>
          {inputComponent}
          <CardHandleBtn toggleEditor={toggleEditor} />
        </>
      )}
    </CardItemWrapper>
  );
}

const CardItemWrapper = styled.div`
  padding: 1em 1.5em;
  width: 27em;
  font-size: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ isOpened }) => (isOpened ? '#f0f5ff' : 'white')};

  &:first-of-type {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }

  &:last-of-type {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  & > header {
    cursor: default;
  }

  & :hover {
    background-color: #f0f5ff;
  }

  ${({ theme }) => theme.desktop`
    width: 50em;
  `};
`;

const ItemTitle = styled.div`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.secondaryGray};
  font-weight: 700;
`;

const Button = styled.button`
  ${({ theme }) => theme.flexSet('space-between', 'none')};
  width: 100%;
  word-wrap: break-all;
  line-height: 1.3;
  line-break: auto;
  text-align: ${props => (props.last ? 'end' : 'start')};
  color: ${({ theme }) => theme.colors.red};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.black};
  cursor: default;
  font-size: ${({ theme }) => theme.calcRem(14)};
  white-space: pre-line;
  line-height: 1.4;
`;

export default CardItem;
