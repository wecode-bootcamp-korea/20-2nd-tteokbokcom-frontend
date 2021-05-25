import React, { useState } from 'react';
import { lighten } from 'polished';
import { useEditorContext } from '../../ProjectStart';
import Button from '../../../../components/Button/Button';
import styled from 'styled-components/macro';

export default function AddReward() {
  const { form, setForm } = useEditorContext();
  const [isClicked, setIsClicked] = useState(false);
  const [rewardOne, setRewardOne] = useState({});
  const [rewardTwo, setRewardTwo] = useState({});

  const handleRewardOne = e => {
    const { value, name } = e.target;
    setRewardOne({ ...rewardOne, [name]: value });
    setForm({ ...form, reward_one: rewardOne });
  };

  const handleRewardTwo = e => {
    const { value, name } = e.target;
    setRewardTwo({ ...rewardTwo, [name]: value });
    setForm({ ...form, reward_two: rewardTwo });
  };

  const openExtraReward = () => {
    setIsClicked(true);
  };

  return (
    <>
      <Container>
        <RewardNotice>선물에 대해 알려주세요</RewardNotice>
        <RewardEnroll>
          선물 이름
          <RewardEdit
            onChange={handleRewardOne}
            name="title"
            placeholder="선물의 이름을 적어주세요"
            type="text"
          />
        </RewardEnroll>
        <RewardEnroll>
          이 선물의 재고 수량
          <RewardEdit
            onChange={handleRewardOne}
            name="remains"
            placeholder="선물의 재고를 정해주세요"
            type="number"
          />
        </RewardEnroll>
        <RewardEnroll>
          선물 후원 금액
          <RewardEdit
            onChange={handleRewardOne}
            name="amount"
            placeholder="선물의 개당 후원금액을 정해주세요"
            type="number"
          />
        </RewardEnroll>
      </Container>
      <Container>
        <RewardNotice>선물 설명</RewardNotice>
        <RewardEnroll>
          구성된 선물에 대해 추가적으로 알리고 싶은 내용을 적어주세요.
          <RewardEdit
            as="textarea"
            onChange={handleRewardOne}
            name="description"
            maxlength="50"
            placeholder="예) 배송비 포함, 얼리버드, <선물 세트 A>등"
            rows="2"
          />
        </RewardEnroll>
      </Container>
      <ExtraBtn color="blue" onClick={openExtraReward} isClicked={isClicked}>
        선물 추가
      </ExtraBtn>
      <ExtraContainer isOpened={isClicked}>
        <RewardNotice>선물에 대해 알려주세요</RewardNotice>
        <RewardEnroll>
          선물 이름
          <RewardEdit
            onChange={handleRewardTwo}
            name="title"
            placeholder="선물의 이름을 적어주세요"
            type="text"
          />
        </RewardEnroll>
        <RewardEnroll>
          이 선물의 재고 수량
          <RewardEdit
            onChange={handleRewardTwo}
            name="remains"
            placeholder="선물의 재고를 정해주세요"
            type="number"
          />
        </RewardEnroll>
        <RewardEnroll>
          선물 후원 금액
          <RewardEdit
            onChange={handleRewardTwo}
            name="amount"
            placeholder="선물의 개당 후원금액을 정해주세요"
            type="number"
          />
        </RewardEnroll>
      </ExtraContainer>
      <ExtraContainer isOpened={isClicked}>
        <RewardNotice>선물 설명</RewardNotice>
        <RewardEnroll>
          구성된 선물에 대해 추가적으로 알리고 싶은 내용을 적어주세요.
          <RewardEdit
            as="textarea"
            onChange={handleRewardTwo}
            name="description"
            maxlength="50"
            placeholder="예) 배송비 포함, 얼리버드, <선물 세트 A>등"
            rows="2"
          />
        </RewardEnroll>
      </ExtraContainer>
    </>
  );
}

const Container = styled.section`
  ${({ theme }) => theme.flexColumnSet('center', 'flex-start')};
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid ${lighten(0.3, '#3a6ff2')};

  &:last-of-type {
    padding-bottom: 0;
  }
`;

const ExtraContainer = styled(Container)`
  display: ${({ isOpened }) => isOpened || 'none'};
`;

const RewardNotice = styled.h6`
  margin-bottom: 15px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.calcRem(15)};
`;

const RewardEnroll = styled.label`
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.calcRem(14)};
`;

const RewardEdit = styled.input`
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

const ExtraBtn = styled(Button)`
  width: 100%;
  display: ${({ isClicked }) => (isClicked ? 'none' : 'block')};
`;
