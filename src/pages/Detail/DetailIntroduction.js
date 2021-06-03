import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { API } from '../../config';
import styled from 'styled-components';

function DetailIntroduction({
  detailInfo,
  activeReward,
  showReward,
  isMobile,
}) {
  const [fillHeart, setFillHeart] = useState(detailInfo.is_liked);
  const params = useParams();
  const profile_img = detailInfo.creater_profile_image;

  const focusOnReward = e => {
    window.scrollTo({ top: 1000, behavior: 'smooth' });
  };

  const leftDays = () => {
    const lastDayMillisec = new Date(detailInfo.end_date).getTime();
    const now = Date.now();
    const leftDay = Math.floor((lastDayMillisec - now) / 1000 / 60 / 60 / 24);
    return leftDay;
  };

  const countTargetPercent = () => {
    const current = detailInfo.funding_amount;
    const target = detailInfo.target_amount;
    return Math.floor((current / target) * 10000);
  };

  const sendLike = e => {
    fetch(`${API.MAIN}/${params.id}`, {
      method: 'PATCH',
      headers: { Authorization: localStorage.getItem('token') },
    }).then(res => {
      if (res.ok) {
        setFillHeart(!fillHeart);
      } else if (res.status === 401) {
        alert('로그인을 먼저 해주세요.');
      }
    });
  };

  const categoryToKorean = category => {
    switch (category) {
      case 'kimbab':
        return '김밥';
      case 'rameon':
        return '라면';
      case 'soondae':
        return '순대';
      case 'fried':
        return '튀김';
      case 'tteokbok':
        return '떡볶이';
      default:
        // eslint-disable-next-line no-unused-expressions
        'category';
    }
  };
  return (
    <IntroductionWrapper>
      <IntroHeader>
        <CategoryTitle>
          <span>{categoryToKorean(detailInfo.category)}</span>
        </CategoryTitle>
        <ProjectTitle>
          <h1>{detailInfo.title}</h1>
        </ProjectTitle>
        <CreatorProfile>
          <img
            alt="profileImage"
            src={profile_img ? profile_img : '../../../images/user.png'}
          />
          <p>{detailInfo.creater}</p>
        </CreatorProfile>
      </IntroHeader>
      <IntroImage alt="introImage" src={`${detailInfo.title_image_url}`} />
      <IntroAside>
        <ProjectStatus>
          <CollectedAmount>
            <p>모인금액</p>
            <h2>
              {Math.floor(detailInfo?.funding_amount).toLocaleString()} 원
              <span>{countTargetPercent()} %</span>
            </h2>
          </CollectedAmount>
          <LeftDate>
            <p>남은시간</p>
            <h2>{leftDays() < 0 ? '종료되었습니다' : `${leftDays()}일`}</h2>
          </LeftDate>
          <Sponsor>
            <p>후원자</p>
            <h2>{detailInfo.total_sponsor} 명</h2>
          </Sponsor>
        </ProjectStatus>
        <ProjectButtons>
          <PushThisProjectBtn>
            <Button
              color="red"
              fullWidth
              onClick={isMobile ? activeReward : focusOnReward}
            >
              프로젝트 밀어주기
            </Button>
          </PushThisProjectBtn>
          <LikeBtn onClick={sendLike} fillHeart={fillHeart}>
            <i class="fas fa-heart"></i>
          </LikeBtn>
          <ShareBtn>
            <i className="fas fa-share-alt"></i>
          </ShareBtn>
        </ProjectButtons>
      </IntroAside>
    </IntroductionWrapper>
  );
}

const IntroductionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1rem;
  line-height: 1.7em;
  word-break: break-all;

  ${({ theme }) => theme.desktop`
    justify-content: center;
  `};
`;

const IntroHeader = styled.header`
  order: 2;
  padding: 1.75rem 1rem;
  text-align: left;
  line-height: 1.7em;

  ${({ theme }) => theme.desktop`
    order: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
  `};
`;

const CategoryTitle = styled.span`
  padding: 0.6rem;
  background-color: #fafafa;
  border: 1px solid #efefef;
  border-radius: 2px;
  font-size: 0.9 rem;
  font-weight: 600;
  color: #757575;

  ${({ theme }) => theme.desktop`
    display: block;
`};
`;

const ProjectTitle = styled.h1`
  margin: 1.2rem 0px;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 1.5;
  word-break: keep-all;

  ${({ theme }) => theme.desktop`
    width: 100%;
    text-align: center;
    font-size: 2.8rem;
`};
`;

const CreatorProfile = styled.div`
  display: flex;
  align-items: center;
  word-break: break-all;
  text-align: left;

  img {
    width: 25px;
    height: 25px;
    margin-right: 0.5rem;
    border-radius: 50%;
  }

  p {
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
  }

  ${({ theme }) => theme.desktop`
    justify-content: center;
  `};
`;

const IntroImage = styled.img`
  order: 1;
  width: 100%;
  height: auto;

  ${({ theme }) => theme.desktop`
    order: 2;
    width: 650px;
  `};
`;

const IntroAside = styled.aside`
  order: 3;
  width: 100%;

  ${({ theme }) => theme.desktop`
    position: relative;
    flex-grow: 1;
    max-width: 354px;
    margin-left: 28px;
  `};
`;

const ProjectStatus = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  order: 4;
  padding: 0.5rem 1rem 1rem 1.5rem;

  ${({ theme }) => theme.desktop`
    display: block;
  `};
`;

const CollectedAmount = styled.div`
  p {
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
  }

  h2 {
    font-size: 1.6rem;
    letter-spacing: 0.5px;

    span {
      font-size: 0.9rem;
      margin-left: 10px;
      font-weight: bold;
      color: #666666;
    }
  }

  ${({ theme }) => theme.desktop`
    margin: 0
  }
`};
`;

const LeftDate = styled.div`
  p {
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
  }

  h2 {
    font-size: 1.6rem;
    letter-spacing: 0.5px;
  }

  ${({ theme }) => theme.desktop`
    margin: 20px 0;
`};
`;

const Sponsor = styled.div`
  p {
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
  }

  h2 {
    font-size: 1.6rem;
    letter-spacing: 0.5px;
  }

  ${({ theme }) => theme.desktop`
    margin: 20px 0;
`};
`;

const ProjectButtons = styled.div`
  order: 5;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3px;

  ${({ theme }) => theme.desktop`
    position: absolute;
    bottom: 0;
  `};
`;

const PushThisProjectBtn = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 0px;

  button {
    flex-grow: 1;
    justify-content: center;
    height: 52px;
    font-weight: bold;
    margin: 0;
  }
`;

const LikeBtn = styled.button`
  color: ${props => (props.fillHeart === true ? '#f26462' : '#757575')};
  width: 52px;
  height: 52px;
  margin: 0 5px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  line-height: 50px;
  text-align: center;
  font-size: 1.7em;
`;

const ShareBtn = styled.button`
  width: 52px;
  height: 52px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  line-height: 50px;
  text-align: center;
  font-size: 1.7em;
  color: #757575;
`;

export default DetailIntroduction;
