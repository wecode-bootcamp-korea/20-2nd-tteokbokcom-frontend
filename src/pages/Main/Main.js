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

  //To Do : filter 값 쿼리파라미터로 data get 요청
  const getFilteredData = () => {
    const queryArr = [];
    for (let i in filterOption) {
      if (filterOption[i]) {
        queryArr.push(i);
      }
    }
    const queryStrings = queryArr.map(el => {
      return `${el}=${filterOption[el]}`;
    });
    // console.log('/?' + queryString[0] + '&' + queryString[1]);
    const query = '/?' + queryStrings[0] + '&' + queryStrings[1];

    fetch(`API${query}`)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <Container>
      <Provider value={{ filterOption, setFilterOption, getFilteredData }}>
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
  width: 100%;
`;

const Wrapper = styled.section`
  ${({ theme }) => theme.desktop`
    width: 70%;
  `};
`;
