import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { API } from '../../config';
import { debounce } from 'lodash';
import Input from '../../components/AccountContainer/components/Input';
import styled from 'styled-components/macro';

function Nav() {
  const location = useLocation();
  const history = useHistory();
  const [user, setUser] = useState('');
  const [isToggleMenuShow, setIsToggleMenuShow] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const toggleShowMenu = () => {
    setIsToggleMenuShow(prevState => !prevState);
  };

  const showSearchBar = () => {
    setIsSearched(prevState => !prevState);
  };

  const handleSearchInput = e => {
    const { value } = e.target;
    setSearchInput(value);
  };

  const handleLogout = () => {
    alert('로그아웃 되었습니다.');
    localStorage.clear();
    history.push('/');
  };

  const getUserInfo = () => {
    !!isLogin &&
      fetch(`${API.USER}`, {
        headers: { Authorization: localStorage.getItem('token') },
      })
        .then(res => res.json())
        .then(res => {
          res.status === 'SUCCESS' && setUser(res.data.user);
        });
  };

  const isSignin = location.pathname === '/signin';
  const isSignup = location.pathname === '/signup';
  const isCreateAccount = location.pathname === '/createaccount';
  const isLogin = !!localStorage.getItem('token');

  useEffect(() => {
    searchInput ? history.push(`/?search=${searchInput}`) : history.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  return (
    <Container>
      <Header>
        {!(isSignin || isSignup || isCreateAccount) && (
          <LinkGroup>
            <Link to="/">
              <i className="fas fa-bars" />
              <span> 프로젝트 둘러보기</span>
            </Link>
            <Link to="/project-start">프로젝트 올리기</Link>
          </LinkGroup>
        )}
        <Link to="/">
          <Logo alt="logo" src="/images/logo.png" />
        </Link>
        {!(isSignin || isSignup || isCreateAccount) && (
          <SearchAndLogin>
            <button type="button" onClick={showSearchBar}>
              <i className="fas fa-search"></i>
            </button>
            {!isLogin ? (
              <Link to="/signin">
                <span>로그인 / 회원가입</span>
                <UserProfile alt="profile" src="/images/user.png" />
              </Link>
            ) : (
              <Link to="/profile">
                <span>{user.username}님</span>
                <UserProfile
                  alt="profile"
                  src={user.profile_image_url || '/images/user.png'}
                  onMouseEnter={toggleShowMenu}
                />
              </Link>
            )}
            <ToggleMenu
              isToggleMenuShow={isToggleMenuShow}
              onMouseLeave={toggleShowMenu}
            >
              <MenuWrapper>
                <li>
                  <Link to="/profile">🍄 마이페이지</Link>
                </li>
                <li onClick={handleLogout}>👋 로그아웃</li>
              </MenuWrapper>
            </ToggleMenu>
          </SearchAndLogin>
        )}
      </Header>
      <StyledInput
        isSearched={isSearched}
        onChange={debounce(handleSearchInput, 500)}
        type="search"
        placeholder="프로젝트 이름 또는 설명으로 검색할 수 있습니다 :)"
      />
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexColumnSet()};
`;

const StyledInput = styled(Input)`
  display: ${props => (props.isSearched ? 'block' : 'none')};
  margin: 1rem 1.5rem;
  ${({ theme }) => theme.desktop`  width: 68%;`};
`;

const Header = styled.header`
  ${({ theme }) => theme.flexSet('space-between')};
  width: 100%;
  padding: 1rem 0;
  position: relative;
  height: 70px;

  ${({ theme }) => theme.desktop`
    height: 76px;
    width: 70%;
    padding: 0.3rem 0;
    margin: 0px auto;
  `};
`;

const ToggleMenu = styled.div`
  display: ${props => (props.isToggleMenuShow ? 'block' : 'none')};
  position: absolute;
  right: 10px;
  top: 40px;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.black};
  color: white;
  border-radius: 4px;

  ${({ theme }) => theme.desktop`
    top:50px
`};
`;

const MenuWrapper = styled.ul`
  ${({ theme }) => theme.flexColumnSet()};
  & > li {
    margin: 1rem;
    cursor: pointer;
    display: block;
    width: 78px;
    text-align: center;

    ${({ theme }) => theme.desktop`
      width: 100px;
    `};

    &:last-of-type {
      margin-top: 0;
    }
  }

  & a {
    color: white;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 80%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent ${({ theme }) => theme.colors.black}
      transparent;
  }
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
      /* bottom: 2px; */
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
  cursor: url('/images/face.png') 20 20, auto;
  ${({ theme }) => theme.posCenter()};
  ${({ theme }) => theme.desktop`
    width: 85px;
    `};
`;

const SearchAndLogin = styled.div`
  position: relative;
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

const UserProfile = styled.img`
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
