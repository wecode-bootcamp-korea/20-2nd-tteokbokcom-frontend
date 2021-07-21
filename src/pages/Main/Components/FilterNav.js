import React, { useState } from 'react';
import Button from '../../../components/Button/Button';
import FilterWidjet from './FilterWidjet';
import { useFilterContext } from '../Main';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';

const FILTER = [
  { key: 'category', value: '카테고리' },
  { key: 'status', value: '상태' },
  { key: 'progress', value: '달성률' },
  { key: 'amount', value: '모인금액' },
];

export default function FilterNav() {
  const history = useHistory();
  const { setFilterOption } = useFilterContext();
  const [clickedFilter, setClickedFilter] = useState('');

  const toggleFilter = e => {
    const name = e.target.getAttribute('name');
    setClickedFilter(name);
  };

  const resetFilter = () => {
    setFilterOption({
      progressMin: 0,
      progressMax: 0,
      amountMin: 0,
      amountMax: 0,
      category: '',
      status: '',
    });
    history.push('/');
  };

  return (
    <Container>
      <Wrapper>
        <FilterWrapper>
          {FILTER.map(({ key, value }) => (
            <Filter onClick={toggleFilter} key={key} id={key} name={key}>
              {value}
              <i
                className={
                  clickedFilter === key
                    ? 'fas fa-angle-up'
                    : 'fas fa-angle-down'
                }
              />
              <FilterWidjet
                toggleFilter={toggleFilter}
                condition={key}
                key={key}
                clickedFilter={clickedFilter}
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
  -webkit-tap-highlight-color: transparent;

  ${({ theme }) => theme.flexSet('flex-start')};
  cursor: pointer;
`;

const Filter = styled(Button)`
  position: relative;
  margin-right: 0.5em;
  margin-bottom: 0;
  padding: 0 0.5em;
  color: ${({ theme }) => theme.colors.secondaryGray};
  font-size: 0.85rem;
  ${({ theme }) => theme.tablet`
    font-size: 1rem;
  `};
  &:last-of-type {
    margin-right: 0;
  }

  & > i {
    margin: 0 5px;
    pointer-events: none;
  }
`;
