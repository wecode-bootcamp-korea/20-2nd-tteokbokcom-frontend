import React, { useState, useEffect, useRef } from 'react';
import Button from '../../../components/Button/Button';
import ProjectCard from '../../../components/ProjectCard/ProjectCard';
import { useFilterContext } from '../Main';
import { API } from '../../../config';
import styled from 'styled-components/macro';

const SORT = [
  {
    url: 'Latest',
    kor: '최신순',
  },
  {
    url: 'People',
    kor: '최다 후원순',
  },
  {
    url: 'Amount',
    kor: '최다 금액순',
  },
  {
    url: 'Old',
    kor: '마감 임박순',
  },
];

export default function ProjectCards({ getFilteredData }) {
  const { filterOption } = useFilterContext();
  const [mainData, setMainData] = useState([]);
  const [isOpened, setIsOpened] = useState(false);
  const [clickedSortOption, setClickedSortOption] = useState(SORT[0]);
  const nextCount = useRef(6);

  useEffect(() => {
    fetch(API.MAIN)
      .then(res => res.json())
      .then(res => setMainData(res.data.projects.slice(0, nextCount.current)));
  }, [clickedSortOption]);

  const getMoreData = () => {
    fetch(API.MAIN)
      .then(res => res.json())
      .then(res => {
        if (mainData.length === res.length) {
          alert('더이상 불러올 데이터가 없습니다');
          return;
        }
        const moreData = res.data.projects.slice(
          nextCount.current,
          nextCount.current + 6
        );
        nextCount.current += 6;
        setMainData(prev => [...prev, ...moreData]);
      });
  };

  const openSortMenu = () => {
    setIsOpened(!isOpened);
  };

  const getSortedData = e => {
    setClickedSortOption(SORT[e.target.value]);
    nextCount.current = 6;
    setIsOpened(!isOpened);
  };

  return (
    <section>
      <ResultCounter>
        <span>
          <ProjectCounter>{mainData.length}</ProjectCounter>개의 프로젝트가
          있습니다.
        </span>
        <button onClick={openSortMenu}>
          {clickedSortOption.kor}
          <i className={isOpened ? 'fas fa-angle-up' : 'fas fa-angle-down'} />
        </button>
        <SortMenu isOpened={isOpened}>
          {SORT.map((sortOption, index) => (
            <SortOption
              onClick={getSortedData}
              value={index}
              key={sortOption.kor}
            >
              {sortOption.kor}
            </SortOption>
          ))}
        </SortMenu>
      </ResultCounter>
      <CardContainer>
        {mainData.map(data => (
          <ProjectCard data={data} key={data.id} id={data.id} />
        ))}
      </CardContainer>
      <MoreContainer>
        <More
          onClick={getMoreData}
          color="blue"
          fontWeight="700"
          fullWidth
          size="large"
        >
          더보기
        </More>
      </MoreContainer>
    </section>
  );
}

const ResultCounter = styled.div`
  position: relative;
  ${({ theme }) => theme.flexSet('space-between')};
  padding: 15px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.black};

  & > button {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 700;

    & > i {
      margin-left: 5px;
    }
  }
`;

const ProjectCounter = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-weight: 700;
`;

const CardContainer = styled.div`
  display: grid;

  ${({ theme }) => theme.tablet`
    grid-template-columns: repeat(2, 1fr);
  `};

  ${({ theme }) => theme.desktop`
    grid-template-columns: repeat(3, 1fr);
  `};
`;

const SortMenu = styled.ol`
  z-index: 999;
  position: absolute;
  top: 40px;
  right: 10px;
  ${({ theme }) => theme.flexColumnSet('center', 'flex-start')};
  display: ${({ isOpened }) => (isOpened ? 'flex' : 'none')};
  width: 8em;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px 0px;
  border-radius: 4px;
  cursor: pointer;
`;

const SortOption = styled.li`
  width: 100%;
  padding: 15px 10px;
  color: ${({ theme }) => theme.colors.primaryGray};
  font-weight: 400;

  &:active,
  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.red};
    font-weight: 700;
  }
`;

const MoreContainer = styled.div`
  ${({ theme }) => theme.flexSet()};
`;

const More = styled(Button)`
  margin: 0 15px;
  ${({ theme }) => theme.desktop`
    width: 30%;
  `};
`;
