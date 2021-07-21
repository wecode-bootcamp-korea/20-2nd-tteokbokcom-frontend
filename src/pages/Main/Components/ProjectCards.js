import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import ProjectCard from '../../../components/ProjectCard/ProjectCard';
import { API } from '../../../config';
import { useFilterContext } from '../Main';
import styled from 'styled-components/macro';

const SORT = {
  최신순: 'latest',
  '마감 임박순': 'old',
  '최다 후원순': 'people',
  '최다 금액순': 'amount',
};

export default function ProjectCards({ getFilteredData }) {
  const { filterOption } = useFilterContext();
  const history = useHistory();
  const location = useLocation();
  const [mainData, setMainData] = useState([]);
  const [isOpened, setIsOpened] = useState(false);
  const [sortBtnValue, setSortBtnValue] = useState('최신순');
  const [projectsCount, setProjectsCount] = useState(0);
  const nextCountRef = useRef(6);

  //처음 마운트시 받는 데이터
  useEffect(() => {
    fetch(API.PROJECT, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(res => {
        setMainData(res.data.projects.slice(0, nextCountRef.current));
        setProjectsCount(res.data.num_projects);
      });
  }, []);

  //옵션 클릭 시 페이지 이동
  useEffect(() => {
    const query = makeQuery();
    query && history.push(`?${query}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBtnValue, filterOption]);

  //이동한 url에서 데이터 정보를 받아와서 fetch
  useEffect(() => {
    fetch(`${API.PROJECT}${location.search}`, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(res =>
        setMainData(res.data.projects.slice(0, nextCountRef.current))
      );
  }, [location.search]);

  // To Do : 백엔드 통신 때 연결 테스트
  const getMoreData = () => {
    fetch(`${API.PROJECT}${location.search}`, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(res => {
        if (mainData.length === res.data.projects.length) {
          alert('더이상 불러올 데이터가 없습니다');
          return;
        }
        const moreData = res.data.projects.slice(
          nextCountRef.current,
          nextCountRef.current + 6
        );
        nextCountRef.current += 6;
        setMainData(prev => [...prev, ...moreData]);
      });
  };

  const openSortMenu = e => {
    setIsOpened(!isOpened);
  };

  const handleSort = e => {
    setIsOpened(!isOpened);
    setSortBtnValue(e.target.textContent);
  };

  const parseSeachQuery = () => {
    if (location.search.includes('search')) {
      return `&search${decodeURI(location.search.split('search')[1])}`;
    } else {
      return '';
    }
  };

  const getSortQuery = () => {
    if (SORT[sortBtnValue] === 'latest') {
      return '';
    } else {
      return `&sorted=${SORT[sortBtnValue]}`;
    }
  };

  const makeQuery = () => {
    const searchQuery = parseSeachQuery();
    const sortQuery = getSortQuery();
    const filterQuerys = [];
    for (let i in filterOption) {
      if (filterOption[i]) {
        filterQuerys.push(i);
      }
    }
    const filterQuery = filterQuerys.map(el => {
      return `&${el}=${filterOption[el]}`;
    });
    const joinedQuery = `${filterQuery.join('')}${sortQuery}${searchQuery}`;
    return joinedQuery.slice(1);
  };

  return (
    <section>
      <ResultCounter>
        <span>
          <ProjectCounter>{projectsCount}</ProjectCounter>개의 프로젝트가
          있습니다.
        </span>
        <button onClick={openSortMenu}>
          {sortBtnValue}
          <i className={isOpened ? 'fas fa-angle-up' : 'fas fa-angle-down'} />
        </button>
        <SortMenu isOpened={isOpened}>
          <SortOption onClick={handleSort}>최신순</SortOption>
          <SortOption onClick={handleSort}>마감 임박순</SortOption>
          <SortOption onClick={handleSort}>최다 후원순</SortOption>
          <SortOption onClick={handleSort}>최다 금액순</SortOption>
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
  -webkit-tap-highlight-color: transparent;

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
