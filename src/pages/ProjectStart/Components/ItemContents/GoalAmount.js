import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

export default function GoalAmount() {
  return (
    <>
      <Editor type="text" value="0" />원
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
