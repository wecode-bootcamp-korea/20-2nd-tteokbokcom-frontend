import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

export default function CreatorName() {
  return (
    <Editor>
      <input type="text" placeholder="이름을 입력해주세요" />
    </Editor>
  );
}

const Editor = styled.form`
  ${({ theme }) => theme.flexColumnSet('none', 'flex-start')};

  & > input {
    margin: 10px 0;
    padding: 5px;
    width: 50%;
    border: 2px solid ${lighten(0.3, '#3a6ff2')};
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.5);

    &:hover,
    &:focus {
      border-color: #3a6ff2;
    }
  }
`;
