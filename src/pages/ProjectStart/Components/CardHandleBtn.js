import React from 'react';
import styled from 'styled-components/macro';

export default function CardHandleBtn({ openEditor }) {
  return (
    <ButtonWrapper>
      <button onClick={openEditor}>X 취소하기</button>
      <button>✔ 저장하기</button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  ${({ theme }) => theme.flexSet('flex-end')};
  margin-top: 15px;

  & > button {
    margin-left: 10px;
    padding: 0.4em 1.2em;
    background-color: ${({ theme }) => theme.colors.red};
    border-radius: 4px;
    font-weight: 700;
    color: white;

    &:first-of-type {
      background-color: ${({ theme }) => theme.colors.border};
      color: ${({ theme }) => theme.colors.primaryGray};
    }
  }
`;
