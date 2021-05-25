import CardItem from './CardItem';
import styled from 'styled-components/macro';

function ProjectStartCard({ cardTitle, cardData }) {
  return (
    <Container>
      <CardTitle>{cardTitle}</CardTitle>
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
    </Container>
  );
}

const Container = styled.div`
  width: 90%;

  ${({ theme }) => theme.tablet`
    width:70%;
  `};

  ${({ theme }) => theme.desktop`
    width: 40%;
  `};
`;

const CardTitle = styled.header`
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
