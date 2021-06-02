import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { useEditorContext } from '../../ProjectStart';

export default function ProjectTag() {
  const { form, setForm } = useEditorContext();

  const handleInput = e => {
    const { value, name } = e.target;
    const validTags = Array.from(new Set(value.split(/\s*,\s*/)));
    setForm({
      ...form,
      [name]: validTags,
    });
  };

  const checkValidation = e => {
    const { value } = e.target;
    let isAlerted = false;
    value.split(/\s*,\s*/).forEach(el => {
      if (el.length < 2) {
        if (!isAlerted) {
          alert('최소 2자 이상 입력해주세요');
          isAlerted = true;
        }
      }
    });
  };

  return (
    <Editor>
      <TagEnroll
        placeholder="예시:민초맛, 짜장맛, 떡튀순, 컵볶이"
        onChange={handleInput}
        onBlur={checkValidation}
        name="tags"
      />
      <SubNotice>쉼표(,)와 문자로만 최소 2자 이상 입력해주세요.</SubNotice>
    </Editor>
  );
}

const Editor = styled.div`
  margin: 10px 0;
`;

const TagEnroll = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
  border: 2px solid ${lighten(0.3, '#3a6ff2')};
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);

  &:hover,
  &:focus {
    border-color: #3a6ff2;
  }
`;

const SubNotice = styled.p`
  padding-left: 5px;
  color: ${({ theme }) => theme.colors.secondaryGray};
  font-size: ${({ theme }) => theme.calcRem(13)};
`;
