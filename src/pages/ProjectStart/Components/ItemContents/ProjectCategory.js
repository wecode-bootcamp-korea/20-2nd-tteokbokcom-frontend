import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

export default function ProjectCategory() {
  return (
    <>
      <Editor>
        <option value="tteokbok">떡볶이</option>
        <option value="soondae">순대</option>
        <option value="fried">튀김</option>
        <option value="kimbab">김밥</option>
        <option value="rameon">라면</option>
      </Editor>
    </>
  );
}
const Editor = styled.select`
  padding: 5px;
  margin: 20px 0;
  width: 40%;
  background-color: rgba(255, 255, 255, 0.5);
  border-color: ${lighten(0.3, '#3a6ff2')};

  &:hover,
  &:focus {
    border-color: #3a6ff2;
  }
`;
