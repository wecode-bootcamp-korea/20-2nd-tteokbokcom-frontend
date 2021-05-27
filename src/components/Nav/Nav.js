import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <Container>
      <LinkGroup>
        <Link to="/">
          <i class="fas fa-bars"></i>
          <span>프로젝트 둘러보기</span>
        </Link>
        <Link to="/project-start">프로젝트 올리기</Link>
      </LinkGroup>
      <Link to="/">
        <Logo alt="logo" src="/images/logo.png" />
      </Link>
      <SearchAndLogin>
        <button type="button">
          <i class="fas fa-search"></i>
        </button>
        <Link to="/signin">
          <span>로그인 / 회원가입</span>
          <UserProfile />
        </Link>
      </SearchAndLogin>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
  position: relative;
  padding: 1rem 0;
  ${({ theme }) => theme.desktop`
    width: 1032px;
    padding: 0.3rem 0;
    margin: 0px auto;
  `};
`;

const LinkGroup = styled.div`
  ${({ theme }) => theme.flexSet()}
  font-size: 1rem;
  font-weight: 700;
  width: fit-content;

  a {
    ${({ theme }) => theme.flexSet()};
    padding: 0px 1rem;
    color: ${({ theme }) => theme.colors.black};
    line-height: 100px;

    &:hover {
      color: ${({ theme }) => theme.colors.secondaryGray};
    }

    i {
      position: relative;
      bottom: 2px;
      margin-right: 4px;
    }

    span {
      display: none;
      ${({ theme }) => theme.desktop`
      display: inline`};
    }

    &:nth-of-type(2) {
      display: none;
      ${({ theme }) => theme.desktop`
      display: flex`};
    }
  }
`;

const Logo = styled.img`
  width: 70px;
  ${({ theme }) => theme.posCenter()};
  ${({ theme }) => theme.desktop`
     width: 85px;
    `};
`;

const SearchAndLogin = styled.div`
  ${({ theme }) => theme.flexSet('flex-end')}
  & button {
    padding: 5px;
  }

  & > a {
    ${({ theme }) => theme.flexSet};
  }

  & span {
    display: none;
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.desktop`
      display:inline;
      `};

    &:hover {
      color: ${({ theme }) => theme.colors.secondaryGray};
    }
  }
`;

const UserProfile = styled.div`
  display: inline-block;
  width: 28px;
  height: 28px;
  margin: 0 1rem;
  border-radius: 50%;
  box-shadow: rgb(208 208 208) 0px 0px 1px 0px inset,
    rgb(208 208 208) 0px 0px 1px 0px;
  background-image: url('/images/user.png');
  background-size: cover;
  ${({ theme }) => theme.desktop`
    width : 38px; 
    height : 38px;
    `};
`;

export default Nav;
