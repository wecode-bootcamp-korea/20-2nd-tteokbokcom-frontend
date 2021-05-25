import React from 'react';
import styled from 'styled-components';
import RewardCard from './RewardCard';

function RewardContentsMobile({
  funding_option,
  project_id,
  showReward,
  activeReward,
}) {
  if (!showReward) return null;
  return (
    <MobileRewardBox showReward={showReward}>
      <CloseRewardBoxBtn onClick={activeReward}>
        <i className="fas fa-angle-down"></i>
      </CloseRewardBoxBtn>
      <RewardCardsBox>
        {funding_option.map(input => {
          return (
            <RewardCard
              id={input.id}
              project_id={project_id}
              key={input.option_id}
              option_id={input.option_id}
              amount={input.amount}
              description={input.description}
              remains={input.remains}
              selected_funding={input.selected_funding}
            />
          );
        })}
      </RewardCardsBox>
    </MobileRewardBox>
  );
}

const MobileRewardBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0px -11px 18px -1px rgba(30, 30, 30, 0.15);
  border-radius: 12px 12px 0 0;
  animation-duration: 1s;
  animation-name: ${props => (props.showReward ? 'slideIn' : 'slideOut')};
  @keyframes slideIn {
    from {
      margin-bottom: -100%;
    }

    to {
      margin-bottom: 0%;
    }
  }

  @keyframes slideOut {
    from {
      margin-bottom: 0;
    }
    to {
      margin-bottom: -100%;
    }
  }

  ${({ theme }) => theme.desktop`
    display: none;
`};
`;

const CloseRewardBoxBtn = styled.button`
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 26px;
  border-bottom: 1px solid #e6e6e6;
  text-align: center;
  color: #6d6d6d;
`;

const RewardCardsBox = styled.div``;

export default RewardContentsMobile;
