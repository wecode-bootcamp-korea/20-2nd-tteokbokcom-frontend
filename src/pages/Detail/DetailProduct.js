import React from 'react';
import RewardContents from './RewardContents';
import RewardContentsMobile from './RewardContentsMobile';
import styled from 'styled-components';

function DetailProduct({ detailInfo, showReward, activeReward }) {
  const profile_img = detailInfo.creater_profile_image;
  return (
    <ProductWrapper>
      <ProductContentsBox>
        <Story>
          <img alt="storyImage" src={detailInfo.title_image_url} />
          <StoryDesc>
            <h3>{detailInfo.title}</h3>
            <p>{detailInfo.summary}</p>
          </StoryDesc>
        </Story>
        <RewardBox>
          <CreatorBox>
            <h3>창작자 소개</h3>
            <CreatorTitle>
              <img
                alt="profileImage"
                src={profile_img ? profile_img : '../../../images/user.png'}
              />
              <p>{detailInfo.creater}</p>
            </CreatorTitle>
            <CreatorDesc>{detailInfo.creater_introduction}</CreatorDesc>
          </CreatorBox>
          <SelectReward>
            <h3>선물 선택</h3>
            <RewardContents
              funding_option={detailInfo.funding_option}
              project_id={detailInfo.id}
            />
          </SelectReward>
          <RewardContentsMobile
            funding_option={detailInfo.funding_option}
            project_id={detailInfo.id}
            showReward={showReward}
            activeReward={activeReward}
          />
        </RewardBox>
      </ProductContentsBox>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.main`
  width: 100%;
  height: 100vh;
  padding-top: 15px;
  background-color: #f6f5f5;
`;

const ProductContentsBox = styled.section`
  ${({ theme }) => theme.desktop`
    display: flex;
    width: 1032px;
    margin: 0 auto;
`};
`;

const Story = styled.article`
  padding: 20px;
  background-color: white;

  img {
    width: 100%;
  }

  ${({ theme }) => theme.desktop`
    margin-right: 15px;
`};
`;

const StoryDesc = styled.div`
  width: 100%;
  line-height: 1.7em;

  h3 {
    font-weight: bold;
    margin: 20px 0;
  }

  p {
    text-align: justify;
  }
`;

const RewardBox = styled.section`
  height: 300px;
  margin: 10px 0;

  ${({ theme }) => theme.desktop`
    width: 100%;
    max-width: 354px;
    height: 500px;
    margin: 0;
`};
`;

const CreatorBox = styled.article`
  margin-bottom: 10px;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);

  h3 {
    font-weight: bold;
  }
`;

const CreatorTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
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
`;

const CreatorDesc = styled.div`
  line-height: 1.7em;
  font-size: 14px;
`;

const SelectReward = styled.article`
  display: none;

  ${({ theme }) => theme.desktop`
    display:block;
    background-color: transparent;

    h3 {
      padding: 20px 0;
      font-weight: bold;
    }  
  `};
`;

export default DetailProduct;
