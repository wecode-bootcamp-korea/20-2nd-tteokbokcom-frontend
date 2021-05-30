import React from 'react';
import styled from 'styled-components/macro';
import AccountContainer from '../../components/AccountContainer/AccountContainer';
import Button from '../../components/Button/Button';
import { useHistory } from 'react-router-dom';

function Join() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/createAccount');
  };

  return (
    <AccountContainer type="signin">
      <EmailBtn fullWidth onClick={handleClick}>
        <i className="far fa-envelope"></i>
        이메일로 가입하기
      </EmailBtn>
    </AccountContainer>
  );
}

const EmailBtn = styled(Button)`
  height: 52px;

  i {
    margin-right: 6px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.secondaryGray};
  }
`;

export default Join;
