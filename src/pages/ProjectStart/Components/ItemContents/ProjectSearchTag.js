import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

export default function ProjectSearchTag() {
  return (
    <>
      <Editor>
        <input placeholder="예시:민초맛, 짜장맛, 떡튀순, 컵볶이" />
        <p>쉼표(,)와 문자로만 최소 2자 이상 입력해주세요.</p>
      </Editor>
    </>
  );
}
const Editor = styled.div`
  margin: 10px 0;

  & > input {
    margin-bottom: 10px;
    padding: 5px;
    width: 100%;
    border: 2px solid ${lighten(0.3, '#3a6ff2')};
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.5);

    &:hover,
    &:focus {
      border-color: #3a6ff2;
    }
  }
  & > p {
    padding-left: 5px;
    color: ${({ theme }) => theme.colors.secondaryGray};
    font-size: ${({ theme }) => theme.calcRem(13)};
  }
`;
