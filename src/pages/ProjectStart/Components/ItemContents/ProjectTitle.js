import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

export default function ProjectTitle() {
  return (
    <>
      <Editor>
        <div>
          <h5>프로젝트 제목</h5>
          <input />
        </div>
        <div>
          <h5>프로젝트 짧은 제목</h5>
          <input />
        </div>
      </Editor>
    </>
  );
}

const Editor = styled.section`
  ${({ theme }) => theme.flexSet('space-between')};
  margin-bottom: 20px;
  ${({ theme }) => theme.desktop`
    ${({ theme }) => theme.flexSet('flex-start')};
  `};

  & > div {
    margin-top: 20px;

    ${({ theme }) => theme.desktop`
      margin-right: 10px;
    `};

    & > h5 {
      margin-bottom: 10px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.black};
    }

    & > input {
      all: unset;
      padding: 5px;
      width: 80%;
      border: 2px solid ${lighten(0.3, '#3a6ff2')};
      border-radius: 4px;
      background-color: white;

      &:hover,
      &:focus {
        border-color: #3a6ff2;
      }
    }
  }
`;
