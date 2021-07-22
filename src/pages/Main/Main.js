import React, { useState, createContext, useContext } from 'react';
import FilterNav from './Components/FilterNav';
import ProjectCards from './Components/ProjectCards';
import styled from 'styled-components/macro';

const FilterContext = createContext();
export const useFilterContext = () => useContext(FilterContext);
const { Provider } = FilterContext;

export default function Main() {
  const [filterOption, setFilterOption] = useState({
    progressMin: 0,
    progressMax: 0,
    amountMin: 0,
    amountMax: 0,
    category: '',
    status: '',
  });

  return (
    <Container>
      <Provider value={{ filterOption, setFilterOption }}>
        <FilterNav />
        <Wrapper>
          <ProjectCards />
        </Wrapper>
      </Provider>
    </Container>
  );
}

const Container = styled.section`
  ${({ theme }) => theme.flexColumnSet()};
`;

const Wrapper = styled.section`
  width: 100%;
  ${({ theme }) => theme.desktop`
    width: 70%;
  `};
`;
