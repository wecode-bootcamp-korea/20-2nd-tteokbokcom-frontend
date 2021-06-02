import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';

const CATEGORY = {
  tteokbok: '떡볶이',
  soondae: '순대',
  fried: '튀김',
  kimbab: '김밥',
  rameon: '라면',
};

export default function ProjectCard({ data, id }) {
  const history = useHistory();

  const countDday = () => {
    const endMilliseconds = new Date(data['end_date']).getTime();
    const now = Date.now();
    const dDay = Math.floor((endMilliseconds - now) / 1000 / 60 / 60 / 24);
    return dDay;
  };

  const countProgressPercent = () => {
    const funding = data['funding_amount'];
    const target = data['target_amount'];
    return (funding / target) * 10000;
  };

  const goToDetail = () => {
    history.push(`detail/${id}`);
  };

  return (
    <Container>
      <Thumbnail onClick={goToDetail}>
        <img alt={`${data.title}이미지`} src={data['title_image_url']} />
      </Thumbnail>
      <Title onClick={goToDetail}>{data.title}</Title>
      <div>
        <Category>{CATEGORY[data.category]}</Category>
        <Creator>{data.creater}</Creator>
      </div>
      <Description>{data.summary}</Description>
      <ProgressWrapper>
        <ProgressBar percent={countProgressPercent()} />
        <ProgressInfo>
          <CurrentAmount>
            {Math.floor(data['funding_amount']).toLocaleString()}원
          </CurrentAmount>
          <AmountPercent>{Math.floor(countProgressPercent())}%</AmountPercent>
          <DdayCount>
            <i className="far fa-clock" />
            {countDday()}일 남음
          </DdayCount>
        </ProgressInfo>
      </ProgressWrapper>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexColumnSet('flex-start', 'stretch')};
  margin-bottom: 30px;
  padding: 5px;

  ${({ theme }) => theme.desktop`
    padding: 10px;
  `};
`;

const Thumbnail = styled.div`
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  width: 100%;

  & img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    cursor: url('/images/fork.png') 20 20, auto;

    &:hover {
      transform: scale(1.05);
      transition: transform 0.2s ease;
    }
  }
`;

const ProgressWrapper = styled.div`
  ${({ theme }) => theme.flexColumnSet('center', 'flex-start')};
`;

const Title = styled.p`
  margin: 15px 0;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  font-size: ${({ theme }) => theme.calcRem(23)};
  word-break: keep-all;
  line-height: 1.3;
  cursor: pointer;
`;

const Category = styled.span`
  color: ${({ theme }) => theme.colors.secondaryGray};
`;

const Creator = styled(Category)`
  &:before {
    content: '|';
    margin: 0 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.black};
  min-height: ${({ theme }) => theme.calcRem(44)};
`;

const ProgressBar = styled.div`
  position: relative;
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.border};

  &:before {
    position: absolute;
    content: '';
    height: 2px;
    width: ${({ percent }) => percent}%;
    max-width: 100%;
    background-color: ${({ theme }) => theme.colors.red};
  }
`;

const ProgressInfo = styled.div`
  ${({ theme }) => theme.flexSet('none', 'flex-end')};
  margin: 10px 0;
  width: 100%;
`;

const CurrentAmount = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.calcRem(20)};
`;

const AmountPercent = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.red};
`;

const DdayCount = styled.span`
  margin-left: auto;
  color: ${({ theme }) => theme.colors.secondaryGray};

  & > i {
    margin-right: 5px;
  }
`;
