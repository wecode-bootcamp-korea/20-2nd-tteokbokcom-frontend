import React, { useRef } from 'react';
import Button from '../../../components/Button/Button';
import { useFilterContext } from '../Main';
import styled from 'styled-components/macro';

const CATEGORY = [
  { option: '라면', id: 'rameon' },
  { option: '떡볶이', id: 'tteokbok' },
  { option: '순대', id: 'soondae' },
  { option: '튀김', id: 'fried' },
  { option: '김밥', id: 'kimbab' },
];

const STATUS = [
  { option: '진행중 프로젝트', id: 'ing' },
  { option: '공개예정 프로젝트', id: 'scheduled' },
  { option: '완료된 프로젝트', id: 'done' },
];

export default function FilterWidjet({ condition, clickedFilter }) {
  const { filterOption, setFilterOption } = useFilterContext();
  const tempRangeRef = useRef({
    progressMin: 0,
    progressMax: 0,
    amountMin: 0,
    amountMax: 0,
  });

  const saveClickedOption = e => {
    const { id } = e.target;
    setFilterOption({ ...filterOption, [condition]: id });
  };

  const saveRangeOption = e => {
    const { value, name } = e.target;
    tempRangeRef.current[name] = value;
  };

  const updateFilterRange = e => {
    const { name } = e.target;
    const { progressMax, progressMin, amountMax, amountMin } =
      tempRangeRef.current;

    if (name === 'progress') {
      setFilterOption({
        ...filterOption,
        progressMax,
        progressMin,
      });
    }

    if (name === 'amount') {
      setFilterOption({
        ...filterOption,
        amountMax,
        amountMin,
      });
    }
  };

  return (
    <Container clickedFilter={clickedFilter === condition}>
      {(condition === 'progress' || condition === 'amount') && (
        <>
          <FilterOption>
            <FilterDetailNotice>검색할 범위 직접 지정</FilterDetailNotice>
          </FilterOption>
          <FilterOption>
            <span>최소</span>
            <FilterEditor
              onChange={saveRangeOption}
              type="number"
              placeholder="숫자를 입력해주세요"
              name={condition + 'Min'}
            />
          </FilterOption>
          <FilterOption>
            <span>최대</span>
            <FilterEditor
              onChange={saveRangeOption}
              type="number"
              placeholder="숫자를 입력해주세요"
              name={condition + 'Max'}
            />
          </FilterOption>
          <FilterOption>
            <Button
              color="blue"
              fontWeight="700"
              onClick={updateFilterRange}
              name={condition}
            >
              입력값 적용
            </Button>
          </FilterOption>
        </>
      )}
      {condition === 'category' &&
        CATEGORY.map(({ id, option }) => (
          <FilterOptionAction
            onClick={saveClickedOption}
            id={id}
            key={id}
            name={condition}
          >
            {option}
          </FilterOptionAction>
        ))}
      {condition === 'status' &&
        STATUS.map(({ id, option }) => (
          <FilterOptionAction
            onClick={saveClickedOption}
            id={id}
            key={id}
            name={condition}
          >
            {option}
          </FilterOptionAction>
        ))}
    </Container>
  );
}

const Container = styled.ul`
  z-index: 999;
  position: absolute;
  top: 40px;
  left: 0;
  ${({ theme }) => theme.flexColumnSet('center', 'flex-start')};
  display: ${({ clickedFilter }) => (clickedFilter ? 'flex' : 'none')};
  width: 200px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px 0px;
`;

const FilterOption = styled.li`
  ${({ theme }) => theme.flexSet('flex-start')};
  padding: 15px 10px;
  width: 100%;
  color: ${({ theme }) => theme.colors.primaryGray};
  font-weight: 400;
`;

const FilterOptionAction = styled(FilterOption)`
  &:active,
  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.red};
    font-weight: 700;
  }
`;

const FilterEditor = styled.input`
  all: unset;
  margin-left: 10px;
  padding: 3px;
  width: 70%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  text-align: start;
`;

const FilterDetailNotice = styled.span`
  font-weight: 700;
`;
