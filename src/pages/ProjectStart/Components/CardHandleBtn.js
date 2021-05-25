import React from 'react';
import Button from '../../../components/Button/Button';
import styled from 'styled-components/macro';

export default function CardHandleBtn({ toggleEditor }) {
  return (
    <ButtonWrapper>
      <Button color="tertiaryGray" onClick={toggleEditor}>
        <Icon className="fas fa-times" /> 닫기
      </Button>
      <CustomButton color="red">
        <Icon className="fas fa-check" /> 저장하기
      </CustomButton>
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

const CustomButton = styled(Button)`
  margin-left: 10px;
`;
