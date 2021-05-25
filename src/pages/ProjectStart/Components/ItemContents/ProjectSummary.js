import React from 'react';
import { lighten } from 'polished';
import { useEditorContext } from '../../ProjectStart';
import styled from 'styled-components/macro';

export default function ProjectSummary() {
  const { handleInput } = useEditorContext();

  return (
    <Editor
      onChange={handleInput}
      name="summary"
      maxlength="50"
      placeholder="프로젝트 요약을 입력해주세요"
      rows="3"
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
