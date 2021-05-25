import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

export default function ProjectDueDate() {
  return (
    <>
      <Editor>
        <input type="number" />
        <span>일 뒤인</span>
        <input type="text" />
        <span>에 펀딩을 마감합니다.</span>
      </Editor>
    </>
  );
}

const Editor = styled.section`
  ${({ theme }) => theme.flexSet('flex-start')};
  margin: 10px 0;

  & > input {
    all: unset;
    padding: 5px;
    width: 18%;
    border: 2px solid ${lighten(0.3, '#3a6ff2')};
    border-radius: 4px;
    background-color: white;

    &:first-of-type {
      width: 5%;
    }

    &:hover,
    &:focus {
      border-color: #3a6ff2;
    }
  }

  & > span {
    margin: 0 5px;
    font-weight: 700;
  }
`;
