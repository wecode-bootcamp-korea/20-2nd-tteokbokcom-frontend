import React from 'react';
import styled from 'styled-components/macro';
import { lighten } from 'polished';

export default function AddReward() {
  return (
    <>
      <List>
        <ListTitle>선물에 대해 알려주세요</ListTitle>
        <ListLabel>
          선물 이름
          <RewardInput placeholder="선물의 이름을 적어주세요" type="text" />
        </ListLabel>
        <ListLabel>
          이 선물의 재고 수량
          <RewardInput placeholder="선물의 재고를 정해주세요" type="number" />
        </ListLabel>
        <ListLabel>
          선물 후원 금액
          <RewardInput
            placeholder="선물의 개당 후원금액을 정해주세요"
            type="number"
          />
        </ListLabel>
      </List>
      <List>
        <ListTitle>선물 설명</ListTitle>
        <ListLabel>
          구성된 선물에 대해 추가적으로 알리고 싶은 내용을 적어주세요.
          <RewardTextarea
            name="summary"
            maxlength="50"
            placeholder="예) 배송비 포함, 얼리버드, <선물 세트 A>등"
            rows="2"
          />
        </ListLabel>
      </List>
    </>
  );
}

const List = styled.section`
  ${({ theme }) => theme.flexColumnSet('center', 'flex-start')};
  margin-top: 15px;
  padding: 15px 0;
  border-top: 1px solid ${lighten(0.3, '#3a6ff2')};
`;

const ListTitle = styled.h6`
  margin-bottom: 15px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.calcRem(15)};
`;

const ListLabel = styled.label`
    margin-bottom: 5px;
    font-size: ${({ theme }) => theme.calcRem(14)};

  }
`;

const RewardInput = styled.input`
  margin: 10px 0;
  padding: 5px;
  width: 100%;
  border: 2px solid ${lighten(0.3, '#3a6ff2')};
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);

  &:hover,
  &:focus {
    border-color: #3a6ff2;
  }
`;

const RewardTextarea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border: 2px solid ${lighten(0.3, '#3a6ff2')};
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);

  &:hover,
  &:focus {
    border-color: #3a6ff2;
  }
`;
