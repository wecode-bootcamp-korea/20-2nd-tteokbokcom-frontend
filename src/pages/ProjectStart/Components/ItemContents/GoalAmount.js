import React from 'react';
import { lighten } from 'polished';
import { useEditorContext } from '../../ProjectStart';
import styled from 'styled-components/macro';

export default function GoalAmount() {
  const { handleInput } = useEditorContext();

  return (
    <>
      <Editor type="number" onChange={handleInput} name="target_fund" />원
    </>
  );
}
const Editor = styled.input`
  margin: 10px 10px 10px 0;
  padding: 5px;
  border: 2px solid ${lighten(0.3, '#3a6ff2')};
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  text-align: end;

  &:hover,
  &:focus {
    border-color: #3a6ff2;
  }
`;
