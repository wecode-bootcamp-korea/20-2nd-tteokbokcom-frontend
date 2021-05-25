import React from 'react';
import { lighten } from 'polished';
import { useEditorContext } from '../../ProjectStart';
import styled from 'styled-components/macro';

export default function ProjectHandleDate({ text, stateName }) {
  const { handleInput } = useEditorContext();

  return (
    <Editor>
      <Scheduling type="date" onChange={handleInput} name={stateName} />
      <ScheduleText>일에 펀딩을 {text}합니다.</ScheduleText>
    </Editor>
  );
}

const Editor = styled.section`
  ${({ theme }) => theme.flexSet('flex-start')};
  margin: 10px 0;
`;

const Scheduling = styled.input`
  all: unset;
  padding: 5px;
  width: 20%;
  border: 2px solid ${lighten(0.3, '#3a6ff2')};
  border-radius: 4px;
  background-color: white;

  &:hover,
  &:focus {
    border-color: #3a6ff2;
  }
`;

const ScheduleText = styled.span`
  margin: 0 5px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;
