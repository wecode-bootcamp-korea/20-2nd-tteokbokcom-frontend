import React from 'react';
import TextLink from './components/TextLink';
import SocialBtnGroup from './components/SocialBtnGroup';
import Divider from './components/Divider';
import Title from './components/Title';
import Container from './components/Container';

function AccountContainer({ children, type }) {
  return (
    <Container>
      <Title title={AccountData[type].title} />
      <SocialBtnGroup text={AccountData[type].title} />
      <Divider />
      {children}
      <TextLink type={AccountData[type]} />
    </Container>
  );
}

export default AccountContainer;

const AccountData = {
  signin: {
    title: '가입하기',
    desc: '이미 텀블벅 계정이 있으신가요?',
    url: 'signin',
    link: '기존계정으로 로그인하기',
  },
  signup: {
    title: '로그인하기',
    desc: '아직 텀블벅 계정이 없으신가요?',
    url: 'signup',
    link: '가입하기',
  },
};
