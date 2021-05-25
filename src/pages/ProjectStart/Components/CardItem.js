import React, { useState } from 'react';
import CardHandleBtn from './CardHandleBtn';
import styled from 'styled-components/macro';

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
      <RequiredBtn onClick={toggleEditor}>
        {isOpened || (
          <>
            <RequiredText>👉🏻 {requiredText}</RequiredText>
            <span>📝 입력하기</span>
          </>
        )}
      </RequiredBtn>
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
  width: 100%;
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

  &:hover {
    background-color: #f0f5ff;
  }
`;

const ItemTitle = styled.header`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.secondaryGray};
  font-weight: 700;
  cursor: default;
`;

const RequiredBtn = styled.button`
  ${({ theme }) => theme.flexSet('space-between', 'none')};
  width: 100%;
  word-wrap: break-all;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.red};
`;

const RequiredText = styled.span`
  width: 70%;
  text-align: start;
`;

const Description = styled.p`
  cursor: default;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.calcRem(14)};
  white-space: pre-line;
  line-height: 1.4;
`;

export default CardItem;
