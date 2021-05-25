import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

export default function ProjectImg() {
  return (
    <>
      <Editor
        action="uploadForm"
        method="post"
        enctype="multipart/form-data"
        target="repacatFrame"
      >
        <p>
          파일 형식은 jpg 또는 png로, 사이즈는 가로 1,240px, 세로 930px 이상으로
          올려주세요.
        </p>
        <input type="file" name="file" />
        <input type="submit" />
      </Editor>
    </>
  );
}

const Editor = styled.form`
  ${({ theme }) => theme.flexColumnSet()};
  padding: 15px;
  margin: 10px 0;
  border: 2px solid ${lighten(0.3, '#3a6ff2')};
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;

  &:hover,
  &:focus {
    border-color: #3a6ff2;
  }

  & > p {
    margin-bottom: 10px;
  }
`;
