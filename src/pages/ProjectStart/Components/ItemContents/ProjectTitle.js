import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { useEditorContext } from '../../ProjectStart';

export default function ProjectTitle() {
  const { handleInput } = useEditorContext();

  return (
    <Editor
      onChange={handleInput}
      type="text"
      placeholder="프로젝트 제목을 입력해주세요"
      name="title"
    />
  );
}

const Editor = styled.input`
  all: unset;
  margin: 10px 0;
  padding: 5px;
  width: 80%;
  border: 2px solid ${lighten(0.3, '#3a6ff2')};
  border-radius: 4px;
  background-color: white;

  &:hover,
  &:focus {
    border-color: #3a6ff2;
  }
`;
