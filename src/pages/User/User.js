import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Filter from './Components/Filter';
import Item from '../../components/ProjectCard/ProjectCard';
import { debounce } from 'lodash';
import { API } from '../../config';

function User() {
  const [likeList, setLikeList] = useState([]);
  const [pushList, setPushList] = useState([]);
  const [searchInput, setSearchInput] = useState({
    searchedLike: '',
    searchedPush: '',
  });

  const handleSearchInput = e => {
    const { name, value } = e.target;
    setSearchInput({ ...searchInput, [name]: value });
  };

  const { searchedLike, searchedPush } = searchInput;

  const filteredLike = likeList?.filter(item =>
    item.title.includes(searchedLike)
  );

  const filteredPush = pushList?.filter(item =>
    item.title.includes(searchedPush)
  );

  const getLikeList = () => {
    fetch(`${API.MAIN}?liked`, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(likeData => setLikeList(likeData.data.projects));
  };

  const getPushList = () => {
    fetch(`${API.MAIN}?liked`, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(pushData => setPushList(pushData.projects));
  };

  useEffect(() => {
    getLikeList();
    getPushList();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>좋아한 프로젝트</Title>
        <Filter
          handleSearchInput={debounce(handleSearchInput, 500)}
          num={filteredLike.length}
          type="like"
          name="searchedLike"
        />
        <Box>
          {filteredLike.map(item => {
            return <Item key={item.id} data={item} />;
          })}
        </Box>
        <Title>내가 후원한 프로젝트</Title>
        <Filter
          handleSearchInput={debounce(handleSearchInput, 500)}
          num={filteredPush?.length}
          type="push"
          name="searchedPush"
        />
        <Box>
          {filteredPush?.map(item => {
            return <Item key={item.id} data={item} />;
          })}
        </Box>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexColumnSet()};
  width: 100%;
`;

const Wrapper = styled.section`
  width: 100%;
  ${({ theme }) => theme.desktop`
    width: 70%;
  `};
`;

const Box = styled.article`
  display: grid;
  ${({ theme }) => theme.desktop`
    grid-template-columns: repeat(3, 1fr);
  `};
`;

const Title = styled.h1`
  width: 100%;
  padding: 32px 16px 24px;
  font-size: 30px;
  font-weight: 300;
  line-height: 45px;
  letter-spacing: -0.03em;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border}; ;
`;

export default User;
