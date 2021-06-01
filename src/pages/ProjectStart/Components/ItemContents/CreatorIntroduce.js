import React from 'react';
import { lighten } from 'polished';
import { useEditorContext } from '../../ProjectStart';
import styled from 'styled-components/macro';

export default function CreatorIntroduce() {
  const { handleInput, form } = useEditorContext();

  return (
    <Editor
      onChange={handleInput}
      name="introduction"
      maxlength="50"
      placeholder="창작자 소개를 입력해주세요"
      rows="3"
      value={form.introduction}
    />
  );
}

const Editor = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border: 2px solid ${lighten(0.3, '#3a6ff2')};
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);

  &:hover,
  &:focus {
    border-color: #3a6ff2;
  }
`;
