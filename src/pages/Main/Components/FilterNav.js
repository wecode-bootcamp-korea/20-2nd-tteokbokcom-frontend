import React, { useState } from 'react';
import Button from '../../../components/Button/Button';
import FilterWidjet from './FilterWidjet';
import styled from 'styled-components/macro';

const FILTER = [
  { key: 'category', value: '카테고리' },
  { key: 'status', value: '상태' },
  { key: 'progress', value: '달성률' },
  { key: 'amount', value: '모인금액' },
];

export default function FilterNav() {
  const [isFilterOpen, setIsFilterOpen] = useState({
    category: false,
    status: false,
    progress: false,
    amount: false,
  });

  const toggleFilter = e => {
    const { id } = e.target;
    setIsFilterOpen({
      ...isFilterOpen,
      [id]: !isFilterOpen[id],
    });
  };

  const resetFilter = () => {
    setIsFilterOpen({
      category: false,
      status: false,
      progress: false,
      amount: false,
    });
  };

  return (
    <Container>
      <Wrapper>
        <FilterWrapper>
          {FILTER.map(({ key, value }) => (
            <Filter onClick={toggleFilter} key={key} id={key}>
              {value}
              <i
                className={
                  isFilterOpen[key] ? 'fas fa-angle-up' : 'fas fa-angle-down'
                }
              />
              <FilterWidjet
                toggleFilter={toggleFilter}
                condition={key}
                key={key}
                isClicked={isFilterOpen[key]}
              />
            </Filter>
          ))}
        </FilterWrapper>
        <FilterWrapper>
          <Filter onClick={resetFilter}>
            <i className="fas fa-redo-alt" />
            필터 초기화
          </Filter>
        </FilterWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.nav`
  ${({ theme }) => theme.flexSet()};
  padding: 10px;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
  width: 100%;

  ${({ theme }) => theme.desktop`
    width: 70%;
  `};
`;

const FilterWrapper = styled.div`
  ${({ theme }) => theme.flexSet('flex-start')};
  cursor: pointer;
`;

const Filter = styled(Button)`
  position: relative;
  margin-right: 0.5em;
  margin-bottom: 0;
  padding: 0 0.5em;
  color: ${({ theme }) => theme.colors.secondaryGray};

  &:last-of-type {
    margin-right: 0;
  }

  & > i {
    margin: 0 5px;
  }
`;
