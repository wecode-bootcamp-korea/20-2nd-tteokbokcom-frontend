import React from 'react';
import styled from 'styled-components';
import RewardCard from './RewardCard';

function RewardContent({ funding_option, project_id }) {
  return (
    <EachRewardBox>
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
    </EachRewardBox>
  );
}

const EachRewardBox = styled.div`
  ${({ theme }) => theme.desktop`
    border-radius: 4px;
    border: none;
    overflow: hidden;
    transition: 0.3s;
`};
`;

export default RewardContent;
