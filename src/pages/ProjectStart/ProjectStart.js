import React, { useState, createContext, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProjectStartCard from './Components/ProjectStartCard';
import projectStartData from './data/projectStartData';
import { API } from '../../config';
import checkValid from '../../utils/checkValid';
import styled from 'styled-components/macro';

const EditorContext = createContext();
export const useEditorContext = () => useContext(EditorContext);
const { Provider } = EditorContext;

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

const FIRST_TAB = [
  'title',
  'summary',
  'category',
  'tags',
  'username',
  'introduction',
  'project_img_data',
  'profile_img_data',
];

const SECOND_TAB = [
  'target_fund',
  'launch_date',
  'end_date',
  'reward_one',
  'reward_two',
];

export default function ProjectStart() {
  const history = useHistory();
  const [currentTabNum, setCurrentTabNum] = useState(0);
  const [randomTitleNum, setRandomTitleNum] = useState(0);
  const [form, setForm] = useState({
    title: '',
    summary: '',
    category: '',
    tags: [],
    username: '',
    introduction: '',
    target_fund: 0,
    launch_date: '',
    end_date: '',
    reward_one: {},
    reward_two: {},
    project_img_data: {},
    profile_img_data: {},
  });

  useEffect(() => {
    fetch(API.USER, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(res =>
        setForm({
          ...form,
          username: res.data.user.username,
        })
      )
      .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInput = e => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const clickTabBtn = e => {
    const { name } = e.target;
    setRandomTitleNum(Math.floor(Math.random() * Object.keys(TITLE).length));
    setCurrentTabNum(name);
  };

  const postForm = () => {
    const post_form_data = new FormData();
    const checkAllValid = checkValid(form, Object.keys(form));
    if (!checkAllValid) return alert('모든 정보를 입력해주세요');

    const { project_img_data, profile_img_data } = form;
    post_form_data.append('info', JSON.stringify(form));
    post_form_data.append('project_img', project_img_data);
    post_form_data.append('profile_img', profile_img_data);

    fetch(API.PROJECT, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: post_form_data,
    })
      .then(res => res.json())
      .then(alert('등록 성공!'))
      .then(history.push('/'))
      .catch(err => console.log(err));
  };

  return (
    <Container>
      <WarningTxt>ver 1.0 | 두 탭의 모든 항목을 입력하셔야 합니다</WarningTxt>
      <WarningTxt>모든 입력 내용은 자동 저장됩니다 :)</WarningTxt>
      <ContainerTitle isFilled={!!form.title}>
        <h1>{form.title || TITLE[randomTitleNum]}</h1>
        <WholeSubmitBtn onClick={postForm}>
          <i className="fas fa-paper-plane" />
          프로젝트 등록하기
        </WholeSubmitBtn>
      </ContainerTitle>
      <Tab>
        <TabBtn
          name="0"
          onClick={clickTabBtn}
          isTabSelected={+currentTabNum === 0}
        >
          <AllExistCheck isAllExists={!!checkValid(form, FIRST_TAB)} />
          프로젝트 개요
        </TabBtn>
        <TabBtn
          name="1"
          onClick={clickTabBtn}
          isTabSelected={+currentTabNum === 1}
        >
          <AllExistCheck isAllExists={!!checkValid(form, SECOND_TAB)} />
          펀딩 및 선물 구성
        </TabBtn>
      </Tab>
      <Provider
        value={{
          form,
          setForm,
          handleInput,
        }}
      >
        <EditorWrapper>
          {projectStartData[currentTabNum].categories.map(
            ({ id, title, contents }) => {
              return (
                <ProjectStartCard
                  key={id + title}
                  cardTitle={title}
                  cardData={contents}
                />
              );
            }
          )}
        </EditorWrapper>
      </Provider>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexColumnSet()};
  margin-top: 2rem;
`;

const WarningTxt = styled.p`
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.calcRem(13)};
`;

const EditorWrapper = styled.section`
  ${({ theme }) => theme.flexColumnSet()}
  padding-bottom: 3em;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgGray};
`;

const ContainerTitle = styled.header`
  ${({ theme }) => theme.flexColumnSet()};
  padding: 4em 0;

  & > h1 {
    margin-bottom: 4rem;
    color: ${({ theme, isFilled }) =>
      isFilled ? theme.colors.black : theme.colors.tertiaryGray};
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

const Tab = styled.nav`
  position: sticky;
  top: 0;
  ${({ theme }) => theme.flexSet()}
  margin-top: 1rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bgGray};
  background-color: white;
  box-shadow: rgb(0 0 0 / 5%) 0px 3px 8px -2px;
`;

const TabBtn = styled.button`
  ${({ theme }) => theme.flexColumnSet()}
  padding: 1em 3em;
  background-color: ${({ theme, isTabSelected }) =>
    isTabSelected ? theme.colors.bgGray : 'white'};
  border: ${({ theme, isTabSelected }) =>
    isTabSelected ? `1px solid ${theme.colors.border}` : 'none'};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: 0.9rem;
  font-weight: 700;
`;

const AllExistCheck = styled.div`
  margin-bottom: 10px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.colors.tertiaryGray};
  background-color: ${({ theme, isAllExists }) =>
    isAllExists ? theme.colors.blue : theme.colors.tertiaryGray};
`;
