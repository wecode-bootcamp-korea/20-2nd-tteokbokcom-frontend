import React from 'react';
import Button from '../../Button/Button';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { API } from '../../../config';

function SocialBtnGroup({ text }) {
  const history = useHistory();

  const handleKakaoLogin = () => {
    const { Kakao } = window;
    Kakao.Auth.login({
      scope: 'account_email, gender, birthday',
      success: res => {
        fetch(`${API.KAKAO}`, {
          method: 'POST',
          body: JSON.stringify({ access_token: res.access_token }),
        })
          .then(res => res.json())
          .then(res => {
            if (res.status === 'SUCCESS') {
              localStorage.setItem('token', res.data.token);
              Kakao.Auth.logout();
              history.push('/');
              alert('카카오톡으로 로그인 성공했습니다.');
            } else if (res.status === 'DUPLICATED_ENTRY_ERROR') {
              alert('이미 가입된 이메일입니다.');
            } else if (
              res.status === 'TIMEOUT_ERROR' ||
              res.status === 'CONNECTION_ERROR'
            ) {
              alert(
                '카카오 계정으로 로그인 중 문제가 발생했습니다.',
                res.message
              );
            }
          });
      },
      fail: error => {
        alert(JSON.stringify(error));
      },
    });
  };

  return (
    <SocialLogin>
      <AccountButton fullWidth>
        <i className="fab fa-facebook"></i>
        페이스북 아이디로 {text}
      </AccountButton>
      <AccountButton fullWidth onClick={handleKakaoLogin}>
        <i className="fas fa-comment-dots"></i>
        카카오 아이디로 {text}
      </AccountButton>
      <AccountButton fullWidth>
        <i className="fab fa-apple"></i>
        애플 아이디로 {text}
      </AccountButton>
    </SocialLogin>
  );
}

const SocialLogin = styled.div`
  ${({ theme }) => theme.flexColumnSet};
  i {
    font-size: 1.4rem;
    margin-right: 6px;
  }

  [class$='facebook'] {
    color: #1877f2;
  }

  [class$='dots'] {
    color: #391a1c;
  }

  [class$='apple'] {
    color: #3d3d3d;
  }
`;

const AccountButton = styled(Button)`
  font-size: 16px;
  height: 52px;
`;

export default SocialBtnGroup;
