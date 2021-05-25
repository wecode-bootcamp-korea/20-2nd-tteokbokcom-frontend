import React, { useState } from 'react';
import styled from 'styled-components/macro';
import ProjectStartCard from './Components/ProjectStartCard';
import projectStartData from './data/projectStartData';

function ProjectStart() {
  const randomTitleNum = Math.floor(Math.random() * Object.keys(TITLE).length);
  const [selected, setSelected] = useState(0);
  const clickNavBtn = e => {
    if (e.target.name === '0') {
      setSelected(0);
    }

    if (e.target.name === '1') {
      setSelected(1);
    }
  };
  return (
    <Container>
      <ContainerTitle>
        <h1>{TITLE[randomTitleNum]}</h1>
        <WholeSubmitBtn>
          <i className="fas fa-paper-plane" />
          프로젝트 등록하기
        </WholeSubmitBtn>
      </ContainerTitle>
      <ProjectStartNav>
        <NavBtn name="0" onClick={clickNavBtn} selected={selected == 0}>
          <AllWritedCheckDiv />
          프로젝트 개요
        </NavBtn>
        <NavBtn name="1" onClick={clickNavBtn} selected={selected == 1}>
          <AllWritedCheckDiv />
          펀딩 및 선물 구성
        </NavBtn>
      </ProjectStartNav>
      <section>
        {projectStartData[selected].categories.map(
          ({ id, title, contents }) => (
            <ProjectStartCard key={id} cardTitle={title} cardData={contents} />
          )
        )}
      </section>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexColumnSet()};
  margin-top: 2rem;

  & > section {
    ${({ theme }) => theme.flexColumnSet()}
    padding-bottom: 3em;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.bgGray};
  }
`;

const ContainerTitle = styled.header`
  ${({ theme }) => theme.flexColumnSet()};
  padding: 4em 0;

  & > h1 {
    margin-bottom: 4rem;
    color: ${({ theme }) => theme.colors.tertiaryGray};
    font-size: 2rem;
  }
`;

const WholeSubmitBtn = styled.button`
  padding: 0.5em 1em;
  color: ${({ theme }) => theme.colors.red};
  font-weight: 700;
  border: 3px solid ${({ theme }) => theme.colors.red};
  border-radius: 4px;

  & i {
    margin-right: 10px;
  }
`;

const ProjectStartNav = styled.nav`
  ${({ theme }) => theme.flexSet()}
  margin-top: 1rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bgGray};
`;

const NavBtn = styled.button`
  ${({ theme }) => theme.flexColumnSet()}
  padding: 1em 3em;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.bgGray : 'white'};
  border: ${({ theme, selected }) =>
    selected ? `1px solid ${theme.colors.border}` : 'none'};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: 0.9rem;
  font-weight: 700;
`;

const AllWritedCheckDiv = styled.div`
  margin-bottom: 10px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.tertiaryGray};
`;

export default ProjectStart;

const TITLE = {
  0: '재미있는 제목',
  1: '세상에 없던 제목',
  2: '멋진 제목',
  3: '센스있는 제목',
  4: '굉장한 제목',
  5: '대단한 제목',
  6: '놀라운 제목',
  7: '마음을 사로잡는 제목',
  8: '매혹적인 제목',
  9: '기분이 좋아지는 제목',
  10: '딱 맞는 제목',
  11: '흥미로운 제목',
  12: '귀여운 제목',
  13: '감동적인 제목',
};
