import React from 'react';
import { lighten } from 'polished';
import { useEditorContext } from '../../ProjectStart';
import styled from 'styled-components/macro';

export default function CreatorName() {
  const { handleInput, form } = useEditorContext();

  return (
    <Editor
      onChange={handleInput}
      type="text"
      placeholder="이름을 입력해주세요"
      name="username"
      value={form.username}
    />
  );
}

const Editor = styled.input`
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
`;
