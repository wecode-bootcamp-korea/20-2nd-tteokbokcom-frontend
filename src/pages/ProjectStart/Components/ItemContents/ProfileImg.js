import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

export default function ProfileImg() {
  return (
    <>
      <Editor
        action="uploadForm"
        method="post"
        enctype="multipart/form-data"
        target="repacatFrame"
      >
        <p>
          파일 형식은 jpg, png 또는 gif로, 사이즈는 가로 200px, 세로 200px
          이상으로 올려주세요.
        </p>
        <input type="file" name="file" />
      </Editor>
    </>
  );
}

const Editor = styled.form`
  ${({ theme }) => theme.flexColumnSet()};
  margin: 10px 0;
  padding: 15px;
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
