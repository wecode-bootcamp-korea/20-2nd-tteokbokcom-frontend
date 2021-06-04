import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { API } from '../../config';
import styled from 'styled-components';

function RewardCard({
  amount,
  description,
  selected_funding,
  project_id,
  option_id,
  remains,
  title,
}) {
  const [activePush, setActivePush] = useState(false);
  const history = useHistory();
  const params = useParams();

  const activePushBtn = () => {
    setActivePush(!activePush);
  };

  const pushThisProject = e => {
    fetch(`${API.PROJECT}/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify({ id: project_id, option_id: +e.target.name }),
      headers: { Authorization: localStorage.getItem('token') },
    }).then(res => {
      if (res.ok) {
        goToUserPage();
      } else if (res.status === 401) {
        alert('로그인을 먼저 해주세요.');
      }
    });
  };

  const goToUserPage = e => {
    const isLogin = localStorage.getItem('token');
    if (true || isLogin) {
      alert('후원에 성공했습니다.');
      history.push('/profile');
    }
  };

  return (
    <>
      <EachRewardCard onClick={activePushBtn}>
        <SelectedNumbBox>
          <SelectedNumb>
            <i className="fas fa-check"></i>
            {selected_funding}명이 선택
          </SelectedNumb>
          {remains && <div>{remains}개 남음</div>}
        </SelectedNumbBox>
        <h2>{amount}원 + </h2>
        <h3>{title}</h3>
        <p>{description}</p>
      </EachRewardCard>
      {activePush && (
        <PushThisAmountBtn
          color="red"
          fullWidth
          onClick={pushThisProject}
          name={option_id}
        >
          {amount}원 밀어주기
        </PushThisAmountBtn>
      )}
    </>
  );
}

const EachRewardCard = styled.div`
  margin-bottom: 5px;
  padding: 20px;
  border-bottom: 1px solid #e6e6e6;
  color: #3d3d3d;

  h2 {
    margin-bottom: 5px;
    font-size: ${({ theme }) => theme.calcRem(24)};
    font-weight: bold;
    line-height: 36px;
  }

  h3 {
    font-size: ${({ theme }) => theme.calcRem(15)};
  }

  p {
    font-size: ${({ theme }) => theme.calcRem(13)};
    line-height: 20px;
  }

  ${({ theme }) => theme.desktop`
    margin-bottom: 10px;
    background: white;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid transparent;
    border-radius: 4px;
    color: #3d3d3d;
    cursor: pointer;

    &:hover{
      border: 1px solid rgba(0, 0, 0, .5);
    }

    h2 {
      margin-bottom: 5px;
      font-size: 24px;
      font-weight: bold;
      line-height: 36px;
    }

    p{
      font-size: 13px;
      line-height: 20px;
    }
`}
`;

const SelectedNumbBox = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    padding: 5px 8px;
    border: 1px solid #ffbcbc;
    border-radius: 2px;
    background-color: #ffeeee;
    font-size: 13px;
    line-height: 19px;
    color: #ff5757;
  }
`;

const SelectedNumb = styled.span`
  font-size: 13px;
  line-height: 20px;
  color: #6d6d6d;

  i {
    margin-right: 5px;
  }
`;

const PushThisAmountBtn = styled(Button)`
  height: 52px;
  font-weight: bold;
  ${({ theme }) => theme.desktop`
`}
`;

export default RewardCard;
