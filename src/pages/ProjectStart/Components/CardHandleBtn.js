import React from 'react';
import Button from '../../../components/Button/Button';
import styled from 'styled-components/macro';

export default function CardHandleBtn({ toggleEditor }) {
  return (
    <ButtonWrapper>
      <Button color="red" onClick={toggleEditor}>
        <Icon className="fas fa-times" /> 저장 후 닫기
      </Button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  ${({ theme }) => theme.flexSet('flex-end')};
  margin-top: 15px;
`;

const Icon = styled.i`
  margin-right: 5px;
`;
