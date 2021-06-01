import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

function Footer() {
  const [isShow, setIsShow] = useState(false);
  console.log(isShow);

  const showModal = () => {
    setIsShow(prevState => !prevState);
    console.log(isShow);
  };

  return (
    <>
      <StyledFooter onClick={showModal}>© 2021 Tteokbok Inc.</StyledFooter>
      <Modal isShow={isShow} onClick={showModal}>
        <Back>
          <div>🌈 Thanks to ✨</div>
          {TEAM.map(mem => (
            <li>
              <Link to={mem.url}>
                <span>{mem.name}</span>
                <span>{mem.role}</span>
              </Link>
            </li>
          ))}
        </Back>
      </Modal>
    </>
  );
}
const TEAM = [
  { name: '꺼벙이 둘째 딸, 송가람', url: '', role: 'FE🤓' },
  { name: '꺼벙이네 흰둥이, 임유진', url: '', role: 'FE👩‍🌾' },
  { name: '꺼벙이네 버그, 노선경', url: '', role: 'FE👾' },
  { name: '꺼벙이 셋째 아들, 최준식', url: '', role: 'BE💩' },
  { name: '꺼벙이네 외삼촌, 이승무', url: '', role: 'BE✌' },
  { name: '꺼벙이네 할아버지 , 오종택', url: '', role: 'MENTOR🧝‍♂️' },
];

const Modal = styled.div`
  ${({ theme }) => theme.flexSet()};
  display: ${props => (props.isShow ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99999;
  font-size: 1.5rem;
`;

const Back = styled.ul`
  ${({ theme }) => theme.flexColumnSet()};
  position: relative;
  background-color: white;
  border-radius: 4px;
  color: black;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1rem;

  & > div {
    margin-bottom: 2rem;
    font-family: 'Gaegu', cursive;
    font: 3rem;
  }

  & > li {
    margin: 1rem;
    color: black;
    color: black;

    &:hover {
      color: ${({ theme }) => theme.colors.secondaryGray};
    }

    span {
      font-family: 'Gaegu', cursive;
      color: black;
    }
  }
`;

const StyledFooter = styled.div`
  position: relative;
  font-size: 11.2px;
  color: rgb(117, 117, 117);
  text-align: center;
  padding: 0px 0px 20px;
  margin: 100px 0;
`;

export default Footer;
