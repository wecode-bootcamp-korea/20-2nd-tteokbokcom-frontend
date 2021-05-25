import React from 'react';
import styled from 'styled-components';

function DetailNav() {
  return (
    <NavWrapper>
      <NavLists>
        <NavListsBox>
          <StoryList>스토리</StoryList>
          <CommunityList>커뮤니티</CommunityList>
        </NavListsBox>
      </NavLists>
    </NavWrapper>
  );
}
const NavWrapper = styled.nav`
  height: 48px;
  line-height: 40px;
  vertical-align: middle;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
`;

const NavLists = styled.ul`
  display: flex;
  justify-content: flex-start;
  max-width: 1080px;
  height: 100%;
  margin: 0px auto;
  padding: 0px;
`;

const NavListsBox = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 100%;
  height: 100%;
  margin: 0px 1rem;
`;

const StoryList = styled.li`
  padding: 0.5rem 1rem;
  line-height: 1.5;
  margin: 2px;
  font-size: 1rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.4);
  cursor: pointer;

  &:first-child {
    border-bottom: 3px solid #000;
    color: #000;
    transition: 0.1s;
  }

  &:hover {
    border-bottom: 3px solid #000;
    color: #000;
    transition: 0.1s;
  }
`;

const CommunityList = styled.li`
  margin: 2px;
  padding: 0.5rem 1rem;
  line-height: 1.5;
  font-size: 1rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.4);
  cursor: pointer;

  &:hover {
    color: #000;
    border-bottom: 3px solid #000;
    transition: 0.1s;
  }
`;

export default DetailNav;
