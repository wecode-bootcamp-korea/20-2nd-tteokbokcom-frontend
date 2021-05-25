import React from 'react';
import styled from 'styled-components/macro';
import CardItem from './CardItem';

function ProjectStartCard({ cardTitle, cardData }) {
  return (
    <div>
      <CardHeader>{cardTitle}</CardHeader>
      <CardWrapper>
        {cardData.map(
          ({ id, title, requiredText, description, inputComponent }) => (
            <CardItem
              key={id}
              title={title}
              requiredText={requiredText}
              description={description}
              inputComponent={inputComponent}
            />
          )
        )}
      </CardWrapper>
    </div>
  );
}

const CardHeader = styled.header`
  margin: 2em 0 1em 0;
  color: ${({ theme }) => theme.colors.secondaryGray};
`;

const CardWrapper = styled.section`
  &{CardItem}:last-of-type {
    border-bottom: none;
  }

  ${({ theme }) => theme.flexColumnSet()};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
`;

export default ProjectStartCard;
