import React from 'react';
import styled from 'styled-components';

function Filter({ num, type, handleSearchInput, name }) {
  return (
    <StyledFilter>
      <Number>
        <span>{num}</span>
        {TEXT[type]}
      </Number>
      <StyledInput
        name={name}
        onChange={handleSearchInput}
        type="search"
        placeholder="프로젝트, 선물, 창작자를 검색하세요"
      />
    </StyledFilter>
  );
}

const StyledFilter = styled.div`
  ${({ theme }) => theme.flexColumnSet('center', 'flex-start')};
  padding: 20px;
`;

const Number = styled.span`
  font-size: 1.3rem;
  color: #3d3d3d;
  order: 2;
  & > span {
    color: ${({ theme }) => theme.colors.red};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 4px;
  color: black;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 1rem;
`;

export default Filter;

const TEXT = {
  like: '개의 프로젝트가 있습니다.',
  push: '건의 후원내역이 있습니다.',
};
